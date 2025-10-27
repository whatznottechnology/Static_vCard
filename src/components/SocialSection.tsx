import { motion } from "framer-motion";
import { Instagram, Facebook, Send, Globe } from "lucide-react";

const socialLinks = [
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/pulkart_2025?igsh=MWhncmthMGc0czNvYg==",
    color: "bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500",
  },
  {
    name: "Facebook",
    icon: Facebook,
    url: "https://www.facebook.com/share/15HB7aW2Mtn/",
    color: "bg-gradient-to-br from-blue-600 to-blue-500",
  },
  {
    name: "Telegram",
    icon: Send,
    url: "https://t.me/pulkart",
    color: "bg-gradient-to-br from-sky-500 to-blue-600",
  },
  {
    name: "Website",
    icon: Globe,
    url: "https://pulkart.com",
    color: "bg-gradient-to-br from-green-600 to-emerald-500",
  },
];

const SocialSection = () => {
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
            className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center"
          >
            Connect on Social Media
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group"
              >
                <div className="flex items-center gap-3 px-6 py-4 bg-secondary/50 hover:bg-secondary rounded-full smooth-transition">
                  <div className={`w-10 h-10 rounded-full ${social.color} flex items-center justify-center shadow-md group-hover:shadow-lg smooth-transition`}>
                    <social.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-semibold text-foreground">{social.name}</span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialSection;
