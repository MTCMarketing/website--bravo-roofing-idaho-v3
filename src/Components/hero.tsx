import React, { useState, useEffect } from 'react';
import '../Styles/hero.css';
import image from '../images/hero.jpg';

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

const TestimonialCarousel = ({ isPaused }: { isPaused: boolean }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
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
        <div className="stars">
          {renderStars(testimonials[currentIndex].stars)}
        </div>
        <p className="testimonial-text">
          "{testimonials[currentIndex].text}"
        </p>
        <p className="testimonial-author">
          — {testimonials[currentIndex].author}
        </p>
      </div>

      <div className="carousel-dots">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const ContactForm = ({ onFocus, onBlur }: { onFocus: () => void; onBlur: () => void }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-form-container">
      <h3 className="form-title">Get a Free Roof Estimate</h3>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            onFocus={onFocus}
            onBlur={onBlur}
            required
            aria-label="Full Name"
          />
        </div>

        <div className="form-group">
          <input
            type="tel"
            name="phone"
            placeholder="Best Phone Number to Reach You"
            value={formData.phone}
            onChange={handleChange}
            onFocus={onFocus}
            onBlur={onBlur}
            required
            aria-label="Phone Number"
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Your Email Address (for quote details)"
            value={formData.email}
            onChange={handleChange}
            onFocus={onFocus}
            onBlur={onBlur}
            required
            aria-label="Email Address"
          />
        </div>

        <div className="form-group">
          <textarea
            name="message"
            placeholder="Tell us what you need (e.g. roof leak, full replacement, inspection)"
            value={formData.message}
            onChange={handleChange}
            onFocus={onFocus}
            onBlur={onBlur}
            rows={4}
            aria-label="Message"
          />
        </div>

        <button type="submit" className="submit-btn btn-primary">
          <span className="btn-icon">📋</span>
          <span className="btn-text">Get My Free Estimate</span>
          <div className="btn-shine"></div>
        </button>
      </form>
    </div>
  );
};
const BravoHeroSection = () => {
  const [isFormFocused, setIsFormFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const isPaused = isFormFocused || isHovered;

  return (
    <section className="bravo-hero-section">
      <div
        className="hero-background"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-container">
        {/* Left Side - Main Messaging */}
        <div className="hero-left">
          <div className="hero-content">
            <div className="top-label">
              <span className="star-icon">⭐</span>
              <span className="review-text">57 All 5-Star Google Reviews</span>
            </div>

            <h1 className="hero-headline">
              Boise's Most Trusted Roofing Contractor
            </h1>

            <h2 className="hero-subheadline">
              Every. Single. Customer. Gave Us 5 Stars. Let's make you #58.
            </h2>

            <div className="cta-section">
              <a href="tel:2089950912" className="hero-cta-btn btn-primary">
                <span className="btn-icon">📞</span>
                <span className="btn-text">Get My Free Roof Estimate</span>
                <div className="btn-shine"></div>
              </a>
              <p className="cta-subtext">
                Licensed • Insured • Serving Boise 83704 & Nearby ZIPs
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Image + Form with Testimonial Carousel */}
        <div className="hero-right">
          
          <div
            className="form-section"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <TestimonialCarousel isPaused={isPaused} />
            <ContactForm
              onFocus={() => setIsFormFocused(true)}
              onBlur={() => setIsFormFocused(false)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BravoHeroSection;