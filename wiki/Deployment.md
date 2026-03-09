# 🚀 Deployment

How to deploy MindBridge to Firebase Hosting.

---

## Prerequisites

Firebase CLI installed:
```bash
npm install -g firebase-tools
firebase --version  # should show 13.x.x or higher
```

---

## Manual Deployment (One-time or quick fixes)

```bash
# 1. Build the app
npm run build

# 2. Deploy to Firebase Hosting
firebase deploy --only hosting

# Your live URL:
# https://mindbridge-v2-18fa8.web.app
```

---

## Deploy Firestore Rules Only

```bash
firebase deploy --only firestore:rules
```

Do this whenever you change `firestore.rules`.

---

## Deploy Everything

```bash
firebase deploy
```

Deploys hosting + Firestore rules + indexes.

---

## Automatic Deployment via GitHub (Recommended)

Once CI/CD is set up, just push to GitHub:

```bash
git add .
git commit -m "your changes"
git push
```

Firebase deploys automatically in ~2 minutes.

See [CI/CD Pipeline](CICD-Pipeline) for setup instructions.

---

## Live URLs

| Environment | URL |
|------------|-----|
| Local dev | http://localhost:5173 |
| Live (Firebase) | https://mindbridge-v2-18fa8.web.app |
| Live (alt) | https://mindbridge-v2-18fa8.firebaseapp.com |

---

## Checking Deployment History

Go to Firebase Console → Hosting → you can see all past deployments and roll back to any previous version if needed.

---

## Rollback to Previous Version

1. Go to https://console.firebase.google.com
2. Select project → **Hosting**
3. Find the previous deployment in the history
4. Click **•••** → **Rollback**
