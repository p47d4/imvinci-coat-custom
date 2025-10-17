import React from 'react';

export const WhatsAppButton = () => {
  const phoneNumber = "97466040822";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <a
      href={whatsappUrl}
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white p-3 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 group cursor-pointer"
      aria-label="Contact us on WhatsApp"
    >
      <img 
        src="/whatsapp-logo.svg" 
        alt="WhatsApp" 
        className="w-8 h-8"
      />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Chat with us
      </span>
    </a>
  );
};
