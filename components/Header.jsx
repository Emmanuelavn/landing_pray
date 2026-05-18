export default function Header() {
  return (
    <header className="bg-cream-50 border-b border-cream-200">
      <div className="container-wide flex items-center justify-between py-4">
        {/* Logo ELYX — placeholder élégant. Remplace le contenu par <img src="/logo.png" /> quand tu as ton logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center shadow-md">
            <span className="font-display font-bold text-night-900 text-lg">E</span>
          </div>
          <span className="font-display font-semibold text-xl text-night-900 tracking-wide">
            ELYX
          </span>
        </a>
        <a
          href="https://digiplex.mymaketou.store/fr/products/je-prie-tout-seul/checkout"
          className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-night-900 text-cream-50 text-sm font-semibold hover:bg-night-800 transition"
        >
          Commander
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </header>
  );
}
