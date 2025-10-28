import { useEffect } from "react";
import { Download } from "lucide-react";
import { generateVCard } from "@/lib/vcard";
import { Button } from "@/components/ui/button";

const DownloadVCard = () => {
  const handleDownload = () => {
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

  // Auto-download on page load
  useEffect(() => {
    // Small delay to ensure page is loaded
    const timer = setTimeout(() => {
      handleDownload();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/5 px-4">
      <div className="max-w-md w-full bg-card rounded-3xl p-8 md:p-12 card-shadow text-center space-y-6">
        <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
          <Download className="w-10 h-10 text-primary" />
        </div>
        
        <div className="space-y-2">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            Download Contact
          </h1>
          <p className="text-muted-foreground">
            Pritam Mandal's vCard is downloading...
          </p>
        </div>

        <div className="pt-4 space-y-4">
          <p className="text-sm text-muted-foreground">
            If the download doesn't start automatically, click the button below:
          </p>
          
          <Button
            onClick={handleDownload}
            size="lg"
            className="w-full bg-primary hover:bg-primary/90 dark:bg-primary dark:hover:bg-primary/90 text-white font-medium rounded-full px-8 shadow-md hover:shadow-lg smooth-transition"
          >
            <Download className="mr-2 h-5 w-5" />
            Download vCard
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full border-2 border-primary dark:border-primary text-primary dark:text-primary hover:bg-primary dark:hover:bg-primary hover:text-white dark:hover:text-white font-medium rounded-full px-8 smooth-transition"
          >
            <a href="/">
              View Full Profile
            </a>
          </Button>
        </div>

        <div className="pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground">
            Solo Entrepreneur & Developer
            <br />
            Founder of{" "}
            <a 
              href="https://whatznot.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              whatznot.com
            </a>
            {" "}&{" "}
            <a 
              href="https://servicemedium.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              servicemedium.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DownloadVCard;
