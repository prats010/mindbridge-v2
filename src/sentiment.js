// src/sentiment.js
// Pure JavaScript sentiment analysis. Zero dependencies, works in browser.

const POSITIVE = {
  happy: 3, great: 3, good: 2, wonderful: 3, excited: 3, grateful: 3,
  hopeful: 3, better: 2, improving: 2, loved: 3, peaceful: 3, calm: 2,
  joy: 3, blessed: 3, thankful: 3, motivated: 2, proud: 2, confident: 2,
  cheerful: 3, content: 2, optimistic: 3, relieved: 2, supported: 2,
};

const NEGATIVE = {
  sad: -2, depressed: -4, hopeless: -5, worthless: -5, anxious: -3,
  lonely: -3, empty: -4, broken: -4, trapped: -4, numb: -3, tired: -2,
  exhausted: -3, overwhelmed: -3, stressed: -2, afraid: -3, scared: -3,
  miserable: -4, terrible: -3, awful: -3, horrible: -3, crying: -3,
  helpless: -4, pointless: -4, meaningless: -4, useless: -3, hate: -3,
  angry: -2, furious: -3, panicking: -4, nightmare: -3, burnout: -3,
};

/**
 * Analyze sentiment of text
 * Returns same shape as the old Google NLP wrapper — no other code needs changing
 * @param {string} text
 * @returns {{ score: number, magnitude: number }}
 *   score: -1.0 (very negative) to +1.0 (very positive)
 *   magnitude: 0+ (emotional intensity)
 */
export function analyzeSentiment(text) {
  const words = text.toLowerCase().replace(/[^a-z\s]/g, "").split(/\s+/);
  let total = 0;
  let hits = 0;

  for (const word of words) {
    if (POSITIVE[word] !== undefined) { total += POSITIVE[word]; hits++; }
    if (NEGATIVE[word] !== undefined) { total += NEGATIVE[word]; hits++; }
  }

  if (words.length === 0) return { score: 0, magnitude: 0 };

  // Normalize to -1 to +1
  const score = Math.max(-1, Math.min(1, total / (words.length * 2)));
  // Magnitude = emotional word density
  const magnitude = Math.min(hits / 2, 3.0);

  return {
    score: Number(score.toFixed(3)),
    magnitude: Number(magnitude.toFixed(3)),
  };
}

/**
 * Compute distress score 0–10
 */
export function computeDistressScore(score, magnitude) {
  const distress = Math.max(0, (-score + 1) / 2);
  const intensity = Math.min(magnitude / 3, 1);
  return Number(((distress * 0.7 + intensity * 0.3) * 10).toFixed(1));
}
