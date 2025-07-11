// TestimonialSlider.tsx
import React, { useState, useEffect, useRef } from 'react';
import '../Styles/TestimonialSlider.css';

interface Testimonial {
  id: number;
  content: string;
  author: string;
  role: string;
  timeAgo: string;
  avatar: string;
}

interface Stat {
  id: number;
  value: number;
  title: string;
  desc: string;
  suffix?: string;
  prefix?: string;
  plus?: boolean;
}

const TestimonialSlider: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      content: "Working with Bravo has transformed our business. Their attention to detail and commitment to excellence is unparalleled. Our order fulfillment accuracy improved dramatically after implementing their system.",
      author: "Sarah Johnson",
      role: "Operations Director",
      timeAgo: "2 days ago",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 2,
      content: "As a startup, we needed a reliable partner to handle our fulfillment. Bravo exceeded our expectations with their 99.95% accuracy rate. Their platform is intuitive and their support team is always responsive.",
      author: "Michael Chen",
      role: "CEO, TechStart Inc.",
      timeAgo: "1 week ago",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 3,
      content: "The results speak for themselves - 85% customer satisfaction in just one year! Bravo helped us streamline our operations and improve customer experience. Their platform is a game-changer for e-commerce businesses.",
      author: "Jessica Williams",
      role: "E-commerce Manager",
      timeAgo: "3 days ago",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
      id: 4,
      content: "After switching to Bravo, our fulfillment errors dropped to near zero. The 99.95% accuracy rate is real. Their system integrates seamlessly with our e-commerce platform.",
      author: "David Rodriguez",
      role: "CTO, ShopFast",
      timeAgo: "4 days ago",
      avatar: "https://randomuser.me/api/portraits/men/65.jpg"
    },
    {
      id: 5,
      content: "Bravo's platform helped our startup scale without growing pains. We've onboarded 2000+ businesses with them, and the experience has been flawless. Highly recommended!",
      author: "Emma Thompson",
      role: "Co-Founder, LaunchPad",
      timeAgo: "1 week ago",
      avatar: "https://randomuser.me/api/portraits/women/26.jpg"
    }
  ];

  const statsData: Stat[] = [
    {
      id: 1,
      value: 99.95,
      title: "Accuracy rate",
      desc: "In fulfilling orders",
      suffix: "%"
    },
    {
      id: 2,
      value: 2000,
      title: "Startup businesses",
      desc: "partner with Bravo",
      plus: true
    },
    {
      id: 3,
      value: 85,
      title: "Happy customer",
      desc: "this year alone",
      suffix: "%"
    }
  ];

  const sliderRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [displayedStats, setDisplayedStats] = useState(statsData.map(stat => ({
    ...stat,
    displayedValue: 0
  })));
  
  // Initialize animation
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    
    // Create a smooth animation using CSS transitions
    slider.style.transition = 'transform 0.6s cubic-bezier(0.22, 0.61, 0.36, 1)';
    
    const animate = () => {
      if (slider) {
        const scrollAmount = 1;
        slider.scrollLeft += scrollAmount;
        
        // Reset to beginning when reaching end
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.style.transition = 'none';
          slider.scrollLeft = 0;
          // Force reflow to apply transition reset
          void slider.offsetWidth;
          slider.style.transition = 'transform 0.6s cubic-bezier(0.22, 0.61, 0.36, 1)';
        }
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      // Cleanup if needed
    };
  }, []);

  // Animate stats on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setDisplayedStats(prevStats => 
              prevStats.map(stat => {
                const duration = 2000;
                const startTime = Date.now();
                const startValue = 0;
                const endValue = stat.value;
                
                const animate = () => {
                  const elapsed = Date.now() - startTime;
                  const progress = Math.min(elapsed / duration, 1);
                  const easeProgress = 1 - Math.pow(1 - progress, 3);
                  const currentValue = startValue + (endValue - startValue) * easeProgress;
                  
                  setDisplayedStats(prev => 
                    prev.map(s => 
                      s.id === stat.id 
                        ? {...s, displayedValue: currentValue} 
                        : s
                    )
                  );
                  
                  if (progress < 1) {
                    requestAnimationFrame(animate);
                  } else {
                    setDisplayedStats(prev => 
                      prev.map(s => 
                        s.id === stat.id 
                          ? {...s, displayedValue: endValue} 
                          : s
                      )
                    );
                  }
                };
                
                requestAnimationFrame(animate);
                return stat;
              })
            );
          }
        });
      },
      { threshold: 0.2 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <div className="testimonial-slider-container" id="reviews">
      <div className="slider-header">
        <h2>Customer Testimonials</h2>
        <p>Discover what our clients say about working with us. We take pride in our exceptional service.</p>
      </div>
      
      <div 
        className="testimonial-slider"
        ref={sliderRef}
      >
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div key={`${testimonial.id}-${index}`} className="testimonial-card">
            <div className="quote-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>
            <p className="testimonial-content">{testimonial.content}</p>
            <div className="rating">
              {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
                </svg>
              ))}
            </div>
            <div className="client-info">
              <div className="avatar">
                <img src={testimonial.avatar} alt={testimonial.author} />
              </div>
              <div className="client-details">
                <h3>{testimonial.author}</h3>
                <p>{testimonial.role} • {testimonial.timeAgo}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="stats-container" ref={statsRef}>
        {displayedStats.map(stat => (
          <div key={stat.id} className="stat-card">
            <div className="stat-content">
              <div className="stat-value">
                {stat.prefix || ''}
                {Number.isInteger(stat.displayedValue) 
                  ? Math.floor(stat.displayedValue).toLocaleString() 
                  : stat.displayedValue.toFixed(2)}
                {stat.plus && stat.displayedValue >= stat.value ? '+' : ''}
                {stat.suffix || ''}
              </div>
              <div className="stat-title">{stat.title}</div>
              <p className="stat-desc">{stat.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;