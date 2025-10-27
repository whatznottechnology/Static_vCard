import { motion } from "framer-motion";
import { Phone, Mail, Globe } from "lucide-react";

const contactItems = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8653563069",
    href: "tel:+918653563069",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: Mail,
    label: "Email",
    value: "pulkart20692025@gmail.com",
    href: "mailto:pulkart20692025@gmail.com",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: Globe,
    label: "Website",
    value: "pulkart.com",
    href: "https://pulkart.com",
    color: "from-purple-500 to-pink-600",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text"
        >
          Get in Touch
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.label === "Website" ? "_blank" : undefined}
              rel={item.label === "Website" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="glass-card rounded-2xl p-6 smooth-transition hover:shadow-2xl group cursor-pointer"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:shadow-xl smooth-transition`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">
                    {item.label}
                  </p>
                  <p className="text-sm md:text-base font-semibold text-foreground break-all">
                    {item.value}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
