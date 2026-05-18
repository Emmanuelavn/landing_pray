"use client";

import { useState, useEffect } from "react";

const STORAGE_KEY = "elyx_offer_end";
// Honest countdown: 24h from first visit, persisted in localStorage
const DURATION_MS = 24 * 60 * 60 * 1000;

function pad(n) {
  return String(n).padStart(2, "0");
}

export default function Countdown() {
  const [remaining, setRemaining] = useState(null);

  useEffect(() => {
    let endTime;
    const stored = typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEY) : null;

    if (stored) {
      endTime = parseInt(stored, 10);
      if (isNaN(endTime) || endTime < Date.now()) {
        // Expired or invalid: restart 24h window
        endTime = Date.now() + DURATION_MS;
        window.localStorage.setItem(STORAGE_KEY, String(endTime));
      }
    } else {
      endTime = Date.now() + DURATION_MS;
      window.localStorage.setItem(STORAGE_KEY, String(endTime));
    }

    const tick = () => {
      const diff = endTime - Date.now();
      if (diff <= 0) {
        setRemaining({ h: 0, m: 0, s: 0 });
        return;
      }
      setRemaining({
        h: Math.floor(diff / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!remaining) {
    return (
      <div className="flex justify-center gap-2 sm:gap-3" aria-label="Compte à rebours">
        {["--", "--", "--"].map((v, i) => (
          <div key={i} className="bg-night-900 text-cream-50 rounded-xl px-4 py-3 min-w-[64px] text-center">
            <div className="font-display font-bold text-2xl sm:text-3xl">{v}</div>
            <div className="text-[10px] uppercase tracking-wider opacity-60">
              {["Heures", "Min", "Sec"][i]}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex justify-center gap-2 sm:gap-3" aria-label="Compte à rebours de l'offre">
      <div className="bg-night-900 text-cream-50 rounded-xl px-4 py-3 min-w-[64px] sm:min-w-[80px] text-center shadow-lg">
        <div className="font-display font-bold text-2xl sm:text-3xl tabular-nums">{pad(remaining.h)}</div>
        <div className="text-[10px] uppercase tracking-wider opacity-60">Heures</div>
      </div>
      <div className="bg-night-900 text-cream-50 rounded-xl px-4 py-3 min-w-[64px] sm:min-w-[80px] text-center shadow-lg">
        <div className="font-display font-bold text-2xl sm:text-3xl tabular-nums">{pad(remaining.m)}</div>
        <div className="text-[10px] uppercase tracking-wider opacity-60">Min</div>
      </div>
      <div className="bg-terra-500 text-cream-50 rounded-xl px-4 py-3 min-w-[64px] sm:min-w-[80px] text-center shadow-lg animate-pulse">
        <div className="font-display font-bold text-2xl sm:text-3xl tabular-nums">{pad(remaining.s)}</div>
        <div className="text-[10px] uppercase tracking-wider opacity-80">Sec</div>
      </div>
    </div>
  );
}
