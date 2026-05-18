export default function Benefits() {
  const benefits = [
    {
      icon: "🌙",
      title: "Un sommeil paisible chaque soir",
      desc: "Fini les couchers difficiles. La prière du soir devient le rituel qui apaise votre enfant et le prépare au sommeil.",
    },
    {
      icon: "💛",
      title: "Une foi qui grandit toute seule",
      desc: "Sans pression, sans cours du dimanche imposé : votre enfant apprend à aimer Jésus comme on aime un ami.",
    },
    {
      icon: "🤲",
      title: "L'autonomie spirituelle",
      desc: "Avec ce livre, votre enfant n'a plus besoin d'attendre que vous priiez avec lui. Il sait faire seul. À 6 ans, à 8 ans, à 12 ans.",
    },
    {
      icon: "🏠",
      title: "Une maison habitée par la paix",
      desc: "Quand un enfant prie, c'est toute la maison qui change d'atmosphère. Les disputes s'apaisent. Le cœur des parents aussi.",
    },
    {
      icon: "📖",
      title: "30 versets bibliques mémorisés",
      desc: "À la fin du livre, votre enfant aura naturellement retenu 30 versets parmi les plus précieux de la Bible.",
    },
    {
      icon: "🛡️",
      title: "Un trésor pour toute sa vie",
      desc: "Cette habitude qu'il prend à 6 ans, il la gardera à 16, à 26, à 56. C'est un héritage spirituel qui ne se perd pas.",
    },
  ];

  return (
    <section className="section-padding bg-gradient-cream">
      <div className="container-wide">
        <div className="text-center mb-12 sm:mb-14">
          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-gold-600 mb-3">
            Ce que ce livre va changer
          </p>
          <h2 className="heading-display text-3xl sm:text-4xl lg:text-5xl text-night-900 mb-4">
            6 transformations<br className="sm:hidden" /> dans votre maison
          </h2>
          <p className="text-night-900/70 max-w-2xl mx-auto">
            Pas dans 10 ans. <strong>Dès les premiers soirs.</strong>
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 border border-cream-200 hover:border-gold-400 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{b.icon}</div>
              <h3 className="font-display font-semibold text-xl text-night-900 mb-2">{b.title}</h3>
              <p className="text-night-900/70 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
