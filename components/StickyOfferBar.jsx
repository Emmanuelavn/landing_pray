export default function StickyOfferBar() {
  return (
    <div className="sticky-offer" role="region" aria-label="Offre fixe">
      <div className="sticky-offer__inner">
        <div className="sticky-offer__info">
          <span className="sticky-offer__title">Je Prie Tout Seul</span>
          <span className="sticky-offer__price">2 500 FCFA</span>
        </div>
        <a
          href="https://digiplex.mymaketou.store/fr/products/je-prie-tout-seul/checkout"
          className="sticky-offer__cta"
        >
          <span className="sticky-offer__arrow">➜</span>
          Je le veux
        </a>
      </div>
    </div>
  );
}
