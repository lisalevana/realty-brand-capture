
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PropertiesSection } from "@/components/PropertiesSection";
import { AboutSection } from "@/components/AboutSection";
import { CalendlySection } from "@/components/CalendlySection";
import { InvestorFormSection } from "@/components/InvestorFormSection";
import { Footer } from "@/components/Footer";
import { PdfPopup } from "@/components/PdfPopup";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <PropertiesSection />
        <AboutSection />
        <CalendlySection />
        <InvestorFormSection />
      </main>
      <Footer />
      <PdfPopup />
    </div>
  );
};

export default Index;
