import React from 'react';

const WhatsAppChat = () => {
  const phoneNumber = '+254740087715'; // Replace with your phone number

  return (
    <div>
      <a
        href={`https://wa.me/${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Chat on WhatsApp
      </a>
    </div>
  );
};

export default WhatsAppChat;
