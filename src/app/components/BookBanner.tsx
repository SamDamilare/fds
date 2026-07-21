import { useState, useEffect } from "react";
import { X } from "lucide-react";

export function BookBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("bookBannerDismissed");
    if (!dismissed) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem("bookBannerDismissed", "true");
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) handleDismiss();
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(30,58,95,0.85)" }}
      onClick={handleBackdropClick}
    >
      <div
        className="relative w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl"
        style={{ background: "#ffffff" }}
      >
        {/* Flyer as background image fading to white at bottom */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/dktrwqio1/image/upload/v1784502307/Book_available_now_ehv5mu.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Gradient overlay — fades flyer to white at bottom */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(
              to bottom,
              rgba(255,255,255,0.05) 0%,
              rgba(255,255,255,0.2) 25%,
              rgba(255,255,255,0.6) 50%,
              rgba(255,255,255,0.88) 70%,
              rgba(255,255,255,1) 100%
            )`,
          }}
        />

        {/* Close Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white rounded-full p-1.5 transition-all shadow-md"
          aria-label="Close"
        >
          <X className="w-5 h-5 text-gray-700" />
        </button>

        {/* Content sits on top */}
        <div className="relative z-10 p-8">
          {/* Spacer so content starts below the visible flyer area */}
          <div style={{ height: "200px" }} />

          {/* Book details */}
          <div className="text-center mb-6">
            <h3
              className="text-2xl font-bold mb-1"
              style={{ color: "#1e3a5f", fontFamily: "Georgia, serif" }}
            >
              BE <em>Still</em>
            </h3>
            <p
              className="text-sm mb-1"
              style={{ color: "#b8860b", fontFamily: "Georgia, serif" }}
            >
              Celebrating 35 Years of God's Faithfulness
            </p>
            <p className="text-sm text-gray-500 max-w-sm mx-auto leading-relaxed">
              Moving from Chaos to Calmness — by{" "}
              <span className="font-semibold text-gray-700">
                Fisayo Dayo-Samuel
              </span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center gap-3">
            <a
              href="https://substack.com/@fisayodayosamuel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-lg transition-all hover:scale-105 active:scale-95 shadow-lg"
              style={{
                background: "linear-gradient(135deg, #e63946, #d62828)",
                boxShadow: "0 4px 20px rgba(230,57,70,0.4)",
              }}
            >
              Get Your Free Copy
            </a>
            <button
              onClick={handleDismiss}
              className="text-sm text-gray-400 hover:text-gray-600 transition-colors underline underline-offset-2"
            >
              No thanks, maybe later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
