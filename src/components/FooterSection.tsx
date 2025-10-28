import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, url: "https://github.com/whatznottechnology", label: "GitHub" },
    { icon: Linkedin, url: "https://www.linkedin.com/in/pritam-mandal-whatznot", label: "LinkedIn" },
    { icon: Twitter, url: "https://twitter.com/pritammandal", label: "Twitter" },
    { icon: Instagram, url: "https://www.instagram.com/pritam_mandal_whatznot", label: "Instagram" },
    { icon: Facebook, url: "https://www.facebook.com/pritam.mandal.whatznot", label: "Facebook" },
  ];

  const companyLinks = [
    { name: "Whatznot Technology", url: "https://whatznot.com" },
    { name: "Service Medium", url: "https://servicemedium.com" },
  ];

  const quickLinks = [
    { name: "Home", href: "#header" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "Companies", href: "#companies" },
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-background via-muted/30 to-muted/50 py-16 px-4 border-t border-border/50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)",
          backgroundSize: "40px 40px"
        }} />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          {/* About Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-5"
          >
            <h3 className="text-xl font-bold text-foreground">Pritam Mandal</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Full Stack Developer & Tech Entrepreneur building innovative digital solutions.
            </p>
            <div className="space-y-3 text-sm">
              <a href="tel:+919735151074" className="flex items-center gap-3 text-muted-foreground hover:text-primary smooth-transition group">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 smooth-transition">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+91 9735151074</span>
              </a>
              <a href="mailto:pritammandal@whatznot.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary smooth-transition group">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 smooth-transition">
                  <Mail className="w-4 h-4" />
                </div>
                <span>pritammandal@whatznot.com</span>
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-5"
          >
            <h3 className="text-xl font-bold text-foreground">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary smooth-transition inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary smooth-transition" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Companies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-5"
          >
            <h3 className="text-xl font-bold text-foreground">My Companies</h3>
            <ul className="space-y-3">
              {companyLinks.map((company) => (
                <li key={company.name}>
                  <a
                    href={company.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary smooth-transition inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary smooth-transition" />
                    {company.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-5"
          >
            <h3 className="text-xl font-bold text-foreground">Follow Me</h3>
            <div className="grid grid-cols-2 gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-card border border-border hover:border-primary text-muted-foreground hover:text-primary hover:shadow-md smooth-transition group"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4 group-hover:scale-110 smooth-transition" />
                    <span className="text-xs font-medium">{social.label}</span>
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/50 mb-8" />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-sm text-muted-foreground"
        >
          <p>
            Copyright © {currentYear} <span className="font-semibold text-foreground">Pritam Mandal</span>. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;
