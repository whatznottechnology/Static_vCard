import { useState } from "react";
import { motion } from "framer-motion";
import { Download, Share2, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { generateVCard } from "@/lib/vcard";
import profilePhoto from "@/assets/profile-photo.png";
import ShareDialog from "./ShareDialog";

const Header = () => {
  const [shareDialogOpen, setShareDialogOpen] = useState(false);

  const handleDownloadVCard = () => {
    const vcard = generateVCard();
    const blob = new Blob([vcard], { type: "text/vcard" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "pritam-mandal-contact.vcf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <header className="pt-24 md:pt-28 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-3xl p-8 md:p-12 card-shadow text-center space-y-8"
        >
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-2xl opacity-20 animate-pulse" />
              <img
                src={profilePhoto}
                alt="Pritam Mandal"
                className="relative w-32 h-32 md:w-40 md:h-40 object-cover rounded-full ring-4 ring-white dark:ring-gray-800 shadow-lg"
              />
            </div>
          </motion.div>

          {/* Name & Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-2"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-foreground">
              Pritam Mandal
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-medium">
              Solo Entrepreneur & Developer
            </p>
            <p className="text-base md:text-lg text-muted-foreground">
              Founder of{" "}
              <a 
                href="https://whatznot.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary font-semibold hover:underline hover:text-primary/80 smooth-transition"
              >
                whatznot.com
              </a>
              {" "}&{" "}
              <a 
                href="https://servicemedium.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary font-semibold hover:underline hover:text-primary/80 smooth-transition"
              >
                servicemedium.com
              </a>
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col gap-4"
          >
            {/* Primary Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleDownloadVCard}
                size="lg"
                className="bg-primary hover:bg-primary/90 dark:bg-primary dark:hover:bg-primary/90 text-white font-medium rounded-full px-8 shadow-md hover:shadow-lg smooth-transition"
              >
                <Download className="mr-2 h-5 w-5" />
                Exchange Contact
              </Button>
              <Button
                onClick={() => setShareDialogOpen(true)}
                size="lg"
                variant="outline"
                className="border-2 border-primary dark:border-primary text-primary dark:text-primary hover:bg-primary dark:hover:bg-primary hover:text-white dark:hover:text-white hover:border-primary dark:hover:border-primary font-medium rounded-full px-8 smooth-transition"
              >
                <Share2 className="mr-2 h-5 w-5" />
                Share Profile
              </Button>
            </div>

            {/* Call & WhatsApp Buttons */}
            <div className="grid grid-cols-2 gap-3 sm:flex sm:gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-green-600 dark:border-green-500 text-green-700 dark:text-green-400 hover:bg-green-600 dark:hover:bg-green-600 hover:text-white dark:hover:text-white hover:border-green-600 dark:hover:border-green-600 font-medium rounded-full px-6 sm:px-8 smooth-transition group"
              >
                <a href="tel:+919735151074">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-green-600 dark:border-green-500 text-green-700 dark:text-green-400 hover:bg-green-600 dark:hover:bg-green-600 hover:text-white dark:hover:text-white hover:border-green-600 dark:hover:border-green-600 font-medium rounded-full px-6 sm:px-8 smooth-transition group"
              >
                <a href="https://wa.me/919735151074" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Share Dialog */}
      <ShareDialog open={shareDialogOpen} onOpenChange={setShareDialogOpen} />
    </header>
  );
};

export default Header;
