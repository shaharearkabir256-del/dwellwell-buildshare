// Vercel serverless function for Telegram webhook
export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const TELEGRAM_BOT_TOKEN = '8229133802:AAEQ7CoTGYYYjgCXHdRxZBtcLXqZA2JsWqs';
  const AUTHORIZED_CHAT_ID = 7413461486;
  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
  const GITHUB_REPO = process.env.GITHUB_REPO;

  try {
    const update = req.body;
    console.log('Received update:', JSON.stringify(update, null, 2));

    if (update.message) {
      await handleMessage(update.message, TELEGRAM_BOT_TOKEN, AUTHORIZED_CHAT_ID, GITHUB_TOKEN, GITHUB_REPO);
    }

    return res.status(200).json({ status: 'ok' });
  } catch (error) {
    console.error('Error processing request:', error);
    return res.status(200).json({ status: 'error', message: error.message });
  }
}

// Store user sessions in memory
const userSessions = new Map();

async function handleMessage(message, botToken, authorizedChatId, githubToken, githubRepo) {
  const chatId = message.chat.id;
  const text = message.text?.trim();

  // Authorization (optional)
  if (authorizedChatId && chatId !== authorizedChatId) {
    await sendMessage(chatId, 'আপনি এই bot ব্যবহার করার অনুমতি নেই।', botToken);
    return;
  }

  let session = userSessions.get(chatId);

  // Start command
  if (text === '/start') {
    await sendMessage(chatId, 'Welcome! Commands:\n/add_product - নতুন প্রোপার্টি যোগ\n/help - হেল্প', botToken);
    return;
  }

  if (text === '/add_product') {
    session = { step: 'title', productData: {}, waitingFor: 'title' };
    userSessions.set(chatId, session);
    await sendMessage(chatId, '🏠 নতুন প্রোপার্টি যোগ করুন\n\nপ্রোপার্টির নাম/টাইটেল লিখুন:', botToken);
    return;
  }

  if (!session) {
    await sendMessage(chatId, 'নতুন প্রোপার্টি যোগ করতে /add_product কমান্ড ব্যবহার করুন।', botToken);
    return;
  }

  // Handle form steps
  switch (session.step) {
    case 'title':
      if (text) {
        session.productData.title = text;
        session.step = 'description';
        await sendMessage(chatId, 'প্রোপার্টির বিবরণ লিখুন:', botToken);
      }
      break;
    case 'description':
      if (text) {
        session.productData.description = text;
        session.step = 'price';
        await sendMessage(chatId, 'দাম লিখুন (যেমন: ₹50,000/month):', botToken);
      }
      break;
    case 'price':
      if (text) {
        session.productData.price = text;
        session.step = 'location';
        await sendMessage(chatId, 'লোকেশন লিখুন:', botToken);
      }
      break;
    case 'location':
      if (text) {
        session.productData.location = text;
        session.step = 'area';
        await sendMessage(chatId, 'এরিয়া লিখুন (যেমন: 1200 sq ft):', botToken);
      }
      break;
    case 'area':
      if (text) {
        session.productData.area = text;
        session.step = 'type';
        await sendMessage(chatId, 'প্রোপার্টির ধরন লিখুন:', botToken);
      }
      break;
    case 'type':
      if (text) {
        session.productData.type = text;
        session.step = 'features';
        await sendMessage(chatId, 'ফিচারসমূহ লিখুন (কমা দিয়ে আলাদা করুন):', botToken);
      }
      break;
    case 'features':
      if (text) {
        session.productData.features = text.split(',').map(f => f.trim());
        session.step = 'photo';
        await sendMessage(chatId, 'প্রোপার্টির ছবি পাঠান:', botToken);
      }
      break;
    case 'photo':
      if (message.photo && message.photo.length > 0) {
        try {
          const photo = message.photo[message.photo.length - 1];
          const imageUrl = await getPhotoUrl(photo.file_id, botToken);
          session.productData.image = imageUrl;

          const orderCode = generateOrderCode();
          session.productData.id = orderCode;
          session.productData.status = 'available';

          await saveProductToGitHub(session.productData, githubToken, githubRepo);

          await sendMessage(chatId, 
            `✅ প্রোপার্টি সফলভাবে যোগ করা হয়েছে!\n🔢 কোড: ${orderCode}`,
            botToken
          );
          userSessions.delete(chatId);
        } catch (error) {
          console.error('Error processing photo:', error);
          await sendMessage(chatId, 'ছবি প্রসেস করতে সমস্যা হয়েছে। আবার চেষ্টা করুন।', botToken);
        }
      } else {
        await sendMessage(chatId, 'দয়া করে একটি ছবি পাঠান।', botToken);
      }
      break;
    default:
      await sendMessage(chatId, 'কিছু ভুল হয়েছে। /add_product দিয়ে আবার শুরু করুন।', botToken);
      userSessions.delete(chatId);
  }

  userSessions.set(chatId, session);
}

async function sendMessage(chatId, text, botToken) {
  try {
    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text })
    });
    if (!response.ok) console.error('Failed to send message:', await response.text());
  } catch (error) {
    console.error('Error sending message:', error);
  }
}

async function getPhotoUrl(fileId, botToken) {
  const response = await fetch(`https://api.telegram.org/bot${botToken}/getFile?file_id=${fileId}`);
  const data = await response.json();
  if (data.ok && data.result.file_path) {
    return `https://api.telegram.org/file/bot${botToken}/${data.result.file_path}`;
  }
  throw new Error('Failed to get file URL');
}

function generateOrderCode() {
  return `ORD-${Date.now().toString(36)}-${Math.random().toString(36).substring(2, 8)}`.toUpperCase();
}

async function saveProductToGitHub(productData, githubToken, githubRepo) {
  if (!githubToken || !githubRepo) {
    console.warn('⚠️ GitHub credentials missing. Data not saved to GitHub.');
    return;
  }
  try {
    const response = await fetch(`https://api.github.com/repos/${githubRepo}/contents/src/data/properties.json`, {
      headers: { 'Authorization': `token ${githubToken}`, 'Accept': 'application/vnd.github.v3+json' }
    });

    let properties = [];
    let sha = null;

    if (response.ok) {
      const fileData = await response.json();
      const content = Buffer.from(fileData.content, 'base64').toString('utf8');
      properties = JSON.parse(content);
      sha = fileData.sha;
    }

    properties.push(productData);

    const updateResponse = await fetch(`https://api.github.com/repos/${githubRepo}/contents/src/data/properties.json`, {
      method: 'PUT',
      headers: { 
        'Authorization': `token ${githubToken}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: `Add new property: ${productData.title}`,
        content: Buffer.from(JSON.stringify(properties, null, 2)).toString('base64'),
        sha: sha
      })
    });

    if (!updateResponse.ok) throw new Error(`GitHub API error: ${updateResponse.status}`);
    console.log('Property saved to GitHub successfully');
  } catch (error) {
    console.error('Error saving to GitHub:', error);
  }
}
