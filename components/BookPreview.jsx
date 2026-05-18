export default function BookPreview() {
  const features = [
    {
      number: "30",
      label: "prières illustrées",
      desc: "Une prière pour chaque soir, avec une illustration unique qui capte l'imagination de l'enfant.",
    },
    {
      number: "4-12",
      label: "ans",
      desc: "Un guide d'utilisation adapté à chaque tranche d'âge : du tout-petit à l'enfant qui lit seul.",
    },
    {
      number: "30",
      label: "versets bibliques",
      desc: "Chaque prière s'accompagne d'un verset précieux pour ancrer la Parole dans le cœur.",
    },
  ];

  const themes = [
    "Merci pour cette journée", "Veille sur moi cette nuit", "Pardon Jésus",
    "Bénis ma famille", "Tu es mon ami", "Je te confie mes rêves",
    "Donne-moi un cœur joyeux", "Aide-moi à grandir", "Merci pour mon corps",
    "Parle à mon cœur", "Je prie pour mes amis", "Ceux qui souffrent",
    "Donne-moi du courage", "Apprends-moi à être patient", "Merci pour ta création",
    "Aide-moi à l'école", "Je te donne mes soucis", "Apprends-moi à dire la vérité",
    "Remplis ma maison de paix", "Je veux te ressembler", "Merci pour mon pays",
    "Apprends-moi à partager", "Guéris ceux qui sont malades", "Apprends-moi à prier souvent",
    "Je veux lire ta Parole", "Merci pour ton amour", "Prépare mon cœur pour demain",
    "Merci pour les anges", "Je te donne ma vie", "Bonne nuit, à demain",
  ];

  return (
    <section className="section-padding bg-cream-50">
      <div className="container-wide">
        <div className="text-center mb-14">
          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-gold-600 mb-3">
            Un livre comme on n'en fait plus
          </p>
          <h2 className="heading-display text-3xl sm:text-4xl lg:text-5xl text-night-900 mb-4">
            « Je Prie Tout Seul »
          </h2>
          <p className="font-script text-2xl sm:text-3xl text-terra-500">
            Le compagnon du soir pour votre enfant
          </p>
        </div>

        {/* 3 features */}
        <div className="grid md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
          {features.map((f, i) => (
            <div key={i} className="text-center p-6 bg-white rounded-2xl border border-cream-200 shadow-sm">
              <div className="font-display font-bold text-5xl text-terra-500 mb-1">{f.number}</div>
              <div className="text-xs uppercase tracking-widest text-night-900/60 mb-3">{f.label}</div>
              <p className="text-sm text-night-900/75 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Real illustrations gallery */}
        <div className="mb-14">
          <h3 className="font-display text-2xl sm:text-3xl text-center text-night-900 mb-3">
            Aperçu des illustrations à l'intérieur
          </h3>
          <p className="text-center text-night-900/60 mb-8 text-sm">
            Chaque prière est accompagnée d'une illustration douce, pensée pour les enfants africains.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {[
              { src: "/images/anges.jpg", alt: "Enfant qui dort entouré d'anges" },
              { src: "/images/coeur.jpg", alt: "Frère et sœur qui s'enlacent" },
              { src: "/images/dormir.jpg", alt: "Enfants qui dorment paisiblement" },
              { src: "/images/mere.jpg", alt: "Mère qui prie avec son enfant" },
            ].map((img, i) => (
              <div
                key={i}
                className="aspect-[3/4] rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-night-900"
              >
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* 30 themes pills */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-cream-200 shadow-sm">
          <div className="text-center mb-6">
            <h3 className="font-display text-2xl sm:text-3xl text-night-900 mb-2">
              Les 30 thèmes du livre
            </h3>
            <p className="text-sm text-night-900/60">
              Une prière pour chaque soir, pour chaque besoin du cœur de votre enfant.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {themes.map((theme, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-cream-100 text-night-900/80 rounded-full text-xs sm:text-sm border border-cream-200"
              >
                <span className="text-gold-500 font-bold">{String(i + 1).padStart(2, "0")}</span>
                {theme}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
