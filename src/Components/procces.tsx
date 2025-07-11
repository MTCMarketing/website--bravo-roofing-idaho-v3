import React from 'react';
import '../Styles/ProjectManagementSection.css';

const ProjectManagementSection: React.FC = () => {
  const services = [
    {
      title: "Materials Selection",
      description: "Explore a diverse range of high-quality roofing materials tailored to suit your project's unique requirements and aesthetic preferences.",
      icon: "📦"
    },
    {
      title: "Building Permits",
      description: "We handle all the necessary paperwork and processes to secure building permits efficiently, ensuring your roofing project meets regulatory standards.",
      icon: "📝"
    },
    {
      title: "Detailed Estimate",
      description: "Receive a detailed estimate outlining all aspects of your roofing project, providing transparency and clarity every step of the way.",
      icon: "💰"
    },
    {
      title: "Inventory Management",
      description: "Our meticulous inventory management ensures seamless supply chain coordination and timely access to all necessary roofing materials.",
      icon: "📊"
    },
    {
      title: "Subcontractor Management",
      description: "We oversee subcontractor activities to ensure seamless collaboration and the highest standards of workmanship throughout your roofing project.",
      icon: "👷"
    },
    {
      title: "Customer Satisfaction",
      description: "We listen and ask questions when you share the details of your project. At the end of The Discovery, we'll understand your vision as well as your unique budget, and timeline.",
      icon: "⭐"
    }
  ];

  return (
    <section className="pro-management-section">
      <div className="pro-management-container">
        <div className="pro-management-header">
          <h2>Single Point Project Management</h2>
          <p>
            Complete Project Coordination: Place Your Roofing Project in Our Capable Hands for Meticulous Management Across Every Facet. From Initial Assessment to Final Inspection, We Ensure Seamless Oversight to Bring Your Vision to Fruition.
          </p>
        </div>

        <div className="pro-services-container">
          {services.map((service, index) => (
            <div
              key={index}
              className="pro-service-card"
              data-step={index + 1}
            >
              <div className="pro-service-icon">{service.icon}</div>
              <div className="pro-service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectManagementSection;
