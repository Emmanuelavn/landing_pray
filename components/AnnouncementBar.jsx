export default function AnnouncementBar() {
  return (
    <div className="bg-night-900 text-cream-50 text-center py-2.5 px-4 text-xs sm:text-sm font-body">
      <span className="inline-flex items-center gap-2">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse"></span>
        <span className="hidden sm:inline">Livraison numérique instantanée</span>
        <span className="sm:hidden">Accès immédiat</span>
        <span className="opacity-50 mx-2">•</span>
        <span>Paiement sécurisé Mobile Money</span>
        <span className="opacity-50 mx-2 hidden sm:inline">•</span>
        <span className="hidden sm:inline">Garantie 7 jours satisfait ou remboursé</span>
      </span>
    </div>
  );
}
