# Telegram Bot Setup for GitHub

## সেটআপ স্টেপস:

### 1. GitHub এ Deploy করুন
- আপনার কোড GitHub এ push করুন
- Vercel বা Netlify দিয়ে deploy করুন

### 2. Environment Variables সেট করুন (Vercel/Netlify তে):
```
GITHUB_TOKEN=your_github_personal_access_token
GITHUB_REPO=username/repo-name
```

### 3. Webhook URL Update করুন
`setup-github-webhook.js` ফাইলে আপনার deployed URL দিন:
```javascript
const WEBHOOK_URL = 'https://your-app-name.vercel.app/api/telegram-webhook';
```

### 4. Webhook Setup করুন
```bash
node setup-github-webhook.js
```

## কিভাবে কাজ করে:

1. ✅ Telegram bot টেলিগ্রামে `/start` বা `/add_product` পাবে
2. ✅ User থেকে property details নেবে (title, description, price, location, area, type, features, photo)
3. ✅ GitHub API দিয়ে `src/data/properties.json` ফাইলে save করবে
4. ✅ Auto GitHub commit হবে নতুন property এর সাথে
5. ✅ Website auto-update হবে নতুন property দিয়ে

## Features:
- 🏠 Property management via Telegram
- 📸 Photo upload support
- 💾 GitHub এ direct save
- 🔄 Auto sync with website
- 📱 Bengali interface
- 🔒 Authorized user only (Chat ID: 7413461486)

## Bot Commands:
- `/start` - বট শুরু করুন
- `/add_product` - নতুন property যোগ করুন

সব কিছু এখন GitHub দিয়ে কাজ করবে! 🎉