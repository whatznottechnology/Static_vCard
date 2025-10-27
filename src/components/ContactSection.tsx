import { motion } from "framer-motion";
import { Phone, Mail, Globe, MapPin } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";

const contactItems = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8653563069",
    href: "tel:+918653563069",
  },
  {
    icon: Mail,
    label: "Email",
    value: "pulkart20692025@gmail.com",
    href: "mailto:pulkart20692025@gmail.com",
  },
  {
    icon: Globe,
    label: "Website",
    value: "pulkart.com",
    href: "https://pulkart.com",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Narayanpur, Malda, West Bengal, India - 732141",
    href: "https://maps.google.com/?q=Narayanpur,Malda,West+Bengal,India,732141",
  },
];

const ContactSection = () => {
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
            Contact Information
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Contact Details */}
            <div className="space-y-4">
              {contactItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.label === "Website" ? "_blank" : undefined}
                  rel={item.label === "Website" ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-secondary/50 hover:bg-secondary smooth-transition group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 smooth-transition">
                    <item.icon className="w-6 h-6 text-primary group-hover:text-white smooth-transition" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                    <p className="font-semibold text-foreground break-all">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* QR Code */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-col items-center justify-center"
            >
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <QRCodeSVG
                  value="https://pulkart.com"
                  size={180}
                  level="H"
                  includeMargin={false}
                  fgColor="#22c55e"
                />
              </div>
              <p className="mt-4 text-sm text-muted-foreground font-medium">
                Scan to visit website
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
