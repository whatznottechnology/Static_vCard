import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, User, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { generateVCard } from "@/lib/vcard";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDownloadVCard = () => {
    const vcard = generateVCard();
    const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "pritam-mandal-contact.vcf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create WhatsApp message
      const message = `Hi Pritam! 👋

I'd like to connect with you.

*Name:* ${formData.name}
*Phone:* ${formData.phone}`;

      // URL encode the message
      const whatsappUrl = `https://wa.me/919735151074?text=${encodeURIComponent(message)}`;
      
      // Show success
      setIsSuccess(true);
      
      // Auto download vCard after 1 second
      setTimeout(() => {
        handleDownloadVCard();
      }, 1000);
      
      // Open WhatsApp after 1.5 seconds
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
      }, 1500);
      
      // Reset form
      setFormData({ name: "", phone: "" });
      
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to open WhatsApp. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-card rounded-3xl p-8 md:p-12 card-shadow text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="w-20 h-20 mx-auto mb-6 bg-green-500/10 rounded-full flex items-center justify-center"
            >
              <CheckCircle className="w-12 h-12 text-green-600 dark:text-green-500" />
            </motion.div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Thank You! 🎉
            </h2>
            <p className="text-muted-foreground mb-6">
              Your details have been received!
              <br />
              <span className="text-sm">Opening WhatsApp to connect with me...</span>
            </p>
            <p className="text-sm text-primary font-semibold mb-6">
              ✅ vCard is downloading automatically...
            </p>
            <Button
              onClick={() => setIsSuccess(false)}
              variant="outline"
              className="border-2 hover:bg-secondary dark:hover:bg-secondary"
            >
              Send Another Message
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

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
            Let's Connect
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground text-center mb-8"
          >
            Share your details and connect with me on WhatsApp
          </motion.p>

          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
            {/* Name Field */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-2"
            >
              <Label htmlFor="name" className="text-foreground font-medium flex items-center gap-2">
                <User className="w-4 h-4 text-primary" />
                Full Name
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
                className="h-12 border-2 focus:border-primary dark:focus:border-primary"
              />
            </motion.div>

            {/* Phone Field */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="space-y-2"
            >
              <Label htmlFor="phone" className="text-foreground font-medium flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                Phone Number
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+91 1234567890"
                className="h-12 border-2 focus:border-primary dark:focus:border-primary"
              />
            </motion.div>

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 bg-green-600 hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700 text-white font-semibold rounded-full text-lg shadow-md hover:shadow-lg smooth-transition"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Opening WhatsApp...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Connect on WhatsApp
                  </>
                )}
              </Button>
            </motion.div>

            <p className="text-xs text-muted-foreground text-center">
              By submitting, you'll receive my vCard automatically and be redirected to WhatsApp.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
