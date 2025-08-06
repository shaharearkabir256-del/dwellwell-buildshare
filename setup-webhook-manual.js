// Manual webhook setup script
const TELEGRAM_BOT_TOKEN = '8229133802:AAEQ7CoTGYYYjgCXHdRxZBtcLXqZA2JsWqs';
const WEBHOOK_URL = 'https://jthlcsojaieyokqsgefr.supabase.co/functions/v1/telegram-bot';

async function setupWebhook() {
  try {
    console.log('Setting up webhook...');
    
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/setWebhook`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        url: WEBHOOK_URL
      }),
    });

    const result = await response.json();
    console.log('Webhook setup result:', result);
    
    if (result.ok) {
      console.log('✅ Webhook set up successfully!');
      console.log('You can now message your bot with /start or /add_product');
    } else {
      console.log('❌ Failed to set up webhook:', result.description);
    }
  } catch (error) {
    console.error('Error setting up webhook:', error);
  }
}

setupWebhook();