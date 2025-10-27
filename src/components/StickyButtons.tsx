import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";

const StickyButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      <motion.a
        href="tel:+918653563069"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 rounded-full bg-primary shadow-lg hover:shadow-xl flex items-center justify-center smooth-transition group"
        aria-label="Call"
      >
        <Phone className="w-6 h-6 text-white group-hover:rotate-12 smooth-transition" />
      </motion.a>

      <motion.a
        href="mailto:pulkart20692025@gmail.com"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 rounded-full bg-accent shadow-lg hover:shadow-xl flex items-center justify-center smooth-transition group"
        aria-label="Email"
      >
        <Mail className="w-6 h-6 text-white group-hover:rotate-12 smooth-transition" />
      </motion.a>
    </div>
  );
};

export default StickyButtons;
