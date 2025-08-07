// Final setup with correct website URL
const TELEGRAM_BOT_TOKEN = '8229133802:AAEQ7CoTGYYYjgCXHdRxZBtcLXqZA2JsWqs';
const AUTHORIZED_CHAT_ID = 7413461486;
const WEBHOOK_URL = 'https://propertybd.vercel.app/api/telegram-webhook';

console.log('🎯 Final Telegram Bot Setup');
console.log('🌐 Website: https://propertybd.vercel.app');
console.log('🤖 Webhook: ' + WEBHOOK_URL);
console.log('👤 Chat ID: ' + AUTHORIZED_CHAT_ID);
console.log('');

async function finalSetup() {
  try {
    console.log('⚡ Setting up webhook...');
    
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/setWebhook`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        url: WEBHOOK_URL,
        allowed_updates: ['message']
      }),
    });

    const result = await response.json();
    
    if (result.ok) {
      console.log('✅ SUCCESS! Telegram bot is now active!');
      console.log('📱 Go to your Telegram and send: /start');
      console.log('🏠 To add property send: /add_product');
      console.log('');
      console.log('🎉 Your bot is ready at: https://propertybd.vercel.app');
    } else {
      console.log('❌ Failed:', result.description);
    }

  } catch (error) {
    console.error('Error:', error);
  }
}

finalSetup();