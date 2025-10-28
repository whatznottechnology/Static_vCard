import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { Copy, Check, Download, Facebook, Twitter, Linkedin, Send } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { generateVCard } from "@/lib/vcard";

interface ShareDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ShareDialog = ({ open, onOpenChange }: ShareDialogProps) => {
  const [copied, setCopied] = useState(false);
  const profileUrl = window.location.href;
  
  // Create download URL - use full URL for QR code
  const baseUrl = window.location.origin;
  const downloadUrl = `${baseUrl}/download-vcard`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(profileUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleDownloadQR = () => {
    const svg = document.getElementById("share-qr-code");
    if (!svg) return;

    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();

    canvas.width = 1000;
    canvas.height = 1000;

    img.onload = () => {
      if (ctx) {
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, 1000, 1000);

        canvas.toBlob((blob) => {
          if (blob) {
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = "pritam-mandal-vcard-qr.png";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
          }
        });
      }
    };

    img.src = "data:image/svg+xml;base64," + btoa(svgData);
  };

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

  // Social share handlers
  const handleShareFacebook = () => {
    const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(profileUrl)}`;
    window.open(fbUrl, '_blank', 'width=600,height=400');
  };

  const handleShareTwitter = () => {
    const text = "Check out Pritam Mandal's vCard - Solo Entrepreneur & Developer";
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(profileUrl)}&text=${encodeURIComponent(text)}`;
    window.open(twitterUrl, '_blank', 'width=600,height=400');
  };

  const handleShareLinkedIn = () => {
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(profileUrl)}`;
    window.open(linkedInUrl, '_blank', 'width=600,height=400');
  };

  const handleShareWhatsApp = () => {
    const text = "Check out Pritam Mandal's vCard - Solo Entrepreneur & Developer";
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text + ' ' + profileUrl)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleShareTelegram = () => {
    const text = "Check out Pritam Mandal's vCard - Solo Entrepreneur & Developer";
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(profileUrl)}&text=${encodeURIComponent(text)}`;
    window.open(telegramUrl, '_blank');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Share Profile
          </DialogTitle>
          <DialogDescription className="text-center">
            Scan the QR code or share via social media
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* QR Code */}
          <div className="flex flex-col items-center justify-center">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <QRCodeSVG
                id="share-qr-code"
                value={downloadUrl}
                size={200}
                level="H"
                includeMargin={false}
                fgColor="#059669"
              />
            </div>
            <p className="mt-4 text-sm text-muted-foreground text-center">
              Scan to download vCard instantly
            </p>
          </div>

          {/* Download Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <Button
              onClick={handleDownloadQR}
              variant="outline"
              className="border-2 hover:bg-secondary dark:hover:bg-secondary smooth-transition"
            >
              <Download className="mr-2 h-4 w-4" />
              QR Code
            </Button>
            <Button
              onClick={handleDownloadVCard}
              variant="outline"
              className="border-2 hover:bg-secondary dark:hover:bg-secondary smooth-transition"
            >
              <Download className="mr-2 h-4 w-4" />
              vCard
            </Button>
          </div>

          {/* Social Share Buttons */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-muted-foreground">
              Share on Social Media
            </label>
            <div className="grid grid-cols-2 gap-3">
              <Button
                onClick={handleShareWhatsApp}
                variant="outline"
                className="border-2 border-green-600 dark:border-green-500 text-green-700 dark:text-green-400 hover:bg-green-600 dark:hover:bg-green-600 hover:text-white dark:hover:text-white smooth-transition"
              >
                <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp
              </Button>
              <Button
                onClick={handleShareFacebook}
                variant="outline"
                className="border-2 border-blue-600 dark:border-blue-500 text-blue-700 dark:text-blue-400 hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white dark:hover:text-white smooth-transition"
              >
                <Facebook className="mr-2 h-4 w-4" />
                Facebook
              </Button>
              <Button
                onClick={handleShareTwitter}
                variant="outline"
                className="border-2 border-sky-600 dark:border-sky-500 text-sky-700 dark:text-sky-400 hover:bg-sky-600 dark:hover:bg-sky-600 hover:text-white dark:hover:text-white smooth-transition"
              >
                <Twitter className="mr-2 h-4 w-4" />
                Twitter
              </Button>
              <Button
                onClick={handleShareLinkedIn}
                variant="outline"
                className="border-2 border-blue-700 dark:border-blue-600 text-blue-800 dark:text-blue-400 hover:bg-blue-700 dark:hover:bg-blue-700 hover:text-white dark:hover:text-white smooth-transition"
              >
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Button>
              <Button
                onClick={handleShareTelegram}
                variant="outline"
                className="border-2 border-sky-500 dark:border-sky-400 text-sky-600 dark:text-sky-300 hover:bg-sky-500 dark:hover:bg-sky-500 hover:text-white dark:hover:text-white smooth-transition col-span-2"
              >
                <Send className="mr-2 h-4 w-4" />
                Telegram
              </Button>
            </div>
          </div>

          {/* Share Link */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">
              Share Link
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={profileUrl}
                readOnly
                className="flex-1 px-4 py-2 rounded-lg border-2 border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button
                onClick={handleCopyLink}
                variant="outline"
                size="icon"
                className="border-2 hover:bg-secondary dark:hover:bg-secondary smooth-transition"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-green-600" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
            {copied && (
              <p className="text-xs text-green-600 dark:text-green-500">
                Link copied to clipboard!
              </p>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShareDialog;
