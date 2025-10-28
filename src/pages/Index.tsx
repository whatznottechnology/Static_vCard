import Header from "@/components/Header";
import CompaniesSection from "@/components/CompaniesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import SocialSection from "@/components/SocialSection";
import ContactForm from "@/components/ContactForm";
import MapSection from "@/components/MapSection";
import FooterSection from "@/components/FooterSection";
import StickyButtons from "@/components/StickyButtons";
import ThemeToggle from "@/components/ThemeToggle";
import Navigation from "@/components/Navigation";
import { useEffect, useState } from "react";

const Index = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="min-h-screen relative">
      <ThemeToggle />
      <Navigation isMobile={isMobile} />
      <div className="lg:pl-20 md:pl-14">
        <section id="header">
          <Header />
        </section>
        <section id="companies">
          <CompaniesSection />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
        <section id="social">
          <SocialSection />
        </section>
        <section id="contact-form">
          <ContactForm />
        </section>
        <section id="map">
          <MapSection />
        </section>
        <div className="pb-20 md:pb-0">
          <FooterSection />
        </div>
      </div>
      <StickyButtons />
    </div>
  );
};

export default Index;
