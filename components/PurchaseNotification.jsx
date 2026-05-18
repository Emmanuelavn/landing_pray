"use client";

import { useEffect, useMemo, useState } from "react";

const NAMES = [
  "Aïcha K.",
  "Jean M.",
  "Sarah T.",
  "David H.",
  "Esther N.",
  "Chantal B.",
  "Pauline D.",
  "Emmanuel S.",
  "Clarisse A.",
  "Olivier K.",
  "Judith C.",
  "Mireille F.",
  "Patricia V.",
  "Samuel P.",
  "Nadine L.",
  "Fabrice G.",
  "Léa R.",
  "Patrick Y.",
];

const LOCATIONS = [
  "Cotonou",
  "Porto-Novo",
  "Abidjan",
  "Dakar",
  "Lomé",
  "Ouagadougou",
  "Douala",
  "Libreville",
  "Bamako",
  "Kinshasa",
  "Paris",
];

const TIMES = ["à l'instant", "il y a 1 min", "il y a 2 min", "il y a 3 min", "il y a 5 min", "il y a 7 min"];

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

export default function PurchaseNotification() {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState({ name: "", location: "", time: "" });

  const schedule = useMemo(
    () => [
      { showAfter: 2500, duration: 5000 },
      { showAfter: 12000, duration: 5000 },
      { showAfter: 23000, duration: 5000 },
      { showAfter: 36000, duration: 5000 },
    ],
    []
  );

  useEffect(() => {
    const timeouts = [];

    schedule.forEach((slot) => {
      timeouts.push(
        setTimeout(() => {
          setMessage({
            name: pickRandom(NAMES),
            location: pickRandom(LOCATIONS),
            time: pickRandom(TIMES),
          });
          setVisible(true);

          timeouts.push(
            setTimeout(() => {
              setVisible(false);
            }, slot.duration)
          );
        }, slot.showAfter)
      );
    });

    return () => timeouts.forEach((t) => clearTimeout(t));
  }, [schedule]);

  if (!message.name) return null;

  return (
    <div className={`purchase-toast ${visible ? "show" : ""}`} role="status" aria-live="polite">
      <div className="purchase-toast__dot" />
      <div className="purchase-toast__avatar">DT</div>
      <div className="purchase-toast__content">
        <div className="purchase-toast__row">
          <span className="purchase-toast__name">{message.name}</span>
          <span className="purchase-toast__location">• {message.location}</span>
        </div>
        <p className="purchase-toast__meta">vient d'acheter <strong>Je Prie Tout Seul</strong></p>
        <p className="purchase-toast__time">{message.time}</p>
      </div>
    </div>
  );
}
