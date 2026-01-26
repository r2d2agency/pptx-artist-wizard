import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Cases from "@/components/Cases";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import AnalyticsScripts from "@/components/AnalyticsScripts";

const Index = () => {
  return (
    <>
      <AnalyticsScripts />
      <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Cases />
        <Features />
        <CTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
      </div>
    </>
  );
};

export default Index;
