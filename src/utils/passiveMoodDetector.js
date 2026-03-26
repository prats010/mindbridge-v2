// src/utils/passiveMoodDetector.js
// Option 1: Typing speed & pattern analysis
// Option 2: Response time analysis  
// Option 3: Language pattern analysis (first person, sentence length, questions)

const DEPRESSION_WORDS = [
  "alone", "tired", "empty", "hopeless", "worthless", "nobody", "nothing",
  "pointless", "hate", "never", "always", "fail", "ugly", "stupid", "burden",
  "useless", "broken", "lost", "numb", "dark", "sad", "cry", "crying",
  "depressed", "anxious", "scared", "afraid", "overwhelmed", "exhausted"
];

const POSITIVE_WORDS = [
  "happy", "good", "great", "better", "okay", "fine", "excited", "grateful",
  "hopeful", "loved", "calm", "peaceful", "motivated", "proud", "thankful",
  "improving", "progress", "wonderful", "amazing", "joy", "relieved",
  "confident", "strong", "blessed", "cheerful", "content", "optimistic"
];

/**
 * OPTION 1 — Typing Speed Analysis
 * Fast + many chars = anxious, slow = low energy
 */
function analyzeTypingSpeed(text, typingDuration) {
  if (!typingDuration || typingDuration <= 0) return 0;
  const charsPerSecond = text.length / (typingDuration / 1000);
  
  // Very slow typing (< 2 chars/sec) = low energy = negative signal
  if (charsPerSecond < 2) return -1.5;
  // Normal typing (2-8 chars/sec) = neutral
  if (charsPerSecond <= 8) return 0;
  // Fast typing (8-15 chars/sec) = engaged = slight positive
  if (charsPerSecond <= 15) return 0.5;
  // Very fast typing (> 15 chars/sec) = anxious/agitated = slight negative
  return -0.5;
}

/**
 * OPTION 2 — Response Time Analysis
 * Long delay before replying = avoidance or low mood
 */
function analyzeResponseTime(responseDelay) {
  if (!responseDelay || responseDelay <= 0) return 0;
  const seconds = responseDelay / 1000;
  
  // Replied quickly (< 10s) = engaged = positive
  if (seconds < 10) return 0.5;
  // Normal delay (10-60s) = neutral
  if (seconds <= 60) return 0;
  // Long delay (1-5 min) = possibly avoidant = slight negative
  if (seconds <= 300) return -1;
  // Very long delay (> 5 min) = avoidance/low mood = negative
  return -2;
}

/**
 * OPTION 3 — Language Pattern Analysis
 * First person overuse, short sentences, question marks
 */
function analyzeLanguagePatterns(text) {
  const words = text.toLowerCase().replace(/[^a-z\s?!.]/g, "").split(/\s+/).filter(Boolean);
  const wordCount = words.length;
  if (wordCount === 0) return 0;

  let score = 0;

  // First person singular overuse (clinically linked to depression)
  const firstPerson = words.filter(w => w === "i" || w === "me" || w === "myself").length;
  const firstPersonRatio = firstPerson / wordCount;
  if (firstPersonRatio > 0.3) score -= 2;
  else if (firstPersonRatio > 0.2) score -= 1;

  // Negative word density
  const negCount = words.filter(w => DEPRESSION_WORDS.includes(w)).length;
  score -= (negCount / wordCount) * 10;

  // Positive word density
  const posCount = words.filter(w => POSITIVE_WORDS.includes(w)).length;
  score += (posCount / wordCount) * 15;

  // Very short message (1-2 words) = disengaged
  if (wordCount <= 2) score -= 1;
  // Medium message (5-20 words) = normal engagement
  else if (wordCount >= 5 && wordCount <= 20) score += 0.5;
  // Very long message (30+ words) = venting/anxious
  else if (wordCount >= 30) score -= 0.5;

  // Questions = seeking help = slightly negative
  const questionCount = (text.match(/\?/g) || []).length;
  if (questionCount >= 2) score -= 0.5;

  // Exclamation marks = energy/positivity
  const exclamCount = (text.match(/!/g) || []).length;
  if (exclamCount >= 1) score += 0.5;

  return score;
}

/**
 * Main analysis function — combines all 3 options
 */
export function analyzeMessage(text, typingDuration = 0, responseDelay = 0) {
  if (!text || text.trim().length === 0) return { score: 5, breakdown: {} };

  const typingScore = analyzeTypingSpeed(text, typingDuration);
  const responseScore = analyzeResponseTime(responseDelay);
  const languageScore = analyzeLanguagePatterns(text);

  const breakdown = {
    typing: typingScore,
    response: responseScore,
    language: languageScore,
  };

  // Start at neutral 5, apply all signals
  // Language patterns carry most weight (60%), typing (20%), response time (20%)
  let rawScore = 5 + (languageScore * 0.6) + (typingScore * 0.2) + (responseScore * 0.2);

  // Clamp to 1-10
  const score = Math.max(1, Math.min(10, Math.round(rawScore * 10) / 10));

  return { score, breakdown };
}

/**
 * Aggregate multiple analyses into one session mood score
 * Recent messages weighted more heavily
 */
export function aggregateSessionMood(analyses) {
  if (analyses.length === 0) return 5;

  let totalWeight = 0;
  let weightedSum = 0;

  analyses.forEach((a, i) => {
    const weight = i + 1; // more recent = higher index = higher weight
    weightedSum += a.score * weight;
    totalWeight += weight;
  });

  const avg = weightedSum / totalWeight;
  return Math.max(1, Math.min(10, Math.round(avg * 10) / 10));
}