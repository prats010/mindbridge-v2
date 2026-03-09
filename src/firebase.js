// src/firebase.js
// ─────────────────────────────────────────────────────────────────
// Paste your Firebase config values into the .env file.
// Get them from: Firebase Console → Project Settings → Your Apps
// ─────────────────────────────────────────────────────────────────
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  limit,
  serverTimestamp,
  doc,
  setDoc,
  getDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

// ── Auth ──────────────────────────────────────────────────────────
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
import { signInWithRedirect, getRedirectResult } from "firebase/auth";
export const signInWithGoogle = () => signInWithRedirect(auth, provider);
export const logOut = () => signOut(auth);

// ── Firestore ─────────────────────────────────────────────────────
export const db = getFirestore(app);

/** Create a new chat session */
export async function createSession(userId) {
  const sessionRef = await addDoc(collection(db, "conversations", userId, "sessions"), {
    createdAt: serverTimestamp(),
    firstMessage: "New Chat",
    messageCount: 0
  });
  return sessionRef.id;
}

/** Get all chat sessions for a user */
export async function getSessions(userId) {
  const q = query(
    collection(db, "conversations", userId, "sessions"),
    orderBy("createdAt", "desc")
  );
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

/** Get messages for a specific session */
export async function getSessionMessages(userId, sessionId, max = 50) {
  const q = query(
    collection(db, "conversations", userId, "sessions", sessionId, "messages"),
    orderBy("timestamp", "desc"),
    limit(max)
  );
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() })).reverse();
}

/** Update session preview */
export async function updateSessionPreview(userId, sessionId, firstMessage, count) {
  const ref = doc(db, "conversations", userId, "sessions", sessionId);
  await setDoc(ref, {
    firstMessage,
    messageCount: count
  }, { merge: true });
}

/** Save a message to a session */
export async function saveMessage(userId, sessionId, role, content, sentimentScore = 0) {
  await addDoc(collection(db, "conversations", userId, "sessions", sessionId, "messages"), {
    role,
    content,
    sentimentScore,
    timestamp: serverTimestamp(),
  });
}

/** Save PHQ-9 or GAD-7 result */
export async function saveAssessment(userId, type, answers, totalScore, severity) {
  await addDoc(collection(db, "assessments", userId, type), {
    answers,
    totalScore,
    severity,
    timestamp: serverTimestamp(),
  });
}

/** Load assessment history */
export async function loadAssessments(userId, type, max = 5) {
  const q = query(
    collection(db, "assessments", userId, type),
    orderBy("timestamp", "desc"),
    limit(max)
  );
  const snap = await getDocs(q);
  return snap.docs.map((d) => {
    const data = d.data();
    return {
      id: d.id,
      ...data,
      date: data.timestamp?.toDate().toLocaleDateString("en-IN") ?? "—",
    };
  });
}

/** Save daily mood log */
export async function saveMoodLog(userId, score, note = "") {
  await addDoc(collection(db, "moodLogs", userId, "logs"), {
    score,
    note,
    timestamp: serverTimestamp(),
  });
}

/** Load mood logs (oldest first for chart) */
export async function loadMoodLogs(userId, max = 14) {
  const q = query(
    collection(db, "moodLogs", userId, "logs"),
    orderBy("timestamp", "desc"),
    limit(max)
  );
  const snap = await getDocs(q);
  return snap.docs
    .map((d) => {
      const data = d.data();
      return {
        id: d.id,
        score: data.score,
        note: data.note,
        date: data.timestamp?.toDate().toLocaleDateString("en-IN") ?? "—",
      };
    })
    .reverse();
}

/** Save user profile */
export async function saveUserProfile(userId, data) {
  await setDoc(doc(db, "users", userId), data, { merge: true });
}

// ── Trusted Contact ───────────────────────────────────────────────
// Stored as a nested field on users/{uid} so existing Firestore rules apply.

/** Get trusted contact for user (returns null if not set) */
export async function getTrustedContact(userId) {
  const ref = doc(db, "users", userId);
  const snap = await getDoc(ref);
  if (!snap.exists()) return null;
  const data = snap.data();
  return data.trustedContact ?? null;
}

/** Save trusted contact for user */
export async function saveTrustedContact(userId, { name, phone, relationship }) {
  const ref = doc(db, "users", userId);
  await setDoc(ref, {
    trustedContact: {
      name,
      phone,
      relationship,
      addedAt: serverTimestamp(),
    },
  }, { merge: true });
}

// ── AI Insights ───────────────────────────────────────────────────

/** Save AI insights text to Firestore */
export async function saveInsights(userId, insightText) {
  await addDoc(collection(db, "insights", userId, "entries"), {
    text: insightText,
    timestamp: serverTimestamp(),
  });
}

/** Load most recent AI insights */
export async function loadInsights(userId, max = 3) {
  const q = query(
    collection(db, "insights", userId, "entries"),
    orderBy("timestamp", "desc"),
    limit(max)
  );
  const snap = await getDocs(q);
  return snap.docs.map((d) => {
    const data = d.data();
    return {
      id: d.id,
      text: data.text,
      date: data.timestamp?.toDate().toLocaleDateString("en-IN") ?? "—",
    };
  });
}
