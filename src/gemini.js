// src/gemini.js
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

// ── Your Own Trained Model ────────────────────────────────────────
const OWN_MODEL_BASE = "https://prats010-mindbridge-chat.hf.space/gradio_api";

/**
 * Send a message to YOUR trained MindBridge model on Hugging Face.
 * Uses the Gradio 4+ REST API (two-step: POST /call → GET /call/<id>)
 * to avoid CORS credentials issues with the @gradio/client library.
 * @param {string} message - user message
 * @returns {Promise<string>} AI response text
 */
export async function sendToOwnModel(message) {
  try {
    // Step 1: Initiate the call → get an event_id
    const callRes = await fetch(`${OWN_MODEL_BASE}/call/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "omit",
      body: JSON.stringify({ data: [message] }),
    });

    if (!callRes.ok) {
      throw new Error(`HF Space /call responded with ${callRes.status}`);
    }

    const { event_id } = await callRes.json();

    // Step 2: Retrieve the result (SSE stream)
    const resultRes = await fetch(
      `${OWN_MODEL_BASE}/call/chat/${event_id}`,
      { credentials: "omit" }
    );

    if (!resultRes.ok) {
      throw new Error(`HF Space result responded with ${resultRes.status}`);
    }

    // Parse SSE text — look for the last "data:" line (the "complete" event)
    const sseText = await resultRes.text();
    const dataLines = sseText.split("\n").filter((l) => l.startsWith("data:"));
    if (dataLines.length === 0) {
      throw new Error("No data received from HF Space SSE stream");
    }

    const lastData = JSON.parse(dataLines[dataLines.length - 1].slice(5).trim());

    // Handle different response formats
    let response = lastData;
    if (Array.isArray(response)) {
      response = response[0];
    }
    if (typeof response === "object" && response !== null) {
      response = response.text || response.message || JSON.stringify(response);
    }
    return String(response);
  } catch (err) {
    console.error("Own model failed, falling back to Gemini:", err);
    return null;
  }
}

// ── Base System Prompt ────────────────────────────────────────────
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

/** Build personality note to inject into system prompt */
function buildPersonalityNote(personality) {
  if (!personality) return "";
  return `

USER PERSONALITY PROFILE (adjust all responses based on this):
- Self-described personality: ${personality.personality}
- What they need when struggling: ${personality.support}
- Emotional comfort level: ${personality.comfort}
- How they cope with stress: ${personality.coping}
- Current situation: ${personality.situation}
- Preferred support tone: ${personality.tone}

Always adapt your communication style to match this profile. 
If they prefer "just someone to listen", avoid jumping to advice.
If they are introverted or emotionally uncomfortable, be extra gentle and don't push.
If they prefer motivational tone, be more energetic and encouraging.
If they are feeling anxious or low, acknowledge that first before anything else.`;
}

/**
 * Send a message to Gemini with conversation history (fallback only)
 * @param {Array} history - [{role:'user'|'model', parts:[{text:string}]}]
 * @param {string} message - new user message
 * @param {Object|null} personality - personality profile from Firestore
 * @returns {Promise<string>} AI response text
 */
export async function sendToGemini(history, message, personality = null) {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
    systemInstruction: SYSTEM_PROMPT + buildPersonalityNote(personality),
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
 */
export async function interpretAssessment(type, score, severity, userName, language = 'en') {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
    generationConfig: { maxOutputTokens: 500, temperature: 0.6 },
  });

  const testName = type === "phq9" ? "PHQ-9 depression" : "GAD-7 anxiety";
  const maxScore = type === "phq9" ? 27 : 21;

  const languageInstructions = {
    'en': 'Respond in English.',
    'hi': 'Respond in Hindi (भारतीय हिंदी).',
    'mr': 'Respond in Marathi (मराठी).',
  };
  const langInstruction = languageInstructions[language] || languageInstructions['en'];

  const prompt = `${langInstruction}
${userName} completed the ${testName} screening. Score: ${score}/${maxScore} (${severity}).
  
Write a SHORT empathetic interpretation (2-3 sentences) speaking directly to ${userName}.
Then list exactly 4 practical coping strategies for their score level.

Reply ONLY in this JSON format, no markdown:
{"interpretation":"...","tips":["tip1","tip2","tip3","tip4"]}`;

  const result = await model.generateContent(prompt);
  const text = result.response.text().trim();

  try {
    return JSON.parse(text);
  } catch {
    return {
      interpretation: null,
      tips: null,
    };
  }
}

/**
 * Detect crisis keywords in a message
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

/**
 * Generate AI insights from mood logs and assessment history
 */
export async function getAIInsights(moodLogs, phq9, gad7, language = 'en') {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
    generationConfig: { maxOutputTokens: 2500, temperature: 0.75 },
  });

  const moodSummary = moodLogs.length
    ? moodLogs
      .map(
        (l) =>
          `${l.date}: mood ${l.score}/10${l.note ? ` (note: "${l.note}")` : ""}`
      )
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

  const languageInstructions = {
    'en': 'Respond in English.',
    'hi': 'Respond in Hindi (भारतीय हिंदी).',
    'mr': 'Respond in Marathi (मराठी).',
  };
  const langInstruction = languageInstructions[language] || languageInstructions['en'];

  const prompt = `You are a compassionate mental health data analyst.
${langInstruction}
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