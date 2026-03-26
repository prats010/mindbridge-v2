import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth, saveUserProfile, getTrustedContact, getPersonality } from "./firebase";

// Main App Layout & Pages
import Layout from "./components/Layout";
import CrisisModal from "./components/CrisisModal";
import TrustedContactModal from "./components/TrustedContactModal";
import PersonalityTestPage from "./pages/PersonalityTestPage";
import LoginPage from "./pages/LoginPage";
import ChatPage from "./pages/ChatPage";
import AssessmentPage from "./pages/AssessmentPage";
import DashboardPage from "./pages/DashboardPage";

// Docs Layout & Pages
import { DocsLayout } from "./components/docs/layout/DocsLayout";
import { InAppDocsLayout } from "./components/docs/layout/InAppDocsLayout";
import WhatIsMindBridge from "./pages/docs/WhatIsMindBridge";
import HowItWorks from "./pages/docs/HowItWorks";
import QuickStart from "./pages/docs/QuickStart";
import AIChatSupport from "./pages/docs/AIChatSupport";
import PHQ9Screening from "./pages/docs/PHQ9Screening";
import GAD7Screening from "./pages/docs/GAD7Screening";
import MoodTracker from "./pages/docs/MoodTracker";
import AIInsights from "./pages/docs/AIInsights";
import VoiceMode from "./pages/docs/VoiceMode";
import DepressionGuide from "./pages/docs/DepressionGuide";
import AnxietyGuide from "./pages/docs/AnxietyGuide";
import CopingStrategies from "./pages/docs/CopingStrategies";
import CrisisResources from "./pages/docs/CrisisResources";
import Mission from "./pages/docs/Mission";
import BuiltWithGemini from "./pages/docs/BuiltWithGemini";
import TechStack from "./pages/docs/TechStack";

// Marketing
import MarketingPage from "./pages/MarketingPage";

/** Rejects after ms milliseconds — prevents Firestore from hanging */
const withTimeout = (promise, ms = 5000) =>
  Promise.race([
    promise,
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("timeout")), ms)
    ),
  ]);

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [crisis, setCrisis] = useState(false);
  const [trustedContactSaved, setTrustedContactSaved] = useState(false);
  const [trustedContactData, setTrustedContactData] = useState(null);
  const [checkingContact, setCheckingContact] = useState(false);
  const [personalityDone, setPersonalityDone] = useState(false);
  const [personality, setPersonality] = useState(null);

  useEffect(() => {
    console.log("[App.jsx] Initializing onAuthStateChanged listener...");
    const unsub = onAuthStateChanged(auth, async (u) => {
      console.log("[App.jsx] Auth state changed. User:", u?.uid || u);
      if (u) {
        // Save profile
        try {
          console.log("[App.jsx] Saving user profile...");
          await withTimeout(
            saveUserProfile(u.uid, {
              displayName: u.displayName,
              email: u.email,
              photoURL: u.photoURL,
            })
          );
          console.log("[App.jsx] User profile saved.");
        } catch (err) {
          console.error("Profile save failed (non-blocking):", err);
        }

        // Check trusted contact
        setCheckingContact(true);
        try {
          console.log("[App.jsx] Fetching trusted contact...");
          const tc = await withTimeout(getTrustedContact(u.uid));
          console.log("[App.jsx] Trusted contact fetched:", tc);
          if (tc) {
            setTrustedContactSaved(true);
            setTrustedContactData(tc);
          } else {
            setTrustedContactSaved(false);
          }
        } catch (err) {
          console.error("[App.jsx] Error fetching trusted contact (non-blocking):", err);
          setTrustedContactSaved(false);
        } finally {
          setCheckingContact(false);
        }

        // Check personality
        try {
          console.log("[App.jsx] Fetching personality...");
          const p = await withTimeout(getPersonality(u.uid));
          console.log("[App.jsx] Personality fetched:", p);
          if (p) {
            setPersonality(p);
            setPersonalityDone(true);
          } else {
            setPersonalityDone(false);
          }
        } catch (err) {
          console.error("[App.jsx] Error fetching personality (non-blocking):", err);
          setPersonalityDone(true); // skip on error so app doesn't get stuck
        }
      }
      console.log("[App.jsx] Setting user and setLoading(false)...");
      setUser(u);
      setLoading(false);
    });
    return unsub;
  }, []);

  const isLoading = loading || (user && checkingContact);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0A0C10]">
        <div className="flex flex-col items-center gap-4">
          <div className="spinner-orbital" />
          <p className="text-slate-400 font-medium text-sm tracking-wide">
            Loading MindBridge…
          </p>
        </div>
      </div>
    );
  }

  const AppDocsRoutes = (
    <Routes>
      <Route path="what-is-mindbridge" element={<WhatIsMindBridge />} />
      <Route path="how-it-works" element={<HowItWorks />} />
      <Route path="quick-start" element={<QuickStart />} />
      <Route path="ai-chat" element={<AIChatSupport />} />
      <Route path="phq9" element={<PHQ9Screening />} />
      <Route path="gad7" element={<GAD7Screening />} />
      <Route path="mood-tracker" element={<MoodTracker />} />
      <Route path="insights" element={<AIInsights />} />
      <Route path="voice-mode" element={<VoiceMode />} />
      <Route path="depression" element={<DepressionGuide />} />
      <Route path="anxiety" element={<AnxietyGuide />} />
      <Route path="coping-strategies" element={<CopingStrategies />} />
      <Route path="crisis-resources" element={<CrisisResources />} />
      <Route path="mission" element={<Mission />} />
      <Route path="built-with-gemini" element={<BuiltWithGemini />} />
      <Route path="tech-stack" element={<TechStack />} />
      <Route path="*" element={<Navigate to="what-is-mindbridge" />} />
    </Routes>
  );

  return (
    <BrowserRouter>
      {/* Crisis modal — highest z-index */}
      {crisis && (
        <CrisisModal
          onClose={() => setCrisis(false)}
          contact={trustedContactData}
          userName={user?.displayName?.split(" ")[0]}
        />
      )}

      {/* Step 1 — Personality test (right after login) */}
      {user && !personalityDone && (
        <div style={{ position: "fixed", inset: 0, zIndex: 50 }}>
          <PersonalityTestPage
            userId={user.uid}
            onDone={(data) => {
              setPersonality(data);
              setPersonalityDone(true);
            }}
          />
        </div>
      )}

      {/* Step 2 — Trusted contact onboarding (only after personality test is done) */}
      {user && personalityDone && !trustedContactSaved && (
        <TrustedContactModal
          userId={user.uid}
          editMode={false}
          onSaved={(data) => {
            setTrustedContactSaved(true);
            setTrustedContactData(data);
          }}
        />
      )}

      <Routes>
        <Route
          path="/login"
          element={!user ? <LoginPage /> : <Navigate to="/chat" />}
        />

        {/* Auth required App Routes — pass personality down to ChatPage */}
        <Route
          path="/chat"
          element={
            user ? (
              <Layout user={user}>
                <ChatPage
                  user={user}
                  onCrisis={() => setCrisis(true)}
                  personality={personality}
                />
              </Layout>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/assessment"
          element={
            user ? (
              <Layout user={user}>
                <AssessmentPage user={user} />
              </Layout>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/dashboard"
          element={
            user ? (
              <Layout user={user}>
                <DashboardPage user={user} />
              </Layout>
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* Auth required In-App Docs Routes */}
        <Route
          path="/info/*"
          element={
            user ? (
              <Layout user={user}>
                <InAppDocsLayout>{AppDocsRoutes}</InAppDocsLayout>
              </Layout>
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* Public Documentation Routes */}
        <Route path="/docs/*" element={<DocsLayout>{AppDocsRoutes}</DocsLayout>} />

        {/* Public Marketing Landing Page */}
        <Route path="/" element={<MarketingPage />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}