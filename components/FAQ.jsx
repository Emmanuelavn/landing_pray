"use client";

import { useState } from "react";

export default function FAQ() {
  const [open, setOpen] = useState(0);

  const faqs = [
    {
      q: "Comment je reçois le livre après paiement ?",
      a: "Immédiatement après votre paiement, vous recevez un email avec le lien de téléchargement du livre principal. Tout est en PDF, lisible sur téléphone, tablette ou ordinateur. Vous pouvez aussi l'imprimer si vous préférez le format papier.",
    },
    {
      q: "Mon enfant a 5 ans, est-ce que c'est adapté ?",
      a: "Oui, parfaitement. Le livre est conçu pour les enfants de 4 à 12 ans. Pour les plus petits (4-6 ans), vous lisez la prière à voix haute avec lui, et il répète. Le guide d'utilisation à l'intérieur explique exactement comment procéder selon chaque âge.",
    },
    {
      q: "Et si mon enfant ne sait pas encore lire ?",
      a: "Aucun problème. Les premières années, c'est vous qui lisez et lui qui écoute et répète. Les illustrations sont conçues pour capter son attention même sans lecture. À mesure qu'il grandit, il apprendra à lire ses prières seul, et le livre l'accompagnera jusqu'à 12 ans.",
    },
    {
      q: "Quelles confessions chrétiennes peuvent l'utiliser ?",
      a: "Le livre est non-dénominationnel. Il s'adresse à toutes les familles chrétiennes : catholiques, protestantes, évangéliques, pentecôtistes. Les prières s'adressent à Jésus et s'appuient sur des versets bibliques que toutes les traditions chrétiennes partagent.",
    },
    {
      q: "Comment fonctionne le paiement Mobile Money ?",
      a: "Très simplement. Vous choisissez votre opérateur (MTN, Moov, Orange, Wave...), vous suivez les instructions à l'écran, et le paiement est validé en quelques secondes. Aucune carte bancaire n'est nécessaire.",
    },
    {
      q: "Est-ce que je peux l'offrir en cadeau ?",
      a: "Bien sûr, et c'est même une excellente idée. Beaucoup de mamans et de grand-mères l'achètent pour leurs neveux, nièces ou petits-enfants. Après achat, vous recevez le PDF — libre à vous de l'imprimer joliment ou de transmettre le lien.",
    },
    {
      q: "Et si je ne suis pas satisfait ?",
      a: "Vous avez 7 jours pour décider. Si pour une raison ou une autre le livre ne vous convient pas, écrivez-nous sur WhatsApp et nous vous remboursons intégralement. Sans question.",
    },
  ];

  return (
    <section className="section-padding bg-cream-50">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-gold-600 mb-3">
            Vos questions, nos réponses
          </p>
          <h2 className="heading-display text-3xl sm:text-4xl lg:text-5xl text-night-900">
            Tout ce que vous voulez savoir
          </h2>
        </div>

        <div className="space-y-3 max-w-3xl mx-auto">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl border transition-all ${
                open === i ? "border-gold-400 shadow-md" : "border-cream-200"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 text-left"
                aria-expanded={open === i}
              >
                <span className="font-semibold text-night-900 text-sm sm:text-base">
                  {faq.q}
                </span>
                <span
                  className={`flex-shrink-0 w-7 h-7 rounded-full bg-cream-100 flex items-center justify-center transition-transform ${
                    open === i ? "rotate-180 bg-gold-400" : ""
                  }`}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>
              {open === i && (
                <div className="px-5 sm:px-6 pb-5 -mt-1 text-night-900/75 text-sm sm:text-base leading-relaxed animate-fade-in">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-sm text-night-900/60 mb-3">
            Une autre question ? Écrivez-nous sur WhatsApp.
          </p>
          <a
            href="https://wa.me/2290148065585"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-white font-semibold text-sm hover:bg-[#1ebe5c] transition"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.5 14.4c-.3-.1-1.7-.9-2-1s-.5-.1-.7.2-.8 1-1 1.2-.4.2-.7.1c-.9-.4-1.7-.9-2.5-1.9-.7-.8-1.1-1.7-1.3-2-.1-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5s.1-.3 0-.5c0-.2-.6-1.5-.9-2.1-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.7.4s-1 1-1 2.4 1 2.8 1.2 3 2 3.1 5 4.3c.7.3 1.2.5 1.7.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.4.2-.6.2-1.2.2-1.3-.2-.1-.4-.2-.7-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.4c1.5.8 3.1 1.2 4.8 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
            </svg>
            Nous écrire sur WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
