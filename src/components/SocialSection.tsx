import { motion } from "framer-motion";
import { Instagram, Facebook, Linkedin, Github, Briefcase } from "lucide-react";

const socialLinks = [
  {
    name: "Facebook",
    icon: Facebook,
    url: "https://www.facebook.com/hellopritammandal/",
    color: "bg-gradient-to-br from-blue-600 to-blue-500",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "http://instagram.com/hello_pritam_",
    color: "bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/hello-pritam/",
    color: "bg-gradient-to-br from-blue-700 to-blue-600",
  },
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/whatznottechnology/",
    color: "bg-gradient-to-br from-gray-800 to-gray-700",
  },
  {
    name: "Freelancer",
    icon: Briefcase,
    url: "https://www.freelancer.com/u/Whatznot",
    color: "bg-gradient-to-br from-blue-500 to-cyan-500",
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

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
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
                <div className="flex flex-col items-center gap-3 p-6 bg-secondary/50 hover:bg-secondary rounded-2xl smooth-transition h-full">
                  <div className={`w-14 h-14 rounded-full ${social.color} flex items-center justify-center shadow-md group-hover:shadow-lg smooth-transition`}>
                    <social.icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="font-semibold text-foreground text-center text-sm">{social.name}</span>
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
