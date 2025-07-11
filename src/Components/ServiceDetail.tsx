import React, { useState } from 'react';
import {
  FiChevronLeft, FiChevronRight, FiX, FiMapPin,
  FiCalendar, FiMessageCircle, FiMaximize2
} from 'react-icons/fi';
import { getServiceById } from '../data/servicesData';
import RelatedServices from './RelatedServices';
import ServiceGallery from './ServiceGallery';
import '../Styles/ServiceDetail.css';

// Testimonial data
const testimonials = [
  {
    id: 1,
    text: "Bravo Roofing finished our roof in two days. Perfect job.",
    author: "Angela R., Boise",
    stars: 5
  },
  {
    id: 2,
    text: "Crew showed up on time, cleaned up everything. Very professional.",
    author: "Mike D., Meridian",
    stars: 5
  },
  {
    id: 3,
    text: "Storm damage repair done the same day. Insurance approved it too!",
    author: "Rachel T., Eagle ID",
    stars: 5
  }
];

// TestimonialCarousel component
const TestimonialCarousel = ({ isPaused }: { isPaused: boolean }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  React.useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const renderStars = (count: number) => {
    return Array.from({ length: count }, (_, i) => (
      <span key={i} className="star">⭐</span>
    ));
  };

  return (
    <div className="testimonial-carousel">
      <div className="testimonial-content">
        <div className="testimonial-text">"{testimonials[currentIndex].text}"</div>
        <div className="testimonial-author">{testimonials[currentIndex].author}</div>
        <div className="testimonial-stars">
          {renderStars(testimonials[currentIndex].stars)}
        </div>
      </div>
      <div className="testimonial-dots">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

// ContactForm component (extracted from hero.tsx)
const ContactForm = ({ onFocus, onBlur }: { onFocus: () => void; onBlur: () => void }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="contact-form-container">
      <div className="form-header">
        <h3>Get Your Free Quote</h3>
        <p>Professional roofing services in Boise, ID</p>
      </div>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            onFocus={onFocus}
            onBlur={onBlur}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleInputChange}
            onFocus={onFocus}
            onBlur={onBlur}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInputChange}
            onFocus={onFocus}
            onBlur={onBlur}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            name="message"
            placeholder="Tell us about your roofing needs..."
            value={formData.message}
            onChange={handleInputChange}
            onFocus={onFocus}
            onBlur={onBlur}
            rows={4}
          />
        </div>
        <button type="submit" className="submit-button">
          Get My Free Quote
        </button>
      </form>
    </div>
  );
};

interface ServiceDetailProps {
  serviceId: number;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ serviceId }) => {
  const service = getServiceById(serviceId);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  
  if (!service) {
    return <div>Service not found</div>;
  }

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

  const openGallery = () => {
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
  };

  return (
    <div className="service-detail-container">
      {/* Hero Section with Image Gallery */}
      <section className="service-hero">
        <div className="hero-image-gallery">
          <div className="main-image-container">
            <img 
              src={service.images[currentImageIndex].url}
              alt={service.images[currentImageIndex].alt}
              className="main-service-image"
              onClick={openGallery}
            />
            
            {/* Navigation Arrows */}
            <button className="gallery-arrow prev-arrow" onClick={goToPrevImage}>
              <FiChevronLeft />
            </button>
            <button className="gallery-arrow next-arrow" onClick={goToNextImage}>
              <FiChevronRight />
            </button>
            
            {/* Expand Button */}
            <button className="expand-gallery-btn" onClick={openGallery}>
              <FiMaximize2 />
            </button>
            
            {/* Image Counter */}
            <div className="image-counter">
              {currentImageIndex + 1} / {service.images.length}
            </div>
          </div>
          
          {/* Thumbnail Navigation */}
          <div className="thumbnail-nav">
            {service.images.map((image, index) => (
              <button
                key={index}
                className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                onClick={() => setCurrentImageIndex(index)}
              >
                <img src={image.url} alt={image.alt} />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Service Information Section */}
      <section className="service-info-section">
        <div className="service-info-container">
          {/* Left Side - Service Details */}
          <div className="service-details">
            {/* Tags and Meta */}
            <div className="service-meta">
              <div className="service-tags">
                <span className="tag featured">{service.featured_tag}</span>
                <span className="tag status">{service.status_tag}</span>
              </div>
              <div className="service-meta-info">
                <span className="meta-item">
                  <FiCalendar /> {service.date}
                </span>
                <span className="meta-item">
                  <FiMessageCircle /> {service.comments} Comments
                </span>
              </div>
            </div>

            {/* Service Title and Location */}
            <h1 className="service-title">{service.title}</h1>
            <div className="service-location">
              <FiMapPin /> {service.location}
            </div>

            {/* Description */}
            <div className="service-description">
              <h3>Description</h3>
              <p>{service.fullDescription}</p>
            </div>

            {/* Facts and Features */}
            <div className="service-facts">
              <h3>Facts and Features</h3>
              <div className="facts-grid">
                {service.facts.map((fact, index) => (
                  <div key={index} className="fact-item">
                    <div className="fact-icon">{fact.icon}</div>
                    <div className="fact-content">
                      <div className="fact-label">{fact.label}</div>
                      <div className="fact-value">{fact.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="service-contact-form">
            <div className="form-section">
              <TestimonialCarousel isPaused={false} />
              <ContactForm
                onFocus={() => {}}
                onBlur={() => {}}
              />
            </div>
          </div>
        </div>
      </section>



      {/* Gallery Modal */}
      {isGalleryOpen && (
        <div className="gallery-modal">
          <div className="gallery-modal-content">
            <button className="close-gallery" onClick={closeGallery}>
              <FiX />
            </button>
            <div className="gallery-image-container">
              <img 
                src={service.images[currentImageIndex].url}
                alt={service.images[currentImageIndex].alt}
                className="gallery-modal-image"
              />
              <button className="gallery-modal-arrow prev" onClick={goToPrevImage}>
                <FiChevronLeft />
              </button>
              <button className="gallery-modal-arrow next" onClick={goToNextImage}>
                <FiChevronRight />
              </button>
            </div>
            <div className="gallery-modal-footer">
              <span>{currentImageIndex + 1} / {service.images.length}</span>
              <span>{service.images[currentImageIndex].alt}</span>
            </div>
          </div>
        </div>
      )}

      {/* Service Gallery Section */}
      <ServiceGallery serviceId={serviceId} />

      {/* Related Services Section */}
      <RelatedServices currentServiceId={serviceId} />
    </div>
  );
};

export default ServiceDetail;
