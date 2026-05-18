export default function Footer() {
  return (
    <footer className="bg-night-900 text-cream-50/60 py-10">
      <div className="container-wide">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-gold flex items-center justify-center">
              <span className="font-display font-bold text-night-900 text-sm">E</span>
            </div>
            <span className="font-display font-semibold text-lg text-cream-50">ELYX</span>
          </div>

          <div className="text-center sm:text-right text-xs">
            <p className="mb-1">
              © {new Date().getFullYear()} ELYX. Tous droits réservés.
            </p>
            <p className="text-cream-50/40">
              Pour toute question :{" "}
              <a
                href="https://wa.me/2290148065585"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-400 hover:underline"
              >
                WhatsApp +229 01 48 06 55 85
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
