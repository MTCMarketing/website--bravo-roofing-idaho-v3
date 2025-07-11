import React from 'react';
import { FaShieldAlt, FaMedal, FaDollarSign, FaStar } from 'react-icons/fa';
import '../Styles/about.css'; // Ensure you have this CSS file for styling
const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-text-content">
          <div className="about-header">
            <h2 className="about-title">About Bravo Roofing Idaho</h2>
            <div className="about-divider"></div>
          </div>
          
          <p className="about-description">
            We're a local, family-owned and operated roofer company dedicated to quality roofing replacement. 
            We are certified commercial roofers and installers of GAF and Owens Corning roofing shingle systems. 
            We also offer financing and a full 50-year system warranty with all of our roofs. 
            Find affordable roofers and roof fixers near me. Contact us today for a free inspection and estimate.
          </p>
          
          <div className="about-ratings">
            {/* Facebook Rating Box */}
            <div className="about-rating">
              <div className="about-rating-stars">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={`fb-star-${i}`} className="about-rating-star" />
                ))}
              </div>
              <div className="about-rating-platform">
                <a href="https://www.facebook.com/bravoroofing208" target="_blank" rel="noopener noreferrer">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_(2019).png" 
                    alt="Facebook" 
                    className="about-rating-logo"
                  />
                </a>
                <div className="about-rating-details">
                  <span>4.9 Rating</span>
                  <span>200+ Reviews</span>
                </div>
              </div>
            </div>

            {/* Yelp Rating Box */}
            <div className="about-rating">
              <div className="about-rating-stars">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={`yelp-star-${i}`} className="about-rating-star" />
                ))}
              </div>
              <div className="about-rating-platform">
                <a href="https://www.yelp.com/biz/bravo-roofing-nampa" target="_blank" rel="noopener noreferrer">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Yelp_Logo.svg" 
                  alt="Yelp" 
                  className="about-rating-logo"
                />
                </a>
                <div className="about-rating-details">
                  <span>5.0 Rating</span>
                  <span>150+ Reviews</span>
                </div>
              </div>
            </div>
          </div>
          
         
        </div>
        
        <div className="about-image-content">
          <div className="about-image-wrapper">
            <img
              src="https://media.istockphoto.com/id/1473638950/photo/technicians-carrying-photovoltaic-solar-module-while-installing-solar-panel-system-on-roof-of.jpg?b=1&s=612x612&w=0&k=20&c=EsPnBOw7eosskOB-s1zA5xCSLW-54Akdvwtmg7Vbk5c="
              alt="Professional Roofing Services"
              className="about-main-image"
            />
            <div className="about-image-overlay">
              {/* <div className="about-experience-badge">
                <span>15+ Years</span>
                <span>Experience</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;