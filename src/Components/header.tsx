import React, { useState, useEffect } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaBars, FaTimes, FaChevronDown, FaStar } from 'react-icons/fa';
import '../Styles/header.css';
import image from '../images/logo2.png';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMobileCTA, setShowMobileCTA] = useState(false);

  // Handle scroll for sticky header and mobile CTA
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
      setShowMobileCTA(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu and prevent body scroll
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-bar-container">
          <div className="contact-info">
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <span>Boise, Idaho 83704</span>
            </div>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <span>contact@bravoroofingidaho.com</span>
            </div>
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <span>(208) 995-0912</span>
            </div>
          </div>
          <div className="social-links-header">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`main-header ${isSticky ? 'sticky' : ''}`}>
        <div className="header-container">
          <a href="/" className="logo">
            <img 
              src={image} 
              alt="Bravo Roofing Idaho"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <div className="nav-item">
              <a href="/#" className="nav-link">Home</a>
            </div>
            <div className="nav-item">
              <a href="#about" className="nav-link">About Us</a>
            </div>
            <div className="nav-item">
              <a href="#services" className="nav-link">Services</a>
            </div>
            <div className="nav-item">
              <a href="#portfolio" className="nav-link">Portfolio</a>
            </div>
            <div className="nav-item">
              <a href="#reviews" className="nav-link">Reviews</a>
            </div>
            <div className="nav-item">
              <a href="#faq" className="nav-link">FAQ</a>
            </div>
          </nav>

          {/* Desktop CTAs */}
          <div className="header-cta">
           
            <a href="#estimate" className="estimate-btn btn-primary">
              <span className="btn-icon">📋</span>
              <span className="btn-text">Free Estimate</span>
              <div className="btn-shine"></div>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-menu-toggle" 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`mobile-overlay ${isMenuOpen ? 'open' : ''}`} 
        onClick={toggleMenu}
      />
      
      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-header">
          
          <button
            className="mobile-menu-close"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <div className="close-icon">
              <span></span>
              <span></span>
            </div>
          </button>
        </div>

        <div className="mobile-content">
          <nav className="mobile-nav">
            <a href="#" className="mobile-nav-link" onClick={toggleMenu}>
              <span className="nav-text">Home</span>
              <span className="nav-arrow">→</span>
            </a>
            <a href="#" className="mobile-nav-link" onClick={toggleMenu}>
              <span className="nav-text">About Us</span>
              <span className="nav-arrow">→</span>
            </a>
            <a href="#services" className="mobile-nav-link" onClick={toggleMenu}>
              <span className="nav-text">Services</span>
              <span className="nav-arrow">→</span>
            </a>
            <a href="#" className="mobile-nav-link" onClick={toggleMenu}>
              <span className="nav-text">Areas We Serve</span>
              <span className="nav-arrow">→</span>
            </a>
            <a href="#" className="mobile-nav-link" onClick={toggleMenu}>
              <span className="nav-text">Reviews</span>
              <span className="nav-arrow">→</span>
            </a>
            <a href="#" className="mobile-nav-link" onClick={toggleMenu}>
              <span className="nav-text">Contact</span>
              <span className="nav-arrow">→</span>
            </a>
          </nav>

          <div className="mobile-cta">
            <a href="tel:2089950912" className="mobile-phone btn-secondary">
              <FaPhone className="phone-icon" />
              <span>(208) 995-0912</span>
            </a>
            <a href="#estimate" className="mobile-estimate-btn btn-primary" onClick={toggleMenu}>
              <span className="btn-icon">📋</span>
              <span>Free Estimate</span>
              <div className="btn-shine"></div>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Sticky CTA */}
      <div className={`mobile-sticky-cta ${showMobileCTA ? 'show' : ''}`}>
        <a href="tel:2089950912" className="sticky-cta-link">
          <FaStar className="star-icon" /> 57 All 5-Star Reviews — 
          <span className="call-text"> 📞 Tap to Call </span>
          (208) 555-ROOF
        </a>
      </div>
    </>
  );
};

export default Header;