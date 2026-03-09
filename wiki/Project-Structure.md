# 📁 Project Structure

A complete breakdown of every file and folder in MindBridge V2.

---

## Root Directory

```
mindbridge-v2/
├── .github/
│   └── workflows/
│       └── firebase-hosting-merge.yml  ← CI/CD auto-deploy
├── src/                                ← All React source code
├── .env                                ← Your secret keys (never commit)
├── .env.example                        ← Template for .env
├── .gitignore                          ← Files Git ignores
├── firebase.json                       ← Firebase project config
├── firestore.rules                     ← Firestore security rules
├── firestore.indexes.json              ← Firestore indexes
├── index.html                          ← HTML entry point
├── package.json                        ← Dependencies
├── postcss.config.js                   ← PostCSS config for Tailwind
├── tailwind.config.js                  ← Tailwind CSS config
└── vite.config.js                      ← Vite bundler config
```

---

## src/ Directory

```
src/
├── components/
│   ├── Navbar.jsx              ← Top navigation bar
│   ├── CrisisModal.jsx         ← Emergency helpline overlay
│   └── TrustedContactModal.jsx ← Onboarding safety modal
├── pages/
│   ├── LoginPage.jsx           ← Google sign-in screen
│   ├── ChatPage.jsx            ← Main AI chat + history sidebar
│   ├── AssessmentPage.jsx      ← PHQ-9 & GAD-7 screening
│   └── DashboardPage.jsx       ← Mood chart + AI insights
├── App.jsx                     ← Router + auth state management
├── firebase.js                 ← All Firestore helper functions
├── gemini.js                   ← Gemini AI integration
├── sentiment.js                ← Local JS sentiment analysis
├── main.jsx                    ← React entry point
└── index.css                   ← Global styles + Tailwind imports
```

---

## Key Files Explained

### `src/firebase.js`
Contains all Firestore helper functions:
- `saveMessage()` — save a chat message
- `loadMessages()` — load messages for a session
- `createSession()` — create a new chat session
- `getSessions()` — get all sessions for sidebar
- `saveAssessment()` — save PHQ-9 or GAD-7 result
- `loadAssessments()` — load assessment history
- `saveMoodLog()` — log daily mood
- `loadMoodLogs()` — load mood history for chart
- `saveUserProfile()` — save user profile data

### `src/gemini.js`
Contains all Gemini AI functions:
- `sendToGemini()` — send message with history
- `interpretAssessment()` — get AI interpretation of score
- `detectCrisis()` — detect crisis keywords

### `src/sentiment.js`
Pure JavaScript sentiment analysis. No API needed. Returns score (-1 to +1) and magnitude.

### `firestore.rules`
Security rules that ensure users can only read and write their own data. Always deploy this after any changes:
```bash
firebase deploy --only firestore:rules
```

### `.github/workflows/firebase-hosting-merge.yml`
The CI/CD pipeline. Runs automatically on every push to `main`. Installs packages, builds the app, deploys to Firebase Hosting.
