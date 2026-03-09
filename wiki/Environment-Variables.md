# 🔐 Environment Variables

All environment variables used in MindBridge V2.

---

## The .env File

Create a file called `.env` in the root of your project. Copy from `.env.example` and fill in your values.

```bash
cp .env.example .env
```

> ⚠️ **Never commit your `.env` file to GitHub.** It is in `.gitignore` to prevent this.

---

## All Variables

### Gemini AI

| Variable | Description | Where to get it |
|----------|-------------|-----------------|
| `VITE_GEMINI_API_KEY` | Google Gemini API key | https://aistudio.google.com/app/apikey |

### Firebase

| Variable | Description | Where to get it |
|----------|-------------|-----------------|
| `VITE_FIREBASE_API_KEY` | Firebase web API key | Firebase Console → Project Settings → Your Apps |
| `VITE_FIREBASE_AUTH_DOMAIN` | Firebase auth domain | Same as above |
| `VITE_FIREBASE_PROJECT_ID` | Your Firebase project ID | Same as above |
| `VITE_FIREBASE_STORAGE_BUCKET` | Firebase storage bucket | Same as above |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | FCM sender ID | Same as above |
| `VITE_FIREBASE_APP_ID` | Firebase app ID | Same as above |

---

## Example .env File

```env
VITE_GEMINI_API_KEY=AIzaSyD3xxxxxxxxxxxxxxxxxxxx

VITE_FIREBASE_API_KEY=AIzaSyC44xxxxxxxxxxxxxxxxxxxx
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abcdefghij
```

---

## Important Rules

1. **No quotes** around values — just paste directly after the `=`
2. **No spaces** around the `=` sign
3. **Save the file** before running `npm run dev`
4. **Restart the dev server** after any `.env` change (Ctrl+C then `npm run dev`)
5. **All variables must start with `VITE_`** — otherwise Vite won't expose them to the browser

---

## GitHub Secrets (for CI/CD)

For the live deployment to work via GitHub Actions, add all these same variables as GitHub Secrets:

1. Go to your repo → **Settings → Secrets and variables → Actions**
2. Click **New repository secret**
3. Add each variable — name exactly as above, value exactly as in your `.env`

See [CI/CD Pipeline](CICD-Pipeline) for the full setup.

---

## Rotating a Key

If you need to update a key (e.g. new Gemini API key):

1. Update your local `.env` file
2. Update the GitHub Secret:
   - Go to repo → Settings → Secrets → click pencil icon → paste new value
3. Trigger a redeploy:
```bash
git commit --allow-empty -m "Refresh deployment"
git push
```
