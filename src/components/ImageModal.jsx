import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const ImageModal = ({ isOpen, imageSrc, altText, onClose }) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 99999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0, 0, 0, 0.8)', backdropFilter: 'blur(4px)' }}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            style={{ position: 'relative', backgroundColor: '#fff', borderRadius: '0.75rem', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', maxWidth: '56rem', width: '100%', maxHeight: '90vh', minHeight: '50vh', display: 'flex', flexDirection: 'column', zIndex: 10 }}
          >
            <button
              onClick={onClose}
              style={{ position: 'absolute', top: '1rem', right: '1rem', padding: '0.5rem', backgroundColor: 'rgba(0, 0, 0, 0.5)', color: '#fff', borderRadius: '50%', zIndex: 20, border: 'none', cursor: 'pointer' }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'}
            >
              <X size={24} />
            </button>
            
            <div style={{ width: '100%', flexGrow: 1, padding: '1rem', backgroundColor: '#111827', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
              <img
                src={imageSrc}
                alt={altText}
                style={{ display: 'block', maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto', objectFit: 'contain' }}
              />
            </div>
            {altText && (
              <div style={{ padding: '1rem', backgroundColor: '#fff', borderTop: '1px solid #e5e7eb', textAlign: 'center', color: '#1f2937', fontWeight: 500 }}>
                {altText}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  return typeof document !== 'undefined' ? createPortal(modalContent, document.body) : null;
};

export default ImageModal;
