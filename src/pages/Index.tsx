import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ecosystem from "@/components/Ecosystem";
import TechProducts from "@/components/TechProducts";
import Portfolio from "@/components/Portfolio";
import Positioning from "@/components/Positioning";
import Authority from "@/components/Authority";
import FinalCTA from "@/components/FinalCTA";
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
          <Ecosystem />
          <TechProducts />
          <Portfolio />
          <Positioning />
          <Authority />
          <FinalCTA />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  );
};

export default Index;
