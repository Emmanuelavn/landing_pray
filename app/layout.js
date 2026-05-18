import "./globals.css";

export const metadata = {
  title: "Je Prie Tout Seul — 30 Prières du Soir pour Enfants | ELYX",
  description:
    "Le livre qui transmet la foi à votre enfant, soir après soir. 30 prières illustrées pour enfants de 4 à 12 ans. Disponible aujourd'hui à 2 500 FCFA.",
  openGraph: {
    title: "Je Prie Tout Seul — 30 Prières du Soir pour Enfants",
    description:
      "Le livre qui transmet la foi à votre enfant, soir après soir. 30 prières illustrées.",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0E1733",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&family=Dancing+Script:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
