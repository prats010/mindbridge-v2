# ✨ Features

A complete guide to every feature in MindBridge V2.

---

## 🤖 AI Chat Support

The core of MindBridge. Powered by **Google Gemini 2.5 Flash**.

**How it works:**
- User types or speaks a message
- Message + full conversation history is sent to Gemini
- Gemini responds with a carefully prompted mental health response
- Response is displayed and optionally read aloud

**System prompt behaviour:**
- Always acknowledges feelings before giving advice
- Uses user's first name for warmth
- Keeps responses to 3–4 sentences
- Asks one follow-up question per response
- Never diagnoses — only reflects and supports
- Detects crisis keywords and triggers CrisisModal

**Data storage:**
- Each conversation is a **session** in Firestore
- Sessions are organized by date in the sidebar
- History is passed to Gemini for full context

---

## 📅 Chat History Sidebar

All past conversations organized by date — exactly like Claude or ChatGPT.

**Date groups:**
- Today
- Yesterday
- Last 7 days
- This month
- Older

**Behaviour:**
- Click any session to load it in the chat
- Click **New Chat +** to start a fresh session
- On mobile: sidebar is a slide-in drawer

---

## 🎤 Voice Mode

Speak to MindBridge and hear it respond.

**Voice Input:** Uses Chrome's built-in Web Speech API. Click the mic button, speak, it auto-sends.

**Voice Output:** Uses Web Speech Synthesis. Gemini's response is read aloud in a calm female voice.

**Toggle:** Speaker button lets you turn voice output on/off.

> ⚠️ Voice features require Google Chrome. Not supported in Firefox or Safari.

---

## 📋 PHQ-9 & GAD-7 Assessments

Clinically validated mental health screening tools.

| Tool | Screens For | Questions | Max Score |
|------|------------|-----------|-----------|
| PHQ-9 | Depression | 9 | 27 |
| GAD-7 | Anxiety | 7 | 21 |

**Score interpretation (PHQ-9):**

| Score | Severity |
|-------|---------|
| 0–4 | Minimal |
| 5–9 | Mild |
| 10–14 | Moderate |
| 15–19 | Moderately Severe |
| 20–27 | Severe |

**After completion:**
- Gemini AI provides a personalized interpretation
- "Why did I get this score?" button explains each answer
- Results saved to Firestore for history tracking

---

## 📊 Mood Tracker

Log how you feel every day on a 1–10 scale.

**Features:**
- Slider input (1 = low, 10 = high)
- Optional text note
- Line chart showing last 14 days
- Data stored in Firestore

---

## ✨ AI Insights

After 7+ mood logs, get a personalized AI analysis.

**Report sections:**
1. **Pattern** — what trends Gemini notices
2. **Insights** — what affects your mood positively/negatively
3. **Action Plan** — 5 specific evidence-based actions
4. **Progress** — positive changes, even small ones
5. **Focus This Week** — one single achievable goal

---

## 🛡️ Trusted Contact System

On first login, users must register a trusted contact before using the app.

**What it stores:**
- Contact name
- Phone number (+91 India format)
- Relationship (Friend/Parent/Sibling/Counsellor/Partner/Other)

**Purpose:** Ensures someone who cares is always reachable. Users can update their contact anytime via the shield icon in the navbar.

---

## 🆘 Crisis Detection

When certain keywords are detected in the chat, a fullscreen **CrisisModal** appears showing:
- Indian crisis helpline numbers
- iCall: 9152987821
- Vandrevala Foundation: 1860-2662-345
- NIMHANS: 080-46110007

The modal can be dismissed with "I understand — continue".
