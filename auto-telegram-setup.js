// Auto setup for Telegram webhook with proper URLs
const TELEGRAM_BOT_TOKEN = '8229133802:AAEQ7CoTGYYYjgCXHdRxZBtcLXqZA2JsWqs';
const AUTHORIZED_CHAT_ID = 7413461486;
const WEBHOOK_URL = 'https://propertybd.vercel.app/api/telegram-webhook';

console.log('🤖 Telegram Bot Configuration:');
console.log('Bot Token:', TELEGRAM_BOT_TOKEN);
console.log('Authorized Chat ID:', AUTHORIZED_CHAT_ID);
console.log('Webhook URL:', WEBHOOK_URL);
console.log('');

async function autoSetup() {
  try {
    // 1. Check bot status
    console.log('1️⃣ Checking bot status...');
    const botResponse = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getMe`);
    const botInfo = await botResponse.json();
    
    if (botInfo.ok) {
      console.log('✅ Bot is active:', botInfo.result.first_name);
    } else {
      console.log('❌ Bot token invalid');
      return;
    }

    // 2. Setup webhook
    console.log('2️⃣ Setting up webhook...');
    const webhookResponse = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/setWebhook`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        url: WEBHOOK_URL,
        allowed_updates: ['message']
      }),
    });

    const webhookResult = await webhookResponse.json();
    
    if (webhookResult.ok) {
      console.log('✅ Webhook setup successful!');
    } else {
      console.log('❌ Webhook setup failed:', webhookResult.description);
    }

    // 3. Verify webhook
    console.log('3️⃣ Verifying webhook...');
    const infoResponse = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getWebhookInfo`);
    const webhookInfo = await infoResponse.json();
    
    if (webhookInfo.result.url === WEBHOOK_URL) {
      console.log('✅ Webhook verified successfully!');
      console.log('📱 আপনার Telegram বটে যান এবং /start লিখুন');
      console.log('🏠 প্রোপার্টি যোগ করতে /add_product ব্যবহার করুন');
    } else {
      console.log('❌ Webhook verification failed');
      console.log('Current webhook:', webhookInfo.result.url);
    }

  } catch (error) {
    console.error('❌ Setup error:', error);
  }
}

// Auto run setup
autoSetup();