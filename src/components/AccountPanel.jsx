// src/components/AccountPanel.jsx
import { useState, useEffect } from "react";
import { X, LogOut, Crown } from "lucide-react";
import { doc, getDoc } from "firebase/firestore";
import { db, logOut } from "../firebase";
import { useLanguage } from "../context/LanguageContext";

export default function AccountPanel({ user, isOpen, onClose }) {
  const [daysLeft, setDaysLeft] = useState(null);
  const [trialEnded, setTrialEnded] = useState(false);
  const [loading, setLoading] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    if (!user || !isOpen) return;

    const fetchAccountInfo = async () => {
      try {
        const userDocRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists() && userDoc.data().createdAt) {
          const createdAt = userDoc.data().createdAt.toDate();
          const now = new Date();
          
          // Calculate days passed since account creation
          const msPassed = now - createdAt;
          const daysPassed = Math.floor(msPassed / (1000 * 60 * 60 * 24));
          
          if (daysPassed >= 30) {
            setTrialEnded(true);
            setDaysLeft(0);
          } else {
            setTrialEnded(false);
            setDaysLeft(30 - daysPassed);
          }
        }
      } catch (err) {
        console.error("Error fetching account info:", err);
        setDaysLeft(null);
      } finally {
        setLoading(false);
      }
    };

    fetchAccountInfo();
  }, [user, isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40"
        onClick={onClose}
      />

      {/* Panel - positioned above profile block in sidebar */}
      <div className="fixed z-50 w-72 bg-[#111318] border border-slate-700 rounded-2xl shadow-2xl bottom-20 left-4 md:bottom-auto md:top-1/2 md:left-[270px] md:transform md:-translate-y-1/2"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with close button */}
        <div className="flex items-center justify-between p-5 border-b border-slate-700">
          <h2 className="text-sm font-semibold text-white">{t("account.title")}</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-slate-700/50 rounded-lg transition-colors text-slate-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 space-y-4">
          {/* Profile Info */}
          <div className="flex items-center gap-3">
            {user.photoURL ? (
              <img
                src={user.photoURL}
                alt=""
                className="w-12 h-12 rounded-full object-cover"
              />
            ) : (
              <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 font-semibold">
                {user.displayName?.charAt(0) || user.email?.charAt(0) || "?"}
              </div>
            )}
            <div className="flex-1">
              <p className="text-sm font-semibold text-white">
                {user.displayName || "User"}
              </p>
              <p className="text-xs text-slate-400">
                {user.email || ""}
              </p>
            </div>
          </div>

          {/* Plan Section */}
          <div className="bg-slate-800/40 rounded-xl p-4 space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-teal-400 uppercase tracking-wider">{t("account.freeTrial")}</span>
            </div>
            
            {loading ? (
              <p className="text-xs text-slate-400">{t("account.loading")}</p>
            ) : trialEnded ? (
              <>
                <p className="text-sm font-semibold text-rose-400">
                  {t("account.trialEnded")}
                </p>
                <p className="text-xs text-slate-400">
                  {t("account.trialEndedSub")}
                </p>
              </>
            ) : daysLeft !== null ? (
              <>
                <p className="text-sm font-semibold text-white">
                  <span className="text-teal-400">{daysLeft}</span> {t("account.daysLeft")}
                </p>
                <p className="text-xs text-slate-400">
                  {t("account.inTrial")}
                </p>
              </>
            ) : null}

            <div className="pt-2 border-t border-slate-700/50 mt-3">
              <p className="text-xs text-slate-400">
                {t("account.after30")} <span className="text-slate-300 font-medium">₹199/month</span>
              </p>
            </div>
          </div>

          {/* Upgrade Button */}
          <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-200 shadow-lg">
            <Crown className="w-4 h-4" />
            {t("account.upgrade")}
          </button>

          {/* Sign Out Button */}
          <button
            onClick={() => {
              onClose();
              logOut();
            }}
            className="w-full flex items-center justify-center gap-2 bg-slate-700/30 hover:bg-slate-700/50 text-slate-300 hover:text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-200 border border-slate-700/50"
          >
            <LogOut className="w-4 h-4" />
            {t("account.signOut")}
          </button>
        </div>
      </div>
    </>
  );
}
