export default function Bonuses() {
  const bonuses = [
    {
      tag: "Bonus #1",
      title: "Mes Prières du Matin",
      subtitle: "10 prières bonus pour commencer la journée",
      desc: "Parce qu'un bon matin commence par un bon mot pour Jésus. 10 prières courtes et joyeuses pour réveiller le cœur de votre enfant en même temps que son corps.",
      value: "3 000 FCFA",
      icon: "☀️",
    },
    {
      tag: "Bonus #2",
      title: "Le Carnet de Mon Cœur",
      subtitle: "Journal de gratitude pour enfant à imprimer",
      desc: "30 pages illustrées où votre enfant note chaque jour ce pour quoi il dit merci à Jésus. Un outil puissant pour cultiver la gratitude et la confiance dès le plus jeune âge.",
      value: "2 500 FCFA",
      icon: "📓",
    },
    {
      tag: "Bonus #3",
      title: "Le Guide Parent",
      subtitle: "Comment accompagner la foi de votre enfant",
      desc: "Un guide pratique de 20 pages pour les parents : comment répondre aux questions difficiles de l'enfant sur Dieu, comment introduire la prière sans forcer, comment évoluer avec son âge.",
      value: "4 000 FCFA",
      icon: "🕊️",
    },
  ];

  return (
    <section className="section-padding bg-cream-50">
      <div className="container-wide">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 mb-4">
            <span className="text-gold-600">🎁</span>
            <span className="text-xs font-bold uppercase tracking-wider text-gold-600">
              Offerts avec votre commande
            </span>
          </div>
          <h2 className="heading-display text-3xl sm:text-4xl lg:text-5xl text-night-900 mb-3">
            3 bonus offerts<br className="sm:hidden" /> aujourd'hui seulement
          </h2>
          <p className="text-night-900/70 max-w-2xl mx-auto">
            Pour vous remercier de votre confiance, nous ajoutons à votre commande 3 ressources qui décuplent la valeur du livre.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {bonuses.map((b, i) => (
            <div
              key={i}
              className="relative bg-gradient-to-br from-white to-cream-100 rounded-3xl p-6 sm:p-7 border-2 border-gold-400/30 shadow-md hover:shadow-xl transition-shadow"
            >
              {/* Tag */}
              <div className="absolute -top-3 left-6">
                <span className="inline-block px-3 py-1 rounded-full bg-night-900 text-cream-50 text-xs font-bold uppercase tracking-wider">
                  {b.tag}
                </span>
              </div>

              <div className="text-5xl mb-3 mt-2">{b.icon}</div>
              <h3 className="font-display font-bold text-2xl text-night-900 leading-tight mb-1">
                {b.title}
              </h3>
              <p className="text-terra-500 text-sm font-semibold mb-3">{b.subtitle}</p>
              <p className="text-night-900/70 text-sm leading-relaxed mb-4">{b.desc}</p>

              <div className="flex items-center justify-between pt-4 border-t border-cream-200">
                <span className="text-xs uppercase tracking-wider text-night-900/50">Valeur</span>
                <div className="flex items-center gap-2">
                  <span className="text-night-900/50 line-through text-sm">{b.value}</span>
                  <span className="px-2.5 py-1 rounded-full bg-gold-500 text-night-900 text-xs font-bold uppercase">
                    Offert
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-sm text-night-900/60">
            <span className="font-semibold">Valeur totale des bonus : 9 500 FCFA</span> · Inclus gratuitement avec votre livre
          </p>
        </div>
      </div>
    </section>
  );
}
