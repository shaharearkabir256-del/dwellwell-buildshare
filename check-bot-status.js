// Check Telegram bot status
const BOT_TOKEN = '8229133802:AAEQ7CoTGYYYjgCXHdRxZBtcLXqZA2JsWqs';

async function checkBotStatus() {
  try {
    console.log('Checking bot info...');
    
    // Get bot info
    const botInfoResponse = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/getMe`);
    const botInfo = await botInfoResponse.json();
    console.log('Bot info:', botInfo);
    
    // Get webhook info
    const webhookResponse = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/getWebhookInfo`);
    const webhookInfo = await webhookResponse.json();
    console.log('Webhook info:', webhookInfo);
    
    // Get updates (if any)
    const updatesResponse = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/getUpdates`);
    const updates = await updatesResponse.json();
    console.log('Recent updates:', updates);
    
    if (webhookInfo.result.url) {
      console.log('✅ Webhook is set:', webhookInfo.result.url);
    } else {
      console.log('❌ No webhook set');
    }
    
  } catch (error) {
    console.error('Error checking bot status:', error);
  }
}

checkBotStatus();