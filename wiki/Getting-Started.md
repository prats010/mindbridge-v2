# 🚀 Getting Started

Everything you need to run MindBridge locally from scratch.

---

## Prerequisites

| Tool | Version | Download |
|------|---------|----------|
| Node.js | 20+ | https://nodejs.org |
| Git | Any | https://git-scm.com |
| Chrome | Any | For voice features |
| A Gmail account | — | For Firebase + Gemini |

---

## Step 1 — Clone the Repository

```bash
git clone https://github.com/prats010/mindbridge-v2.git
cd mindbridge-v2
```

---

## Step 2 — Install Dependencies

```bash
npm install
```

This installs all packages from `package.json`. Takes 2–4 minutes.

---

## Step 3 — Set Up Firebase

See the full [Firebase Setup](Firebase-Setup) guide.

Quick summary:
1. Go to https://console.firebase.google.com
2. Create a new project
3. Enable Google Authentication
4. Create a Firestore database
5. Register a web app and copy the config

---

## Step 4 — Get a Gemini API Key

See the full [Gemini AI Setup](Gemini-AI-Setup) guide.

Quick summary:
1. Go to https://aistudio.google.com/app/apikey
2. Click **Create API key**
3. Select your Firebase project
4. Copy the key

---

## Step 5 — Create the .env File

Copy the example file:

```bash
cp .env.example .env
```

Open `.env` and fill in all values. See [Environment Variables](Environment-Variables) for the full list.

---

## Step 6 — Deploy Firestore Rules

```bash
npm install -g firebase-tools
firebase login
firebase use --add
firebase deploy --only firestore:rules
```

---

## Step 7 — Run the App

```bash
npm run dev
```

Open http://localhost:5173 in Chrome.

---

## First Time Login Flow

1. Click **Sign in with Google**
2. Select your Google account
3. A popup asks you to add a **Trusted Contact** — this is mandatory
4. Fill in name, phone number, relationship
5. Click **Continue to MindBridge**
6. You are now in the chat 🎉

---

## ✅ Everything Working?

Try sending a message in the chat. You should see a response from Gemini within 2–3 seconds.

If not, see [Troubleshooting](Troubleshooting).
