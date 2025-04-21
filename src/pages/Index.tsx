
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PropertiesSection } from "@/components/PropertiesSection";
import { AboutSection } from "@/components/AboutSection";
import { CalendlySection } from "@/components/CalendlySection";
import { InvestorFormSection } from "@/components/InvestorFormSection";
import { Footer } from "@/components/Footer";
// import { PdfPopup } from "@/components/PdfPopup"; // Popup removed as requested

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        {/* 
          TODO: To change the featured properties, edit PropertiesSection.tsx
        */}
        <PropertiesSection />
        <AboutSection />
        {/* 
          TODO: To edit the Calendly link, see the comment in CalendlySection.tsx
        */}
        <CalendlySection />
        {/* 
          TODO: To edit the Google Form (investor form), see InvestorFormSection.tsx
        */}
        <InvestorFormSection />
      </main>
      <Footer />
      {/* 
        TODO: To change the pop-up PDF guide and download link, see PdfPopup.tsx
        (popup disabled as per your instructions)
      */}
      {/* <PdfPopup /> */}
    </div>
  );
};

export default Index;
