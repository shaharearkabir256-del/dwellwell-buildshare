// Auto-run webhook setup
fetch('https://jthlcsojaieyokqsgefr.supabase.co/functions/v1/setup-webhook', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  }
})
.then(response => response.json())
.then(data => {
  console.log('Webhook setup result:', data);
  if (data.success) {
    console.log('✅ Bot is now active! You can message it with /start or /add_product');
  } else {
    console.error('❌ Webhook setup failed:', data.error);
  }
})
.catch(error => {
  console.error('Error:', error);
});

// You can also manually visit this URL to setup webhook:
// https://jthlcsojaieyokqsgefr.supabase.co/functions/v1/setup-webhook