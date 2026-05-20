import "./globals.css";
import Script from "next/script";

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

      {/* Meta Pixel */}
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1534531525046116');
          fbq('track', 'PageView');
        `}
      </Script>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=1534531525046116&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>
    </html>
  );
}
