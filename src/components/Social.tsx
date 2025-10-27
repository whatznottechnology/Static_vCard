import { motion } from "framer-motion";
import { Globe, Instagram, Facebook, Send } from "lucide-react";

const socialLinks = [
  {
    name: "Website",
    icon: Globe,
    url: "https://pulkart.com",
    color: "from-violet-500 to-purple-600",
    hoverColor: "hover:from-violet-600 hover:to-purple-700",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/pulkart_2025?igsh=MWhncmthMGc0czNvYg==",
    color: "from-pink-500 to-rose-600",
    hoverColor: "hover:from-pink-600 hover:to-rose-700",
  },
  {
    name: "Facebook",
    icon: Facebook,
    url: "https://www.facebook.com/share/15HB7aW2Mtn/",
    color: "from-blue-500 to-indigo-600",
    hoverColor: "hover:from-blue-600 hover:to-indigo-700",
  },
  {
    name: "Telegram",
    icon: Send,
    url: "https://t.me/pulkart",
    color: "from-cyan-500 to-blue-600",
    hoverColor: "hover:from-cyan-600 hover:to-blue-700",
  },
];

const Social = () => {
  return (
    <section id="social" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text"
        >
          Connect With Us
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring" }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="glass-card rounded-2xl p-6 flex flex-col items-center justify-center space-y-3 smooth-transition hover:shadow-2xl group cursor-pointer"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${social.color} ${social.hoverColor} flex items-center justify-center shadow-lg group-hover:shadow-xl smooth-transition`}>
                <social.icon className="w-7 h-7 text-white" />
              </div>
              <span className="text-sm font-semibold text-foreground">
                {social.name}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Social;
