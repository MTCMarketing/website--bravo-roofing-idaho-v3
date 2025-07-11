import React, { useState } from 'react';
import { FiSend } from 'react-icons/fi';
import '../Styles/NewsletterSubscription.css';

const NewsletterSubscription: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsSubmitting(false);
      setEmail('');
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubscribed(false);
      }, 3000);
    }, 1000);
  };

  return (
    <section className="newsletter-subscription">
      <div className="newsletter-container">
        <div className="newsletter-content">
          <div className="newsletter-text">
            <h2>Looking for roofing updates?</h2>
            <p>Subscribe to get the latest roofing tips, maintenance guides, and exclusive offers</p>
          </div>
          
          <div className="newsletter-form-container">
            {isSubscribed ? (
              <div className="success-message">
                <div className="success-icon">✓</div>
                <span>Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="newsletter-form">
                <div className="input-group">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    disabled={isSubmitting}
                    className="newsletter-input"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting || !email}
                    className="newsletter-button"
                  >
                    {isSubmitting ? (
                      <div className="loading-spinner"></div>
                    ) : (
                      <FiSend />
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSubscription;
