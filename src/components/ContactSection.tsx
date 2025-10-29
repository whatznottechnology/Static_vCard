import { motion } from "framer-motion";
import { Phone, Mail, Globe, MapPin, MessageCircle } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { Button } from "@/components/ui/button";

const contactItems = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9735151074",
    href: "tel:+919735151074",
    description: "Available Mon-Sat, 10 AM - 7 PM IST",
  },
  {
    icon: Mail,
    label: "Email",
    value: "pritam@whatznot.com",
    href: "mailto:pritam@whatznot.com",
    description: "Professional inquiries welcome",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Chakdaha, Nadia, West Bengal, India - 741222",
    href: "https://maps.google.com/?q=Chakdaha,Nadia,West+Bengal,India,741222",
    description: "Open for local collaborations",
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
            className="text-2xl md:text-3xl font-bold text-foreground mb-2 text-center"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground text-center mb-8"
          >
            Feel free to reach out for collaborations, projects, or just to connect!
          </motion.p>

          {/* Quick Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <Button
              asChild
              size="lg"
              className="bg-green-600 hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700 text-white font-medium rounded-full px-8 shadow-md hover:shadow-lg smooth-transition"
            >
              <a href="tel:+919735151074">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-green-600 hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700 text-white font-medium rounded-full px-8 shadow-md hover:shadow-lg smooth-transition"
            >
              <a href="https://wa.me/919735151074" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp
              </a>
            </Button>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Contact Details */}
            <div className="space-y-4">
              {contactItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.label === "Website" || item.label === "Service Portal" ? "_blank" : undefined}
                  rel={item.label === "Website" || item.label === "Service Portal" ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-secondary/50 hover:bg-secondary/80 dark:hover:bg-secondary smooth-transition group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary dark:group-hover:bg-primary group-hover:scale-110 smooth-transition flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary group-hover:text-white dark:group-hover:text-white smooth-transition" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                    <p className="font-semibold text-foreground break-words mb-1">{item.value}</p>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* QR Code */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="flex flex-col items-center justify-center"
            >
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <QRCodeSVG
                  value="https://pritam.whatznot.com/download-vcard"
                  size={180}
                  level="H"
                  includeMargin={false}
                  fgColor="#059669"
                />
              </div>
              <p className="mt-4 text-sm text-muted-foreground font-medium text-center">
                Scan to download vCard
              </p>
              <p className="mt-2 text-xs text-muted-foreground text-center max-w-xs">
                Save contact instantly
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
