# ⚙️ CI/CD Pipeline

Every time you push code to GitHub, MindBridge automatically builds and deploys to Firebase Hosting. No manual steps needed.

---

## How It Works

```
You push code to GitHub
        ↓
GitHub Actions triggers
        ↓
Workflow installs packages (npm ci)
        ↓
Workflow injects .env from GitHub Secrets
        ↓
Workflow builds the app (npm run build)
        ↓
Workflow deploys to Firebase Hosting
        ↓
Live site updates at mindbridge-v2-18fa8.web.app
```

Total time: ~2 minutes from push to live.

---

## The Workflow File

Located at `.github/workflows/firebase-hosting-merge.yml`

```yaml
name: Deploy to Firebase Hosting on merge
on:
  push:
    branches:
      - main
jobs:
  build_and_deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Set env variables
        run: |
          echo "VITE_GEMINI_API_KEY=${{ secrets.VITE_GEMINI_API_KEY }}" >> .env
          echo "VITE_FIREBASE_API_KEY=${{ secrets.VITE_FIREBASE_API_KEY }}" >> .env
          echo "VITE_FIREBASE_AUTH_DOMAIN=${{ secrets.VITE_FIREBASE_AUTH_DOMAIN }}" >> .env
          echo "VITE_FIREBASE_PROJECT_ID=${{ secrets.VITE_FIREBASE_PROJECT_ID }}" >> .env
          echo "VITE_FIREBASE_STORAGE_BUCKET=${{ secrets.VITE_FIREBASE_STORAGE_BUCKET }}" >> .env
          echo "VITE_FIREBASE_MESSAGING_SENDER_ID=${{ secrets.VITE_FIREBASE_MESSAGING_SENDER_ID }}" >> .env
          echo "VITE_FIREBASE_APP_ID=${{ secrets.VITE_FIREBASE_APP_ID }}" >> .env
      - run: npm ci && npm run build
      - uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: ${{ secrets.GITHUB_TOKEN }}
          firebaseServiceAccount: ${{ secrets.FIREBASE_SERVICE_ACCOUNT_MINDBRIDGE_V2_18FA8 }}
          channelId: live
          projectId: mindbridge-v2-18fa8
```

---

## Daily Workflow

```bash
# 1. Make your changes in VS Code or via Antigravity

# 2. Stage all changes
git add .

# 3. Commit with a description
git commit -m "Add voice feature to chat"

# 4. Push to GitHub
git push

# 5. Go to GitHub → Actions tab and watch it deploy
```

---

## Updating an API Key

```bash
# 1. Go to GitHub repo → Settings → Secrets → edit the secret

# 2. Trigger redeploy without any code change
git commit --allow-empty -m "Refresh deployment"
git push
```

---

## Checking Deployment Status

1. Go to **https://github.com/prats010/mindbridge-v2/actions**
2. Green ✅ = deployed successfully
3. Red ❌ = something failed, click to see the error logs

---

## Common CI Errors

| Error | Fix |
|-------|-----|
| `vite: Permission denied` | Change `npm run build` to `npm ci && npm run build` |
| `Missing env variable` | Check all GitHub Secrets are added correctly |
| `Firebase auth error` | Re-run `firebase init hosting:github` and push new workflow file |
| `Build failed` | Check the error log — usually a code syntax error |
