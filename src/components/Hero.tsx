import { motion } from "framer-motion";
import { QRCodeSVG } from "qrcode.react";
import { Download, Share2, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { generateVCard, shareProfile } from "@/lib/vcard";

const Hero = () => {
  const handleDownloadVCard = () => {
    const vcard = generateVCard();
    const blob = new Blob([vcard], { type: "text/vcard" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "pulkart-subhojit-das.vcf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-primary/10 blur-3xl"
          style={{ top: "10%", left: "10%" }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-accent/10 blur-3xl"
          style={{ bottom: "10%", right: "10%" }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-2xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-3xl p-8 md:p-12 text-center space-y-8"
        >
          {/* Logo Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="flex justify-center"
          >
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
              <ShoppingBag className="w-10 h-10 md:w-12 md:h-12 text-white" />
            </div>
          </motion.div>

          {/* Brand Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-3">
              Pulkart
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-medium">
              Your Online Store for Quality & Trust
            </p>
          </motion.div>

          {/* QR Code */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center"
          >
            <div className="p-6 bg-white rounded-2xl shadow-lg">
              <QRCodeSVG
                value="https://pulkart.com"
                size={160}
                level="H"
                includeMargin={false}
                fgColor="#7c3aed"
              />
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              onClick={handleDownloadVCard}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-medium rounded-full px-8 shadow-lg hover:shadow-xl smooth-transition"
            >
              <Download className="mr-2 h-5 w-5" />
              Save as vCard
            </Button>
            <Button
              onClick={shareProfile}
              size="lg"
              variant="outline"
              className="border-2 border-primary/30 hover:border-primary hover:bg-primary/10 font-medium rounded-full px-8 smooth-transition"
            >
              <Share2 className="mr-2 h-5 w-5" />
              Share Profile
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
