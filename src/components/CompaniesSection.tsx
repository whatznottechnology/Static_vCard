import { motion } from "framer-motion";
import { Building2, ExternalLink } from "lucide-react";
import whatznotLogo from "@/assets/logo.5ef31c35.svg";
import serviceMediumLogo from "@/assets/Screenshot_2025-10-28_201227-removebg-preview.png";

const CompaniesSection = () => {
  const companies = [
    {
      name: "Whatznot Technology",
      logo: whatznotLogo,
      description: "A leading technology solutions provider specializing in web development, mobile applications, and digital transformation services.",
      website: "https://whatznot.com",
      tagline: "Innovative Tech Solutions"
    },
    {
      name: "Service Medium",
      logo: serviceMediumLogo,
      description: "A comprehensive service marketplace platform connecting service providers with customers for seamless business operations.",
      website: "https://servicemedium.com",
      tagline: "Your Service Marketplace"
    }
  ];

  return (
    <section id="companies" className="py-12 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div 
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center gap-3 mb-4 bg-primary/10 px-6 py-3 rounded-full"
          >
            <Building2 className="w-7 h-7 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              My Companies
            </h2>
          </motion.div>
          <p className="text-muted-foreground text-lg mt-4">
            Building innovative solutions across multiple platforms
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-card rounded-3xl p-8 md:p-10 card-shadow hover:shadow-xl smooth-transition border border-border/50 hover:border-primary/30"
            >
              {/* Logo Container with fixed aspect ratio */}
              <div className="flex items-center justify-center mb-8 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6 h-32">
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="max-h-20 max-w-full object-contain filter group-hover:scale-105 smooth-transition"
                />
              </div>

              {/* Tagline Badge */}
              <div className="flex justify-center mb-4">
                <span className="inline-block px-4 py-1.5 text-xs font-semibold text-primary bg-primary/10 rounded-full uppercase tracking-wider">
                  {company.tagline}
                </span>
              </div>

              {/* Company Name */}
              <h3 className="text-2xl font-bold text-foreground text-center mb-4 group-hover:text-primary smooth-transition">
                {company.name}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-center mb-8 leading-relaxed text-sm md:text-base">
                {company.description}
              </p>

              {/* Visit Website Link */}
              <a
                href={company.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-primary hover:text-primary/80 font-semibold smooth-transition group/link"
              >
                <span>Visit Website</span>
                <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 smooth-transition" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;
