import { motion } from "framer-motion";

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 mt-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center space-y-3"
      >
        <p className="text-muted-foreground">
          Copyright © {currentYear} <span className="font-semibold text-foreground">Pritam Mandal</span>
        </p>
      </motion.div>
    </footer>
  );
};

export default FooterSection;
