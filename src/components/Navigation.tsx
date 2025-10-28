import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, User, Phone, Share2, MessageSquare, MapPin, Building2 } from "lucide-react";

interface NavigationProps {
  isMobile: boolean;
}

const Navigation = ({ isMobile }: NavigationProps) => {
  const [activeSection, setActiveSection] = useState("header");

  const navItems = [
    { id: "header", label: "Home", icon: Home },
    { id: "companies", label: "Companies", icon: Building2 },
    { id: "about", label: "About", icon: User },
    { id: "contact", label: "Contact", icon: Phone },
    { id: "social", label: "Social", icon: Share2 },
    { id: "contact-form", label: "Message", icon: MessageSquare },
    { id: "map", label: "Location", icon: MapPin },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = isMobile ? 100 : 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      {/* Mobile Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 pb-safe"
      >
        <div className="bg-card/98 backdrop-blur-xl border-t border-border/80 shadow-2xl">
          <div className="flex items-center justify-around px-2 py-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  whileTap={{ scale: 0.85 }}
                  className="relative flex items-center justify-center"
                >
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-br from-primary via-primary to-primary/90 text-white shadow-lg shadow-primary/40 scale-105"
                        : "text-muted-foreground active:bg-muted/50"
                    }`}
                  >
                    <Icon className={`w-5 h-5 transition-all duration-300 ${isActive ? 'scale-110' : ''}`} />
                  </div>
                  
                  {/* Active Indicator Dot */}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-1 w-1.5 h-1.5 rounded-full bg-primary"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>
      </motion.nav>

      {/* Desktop Navigation */}
      <motion.nav
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="hidden md:flex fixed left-4 lg:left-6 top-0 bottom-0 z-50 items-center"
      >
      <div className="bg-card/95 backdrop-blur-md border rounded-2xl p-3 shadow-lg">
        <div className="flex flex-col items-center gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-10 lg:w-11 h-10 lg:h-11 rounded-xl flex items-center justify-center transition-all duration-200 group relative ${
                  isActive
                    ? "bg-primary text-white shadow-md"
                    : "hover:bg-muted text-muted-foreground hover:text-foreground"
                }`}
                title={item.label}
              >
                <Icon className="w-3.5 lg:w-4 h-3.5 lg:h-4" />
                
                {/* Tooltip */}
                <div className={`absolute left-12 lg:left-14 px-2 py-1 bg-foreground text-background text-xs font-medium rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10`}>
                  {item.label}
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 border-2 border-transparent border-r-foreground"></div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </motion.nav>
    </>
  );
};

export default Navigation;