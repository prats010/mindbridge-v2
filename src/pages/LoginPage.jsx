// src/pages/LoginPage.jsx
import { useState } from "react";
import { signInWithGoogle } from "../firebase";

export default function LoginPage() {
  const [signingIn, setSigningIn] = useState(false);

  const handleLogin = async () => {
    if (signingIn) return;
    setSigningIn(true);
    try {
      await signInWithGoogle();
    } catch {
      alert("Login failed. Please try again.");
      setSigningIn(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#0A0C10]">
      {/* Card */}
      <div className="w-full max-w-sm text-left animate-fade-in">
        {/* Brain logo */}
        <div className="flex items-center gap-3 mb-8">
          <span className="text-3xl">🧠</span>
          <span className="text-2xl font-bold text-slate-100 tracking-tight">MindBridge</span>
        </div>

        <h1 className="text-2xl font-semibold mb-2 text-slate-100 tracking-tight">
          Welcome back
        </h1>

        <p className="text-slate-400 text-sm mb-8 leading-relaxed">
          Sign in to access your personal wellness companion, track your mood, and talk to MindBridge AI.
        </p>

        {/* Card container */}
        <div className="bg-[#0F111A] border border-slate-800/60 rounded-xl p-6 shadow-sm">
          <button
            onClick={handleLogin}
            disabled={signingIn}
            className="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-50 disabled:opacity-70 text-gray-900 font-medium py-2.5 px-4 rounded-lg transition-colors border border-gray-200"
          >
            {signingIn ? (
              <div className="w-5 h-5 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin" />
            ) : (
              <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 48 48">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
              </svg>
            )}
            {signingIn ? "Signing in…" : "Continue with Google"}
          </button>

          <div className="mt-6 pt-5 border-t border-slate-800/60">
            <p className="text-xs text-slate-500 leading-relaxed text-center">
              MindBridge is not a substitute for professional care.<br />
              Crisis? Call <a href="tel:9152987821" className="text-slate-300 hover:text-white underline transition-colors">iCall: 9152987821</a>
            </p>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-8 flex justify-center gap-6">
          {["Secure", "AI-Powered", "Free"].map((b) => (
            <span key={b} className="text-xs text-slate-500 font-medium">{b}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
