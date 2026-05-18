export default function Testimonials() {
  const testimonials = [
    {
      initials: "MA",
      name: "Marie A.",
      city: "Cotonou, Bénin",
      stars: 5,
      title: "Mon fils de 7 ans réclame le livre tous les soirs",
      text: "Le premier soir, je lui ai lu la prière n°1 et il a fermé les yeux avec un petit sourire. Le troisième soir, c'est lui qui m'a demandé d'ouvrir le livre. Aujourd'hui, deux mois plus tard, il ne s'endort plus sans avoir prié. Je n'arrive toujours pas à croire que 2 500 FCFA m'aient acheté ça.",
    },
    {
      initials: "FK",
      name: "Florence K.",
      city: "Abidjan, Côte d'Ivoire",
      stars: 5,
      title: "J'avais peur d'être maladroite. Plus maintenant.",
      text: "J'ai 3 enfants et je suis chrétienne pratiquante, mais je ne savais jamais quoi leur dire le soir. Ce livre m'a libérée. Ma fille de 10 ans prie seule maintenant, et c'est elle qui prie avec sa petite sœur de 5 ans. Quel cadeau pour une maman.",
    },
    {
      initials: "ND",
      name: "Nadège D.",
      city: "Dakar, Sénégal",
      stars: 5,
      title: "Les illustrations parlent au cœur de mes enfants",
      text: "Ce que j'aime, c'est que les enfants sur les images ressemblent à mes enfants. Mon garçon m'a dit : « Maman, l'enfant qui prie là, on dirait moi ». Il s'est identifié tout de suite. Pour ce prix, c'est inestimable. Je l'ai déjà offert à trois copines.",
    },
    {
      initials: "JB",
      name: "Joséphine B.",
      city: "Lomé, Togo",
      stars: 5,
      title: "Mes jumeaux de 6 ans le lisent ensemble",
      text: "Je le lis avec eux le mardi et le jeudi. Les autres soirs, ils le font tout seuls dans leur chambre, et je les entends rire ou chuchoter à Jésus. Mon cœur de mère est plein. Ce livre est entré dans notre famille comme un membre de plus.",
    },
  ];

  return (
    <section className="section-padding bg-gradient-cream relative">
      <div className="container-wide">
        <div className="text-center mb-12">
          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-gold-600 mb-3">
            Elles l'ont reçu chez elles
          </p>
          <h2 className="heading-display text-3xl sm:text-4xl lg:text-5xl text-night-900 mb-4">
            Ce que disent les mamans<br />
            <span className="italic text-terra-500">qui l'ont déjà adopté</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-cream-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-0.5 text-gold-500">
                  {Array(t.stars).fill(0).map((_, j) => (
                    <span key={j} className="text-lg">★</span>
                  ))}
                </div>
                <span className="text-xs text-night-900/40 uppercase tracking-wider">
                  Achat vérifié
                </span>
              </div>

              <h3 className="font-display font-semibold text-lg text-night-900 mb-3 leading-snug">
                « {t.title} »
              </h3>

              <p className="text-night-900/75 text-sm leading-relaxed mb-5 italic">
                {t.text}
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-cream-200">
                <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center text-night-900 font-bold text-sm flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-night-900 text-sm">{t.name}</div>
                  <div className="text-xs text-night-900/50">{t.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
