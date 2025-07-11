import React, { useState } from 'react';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { getServiceById } from '../data/servicesData';
import '../Styles/ServiceGallery.css';

interface ServiceGalleryProps {
  serviceId: number;
}

const ServiceGallery: React.FC<ServiceGalleryProps> = ({ serviceId }) => {
  const service = getServiceById(serviceId);
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!service || !service.images || service.images.length === 0) {
    return null;
  }

  // Take only the first 3 images from the service
  const galleryImages = service.images.slice(0, 3);

  const openPreview = (image: any, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closePreview = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  const goToNext = () => {
    const newIndex = currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closePreview();
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
  };

  return (
    <section className="service-gallery-section">
      <div className="service-gallery-container">
        <div className="gallery-header">
          <div className="header-accent"></div>
          <h2>From Our Gallery</h2>
          <p>See examples of our professional roofing work and quality craftsmanship</p>
        </div>
        
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`gallery-item ${index === 2 ? 'gallery-item-large' : ''}`}
              onClick={() => openPreview(image, index)}
            >
              <div className="gallery-image-container">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="gallery-image"
                />
                <div className="gallery-overlay">
                  <div className="view-icon">
                    <FiChevronRight />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Preview Modal */}
      {selectedImage && (
        <div 
          className="gallery-modal"
          onClick={closePreview}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closePreview}>
              <FiX />
            </button>
            
            <button className="modal-nav prev" onClick={goToPrevious}>
              <FiChevronLeft />
            </button>
            
            <div className="modal-image-container">
              <img 
                src={selectedImage.url} 
                alt={selectedImage.alt}
                className="modal-image"
              />
              <div className="modal-info">
                <div className="modal-counter">
                  {currentIndex + 1} / {galleryImages.length}
                </div>
              </div>
            </div>
            
            <button className="modal-nav next" onClick={goToNext}>
              <FiChevronRight />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServiceGallery;
