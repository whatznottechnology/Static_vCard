import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import SocialSection from "@/components/SocialSection";
import Gallery from "@/components/Gallery";
import MapSection from "@/components/MapSection";
import FooterSection from "@/components/FooterSection";
import StickyButtons from "@/components/StickyButtons";
import ThemeToggle from "@/components/ThemeToggle";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <ThemeToggle />
      <Header />
      <AboutSection />
      <ContactSection />
      <SocialSection />
      <Gallery />
      <MapSection />
      <FooterSection />
      <StickyButtons />
    </div>
  );
};

export default Index;
