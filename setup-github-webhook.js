// Setup Telegram webhook for GitHub/Vercel deployment
const TELEGRAM_BOT_TOKEN = '8229133802:AAEQ7CoTGYYYjgCXHdRxZBtcLXqZA2JsWqs';

// Replace with your actual Vercel deployment URL
const WEBHOOK_URL = 'https://propertybd.vercel.app/api/telegram-webhook';

async function setupWebhook() {
  try {
    console.log('Setting up Telegram webhook for GitHub/Vercel...');
    
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/setWebhook`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        url: WEBHOOK_URL,
        allowed_updates: ['message']
      }),
    });

    const result = await response.json();
    console.log('Webhook setup result:', result);
    
    if (result.ok) {
      console.log('✅ Webhook set up successfully!');
      console.log('Webhook URL:', WEBHOOK_URL);
      console.log('You can now message your bot with /start or /add_product');
    } else {
      console.log('❌ Failed to set up webhook:', result.description);
    }
  } catch (error) {
    console.error('Error setting up webhook:', error);
  }
}

// Also check current webhook status
async function checkWebhook() {
  try {
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getWebhookInfo`);
    const result = await response.json();
    console.log('Current webhook info:', result);
  } catch (error) {
    console.error('Error checking webhook:', error);
  }
}

console.log('=== Setting up GitHub/Vercel Telegram Bot ===');
checkWebhook().then(() => setupWebhook());