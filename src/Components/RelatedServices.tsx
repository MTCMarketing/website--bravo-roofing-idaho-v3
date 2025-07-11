import React, { useState } from 'react';
import { Link } from 'gatsby';
import {
  FiEye, FiMapPin, FiRefreshCw,
  FiChevronLeft, FiChevronRight
} from 'react-icons/fi';
import { servicesData, Service } from '../data/servicesData';
import '../Styles/ServiceCard.css';

interface RelatedServicesProps {
  currentServiceId: number;
}

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === service.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === 0 ? service.images.length - 1 : prev - 1
    );
  };

  return (
    <Link to={`/service-${service.id}`} className="service-card-link">
      <div
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

          {service.images.length > 1 && (
            <>
              <button 
                className={`nav-arrow prev ${isHovered ? 'visible' : ''}`}
                onClick={prevImage}
                aria-label="Previous image"
              >
                <FiChevronLeft />
              </button>
              <button 
                className={`nav-arrow next ${isHovered ? 'visible' : ''}`}
                onClick={nextImage}
                aria-label="Next image"
              >
                <FiChevronRight />
              </button>
            </>
          )}
        </div>

        <div className="card-content">
          <div className="card-header">
            <h3 className="service-title">{service.title}</h3>
            <div className="location-info">
              <FiMapPin className="location-icon" />
              <span className="location-text">{service.location}</span>
            </div>
            <div className="price-info">
              <span className="price">{service.price.value}</span>
              <span className="frequency">{service.price.frequency}</span>
            </div>
          </div>

          <p className="service-description">{service.description}</p>

          <div className="features-list">
            {service.features.services.slice(0, 4).map((feature, index) => (
              <div key={index} className="feature-item">
                <span className="feature-icon">✓</span>
                <span className="feature-text">{feature}</span>
              </div>
            ))}
          </div>

          <div className="service-footer">
            <div className="action-icons">
              <div className="cta-button">
                learn more
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

const RelatedServices: React.FC<RelatedServicesProps> = ({ currentServiceId }) => {
  // Get 3 random services excluding the current one
  const getRelatedServices = (): Service[] => {
    const otherServices = servicesData.filter(service => service.id !== currentServiceId);

    // Shuffle array and take first 3
    const shuffled = [...otherServices].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  };

  const relatedServices = getRelatedServices();

  if (relatedServices.length === 0) {
    return null;
  }

  return (
    <section className="related-services-section">
      <div className="related-services-container">
        <div className="section-header">
          <h2>Other Services You Might Need</h2>
          <p>Explore our complete range of professional roofing solutions</p>
        </div>
        
        <div className="related-services-grid">
          {relatedServices.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;
