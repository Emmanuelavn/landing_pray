export default function Guarantee() {
  return (
    <section className="section-padding bg-cream-50">
      <div className="container-narrow">
        <div className="bg-white border-2 border-gold-500 rounded-3xl p-6 sm:p-10 lg:p-12 relative overflow-hidden">
          {/* Seal */}
          <div className="absolute -top-4 -right-4 sm:top-6 sm:right-6 sm:relative sm:float-right sm:ml-6 sm:mb-4">
            <div className="relative w-24 h-24 sm:w-32 sm:h-32">
              <div className="absolute inset-0 rounded-full bg-gradient-gold flex items-center justify-center shadow-lg transform rotate-12">
                <div className="text-center">
                  <div className="text-night-900 text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                    Garantie
                  </div>
                  <div className="font-display font-bold text-2xl sm:text-3xl text-night-900 leading-none">
                    7
                  </div>
                  <div className="text-night-900 text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                    Jours
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center sm:text-left">
            <p className="text-xs uppercase tracking-[0.25em] text-gold-600 mb-3">
              Notre promesse
            </p>
            <h2 className="heading-display text-3xl sm:text-4xl text-night-900 mb-5">
              Si dans 7 jours votre enfant<br className="hidden sm:block" />
              n'a pas pris goût à la prière du soir…
            </h2>
            <p className="text-night-900/75 text-base sm:text-lg leading-relaxed mb-5">
              … nous vous remboursons intégralement. Sans question, sans formulaire compliqué.
              Un simple message WhatsApp suffit.
            </p>
            <p className="text-night-900/75 text-base sm:text-lg leading-relaxed mb-6">
              Nous prenons ce risque parce que nous savons que ce livre fonctionne.
              Les centaines de familles qui l'ont déjà adopté nous le confirment chaque jour.
              <span className="font-display italic text-terra-500"> Vous, vous ne risquez rien.</span>
            </p>

            <div className="inline-flex items-center gap-2 text-sm text-night-900/60 italic">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M12 1l3 6 6 1-4.5 4.5L18 19l-6-3-6 3 1.5-6.5L3 8l6-1z" fill="currentColor" />
              </svg>
              Vous décidez. Nous assumons le risque.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
