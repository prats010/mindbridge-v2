<div align="center">

<img src="https://em-content.zobj.net/source/microsoft-teams/363/brain_1f9e0.png" width="80px" />

# MindBridge AI

### _Your 24/7 AI-powered mental health companion_

**Built for India · Powered by Custom ML · 100% Free**

[![Live Demo](https://img.shields.io/badge/🧠_Live_Demo-Visit_App-0D9488?style=for-the-badge)](https://mindbridge-v2-18fa8.web.app/)
[![Custom ML Model](https://img.shields.io/badge/Custom_ML-In--House_Model-7C3AED?style=for-the-badge)](https://github.com/prats010/mindbridge-v2)
[![Gemini Insights](https://img.shields.io/badge/Google_Gemini-Insights_&_Tests-4285F4?style=for-the-badge&logo=google)](https://aistudio.google.com)
[![Firebase](https://img.shields.io/badge/Firebase-Powered-FF6F00?style=for-the-badge&logo=firebase)](https://firebase.google.com)
[![License](https://img.shields.io/badge/License-MIT-7C3AED?style=for-the-badge)](LICENSE)

---

_"I didn't think an AI could make me feel heard. MindBridge was there at 2am when I had no one else to talk to."_

</div>

---

## 🌟 What is MindBridge?

MindBridge is a free, AI-powered mental health support platform built specifically for India. With **150 million Indians** needing mental health care but only **0.3 psychiatrists per 100,000 people**, access to support is a crisis in itself.

MindBridge bridges that gap — providing compassionate, intelligent, 24/7 mental health support through our **custom-trained ML chatbot model**, advanced behavioural mood detection, clinically validated screening tools, and mood tracking — all completely free, completely private.

> ⚠️ **Disclaimer:** MindBridge is a support companion, not a replacement for professional mental health care. If you are in crisis, please call **iCall: 9152987821**.

---

## ✨ Features

### 🤖 AI Chat Support — Custom ML Model

The core chatbot is powered by our **own in-house trained ML model**, purpose-built for empathetic mental health conversations. Unlike generic LLMs, this model was trained specifically on mental health dialogue patterns to listen without judgment, validate feelings before offering advice, detect emotional distress, and provide evidence-based coping strategies. Conversation history is stored per-session in Firestore.

### 🧠 Behavioural Mood Detection (Novel Feature)

Our sentiment analysis engine goes beyond just text — it analyses **how** you type, not just **what** you type. Mood is inferred from a combination of behavioural and textual signals in real time:

- **Typing Speed** — Rapid keystrokes may indicate agitation, anxiety, or urgency; slow typing may suggest low energy or sadness
- **Message Sending Speed** — Frequency of sent messages within a session is tracked to detect emotional bursts or withdrawal
- **Message Length Patterns** — Short, fragmented messages vs. lengthy outpourings are weighted as mood signals
- **Punctuation & Casing Patterns** — Excessive punctuation, ALL CAPS, or absence of punctuation are factored into emotional state scoring
- **Response Latency** — Time taken between receiving a reply and responding is used as a passive engagement signal
- **Text Sentiment Score** — Traditional NLP-based sentiment scoring layered with the above behavioural features for a composite mood reading

All of this analysis runs **100% locally in the browser** — no data ever leaves your device for sentiment processing.

### 🎤 Voice Mode

Full voice input and output using the **Web Speech API** — completely free, no external service needed. Speak naturally and hear MindBridge respond in a calm, measured voice.

### 📋 PHQ-9 & GAD-7 Assessments _(powered by Google Gemini)_

Clinically validated depression and anxiety screening tools used worldwide by mental health professionals. After completing an assessment, **Gemini AI interprets your specific answers** and explains exactly what contributed to your score in plain, compassionate language. Gemini is used here specifically because assessment interpretation benefits from the nuanced reasoning of a frontier LLM.

### 📊 Mood Tracker & AI Insights _(powered by Google Gemini)_

Log your daily mood on a 1–10 scale, enriched with the behavioural signals captured during each session. After 7+ days, get a **personalized AI insights report powered by Gemini** that identifies your patterns, what affects your mood, and a concrete 5-point action plan based on your actual data. Gemini is used here to generate high-quality, context-aware narrative insights from your mood history.

### 📅 Chat History by Date

All past conversations organised chronologically — just like your favourite AI chat apps. Switch between sessions, start new ones, and pick up where you left off.

### 🛡️ Trusted Contact System

On first login, users register a trusted contact (friend, parent, counsellor). This safety-first approach ensures someone who cares is always reachable in difficult moments.

### 🔒 Privacy First

- All data stored in **Firebase Firestore** with strict security rules
- Your conversations are **never used for AI training**
- No third-party analytics or data sharing
- All sentiment analysis and behavioural mood detection runs **100% locally** in JavaScript — no API calls, no data leaving the browser

---

## 🛠️ Tech Stack

| Layer | Technology | Why |
| --- | --- | --- |
| **Frontend** | React 18 + Vite | Fast, modern, component-based |
| **Styling** | Tailwind CSS | Utility-first, consistent design |
| **Chatbot** | Custom Trained ML Model | Purpose-built for mental health dialogue |
| **AI Insights & Tests** | Google Gemini 2.5 Flash | Best-in-class narrative reasoning for reports & assessments |
| **Sentiment & Mood** | Pure JavaScript (Behavioural + NLP) | No API calls, fully private, real-time |
| **Auth** | Firebase Authentication | Google-grade security, one-click login |
| **Database** | Firebase Firestore | Real-time, scalable, secure |
| **Hosting** | Firebase Hosting | Global CDN, instant deploys |
| **Voice** | Web Speech API | Built into Chrome, completely free |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js 20+](https://nodejs.org)
- A Google account
- A free [Firebase project](https://console.firebase.google.com)
- A free [Gemini API key](https://aistudio.google.com/app/apikey) _(used only for insights reports and assessments)_

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/prats010/mindbridge-v2.git
cd mindbridge-v2
```

**2. Install dependencies**

```bash
npm install
```

**3. Set up Firebase**

- Go to [Firebase Console](https://console.firebase.google.com) → Create project
- Enable **Google Authentication** (Authentication → Sign-in method → Google)
- Create a **Firestore Database** (start in production mode)
- Register a Web App and copy the config

**4. Create your `.env` file**

Copy `.env.example` to `.env` and fill in your values:

```bash
cp .env.example .env
```

```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here

VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

**5. Deploy Firestore security rules**

```bash
npm install -g firebase-tools
firebase login
firebase use --add
firebase deploy --only firestore:rules
```

**6. Run the app**

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) 🎉

---

## 📦 Deployment

```bash
# Build the app
npm run build

# Deploy to Firebase Hosting
firebase deploy --only hosting

# Your live URL:
# https://your-project-id.web.app
```

---

## 📁 Project Structure

```
mindbridge-v2/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx                  # Navigation bar
│   │   ├── CrisisModal.jsx             # Emergency helpline overlay
│   │   └── TrustedContactModal.jsx     # Onboarding safety modal
│   ├── pages/
│   │   ├── LoginPage.jsx               # Google sign-in
│   │   ├── ChatPage.jsx                # Main AI chat + history sidebar
│   │   ├── AssessmentPage.jsx          # PHQ-9 & GAD-7 screening (Gemini-interpreted)
│   │   └── DashboardPage.jsx           # Mood chart + Gemini AI insights
│   ├── firebase.js                     # Firestore helpers
│   ├── mlModel.js                      # Custom ML chatbot model integration
│   ├── gemini.js                       # Gemini AI integration (insights & assessments only)
│   ├── sentiment.js                    # Local behavioural + NLP sentiment engine
│   ├── App.jsx                         # Router + auth state
│   └── main.jsx                        # Entry point
├── firestore.rules                     # Firestore security rules
├── firebase.json                       # Firebase config
├── .env.example                        # Environment variables template
└── package.json
```

---

## 🧠 How the Chatbot Works

MindBridge's core chat experience is driven by our **custom-trained ML model**, fine-tuned specifically for mental health support conversations. The model is designed to:

1. Always acknowledge feelings **before** offering advice
2. Use the user's name for personalisation
3. Keep responses concise and conversational (3–4 sentences)
4. Ask one thoughtful follow-up question per response
5. Detect signs of distress and escalate to crisis resources
6. Never diagnose — only reflect and support

Conversation history is passed to the model in full so it maintains context across a session.

> **Google Gemini is used exclusively for:** (1) generating personalised insights reports from mood history data, and (2) interpreting PHQ-9 & GAD-7 assessment results in compassionate, plain language.

---

## 📡 How Behavioural Mood Detection Works

The sentiment engine captures passive behavioural signals alongside text content to build a richer emotional picture:

| Signal | What It Detects |
| --- | --- |
| **Typing speed (WPM)** | Agitation, urgency, anxiety vs. low energy |
| **Message sending frequency** | Emotional bursts, withdrawal, engagement level |
| **Message length** | Fragmented thinking vs. emotional overflow |
| **Punctuation & casing** | Frustration, distress, or emotional flatness |
| **Response latency** | Passive engagement or hesitance |
| **NLP sentiment score** | Base positive / negative / neutral text polarity |

These signals are combined into a **composite mood score** that informs the dashboard and, over time, feeds into the AI insights report. Everything runs locally — zero network calls.

---

## 🩺 Mental Health Screenings

| Tool | Purpose | Score Range |
| --- | --- | --- |
| **PHQ-9** | Depression screening | 0–27 |
| **GAD-7** | Anxiety screening | 0–21 |

Both are **WHO-validated** tools used globally by clinical professionals. MindBridge uses them for screening only — results are interpreted by Gemini AI with compassion and context, not cold clinical language.

---

## 🆘 Crisis Resources (India)

| Organisation | Number | Hours |
| --- | --- | --- |
| **iCall** | 9152987821 | Mon–Sat, 8am–10pm |
| **Vandrevala Foundation** | 1860-2662-345 | 24/7 |
| **NIMHANS** | 080-46110007 | 24/7 |
| **AASRA** | 9820466627 | 24/7 |

---

## 🤝 Contributing

Contributions are welcome. Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 👨‍💻 Built By

**Prathmesh & Team** — Built with purpose for the Google Cloud AI Hackathon

## 🤝 Contributors

**Prem** — Contributed to UI Designing

> _Mental health support should be accessible to everyone, everywhere, at any hour. MindBridge is our step toward making that real._

---

<div align="center">

**If this project helped you or someone you know, please give it a ⭐**

Made with ❤️ in India · Powered by Custom ML + Google Gemini · Built for the 150 million

</div>
