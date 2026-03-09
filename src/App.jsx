import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth, saveUserProfile, getTrustedContact } from "./firebase";
import { getRedirectResult } from "firebase/auth";
// Main App Layout & Pages
import Layout from "./components/Layout";
import CrisisModal from "./components/CrisisModal";
import TrustedContactModal from "./components/TrustedContactModal";
import LoginPage from "./pages/LoginPage";
import ChatPage from "./pages/ChatPage";
import AssessmentPage from "./pages/AssessmentPage";
import DashboardPage from "./pages/DashboardPage";

// Docs Layout & Pages
import { DocsLayout } from "./components/docs/layout/DocsLayout";
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

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [crisis, setCrisis] = useState(false);
  const [trustedContactSaved, setTrustedContactSaved] = useState(false);
  const [trustedContactData, setTrustedContactData] = useState(null);
  const [checkingContact, setCheckingContact] = useState(false);

  useEffect(() => {
  getRedirectResult(auth).catch(console.error);
  
  const unsub = onAuthStateChanged(auth, async (u) => {
    if (u) {
      try {
        await saveUserProfile(u.uid, {
          displayName: u.displayName,
          email: u.email,
          photoURL: u.photoURL,
        });
      } catch (err) {
        console.error("Profile save failed:", err);
      }

      setCheckingContact(true);
      try {
        const tc = await getTrustedContact(u.uid);
        if (tc) {
          setTrustedContactSaved(true);
          setTrustedContactData(tc);
        } else {
          setTrustedContactSaved(false);
        }
      } catch {
        setTrustedContactSaved(false);
      } finally {
        setCheckingContact(false);
      }
    }
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
          <p className="text-slate-400 font-medium text-sm tracking-wide">Loading MindBridge…</p>
        </div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      {/* Crisis modal — highest z-index */}
      {crisis && <CrisisModal onClose={() => setCrisis(false)} contact={trustedContactData} userName={user?.displayName?.split(" ")[0]} />}

      {/* Mandatory trusted contact onboarding — shown before anything else */}
      {user && !trustedContactSaved && (
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
        <Route path="/login" element={!user ? <LoginPage /> : <Navigate to="/chat" />} />

        {/* Auth required App Routes */}
        <Route path="/chat" element={user ? <Layout user={user}><ChatPage user={user} onCrisis={() => setCrisis(true)} /></Layout> : <Navigate to="/login" />} />
        <Route path="/assessment" element={user ? <Layout user={user}><AssessmentPage user={user} /></Layout> : <Navigate to="/login" />} />
        <Route path="/dashboard" element={user ? <Layout user={user}><DashboardPage user={user} /></Layout> : <Navigate to="/login" />} />

        {/* Public Documentation Routes */}
        <Route path="/docs/*" element={
          <DocsLayout>
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
          </DocsLayout>
        } />

        {/* Public Marketing Landing Page */}
        <Route path="/" element={<MarketingPage />} />

        {/* Base redirects fallback */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
