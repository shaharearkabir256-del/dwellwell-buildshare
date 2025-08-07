import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface TelegramMessage {
  message_id: number;
  from: {
    id: number;
    first_name: string;
    username?: string;
  };
  chat: {
    id: number;
    type: string;
  };
  text?: string;
  photo?: Array<{
    file_id: string;
    file_unique_id: string;
    width: number;
    height: number;
    file_size?: number;
  }>;
}

interface TelegramUpdate {
  update_id: number;
  message?: TelegramMessage;
}

// Store user sessions (in production, use a database)
const userSessions = new Map<number, {
  step: string;
  productData: any;
  waitingFor: string;
}>();

const TELEGRAM_BOT_TOKEN = Deno.env.get('TELEGRAM_BOT_TOKEN');
const AUTHORIZED_CHAT_ID = 7413461486; // Your chat ID

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  // Validate bot token
  if (!TELEGRAM_BOT_TOKEN) {
    console.error('TELEGRAM_BOT_TOKEN is not configured');
    return new Response('Bot token not configured', { 
      status: 500, 
      headers: corsHeaders 
    });
  }

  try {
    if (req.method === 'POST') {
      const update: TelegramUpdate = await req.json();
      console.log('Received update:', JSON.stringify(update, null, 2));

      if (update.message) {
        await handleMessage(update.message);
      }

      return new Response('OK', { headers: corsHeaders });
    }

    return new Response('Method not allowed', { 
      status: 405, 
      headers: corsHeaders 
    });

  } catch (error) {
    console.error('Error processing request:', error);
    return new Response('Internal Server Error', { 
      status: 500, 
      headers: corsHeaders 
    });
  }
});

async function handleMessage(message: TelegramMessage) {
  const chatId = message.chat.id;
  const text = message.text?.trim();

  // Only respond to authorized chat
  if (chatId !== AUTHORIZED_CHAT_ID) {
    await sendMessage(chatId, 'আপনি এই bot ব্যবহার করার অনুমতি নেই।');
    return;
  }

  // Get or create user session
  let session = userSessions.get(chatId);

  // Start command
  if (text === '/start' || text === '/add_product') {
    session = {
      step: 'title',
      productData: {},
      waitingFor: 'title'
    };
    userSessions.set(chatId, session);
    
    await sendMessage(chatId, 
      '🏠 নতুন প্রোপার্টি যোগ করুন\n\n' +
      'প্রোপার্টির নাম/টাইটেল লিখুন:'
    );
    return;
  }

  if (!session) {
    await sendMessage(chatId, 
      'নতুন প্রোপার্টি যোগ করতে /add_product কমান্ড ব্যবহার করুন।'
    );
    return;
  }

  // Handle different steps
  switch (session.step) {
    case 'title':
      if (text) {
        session.productData.title = text;
        session.step = 'description';
        session.waitingFor = 'description';
        await sendMessage(chatId, 'প্রোপার্টির বিবরণ লিখুন:');
      }
      break;

    case 'description':
      if (text) {
        session.productData.description = text;
        session.step = 'price';
        session.waitingFor = 'price';
        await sendMessage(chatId, 'দাম লিখুন (যেমন: ₹50,000/month):');
      }
      break;

    case 'price':
      if (text) {
        session.productData.price = text;
        session.step = 'location';
        session.waitingFor = 'location';
        await sendMessage(chatId, 'লোকেশন লিখুন:');
      }
      break;

    case 'location':
      if (text) {
        session.productData.location = text;
        session.step = 'area';
        session.waitingFor = 'area';
        await sendMessage(chatId, 'এরিয়া লিখুন (যেমন: 1200 sq ft):');
      }
      break;

    case 'area':
      if (text) {
        session.productData.area = text;
        session.step = 'type';
        session.waitingFor = 'type';
        await sendMessage(chatId, 'প্রোপার্টির ধরন লিখুন (যেমন: Office Space, Apartment):');
      }
      break;

    case 'type':
      if (text) {
        session.productData.type = text;
        session.step = 'features';
        session.waitingFor = 'features';
        await sendMessage(chatId, 'ফিচারসমূহ লিখুন (কমা দিয়ে আলাদা করুন, যেমন: AC, Parking, WiFi):');
      }
      break;

    case 'features':
      if (text) {
        session.productData.features = text.split(',').map(f => f.trim());
        session.step = 'photo';
        session.waitingFor = 'photo';
        await sendMessage(chatId, 'প্রোপার্টির ছবি পাঠান:');
      }
      break;

    case 'photo':
      if (message.photo && message.photo.length > 0) {
        // Get the largest photo
        const photo = message.photo[message.photo.length - 1];
        
        try {
          const imageUrl = await getPhotoUrl(photo.file_id);
          session.productData.image = imageUrl;
          
          // Generate unique order code
          const orderCode = generateOrderCode();
          session.productData.id = orderCode;
          session.productData.status = 'available';

          // Save to code file
          await saveProductToCode(session.productData);

          await sendMessage(chatId, 
            `✅ প্রোপার্টি সফলভাবে যোগ করা হয়েছে!\n\n` +
            `🔢 অর্ডার কোড: ${orderCode}\n` +
            `🏠 নাম: ${session.productData.title}\n` +
            `📍 লোকেশন: ${session.productData.location}\n` +
            `💰 দাম: ${session.productData.price}\n\n` +
            `নতুন প্রোপার্টি যোগ করতে /add_product ব্যবহার করুন।`
          );

          // Clear session
          userSessions.delete(chatId);

        } catch (error) {
          console.error('Error processing photo:', error);
          await sendMessage(chatId, 'ছবি প্রসেস করতে সমস্যা হয়েছে। আবার চেষ্টা করুন।');
        }
      } else {
        await sendMessage(chatId, 'দয়া করে একটি ছবি পাঠান।');
      }
      break;

    default:
      await sendMessage(chatId, 'কিছু ভুল হয়েছে। /add_product দিয়ে আবার শুরু করুন।');
      userSessions.delete(chatId);
  }

  // Update session
  userSessions.set(chatId, session);
}

async function sendMessage(chatId: number, text: string) {
  try {
    if (!TELEGRAM_BOT_TOKEN) {
      console.error('Bot token not available for sending message');
      return;
    }

    console.log(`Sending message to chat ${chatId}: ${text.substring(0, 50)}...`);
    
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: 'HTML'
      }),
    });

    const responseData = await response.text();
    
    if (!response.ok) {
      console.error('Failed to send message:', response.status, responseData);
      throw new Error(`Telegram API error: ${response.status} - ${responseData}`);
    } else {
      console.log('Message sent successfully');
    }
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
}

async function getPhotoUrl(fileId: string): Promise<string> {
  try {
    // Get file info from Telegram
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getFile?file_id=${fileId}`);
    const data = await response.json();
    
    if (data.ok && data.result.file_path) {
      return `https://api.telegram.org/file/bot${TELEGRAM_BOT_TOKEN}/${data.result.file_path}`;
    }
    
    throw new Error('Failed to get file URL');
  } catch (error) {
    console.error('Error getting photo URL:', error);
    throw error;
  }
}

function generateOrderCode(): string {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2, 8);
  return `ORD-${timestamp}-${random}`.toUpperCase();
}

async function saveProductToCode(productData: any) {
  try {
    console.log('Saving product to code:', productData);
    
    // For now, we'll use a simple approach - save to the Office Space page
    // In a real implementation, you'd determine which page based on product type
    
    // This is a placeholder - in production, you'd use GitHub API to modify files
    // Since we don't have GitHub token configured yet, we'll just log it
    
    console.log('Product would be saved to React component with data:', {
      id: productData.id,
      title: productData.title,
      description: productData.description,
      price: productData.price,
      location: productData.location,
      area: productData.area,
      type: productData.type,
      image: productData.image,
      features: productData.features,
      status: productData.status
    });

    // TODO: Implement GitHub API integration to modify the actual component files
    
  } catch (error) {
    console.error('Error saving product to code:', error);
    throw error;
  }
}
