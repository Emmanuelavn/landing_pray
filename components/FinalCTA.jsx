export default function FinalCTA() {
  return (
    <section className="section-padding bg-gradient-night text-cream-50 relative overflow-hidden">
      <div className="absolute inset-0 starfield opacity-30"></div>

      <div className="container-narrow relative">
        {/* Two paths */}
        <div className="text-center mb-14">
          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-gold-400 mb-3">
            Vous avez deux chemins devant vous
          </p>
          <h2 className="heading-display text-3xl sm:text-4xl lg:text-5xl mb-4">
            Quel choix faites-vous<br />
            <span className="italic text-gold-400">pour votre enfant ce soir ?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mb-16">
          <div className="bg-cream-50/5 border border-cream-50/10 rounded-2xl p-6 sm:p-7 opacity-80">
            <div className="text-xs uppercase tracking-wider text-cream-50/50 mb-2">Choix 1 — Ne rien faire</div>
            <h3 className="font-display font-semibold text-xl sm:text-2xl mb-4">
              Fermer cette page et continuer comme avant…
            </h3>
            <ul className="space-y-2 text-sm text-cream-50/70">
              <li className="flex gap-2"><span>•</span><span>Continuer à improviser la prière du soir (ou à l'oublier)</span></li>
              <li className="flex gap-2"><span>•</span><span>Voir votre enfant grandir sans cette habitude qui le tiendrait debout</span></li>
              <li className="flex gap-2"><span>•</span><span>Repousser à plus tard… puis encore à plus tard…</span></li>
              <li className="flex gap-2"><span>•</span><span>Regretter dans 10 ans de ne pas avoir agi aujourd'hui</span></li>
            </ul>
          </div>

          <div className="bg-gold-500/10 border-2 border-gold-400 rounded-2xl p-6 sm:p-7 relative">
            <div className="absolute -top-3 left-6">
              <span className="px-3 py-1 rounded-full bg-gold-400 text-night-900 text-xs font-bold uppercase tracking-wider">
                Notre conseil
              </span>
            </div>
            <div className="text-xs uppercase tracking-wider text-gold-400 mb-2 mt-2">Choix 2 — Agir maintenant</div>
            <h3 className="font-display font-semibold text-xl sm:text-2xl mb-4 text-gold-400">
              Offrir à votre enfant un trésor pour toute sa vie
            </h3>
            <ul className="space-y-2 text-sm text-cream-50/90">
              <li className="flex gap-2"><span className="text-gold-400">✓</span><span>Recevoir le livre en moins de 2 minutes</span></li>
              <li className="flex gap-2"><span className="text-gold-400">✓</span><span>Lire la première prière avec votre enfant <strong>ce soir</strong></span></li>
              <li className="flex gap-2"><span className="text-gold-400">✓</span><span>Voir naître chez lui le goût de parler à Jésus</span></li>
              <li className="flex gap-2"><span className="text-gold-400">✓</span><span>Et si ça ne marche pas, vous êtes remboursé sous 7 jours</span></li>
            </ul>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="font-script text-3xl sm:text-4xl text-gold-400 mb-6">
            Chaque soir qui passe…
          </p>
          <p className="text-lg sm:text-xl text-cream-50/90 mb-8 leading-relaxed">
            est un soir où votre enfant aurait pu apprendre à parler à Jésus tout seul.<br />
            <span className="font-display italic">Et que vous ne récupérerez jamais.</span>
          </p>

          <a
            href="https://digiplex.mymaketou.store/fr/products/je-prie-tout-seul/checkout"
            className="inline-flex items-center justify-center gap-2 px-8 py-5 rounded-full bg-gradient-gold text-night-900 font-bold text-base sm:text-lg shadow-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-pulse-soft"
          >
            🌙 Je commence ce soir — 2 500 FCFA
          </a>

          <p className="text-xs text-cream-50/50 mt-5">
            Paiement sécurisé · Accès immédiat · Garantie 7 jours satisfait ou remboursé
          </p>
        </div>
      </div>
    </section>
  );
}
