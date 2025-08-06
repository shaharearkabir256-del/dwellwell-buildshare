// Run this script to set up the Telegram webhook
const TELEGRAM_BOT_TOKEN = 'YOUR_BOT_TOKEN'; // Replace with your actual token
const WEBHOOK_URL = 'https://jthlcsojaieyokqsgefr.supabase.co/functions/v1/telegram-bot';

async function setupWebhook() {
  try {
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
    } else {
      console.log('❌ Failed to set up webhook:', result.description);
    }
  } catch (error) {
    console.error('Error setting up webhook:', error);
  }
}

setupWebhook();