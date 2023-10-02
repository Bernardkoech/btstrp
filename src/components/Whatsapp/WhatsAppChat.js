import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Import WhatsApp icon from Font Awesome
import "./Whatsapp.css"

const WhatsAppChat = () => {
  const phoneNumber = '+254740087715'; // Replace with your phone number

  return (
    <div className="whatsapp-icon">
      <a
        href={`https://wa.me/${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="whatsapp-icon" />
      </a>
    </div>
  );
};

export default WhatsAppChat;
