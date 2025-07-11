import React, { useState } from 'react';
import { Link } from 'gatsby';
import {
  FiEye, FiMapPin, FiRefreshCw,
  FiChevronLeft, FiChevronRight, FiX,
  FiHome, FiTool, FiSun, FiCamera,
  FiShield, FiAward, FiClock, FiPhone
} from 'react-icons/fi';
import {
  HiOutlineHome, HiOutlineCog, HiOutlineSun,
  HiOutlinePhotograph, HiOutlineShieldCheck
} from 'react-icons/hi';
import {
  MdRoofing, MdSolarPower, MdConstruction,
  MdVerified, MdSecurity, MdHandyman
} from 'react-icons/md';
import { servicesData, Service } from '../data/servicesData';
import '../Styles/ServiceCard.css';

interface ServiceCardProps {
  service: Service;
  onPreviewClick: (serviceId: number, imageIndex: number) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onPreviewClick }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  const goToPrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex(prevIndex => 
      prevIndex === 0 ? service.images.length - 1 : prevIndex - 1
    );
  };
  
  const goToNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex(prevIndex => 
      prevIndex === service.images.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  return (
    <div id='services'
        className="service-card"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
      <div className="image-container">
        <img 
          src={service.images[currentImageIndex].url} 
          alt={service.images[currentImageIndex].alt} 
          className="service-image"
        />
        
        <div className="service-tag">{service.status_tag}</div>
        
        <div className={`image-overlay ${isHovered ? 'hidden' : ''}`}>
          <div className="image-meta">
            <div className="location">
              <FiMapPin className="icon" />
              {service.location}
            </div>
            <div className="image-count">
              <FiEye className="icon" />
              {currentImageIndex + 1}/{service.images.length}
            </div>
          </div>
        </div>
        
        {isHovered && service.images.length > 1 && (
          <>
            <button 
              className="carousel-arrow left-arrow" 
              onClick={goToPrevImage}
            >
              <FiChevronLeft />
            </button>
            <button 
              className="carousel-arrow right-arrow" 
              onClick={goToNextImage}
            >
              <FiChevronRight />
            </button>
            <div className="pagination-dots">
              {service.images.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`dot ${currentImageIndex === idx ? 'active' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(idx);
                  }}
                />
              ))}
            </div>
          </>
        )}
      </div>
      
      <div className="service-content">
        <div className="content-wrapper">
          <div className="price-section">
            <div className="price-value">{service.price.value}</div>
            <div className="price-frequency">{service.price.frequency}</div>
          </div>
          
          <h3 className="service-title">{service.title}</h3>
          <p className="service-description">{service.description}</p>
          
          <div className="features-grid">
            {service.features.services.map((feature, idx) => {
              // Get appropriate icon based on feature content
              const getFeatureIcon = (featureText: string) => {
                const text = featureText.toLowerCase();
                if (text.includes('roof') || text.includes('install')) return <MdRoofing />;
                if (text.includes('solar') || text.includes('panel')) return <MdSolarPower />;
                if (text.includes('repair') || text.includes('fix')) return <MdHandyman />;
                if (text.includes('license') || text.includes('insure')) return <MdVerified />;
                if (text.includes('warranty') || text.includes('guarantee')) return <FiShield />;
                if (text.includes('cleanup') || text.includes('service')) return <FiTool />;
                if (text.includes('monitoring') || text.includes('app')) return <FiCamera />;
                if (text.includes('credit') || text.includes('rebate')) return <FiAward />;
                return <MdVerified />; // Default icon
              };

              return (
                <div key={idx} className="feature-item">
                  <div className="feature-icon">
                    {getFeatureIcon(feature)}
                  </div>
                  <span className="feature-text">{feature}</span>
                </div>
              );
            })}
          </div>
          
          <div className="service-footer">
            <div className="action-icons">
              <button
                className="action-icon preview-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  onPreviewClick(service.id, currentImageIndex);
                }}
                title="Preview Images"
              >
                <FiEye />
              </button>
              <button className="action-icon location-btn" title="Service Area">
                <FiMapPin />
              </button>
              <button className="action-icon contact-btn" title="Call Now">
                <FiPhone />
              </button>
            </div>
          </div>
        </div>
                  <Link to={`/service-${service.id}`} className="service-card-link">
        
        <div className="cta-button">
          View Details & Get Quote
        </div>
    </Link>
      </div>
    </div>
  );
};

interface PreviewModalProps {
  service: Service | null;
  initialImageIndex: number;
  onClose: () => void;
}

const PreviewModal: React.FC<PreviewModalProps> = ({ service, initialImageIndex, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(initialImageIndex);
  
  if (!service) return null;
  
  const goToPrevImage = () => {
    setCurrentImageIndex(prevIndex => 
      prevIndex === 0 ? service.images.length - 1 : prevIndex - 1
    );
  };
  
  const goToNextImage = () => {
    setCurrentImageIndex(prevIndex => 
      prevIndex === service.images.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  return (
    <div className="preview-modal">
      <div className="modal-content">
        <div className="modal-header">
          <div className="modal-title">{service.title}</div>
          <button className="close-modal" onClick={onClose}>
            <FiX />
          </button>
        </div>
        <div className="modal-image-container">
          <img 
            src={service.images[currentImageIndex].url} 
            alt={service.images[currentImageIndex].alt} 
            className="modal-image"
          />
          <div className="modal-controls">
            <button className="modal-arrow left-arrow" onClick={goToPrevImage}>
              <FiChevronLeft />
            </button>
            <button className="modal-arrow right-arrow" onClick={goToNextImage}>
              <FiChevronRight />
            </button>
          </div>
        </div>
        <div className="modal-footer">
          <div className="modal-counter">
            {currentImageIndex + 1}/{service.images.length}
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const [previewService, setPreviewService] = useState<Service | null>(null);
  const [initialImageIndex, setInitialImageIndex] = useState(0);
  
  const handlePreviewClick = (serviceId: number, imageIndex: number) => {
    const service = servicesData.find(s => s.id === serviceId) || null;
    setPreviewService(service);
    setInitialImageIndex(imageIndex);
  };
  
  const closePreviewModal = () => {
    setPreviewService(null);
  };
  
  return (
    <div className="services-container">
      <div className="background-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
      
      <div className="section-header">
        <h1>Premium Roofing Solutions</h1>
        <p>Experience the Bravo Roofing difference - professional services designed to protect and enhance your home</p>
      </div>
      
      <div className="services-grid">
        {servicesData.map(service => (
          <ServiceCard 
            key={service.id} 
            service={service} 
            onPreviewClick={handlePreviewClick} 
          />
        ))}
      </div>



      {previewService && (
        <PreviewModal
          service={previewService}
          initialImageIndex={initialImageIndex}
          onClose={closePreviewModal}
        />
      )}
    </div>
  );
};

export default ServicesSection;