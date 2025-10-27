import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center space-y-2"
      >
        <p className="text-muted-foreground text-sm md:text-base">
          © 2025 <span className="font-semibold text-foreground">Pulkart</span>. All Rights Reserved.
        </p>
        <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
          Built with{" "}
          <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />{" "}
          by <span className="font-semibold text-foreground">Subhojit Das</span>
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
