import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const WhatsAppButton = ({ phoneNumber = '919999999999', message = 'Hello! I am interested in your real estate services.' }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* WhatsApp Floating Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <button
          onClick={handleWhatsAppClick}
          className="relative group bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
          aria-label="Chat on WhatsApp"
        >
          {/* Pulse Animation */}
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20" />

          {/* Icon */}
          <motion.div
            animate={{ rotate: [0, -5, 5, -5, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
          >
            <MessageCircle className="w-6 h-6 fill-current" />
          </motion.div>

          {/* Badge for "Chat with us" */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-sm px-4 py-2 rounded-lg whitespace-nowrap"
              >
                <span>Chat with us on WhatsApp!</span>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
                  <div className="border-8 border-transparent border-l-gray-800" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </motion.div>
    </>
  );
};

export default WhatsAppButton;