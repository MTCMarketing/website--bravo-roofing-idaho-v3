import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import '../Styles/Footer.css';
import logo from '../images/logo2.png';
import NewsletterSubscription from './NewsletterSubscription';

const Footer: React.FC = () => {
  return (
    <div>

       <NewsletterSubscription/>
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info with Logo */}
        <div className="footer-section company-info">
          <div className="footer-logo">
            <img
              src={logo}
              alt="Bravo Roofing Logo"
              className="logo-imag"
            />
           
          </div>
          {/* <p className="company-description">
            Professional roofing services in Boise, ID and surrounding areas.
            Quality workmanship, reliable service, and customer satisfaction guaranteed.
          </p> */}
        </div>

        {/* Contact Info */}
        <div className="footer-section ">
          <h3 className="section-title-f">Contact Us</h3>
          <div className="contact-list">
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <span>(208) 555-ROOF</span>
            </div>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <span>info@bravoroofing.com</span>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <span>Boise, ID 83704</span>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="footer-section services-info">
          <h3 className="section-title-f">Our Services</h3>
          <ul className="services-list">
            <li><a href="/service-1" className="service-link">New Roof Installation</a></li>
            <li><a href="/service-2" className="service-link">Solar Panel Installation</a></li>
            <li><a href="/service-3" className="service-link">Roof Repair & Maintenance</a></li>
            <li><a href="/service-4" className="service-link">Emergency Roof Repair</a></li>
            <li><a href="/service-5" className="service-link">Roof Inspection</a></li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div className="footer-section social-section">
          <h3 className="section-title-f">Follow Us</h3>
          <div className="social-links">
            <a href="#" className="social-link facebook" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" className="social-link twitter" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" className="social-link linkedin" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="#" className="social-link instagram" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>

          {/* BBB Rating */}
          <div className="additional-info">
            <div className="bbb-rating">
              <a
                href="https://www.bbb.org/us/id/nampa/profile/residential-roofing/bravo-roofing-llc-1296-1000142470/#sealclick"
                target="_blank"
                rel="noopener noreferrer"
                className="bbb-link"
                aria-label="BBB Accredited Business - A+ Rating"
              >
                <img
                  src="https://www.lgcypower.com/wp-content/uploads/2019/08/bbb-a-plus.webp"
                  alt="BBB A+ Rating - Accredited Business"
                  className="bbb-logo-image"
                />
              </a>
              <div className="bbb-info">
                <span className="accredited">BBB Accredited Business</span>
                <span className="rating-text">A+ Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="bottom-content">
          <p className="copyright">
            &copy; 2024 Bravo Roofing. All rights reserved.
          </p>
          <div className="bottom-links">
            <a href="/privacy" className="bottom-link">Privacy Policy</a>
            <span className="separator">|</span>
            <a href="/terms" className="bottom-link">Terms of Service</a>
            <span className="separator">|</span>
            <a href="/sitemap" className="bottom-link">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
    
    </div>
  );
};

export default Footer;
