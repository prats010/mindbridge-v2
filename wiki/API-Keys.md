# 🔑 API Keys

How to manage, rotate, and secure all API keys in MindBridge.

---

## Keys Used in MindBridge

| Key | Service | Where Used | Free? |
|-----|---------|-----------|-------|
| `VITE_GEMINI_API_KEY` | Google Gemini | AI chat, assessments, insights | ✅ Yes |
| `VITE_FIREBASE_API_KEY` | Firebase | Auth + Firestore | ✅ Yes |

---

## Getting a Gemini API Key

1. Go to https://aistudio.google.com/app/apikey
2. Sign in with Gmail
3. Click **Create API key**
4. Select your Firebase project from dropdown
5. Click **Create API key in existing project**
6. Copy the key — starts with `AIzaSy...`

**Free tier limits:**
- 15 requests per minute
- 1,000,000 tokens per minute  
- Resets daily at midnight Pacific time

---

## Getting Firebase Config

1. Go to https://console.firebase.google.com
2. Select your project
3. Click ⚙️ gear icon → **Project Settings**
4. Scroll down to **Your apps**
5. Click your web app
6. Copy all values from the `firebaseConfig` object

---

## Rotating the Gemini Key

When you need a new key (quota issues, security, etc.):

**Step 1 — Delete the old key**
1. Go to https://aistudio.google.com/app/apikey
2. Click the trash icon next to the old key
3. Confirm deletion

**Step 2 — Create a new key**
1. Click **Create API key**
2. Select your project
3. Copy the new key

**Step 3 — Update local .env**
```env
VITE_GEMINI_API_KEY=your_new_key_here
```
Restart dev server: Ctrl+C then `npm run dev`

**Step 4 — Update GitHub Secret**
1. Go to repo → Settings → Secrets and variables → Actions
2. Find `VITE_GEMINI_API_KEY`
3. Click pencil icon
4. Paste new key
5. Click **Update secret**

**Step 5 — Redeploy**
```bash
git commit --allow-empty -m "Update Gemini key"
git push
```

---

## Security Rules

✅ **Do:**
- Store keys only in `.env` file
- Add `.env` to `.gitignore`
- Use GitHub Secrets for CI/CD
- Rotate keys if accidentally exposed

❌ **Never:**
- Paste keys in chat (Discord, WhatsApp, AI chat)
- Commit `.env` to GitHub
- Share keys with anyone
- Put keys directly in source code files

---

## If a Key Gets Exposed

Act immediately:

1. **Delete the exposed key** at the source (AI Studio or Firebase Console)
2. **Create a new key**
3. **Update `.env`** with new key
4. **Update GitHub Secret**
5. **Push to redeploy**

The whole process takes under 5 minutes.
