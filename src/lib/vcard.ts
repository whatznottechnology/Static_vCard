export const generateVCard = (): string => {
  const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Subhojit Das
N:Das;Subhojit;;;
ORG:Pulkart
TITLE:Founder & Owner
TEL;TYPE=CELL:+918653563069
EMAIL:pulkart20692025@gmail.com
URL:https://pulkart.com
NOTE:Founder of Pulkart - Your Online Store for Quality & Trust
END:VCARD`;
  
  return vcard;
};

export const shareProfile = async () => {
  const shareData = {
    title: 'Pulkart - Digital Visiting Card',
    text: 'Connect with Pulkart - Your Online Store for Quality & Trust. Founded by Subhojit Das.',
    url: 'https://pulkart.com',
  };

  try {
    if (navigator.share) {
      await navigator.share(shareData);
    } else {
      // Fallback: Copy to clipboard
      await navigator.clipboard.writeText(shareData.url);
      alert('Link copied to clipboard!');
    }
  } catch (error) {
    console.error('Error sharing:', error);
  }
};
