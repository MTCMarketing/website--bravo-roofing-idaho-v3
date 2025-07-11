import React, { useState } from 'react';
import '../Styles/FAQSection.css';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "How long will a new roof last?",
      answer: "A new roof with asphalt architectural shingles will typically last about 25 years. However, because BRI offers a quality roofing system with durable materials and uses only certified installers, BRI is able to offer a 50 year warranty. Of course, there are other material options that would offer a longer service life (like metal roofing) but they will also be more expensive."
    },
    {
      question: "How much does a brand new roof cost?",
      answer: "Generally speaking, the cost of a new roof may range from $5,000 at the low end to greater than $20,000 at the high end. The actual cost of a new roof is based on the size of the home, type of material, and the structural elements of the roof (pitch, eves, valleys, hips and ridges). BRI will provide a detailed, not-to-exceed estimate and will honor that estimate throughout the entire project. THERE WILL BE NO HIDDEN COSTS."
    },
    {
      question: "Does a new roof increase the value of my home? By how much?",
      answer: "Although a new roof may not change the assessed value of your home, it definitely increases the appraised value if the house is headed for the market. Typically, a new roof can return up to 80% of the cost of the roof when the house is sold. Besides, a new roof offers a highly desirable feature very appealing to potential buyers."
    },
    {
      question: "What type of shingles are there and what are the best ones to use?",
      answer: "The most common and best priced shingle on the market today is the architectural asphalt shingle. The options we offer in this class are all \"Idaho Durable\" and most often are the choice of homeowners throughout the greater Treasure Valley. We also offer high end designer and presidential shingle styles. These styles really make your home standout and are typically installed in neighborhoods with specific HOA requirements relating to roofing styles. BRI is also qualified to install metal roofing as another option."
    },
    {
      question: "What kind of roof is best for me?",
      answer: "Finding the best roof for you is not always easy. However, BRI follows a process to ensure the homeowner has access to the best information to make their choices. This process is based on our extensive experience and is structured to properly evaluate budget, material/style, and durability. Remember we work for you and will do everything we can to make sure you make the best decision for your particular situation."
    },
    {
      question: "How do you know if a roofing company is a good company?",
      answer: "BRI understands that finding a company to replace your roof can be a difficult process.. There are resources a homeowner can investigate by checking with the BBB or consulting reviews and testimonials. At BRI, our effort to win your trust begins with the first contact. We will demonstrate our commitment to your project by being timely, responsive, courteous, and professional. We know we can do the job for you so don't hesitate to request a quote to start you on the journey to a new roof."
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <h2>Frequently Asked Questions</h2>
          <p>Want to know more? Check out some questions that other customers have asked previously.</p>
        </div>
        
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            >
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
              >
                {faq.question}
                <span className="icon">
                  {activeIndex === index ? '-' : '+'}
                </span>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;