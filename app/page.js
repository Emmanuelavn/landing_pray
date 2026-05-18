import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pain from "@/components/Pain";
import Solution from "@/components/Solution";
import BookPreview from "@/components/BookPreview";
import Benefits from "@/components/Benefits";
import WhatsAppMockup from "@/components/WhatsAppMockup";
// import Bonuses from "@/components/Bonuses";
import Testimonials from "@/components/Testimonials";
import Offer from "@/components/Offer";
import Guarantee from "@/components/Guarantee";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Reveal from "@/components/Reveal";
import PurchaseNotification from "@/components/PurchaseNotification";

export default function Home() {
  return (
    <main>
      <Reveal>
        <AnnouncementBar />
      </Reveal>
      <Reveal delay={0.05}>
        <Header />
      </Reveal>
      <Reveal delay={0.1}>
        <Hero />
      </Reveal>
      <Reveal delay={0.05}>
        <Pain />
      </Reveal>
      <Reveal delay={0.08}>
        <Solution />
      </Reveal>
      <Reveal delay={0.08}>
        <BookPreview />
      </Reveal>
      <Reveal delay={0.08}>
        <Benefits />
      </Reveal>
      <Reveal delay={0.08}>
        <WhatsAppMockup />
      </Reveal>
      {/* <Bonuses /> */}
      <Reveal delay={0.08}>
        <Testimonials />
      </Reveal>
      <Reveal delay={0.08}>
        <Offer />
      </Reveal>
      <Reveal delay={0.08}>
        <Guarantee />
      </Reveal>
      <Reveal delay={0.08}>
        <FAQ />
      </Reveal>
      <Reveal delay={0.08}>
        <FinalCTA />
      </Reveal>
      <Reveal delay={0.05}>
        <Footer />
      </Reveal>
      <Reveal delay={0.12}>
        <FloatingWhatsApp />
      </Reveal>
      <PurchaseNotification />
    </main>
  );
}
