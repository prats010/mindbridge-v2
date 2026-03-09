// src/components/CrisisModal.jsx
export default function CrisisModal({ onClose, contact, userName }) {
  // Format phone number for WhatsApp wa.me link (remove spaces, '-', '+')
  const cleanPhone = contact?.phone?.replace(/\D/g, "");

  const whatsappMsg = `Hi ${contact?.name}, this is an automated message. ` +
    `I am currently experiencing a mental health crisis and need support. Please contact me as soon as possible.`;

  const whatsappUrl = cleanPhone ? `https://wa.me/${cleanPhone}?text=${encodeURIComponent(whatsappMsg)}` : null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.88)", backdropFilter: "blur(12px)" }}>
      <div
        className="max-w-md w-full rounded-2xl p-8 text-center shadow-2xl animate-slide-up"
        style={{
          background: "#0F172A",
          border: "2px solid #dc2626",
          boxShadow: "0 0 40px rgba(220,38,38,0.2)",
        }}
      >
        <div className="text-5xl mb-4 animate-float">🆘</div>
        <h2 className="text-2xl font-bold mb-3" style={{ color: "#f87171" }}>We're Here For You</h2>
        <p className="text-sm leading-relaxed mb-6" style={{ color: "#94a3b8" }}>
          It sounds like you're going through something really hard.
          <strong style={{ color: "#e2e8f0" }}> You are not alone.</strong> Please reach out to a crisis
          counsellor or your trusted contact right now.
        </p>

        {whatsappUrl && (
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-white mb-6 transition-transform hover:scale-105"
            style={{ background: "#25D366" }} // Authentic WhatsApp green
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
            Message Trusted Contact
          </a>
        )}

        <div className="space-y-3 mb-6">
          {[
            { name: "iCall (India)", number: "9152987821", gradFrom: "#7f1d1d", gradTo: "#991b1b", textColor: "#fca5a5" },
            { name: "Vandrevala Foundation", number: "1860-2662-345", gradFrom: "#7c2d12", gradTo: "#9a3412", textColor: "#fdba74" },
            { name: "NIMHANS Helpline", number: "080-46110007", gradFrom: "#713f12", gradTo: "#854d0e", textColor: "#fde047" },
          ].map((h) => (
            <div
              key={h.name}
              className="rounded-xl p-3 hover-float"
              style={{ background: `linear-gradient(135deg, ${h.gradFrom}, ${h.gradTo})`, border: `1px solid ${h.textColor}44` }}
            >
              <div className="text-xs opacity-70 mb-0.5" style={{ color: h.textColor }}>{h.name}</div>
              <a
                href={`tel:${h.number}`}
                className="font-bold text-lg text-white hover:underline"
              >
                {h.number}
              </a>
            </div>
          ))}
        </div>
        <button
          onClick={onClose}
          className="w-full py-3 rounded-xl text-sm transition-all hover:scale-[1.01]"
          style={{ background: "#1E293B", color: "#94a3b8" }}
        >
          I understand — continue
        </button>
      </div>
    </div>
  );
}
