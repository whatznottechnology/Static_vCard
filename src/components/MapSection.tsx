import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const MapSection = () => {
  return (
    <section className="py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-3xl p-8 md:p-12 card-shadow"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center"
          >
            Our Location
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-center gap-3 text-muted-foreground mb-2">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-lg font-medium">Chakdaha, Nadia, West Bengal</span>
            </div>
            
            <div className="text-center text-muted-foreground text-sm mb-6">
              <p>Chakdaha, Nadia, West Bengal, India - 741222</p>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-md h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14640.123456789012!2d88.51234567890123!3d23.08123456789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8471234567890%3A0x1234567890abcdef!2sChakdaha%2C%20West%20Bengal%20741222%2C%20India!5e0!3m2!1sen!2sin!4v1698765432102"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Chakdaha, Nadia - Pritam Mandal Location"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MapSection;
