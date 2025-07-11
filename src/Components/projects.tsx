// components/ProjectSlider.tsx
import React, { useState, useEffect, useRef } from 'react';
import { FiChevronLeft, FiChevronRight, FiZoomIn } from 'react-icons/fi';
import '../Styles/projects.css';

// Import project images
import project1 from '../images/project1.jpg';
import project2 from '../images/project2.jpg';
import project3 from '../images/project3.jpg';
import project4 from '../images/project4.jpg';
import project5 from '../images/project5.jpg';
import project6 from '../images/project6.jpg';
import project7 from '../images/project7.jpg';
import project8 from '../images/project8.jpg';
import project9 from '../images/project9.jpg';
import project10 from '../images/project10.jpg';
import project11 from '../images/project11.jpg';
import project12 from '../images/project12.jpg';
import project13 from '../images/project13.jpg';
import project14 from '../images/project14.jpg';
import project15 from '../images/project15.jpg';
import project16 from '../images/project16.webp';
import project17 from '../images/project17.webp';
import project18 from '../images/project18.webp';
import project19 from '../images/project19.webp';
import project20 from '../images/project20.webp';

const ProjectSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const sliderRef = useRef<HTMLDivElement>(null);

  const projects = [
    { id: 1, title: 'Modern Asphalt Roof', category: 'Residential', image: project1 },
    { id: 2, title: 'Solar-Integrated Roof', category: 'Commercial', image: project2 },
    { id: 3, title: 'Metal Roof Installation', category: 'Residential', image: project3 },
    { id: 4, title: 'Historic Restoration', category: 'Heritage', image: project4 },
    { id: 5, title: 'Green Roof System', category: 'Eco-Friendly', image: project5 },
    { id: 6, title: 'Tile Roof Replacement', category: 'Residential', image: project6 },
    { id: 7, title: 'Flat Roof Solution', category: 'Commercial', image: project7 },
    { id: 8, title: 'Storm Damage Repair', category: 'Emergency', image: project8 },
    { id: 9, title: 'Luxury Villa Roofing', category: 'Premium', image: project9 },
    { id: 10, title: 'Solar Panel Installation', category: 'Commercial', image: project10 },
    { id: 11, title: 'Cedar Shake Roof', category: 'Residential', image: project11 },
    { id: 12, title: 'Commercial Complex', category: 'Commercial', image: project12 },
    { id: 13, title: 'Rustic Cabin Roof', category: 'Residential', image: project13 },
    { id: 14, title: 'Industrial Roofing', category: 'Commercial', image: project14 },
    { id: 15, title: 'Modern Farmhouse', category: 'Residential', image: project15 },
    { id: 16, title: 'Hospital Roofing', category: 'Commercial', image: project16 },
    { id: 17, title: 'Beach House Roof', category: 'Residential', image: project17 },
    { id: 18, title: 'Shopping Center Roof', category: 'Commercial', image: project18 },
    { id: 19, title: 'Mountain Chalet Roof', category: 'Residential', image: project19 },
    { id: 20, title: 'Apartment Complex', category: 'Commercial', image: project20 },
  ];

  // Handle responsive slides
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 992) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [slidesToShow]);

  // Calculate slide width
  const slideWidth = 100 / slidesToShow;

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      if (prev >= projects.length - slidesToShow) return 0;
      return prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      if (prev === 0) return projects.length - slidesToShow;
      return prev - 1;
    });
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const openLightbox = (index: number) => {
    setLightboxImage(index);
    setLightboxOpen(true);
  };

  return (
    <section id="portfolio"  className="project-slider-section">
      <div className="slider-container">
        <div className="slider-header">
          <span className="section-subtitle">OUR PORTFOLIO</span>
          <h2 className="section-title">Project Gallery</h2>
          <p className="section-description">
            We create beautiful, high-quality roofing solutions including solar options. 
            Browse our completed projects for inspiration.
          </p>
        </div>

        <div className="slider-wrapper">
          <div
            className="slider"
            ref={sliderRef}
            style={{ 
              transform: `translateX(-${currentSlide * slideWidth}%)`,
              width: `${projects.length * 100 / slidesToShow}%`
            }}
          >
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="slide"
                style={{ width: `${slideWidth}%` }}
              >
                <div 
                  className="slide-image-container"
                  onClick={() => openLightbox(index)}
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="slide-image"
                    loading="lazy"
                  />
                  <div className="image-overlay">
                    <FiZoomIn className="zoom-icon" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="slider-nav prev" onClick={prevSlide}>
            <FiChevronLeft className="nav-icon" />
          </button>
          <button className="slider-nav next" onClick={nextSlide}>
            <FiChevronRight className="nav-icon" />
          </button>
        </div>

        <div className="slider-dots">
          {Array(Math.ceil(projects.length / slidesToShow)).fill(0).map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <div className="lightbox" onClick={() => setLightboxOpen(false)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={projects[lightboxImage].image}
              alt={projects[lightboxImage].title}
              className="lightbox-image"
              loading="lazy"
            />
            <div className="lightbox-nav">
              <button 
                className="lightbox-prev"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxImage(prev => prev === 0 ? projects.length - 1 : prev - 1);
                }}
              >
                <FiChevronLeft />
              </button>
              <button 
                className="lightbox-next"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxImage(prev => prev === projects.length - 1 ? 0 : prev + 1);
                }}
              >
                <FiChevronRight />
              </button>
            </div>
            <button className="lightbox-close" onClick={() => setLightboxOpen(false)}>
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectSlider;