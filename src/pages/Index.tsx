import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Social from "@/components/Social";
import QRSection from "@/components/QRSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Contact />
      <Social />
      <QRSection />
      <Footer />
    </div>
  );
};

export default Index;
