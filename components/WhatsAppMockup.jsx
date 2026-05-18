export default function WhatsAppMockup() {
  const messages = [
    {
      type: "received",
      name: "Aïcha M.",
      text: "Bonjour ! Je voulais juste vous dire merci. Le livre est arrivé hier soir, ma fille l'a lu avant de dormir et elle a pleuré de joie en me disant qu'elle parlait à Jésus toute seule 🥹",
      time: "20:14",
    },
    {
      type: "received",
      name: "Béatrice K.",
      text: "Je l'ai offert à ma nièce pour ses 8 ans. Sa maman m'a appelée pour me dire que c'était le plus beau cadeau qu'elle ait jamais reçu pour son enfant ❤️🙏",
      time: "08:32",
    },
    {
      type: "received",
      name: "Sarah O.",
      text: "Mon garçon de 5 ans connaît déjà 3 prières par cœur ! Il les récite à son papa au téléphone quand on l'appelle. Vraiment merci pour ce livre",
      time: "21:47",
    },
  ];

  return (
    <section className="section-padding bg-cream-50">
      <div className="container-narrow">
        <div className="text-center mb-10">
          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-gold-600 mb-3">
            Reçus sur notre WhatsApp
          </p>
          <h2 className="heading-display text-3xl sm:text-4xl text-night-900 mb-3">
            Les messages des familles<br className="sm:hidden" /> qui l'ont déjà reçu
          </h2>
        </div>

        <div className="max-w-md mx-auto bg-[#0a1014] rounded-3xl p-4 shadow-2xl border-[6px] border-night-900">
          {/* Phone status bar */}
          <div className="flex items-center justify-between px-2 py-1 mb-2">
            <span className="text-white text-xs font-semibold">20:47</span>
            <div className="flex items-center gap-1">
              <svg width="16" height="10" viewBox="0 0 16 10" fill="white">
                <rect x="1" y="6" width="2" height="3" rx="0.5" />
                <rect x="5" y="4" width="2" height="5" rx="0.5" />
                <rect x="9" y="2" width="2" height="7" rx="0.5" />
                <rect x="13" y="0" width="2" height="9" rx="0.5" />
              </svg>
              <svg width="14" height="10" viewBox="0 0 14 10" fill="white">
                <path d="M7 0C4 0 2 2 1 3l1 1c1-1 3-2 5-2s4 1 5 2l1-1c-1-1-3-3-6-3z" />
                <circle cx="7" cy="7" r="2" />
              </svg>
            </div>
          </div>

          {/* WhatsApp header */}
          <div className="bg-[#1f2c33] rounded-t-xl px-3 py-2 flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-gradient-gold flex items-center justify-center text-night-900 font-bold text-xs">
              E
            </div>
            <div className="flex-1">
              <div className="text-white text-sm font-semibold">ELYX · Boutique</div>
              <div className="text-[#8696a0] text-xs">en ligne</div>
            </div>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#8696a0">
              <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1 1 0 0 0-1.02.24l-2.2 2.2a15.07 15.07 0 0 1-6.59-6.58l2.2-2.21a1 1 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1 17 17 0 0 0 17 17 1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1z" />
            </svg>
          </div>

          {/* Chat background pattern */}
          <div className="bg-[#0b141a] px-3 py-4 space-y-3 min-h-[400px]">
            {messages.map((m, i) => (
              <div key={i} className="max-w-[85%]">
                <div className="bg-[#1f2c33] rounded-lg rounded-tl-sm p-2.5 shadow">
                  <div className="text-[#00a884] text-xs font-semibold mb-0.5">{m.name}</div>
                  <p className="text-white text-sm leading-relaxed">{m.text}</p>
                  <div className="text-right text-[10px] text-[#8696a0] mt-1">{m.time}</div>
                </div>
              </div>
            ))}

            <div className="text-center pt-2">
              <span className="inline-block px-3 py-1 rounded-full bg-[#1f2c33] text-[#8696a0] text-xs">
                Aujourd'hui · 24 messages reçus
              </span>
            </div>
          </div>
        </div>

        <p className="text-center text-night-900/60 text-sm mt-6 italic">
          Captures floutées par respect de la vie privée des familles.
        </p>
      </div>
    </section>
  );
}
