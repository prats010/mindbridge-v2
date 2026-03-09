// src/gemini.js
// ─────────────────────────────────────────────────────────────────
// Calls Gemini API directly from the browser. No backend needed.
// API key comes from .env (VITE_GEMINI_API_KEY)
// ─────────────────────────────────────────────────────────────────
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

// ── System Prompt ─────────────────────────────────────────────────
const SYSTEM_PROMPT = `You are MindBridge, a compassionate AI mental health support companion.
Your role is to provide emotional support, psychoeducation, and coping strategies.

PERSONALITY:
- Warm, empathetic, and validating
- Always acknowledge feelings BEFORE offering advice
- Use the user's name when you know it
- Keep responses to 3-4 sentences for casual conversation
- Ask ONE thoughtful follow-up question per response

CONVERSATION FLOW:
1. Start with a warm check-in and ask how they are feeling today
2. Listen actively and reflect back what you hear
3. If distress is detected, gently ask PHQ-9 style questions
4. Provide personalized coping strategies

SAFETY RULES:
- If the user mentions suicide, self-harm, or wanting to die:
  Respond with compassion AND add [CRISIS] at the very end of your message
- NEVER diagnose. Use "it sounds like..." not "you have..."
- ALWAYS recommend professional help for moderate or severe symptoms
- You are NOT a replacement for a real therapist

NEVER:
- Say "I'm just an AI" dismissively
- Give medication advice
- Minimize feelings with toxic positivity`;

/**
 * Send a message to Gemini with conversation history
 * @param {Array} history - [{role:'user'|'model', parts:[{text:string}]}]
 * @param {string} message - new user message
 * @returns {Promise<string>} AI response text
 */
export async function sendToGemini(history, message) {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
    systemInstruction: SYSTEM_PROMPT,
    generationConfig: {
      maxOutputTokens: 400,
      temperature: 0.7,
    },
  });

  const chat = model.startChat({ history });
  const result = await chat.sendMessage(message);
  return result.response.text();
}

/**
 * Generate interpretation for PHQ-9 or GAD-7 score
 * @param {string} type - 'phq9' | 'gad7'
 * @param {number} score - total score
 * @param {string} severity - severity label
 * @param {string} userName - user's first name
 * @returns {Promise<{interpretation: string, tips: string[]}>}
 */
export async function interpretAssessment(type, score, severity, userName) {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
    generationConfig: { maxOutputTokens: 500, temperature: 0.6 },
  });

  const testName = type === "phq9" ? "PHQ-9 depression" : "GAD-7 anxiety";
  const maxScore = type === "phq9" ? 27 : 21;

  const prompt = `${userName} completed the ${testName} screening. Score: ${score}/${maxScore} (${severity}).
  
Write a SHORT empathetic interpretation (2-3 sentences) speaking directly to ${userName}.
Then list exactly 4 practical coping strategies for their score level.

Reply ONLY in this JSON format, no markdown:
{"interpretation":"...","tips":["tip1","tip2","tip3","tip4"]}`;

  const result = await model.generateContent(prompt);
  const text = result.response.text().trim();

  try {
    return JSON.parse(text);
  } catch {
    // Fallback if JSON parsing fails
    return {
      interpretation: `Thank you for sharing, ${userName}. Your score of ${score} indicates ${severity}. Consider speaking with a mental health professional for personalized support.`,
      tips: [
        "Practice deep breathing for 5 minutes daily",
        "Maintain a consistent sleep schedule",
        "Reach out to one trusted person this week",
        "Consider speaking with a counsellor or therapist",
      ],
    };
  }
}

/**
 * Detect crisis keywords in a message
 * @param {string} message
 * @returns {boolean}
 */
export function detectCrisis(message) {
  const patterns = [
    /suicide|suicidal/i,
    /kill\s*myself/i,
    /end\s*my\s*life/i,
    /want\s*to\s*die/i,
    /don'?t\s*want\s*to\s*(be\s*here|live)/i,
    /better\s*off\s*(dead|without\s*me)/i,
    /self.?harm|cutting\s*myself/i,
    /no\s*reason\s*to\s*live/i,
  ];
  return patterns.some((p) => p.test(message));
}

// ── Feature 3: Mood Pattern AI Insights ──────────────────────────

/**
 * Generate AI insights from mood logs and assessment history
 * @param {Array} moodLogs - last 14 mood logs
 * @param {Array} phq9 - last 3 PHQ-9 results
 * @param {Array} gad7 - last 3 GAD-7 results
 * @returns {Promise<string>} raw structured insight text
 */
export async function getAIInsights(moodLogs, phq9, gad7) {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
    generationConfig: { maxOutputTokens: 2500, temperature: 0.75 },
  });

  const moodSummary = moodLogs.length
    ? moodLogs
      .map((l) => `${l.date}: mood ${l.score}/10${l.note ? ` (note: "${l.note}")` : ""}`)
      .join("\n")
    : "No mood logs recorded yet.";

  const phq9Summary = phq9.length
    ? phq9
      .map((a) => `${a.date}: PHQ-9 score ${a.totalScore}/27 (${a.severity})`)
      .join("\n")
    : "No PHQ-9 assessments taken.";

  const gad7Summary = gad7.length
    ? gad7
      .map((a) => `${a.date}: GAD-7 score ${a.totalScore}/21 (${a.severity})`)
      .join("\n")
    : "No GAD-7 assessments taken.";

  const prompt = `You are a compassionate mental health data analyst.
Analyze this user's data and provide exactly this structure:

MOOD LOGS (last 14 days):
${moodSummary}

PHQ-9 DEPRESSION SCORES:
${phq9Summary}

GAD-7 ANXIETY SCORES:
${gad7Summary}

Provide the response using EXACTLY these 5 section headers, each on its own line followed by content:

PATTERN: What patterns do you notice in their mood?

INSIGHTS: What specifically affects their mood positively and negatively based on their data?

ACTION PLAN: Give 5 specific, practical, evidence-based actions this person can take RIGHT NOW to improve their mental state. Be specific, not generic. Reference their actual scores and patterns.

PROGRESS: What positive progress can you identify, even small wins?

FOCUS THIS WEEK: One single achievable thing to focus on.

Be warm, specific, and hopeful. Use their actual numbers.`;

  const result = await model.generateContent(prompt);
  return result.response.text();
}

