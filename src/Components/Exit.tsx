'use client';

import { useEffect, useState } from 'react';
import React from 'react';
import '../Styles/exit.css'; // Ensure you have the CSS for styling
const ExitIntentPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsMobile(isTouchDevice);

    // Desktop exit intent
    const handleMouseLeave = (e: MouseEvent) => {
      if (!isTouchDevice && e.clientY <= 0) {
        setShowPopup(true);
      }
    };

    // Mobile idle timeout
    const idleTimeout = setTimeout(() => {
      if (isTouchDevice) {
        setShowPopup(true);
      }
    }, 30000); // 30 seconds

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(idleTimeout);
    };
  }, []);

  const handleClose = () => setShowPopup(false);

  if (!showPopup) return null;

  return (
    <div className="exit-popup-overlay">
      <div className="exit-popup">
        <h2>Wait! Before You Go...</h2>
        <p>Don’t miss out on our limited-time offer!</p>

        <button onClick={handleClose}>Close</button>
      </div>
    </div>      
  );
};

export default ExitIntentPopup;
