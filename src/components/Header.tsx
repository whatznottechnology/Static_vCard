import { motion } from "framer-motion";
import { Download, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { generateVCard, shareProfile } from "@/lib/vcard";
import profilePhoto from "@/assets/profile-photo.png";

const Header = () => {
  const handleDownloadVCard = () => {
    const vcard = generateVCard();
    const blob = new Blob([vcard], { type: "text/vcard" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "subhojit-das-pulkart.vcf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <header className="pt-16 pb-12 px-4">
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
                alt="Subhojit Das"
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
              Subhojit Das
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-medium">
              Founder & Owner of <span className="text-primary font-semibold">Pulkart</span>
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              onClick={handleDownloadVCard}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-medium rounded-full px-8 shadow-md hover:shadow-lg smooth-transition"
            >
              <Download className="mr-2 h-5 w-5" />
              Exchange Contact
            </Button>
            <Button
              onClick={shareProfile}
              size="lg"
              variant="outline"
              className="border-2 hover:bg-secondary font-medium rounded-full px-8 smooth-transition"
            >
              <Share2 className="mr-2 h-5 w-5" />
              Share Profile
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
