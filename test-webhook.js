// Test webhook manually
const webhookUrl = 'https://jthlcsojaieyokqsgefr.supabase.co/functions/v1/telegram-bot';

// Test message that simulates Telegram webhook
const testMessage = {
  update_id: 123456,
  message: {
    message_id: 1,
    from: {
      id: 7413461486,
      first_name: "Test User"
    },
    chat: {
      id: 7413461486,
      type: "private"
    },
    text: "/start"
  }
};

async function testWebhook() {
  try {
    console.log('Testing webhook with message:', JSON.stringify(testMessage, null, 2));
    
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testMessage)
    });

    const responseText = await response.text();
    console.log('Response status:', response.status);
    console.log('Response:', responseText);
    
    if (response.ok) {
      console.log('✅ Webhook test successful!');
    } else {
      console.log('❌ Webhook test failed:', response.status);
    }
  } catch (error) {
    console.error('Test error:', error);
  }
}

testWebhook();