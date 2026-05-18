export default function Solution() {
  return (
    <section className="section-padding bg-gradient-night text-cream-50 relative overflow-hidden">
      {/* Starfield */}
      <div className="absolute inset-0 starfield opacity-60"></div>
      {/* Moon */}
      <div className="absolute top-10 right-10 w-24 h-24 rounded-full bg-gradient-to-br from-cream-50 to-gold-400 opacity-20 blur-2xl"></div>

      <div className="container-narrow relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="ornament text-gold-400 mb-6 max-w-xs mx-auto">
            <span className="text-xl">✧</span>
          </div>

          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-gold-400 mb-4">
            La vérité que peu osent dire
          </p>

          <h2 className="heading-display text-3xl sm:text-4xl lg:text-5xl mb-8">
            Un enfant qui prie le soir<br />
            <span className="italic text-gold-400">grandit avec un cœur ancré dans la foi.</span>
          </h2>

          <div className="space-y-5 text-base sm:text-lg leading-relaxed text-cream-50/90">
            <p>
              Ce n'est pas la durée de la prière qui compte. Ce n'est pas non plus la perfection
              des mots utilisés.
            </p>
            <p>
              Ce qui compte, c'est <strong className="text-gold-400">la régularité</strong>.
              Goutte après goutte, soir après soir, la prière creuse dans le cœur de votre
              enfant un puits profond où Jésus viendra habiter pour toujours.
            </p>
            <p className="font-display italic text-xl sm:text-2xl text-cream-50 pt-4">
              Et cette foi-là, personne ne pourra jamais la lui enlever.
            </p>
          </div>

          <div className="mt-10 pt-10 border-t border-cream-50/10">
            <p className="text-gold-400 font-script text-2xl sm:text-3xl mb-4">
              Voilà pourquoi nous avons créé…
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
