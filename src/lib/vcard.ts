export const generateVCard = (): string => {
  const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Pritam Mandal
N:Mandal;Pritam;;;
ORG:Whatznot Technology
TITLE:Solo Entrepreneur & Developer
TEL;TYPE=CELL:+919735151074
EMAIL:pritammandal@whatznot.com
URL:https://pritam.whatznot.com
URL:https://whatznot.com
URL:https://servicemedium.com
ADR;TYPE=WORK:;;Chakdaha;Nadia;West Bengal;741222;India
NOTE:Solo Entrepreneur with 10+ years experience. Founder of whatznot.com & servicemedium.com. Expert in PHP, Laravel, Django, Python & 15+ technologies.
END:VCARD`;
  
  return vcard;
};

export const shareProfile = async () => {
  const shareData = {
    title: 'Pritam Mandal - Digital Visiting Card',
    text: 'Connect with Pritam Mandal - Solo Entrepreneur & Developer with 10+ years experience. Founder of whatznot.com & servicemedium.com.',
    url: 'https://pritam.whatznot.com',
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
