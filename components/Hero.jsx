export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-cream">
      {/* Decorative ornaments */}
      <div className="absolute top-10 left-10 text-gold-400 opacity-20 text-6xl hidden lg:block">✦</div>
      <div className="absolute bottom-10 right-10 text-gold-400 opacity-20 text-6xl hidden lg:block">✧</div>

      <div className="container-wide pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-night-900/5 mb-5">
              <span className="text-gold-500">✧</span>
              <span className="text-xs font-semibold uppercase tracking-widest text-night-900/70">
                30 prières · 4 à 12 ans
              </span>
            </div>

            <h1 className="heading-display text-4xl sm:text-5xl lg:text-6xl text-night-900 mb-5">
              Ce soir, votre enfant<br />
              <span className="text-terra-500">priera tout seul.</span>
            </h1>

            <p className="font-script text-2xl sm:text-3xl text-gold-600 mb-6">
              Et vous le verrez s'endormir en paix.
            </p>

            <p className="text-base sm:text-lg text-night-900/75 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Le livre illustré qui apprend à votre enfant à parler à Jésus avec ses propres mots,
              chaque soir, avant de dormir. Sans que vous ayez à improviser, sans que vous ayez
              à vous sentir « pas assez préparé » pour transmettre la foi.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6">
              <a href="https://digiplex.mymaketou.store/fr/products/je-prie-tout-seul/checkout" className="cta-primary">
                <span>🙏</span>
                Je veux ce livre pour mon enfant
              </a>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-x-5 gap-y-2 text-xs sm:text-sm text-night-900/60">
              <span className="inline-flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8 5.8 21.3l2.4-7.4L2 9.4h7.6z" fill="currentColor" />
                </svg>
                Téléchargement immédiat
              </span>
              <span className="inline-flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L4 6v6c0 5 3.5 9.5 8 10 4.5-.5 8-5 8-10V6z" stroke="currentColor" strokeWidth="2" />
                </svg>
                Paiement sécurisé
              </span>
              <span className="inline-flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Garantie 7 jours
              </span>
            </div>
          </div>

          {/* Book mockup */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              {/* Glow behind book */}
              <div className="absolute inset-0 bg-gold-400/30 blur-3xl scale-90 rounded-full"></div>

              {/* Book with 3D effect */}
              <div className="relative book-shadow">
                <div className="relative w-[260px] sm:w-[300px] lg:w-[340px] rounded-r-lg rounded-l-sm overflow-hidden transform rotate-[-3deg] hover:rotate-0 transition-transform duration-700">
                  {/* Book spine effect */}
                  <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-r from-black/40 to-transparent z-10"></div>
                  <img
                    src="/images/cover.jpg"
                    alt="Couverture du livre Je Prie Tout Seul - 30 prières du soir pour enfants"
                    className="w-full h-auto block"
                  />
                  {/* Subtle page edge */}
                  <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-l from-black/20 to-transparent"></div>
                </div>
              </div>

              {/* Floating accent */}
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-night-900 text-cream-50 rounded-full w-20 h-20 sm:w-24 sm:h-24 flex flex-col items-center justify-center shadow-xl transform rotate-12 animate-float">
                <span className="text-xs uppercase tracking-wider opacity-70">Seulement</span>
                <span className="font-display font-bold text-xl sm:text-2xl text-gold-400">2 500</span>
                <span className="text-xs opacity-70">FCFA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
