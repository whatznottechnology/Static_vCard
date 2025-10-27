import { motion } from "framer-motion";

const FooterSection = () => {
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
          Copyright © 2025 <span className="font-semibold text-foreground">Pulkart</span>
        </p>
        <p className="text-sm text-muted-foreground">
          Designed & Developed by <span className="font-semibold text-primary">Subhojit Das</span>
        </p>
      </motion.div>
    </footer>
  );
};

export default FooterSection;
