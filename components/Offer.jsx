import Countdown from "./Countdown";

export default function Offer() {
  const items = [
    { name: "Livre principal « Je Prie Tout Seul »", desc: "30 prières du soir illustrées · PDF haute qualité", value: "8 000 FCFA" },
    { name: "Accès à vie + mises à jour gratuites", desc: "Téléchargez aujourd'hui, gardez pour toujours", value: "Inestimable" },
  ];

  return (
    <section id="commander" className="section-padding bg-gradient-night text-cream-50 relative overflow-hidden">
      <div className="absolute inset-0 starfield opacity-40"></div>

      <div className="container-narrow relative">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-terra-500/20 border border-terra-500/40 mb-5">
            <span className="w-2 h-2 rounded-full bg-terra-500 animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-cream-50">
              Offre de lancement
            </span>
          </div>
          <h2 className="heading-display text-3xl sm:text-4xl lg:text-5xl mb-4">
            Tout ce que vous recevez<br />
            <span className="italic text-gold-400">aujourd'hui seulement</span>
          </h2>
          <p className="text-cream-50/70 max-w-xl mx-auto">
            Au prix d'un goûter pour votre enfant, vous lui offrez un héritage spirituel pour toute sa vie.
          </p>
        </div>

        {/* Offer card */}
        <div className="bg-cream-50 text-night-900 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl">
          {/* Items list */}
          <div className="space-y-3 mb-6">
            {items.map((item, i) => (
              <div key={i} className="flex items-start gap-3 pb-3 border-b border-cream-200 last:border-0">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold-500 flex items-center justify-center mt-0.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-night-900 text-sm sm:text-base">{item.name}</div>
                  <div className="text-night-900/60 text-xs sm:text-sm">{item.desc}</div>
                </div>
                <div className="flex-shrink-0 text-right">
                  <div className="text-gold-600 font-bold text-sm sm:text-base whitespace-nowrap">
                    {item.value}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pricing */}
          <div className="bg-night-900 text-cream-50 rounded-2xl p-6 sm:p-8 mb-6">
            <div className="text-center">
              <div className="text-xs uppercase tracking-widest text-cream-50/60 mb-2">
                Valeur totale réelle
              </div>
              <div className="text-2xl sm:text-3xl line-through text-cream-50/50 font-display">
                8 000 FCFA
              </div>

              <div className="my-4 flex items-center justify-center gap-2">
                <span className="text-3xl">↓</span>
              </div>

              <div className="text-xs uppercase tracking-widest text-gold-400 mb-2">
                Aujourd'hui pour vous
              </div>
              <div className="font-display font-bold text-6xl sm:text-7xl text-gold-400 leading-none mb-2">
                2 500
              </div>
              <div className="text-lg text-cream-50/80 mb-6">FCFA · paiement unique</div>

              <div className="text-xs text-cream-50/60 mb-1">L'offre se termine dans :</div>
              <Countdown />
            </div>
          </div>

          {/* CTA */}
          <a
            href="https://digiplex.mymaketou.store/fr/products/je-prie-tout-seul/checkout"
            className="block w-full text-center px-6 py-5 rounded-2xl bg-gradient-gold text-night-900 font-bold text-lg sm:text-xl shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 mb-4 animate-pulse-soft"
          >
            🙏 Oui, je veux ce livre pour mon enfant
          </a>

          {/* Trust badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs">
            <div className="flex flex-col items-center gap-1 p-2">
              <span className="text-2xl">🔒</span>
              <span className="text-night-900/70">Paiement sécurisé</span>
            </div>
            <div className="flex flex-col items-center gap-1 p-2">
              <span className="text-2xl">⚡</span>
              <span className="text-night-900/70">Accès instantané</span>
            </div>
            <div className="flex flex-col items-center gap-1 p-2">
              <span className="text-2xl">♾️</span>
              <span className="text-night-900/70">Accès à vie</span>
            </div>
            <div className="flex flex-col items-center gap-1 p-2">
              <span className="text-2xl">📱</span>
              <span className="text-night-900/70">Tous appareils</span>
            </div>
          </div>

          {/* Payment methods */}
          <div className="mt-6 pt-6 border-t border-cream-200 text-center">
            <p className="text-xs uppercase tracking-widest text-night-900/50 mb-3">
              Modes de paiement acceptés
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {["MTN Mobile Money", "Moov Money", "Orange Money", "Wave", "Carte Bancaire"].map((p) => (
                <span
                  key={p}
                  className="px-3 py-1.5 rounded-md bg-cream-100 text-night-900/70 text-xs font-medium border border-cream-200"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
