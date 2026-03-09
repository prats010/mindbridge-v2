# 🔧 Troubleshooting

Solutions to every error encountered during MindBridge development.

---

## Chat / Gemini Errors

### "I had trouble responding" in chat
**Cause:** Gemini API call failed.
**Fix:**
1. Open browser Console (F12)
2. Look for the red error
3. Most common causes below:

---

### 429 Too Many Requests
**Cause:** Daily quota exhausted on your Gemini API key.
**Fix:**
- Wait 24 hours (quota resets at midnight Pacific time)
- OR create a new API key at https://aistudio.google.com/app/apikey
- OR switch model in `src/gemini.js`:
```js
model: "gemini-1.5-flash"  // different quota from 2.0-flash
```

---

### 404 Model Not Found
**Cause:** Wrong model name in `src/gemini.js`.
**Fix:** Use one of these valid model names:
```js
model: "gemini-2.5-flash"   // recommended
model: "gemini-2.0-flash"   // stable
model: "gemini-1.5-flash"   // backup
```

---

### "Failed to generate API key — request is suspicious"
**Cause:** Google flagged your account after keys were exposed publicly.
**Fix:**
- Wait 24 hours and try again
- OR use a different Gmail account
- OR create key via https://console.cloud.google.com → APIs & Services → Credentials

---

## Firebase / Login Errors

### Login popup opens then closes, nothing happens
**Cause:** Firestore permission error on profile save.
**Fix:** Wrap `saveUserProfile` in try/catch in `App.jsx` — see Getting Started guide.

---

### "Missing or insufficient permissions"
**Cause:** Firestore security rules not deployed.
**Fix:**
```bash
firebase deploy --only firestore:rules
```

---

### "Firebase: Error (auth/unauthorized-domain)"
**Cause:** `localhost` not in Firebase authorized domains.
**Fix:**
1. Firebase Console → Authentication → Settings → Authorized domains
2. Add `localhost`

---

### ERR_BLOCKED_BY_CLIENT on Firestore
**Cause:** Ad blocker blocking Firebase requests.
**Fix:** Disable your ad blocker for `localhost`.

---

## Local Setup Errors

### `node` is not recognized
**Cause:** Node.js not installed or not in PATH.
**Fix:**
1. Download from https://nodejs.org
2. Install with all defaults
3. Restart PowerShell

---

### `vite` is not recognized
**Cause:** Packages not installed.
**Fix:**
```bash
npm install
```

---

### `.env` values not loading
**Cause:** `.env` file not saved or server not restarted.
**Fix:**
1. Make sure file is named exactly `.env` (not `.env.txt`)
2. Stop server: Ctrl+C
3. Restart: `npm run dev`

---

## Git / GitHub Errors

### `fatal: repository not found`
**Cause:** Wrong remote URL.
**Fix:**
```bash
git remote set-url origin https://github.com/prats010/mindbridge-v2.git
git push -u origin main
```

---

### `rejected — fetch first`
**Cause:** GitHub has changes you don't have locally.
**Fix:**
```bash
git pull origin main --rebase
git push
```

---

### `vite: Permission denied` in GitHub Actions
**Cause:** Workflow runs build without installing packages first.
**Fix:** In `.github/workflows/firebase-hosting-merge.yml`:
```yaml
- run: npm ci && npm run build
```

---

## CI/CD Errors

### Green CI but live site not updated
**Cause:** GitHub Secrets missing — build succeeded but with empty env variables.
**Fix:** Add all 7 secrets in repo → Settings → Secrets and variables → Actions.

---

### How to trigger a redeploy without code changes
```bash
git commit --allow-empty -m "Refresh deployment"
git push
```
