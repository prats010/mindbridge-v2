# 🆘 Crisis Resources India

If you or someone you know is in crisis, please reach out immediately.

---

> **You are not alone. Help is available 24/7.**

---

## Helplines

| Organization | Number | Hours | Languages |
|-------------|--------|-------|-----------|
| **iCall** | 9152987821 | Mon–Sat, 8am–10pm | English, Hindi |
| **Vandrevala Foundation** | 1860-2662-345 | 24/7 | English, Hindi |
| **NIMHANS** | 080-46110007 | 24/7 | English, Kannada |
| **AASRA** | 9820466627 | 24/7 | English, Hindi |
| **Snehi** | 044-24640050 | 8am–10pm | English, Tamil |
| **iCall WhatsApp** | 9152987821 | Mon–Sat | English, Hindi |

---

## What to Do in a Crisis

1. **Call one of the numbers above** — they are trained to help
2. **If immediate danger** — call 112 (emergency services)
3. **Tell someone you trust** — don't face it alone
4. **Go to the nearest hospital** if you feel unsafe

---

## How MindBridge Handles Crisis

When MindBridge detects certain keywords in the chat (e.g. "want to die", "hurt myself"), it automatically:

1. Shows the **CrisisModal** with helpline numbers
2. Prompts the user to reach out immediately

MindBridge is **not** a crisis service. In an emergency, always call the helplines above or go to a hospital.

---

## For Developers

The crisis detection is in `src/gemini.js`:

```js
export function detectCrisis(message) {
  const patterns = [
    /suicide|suicidal/i,
    /kill\s*myself/i,
    /end\s*my\s*life/i,
    /want\s*to\s*die/i,
    // ... more patterns
  ];
  return patterns.some((p) => p.test(message));
}
```

The `CrisisModal` component is in `src/components/CrisisModal.jsx` and is triggered from `App.jsx` via the `onCrisis` prop passed to `ChatPage`.

---

*These resources are hardcoded in the app and never AI-generated. Crisis information must always be accurate and reliable.*
