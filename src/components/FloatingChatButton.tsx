import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import ContactFormModal from './ContactFormModal';

const FloatingChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      {/* Floating Chat Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="fixed bottom-6 right-6 z-50"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatePresence>
          {!isOpen && (
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(true)}
              className="group relative flex items-center gap-3 gradient-gold text-foreground px-5 py-4 md:px-6 md:py-4 rounded-full shadow-xl hover:shadow-gold transition-all duration-300 overflow-hidden"
            >
              {/* Animated background shimmer */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{
                  x: isHovered ? ['-100%', '200%'] : ['-100%', '-100%'],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
              />
              
              <motion.div
                animate={{ 
                  rotate: isHovered ? [0, -10, 10, -10, 0] : 0,
                }}
                transition={{
                  duration: 0.6,
                }}
              >
                <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
              </motion.div>
              
              <span className="font-semibold text-base md:text-lg hidden sm:inline-block">
                Enquire Now
              </span>
              
              {/* Pulse animation ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-accent"
                animate={{
                  scale: [1, 1.4, 1.4, 1],
                  opacity: [0.6, 0, 0, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </motion.button>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Contact Form Modal */}
      <ContactFormModal
        open={isOpen}
        onOpenChange={setIsOpen}
        title="Enquire About Properties"
      />
    </>
  );
};

export default FloatingChatButton;

