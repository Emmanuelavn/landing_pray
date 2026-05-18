export default function Pain() {
  const pains = [
    {
      emoji: "😔",
      text: "Vous voulez transmettre la foi à votre enfant mais vous ne savez pas par où commencer chaque soir.",
    },
    {
      emoji: "😞",
      text: "Le soir, votre enfant veut un écran, un dessin animé, une vidéo — et la prière passe à la trappe.",
    },
    {
      emoji: "😟",
      text: "Vous improvisez deux phrases, vous bâclez, et au fond de vous, vous savez qu'il mérite mieux.",
    },
    {
      emoji: "😢",
      text: "Vous craignez qu'il grandisse sans cette habitude qui pourtant tient les enfants debout toute leur vie.",
    },
  ];

  return (
    <section className="section-padding bg-cream-50 relative">
      <div className="container-narrow">
        <div className="text-center mb-12 sm:mb-14">
          <div className="ornament text-gold-500 mb-4 max-w-xs mx-auto">
            <span className="text-xl">✦</span>
          </div>
          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-night-900/50 mb-3">
            Soyons honnêtes un instant…
          </p>
          <h2 className="heading-display text-3xl sm:text-4xl lg:text-5xl text-night-900">
            Vous vous reconnaissez<br />
            <span className="italic text-terra-500">dans l'une de ces situations ?</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 max-w-3xl mx-auto">
          {pains.map((pain, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-cream-200 flex gap-4 hover:shadow-md transition-shadow"
            >
              <span className="text-3xl flex-shrink-0">{pain.emoji}</span>
              <p className="text-night-900/80 text-sm sm:text-base leading-relaxed">{pain.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="font-display italic text-xl sm:text-2xl text-night-900/70 max-w-2xl mx-auto">
            « Si une de ces phrases vous a touché, lisez la suite très attentivement. »
          </p>
        </div>
      </div>
    </section>
  );
}
