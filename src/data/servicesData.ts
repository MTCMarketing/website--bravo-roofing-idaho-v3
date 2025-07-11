// Shared service data for the application
export interface Service {
  id: number;
  title: string;
  status_tag: string;
  featured_tag: string;
  price: {
    value: string;
    frequency: string;
  };
  location: string;
  description: string;
  fullDescription: string;
  features: {
    services: string[];
  };
  facts: Array<{
    icon: string;
    label: string;
    value: string;
  }>;
  images: Array<{
    url: string;
    alt: string;
  }>;
  agent: {
    name: string;
    role: string;
    profile_photo_url: string;
  };
  cta: {
    label: string;
    url: string;
  };
  date: string;
  comments: number;
}

export const servicesData: Service[] = [
  {
    id: 1,
    title: "New Roof Installation",
    status_tag: "QUOTE READY",
    featured_tag: "FEATURED",
    price: {
      value: "$0 Down",
      frequency: "Financing Available"
    },
    location: "Serving Boise 83704 & Nearby ZIPs",
    description: "Protect your home with a brand new roof. High-quality materials, fast turnaround, and full cleanup included. 25-year warranty available.",
    fullDescription: "Transform your home with our premium roof installation service. We use only the highest quality materials from trusted manufacturers, ensuring your new roof will protect your family for decades to come. Our experienced team handles everything from permits to cleanup, making the process seamless for you. With over 15 years of experience in the Boise area, we understand the unique weather challenges your roof faces and select materials specifically designed for Idaho's climate.",
    features: {
      services: [
        "Tear-Off & Re-Roof",
        "Shingle, Tile, or Metal Options",
        "Licensed & Insured",
        "Cleanup Included"
      ]
    },
    facts: [
      { icon: "🏠", label: "Coverage Area", value: "Up to 3,000 sq ft" },
      { icon: "⏱️", label: "Installation Time", value: "2-4 days" },
      { icon: "🛡️", label: "Warranty", value: "25 years" },
      { icon: "💰", label: "Financing", value: "0% APR available" },
      { icon: "🔧", label: "Materials", value: "Premium grade" },
      { icon: "👷", label: "Team Size", value: "4-6 professionals" }
    ],
    images: [
      {
        url: "https://plus.unsplash.com/premium_photo-1682617326551-4749611516f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TmV3JTIwUm9vZiUyMEluc3RhbGxhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
        alt: "New asphalt shingle roof installation"
      },
      {
        url: "https://media.istockphoto.com/id/2218653270/photo/construction-worker-roofers-installing-roofing-tiles-on-residential-building.webp?a=1&b=1&s=612x612&w=0&k=20&c=q0JFAbZ6Z5SvftXnzAOMPtlF2PFp0wWW2QL7pui4INU=",
        alt: "Roofing team working on residential installation"
      },
      {
        url: "https://images.unsplash.com/photo-1587848545780-ee639e440669?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fE5ldyUyMFJvb2YlMjBJbnN0YWxsYXRpb258ZW58MHx8MHx8fDA%3D",
        alt: "Finished roof with modern architectural design"
      }
    ],
    agent: {
      name: "William from Bravo Roofing",
      role: "Certified Roofer",
      profile_photo_url: "https://example.com/images/william.jpg"
    },
    cta: {
      label: "📞 Get My Free Roof Estimate",
      url: "https://bravoroofingidaho.com/request-quote"
    },
    date: "May 19, 2021",
    comments: 35
  },
  {
    id: 2,
    title: "Roof Repair & Renewal",
    status_tag: "QUOTE READY",
    featured_tag: "POPULAR",
    price: {
      value: "$99",
      frequency: "Flat Rate Repair"
    },
    location: "Storm Damage • Leaks • Aging Roofs",
    description: "Fix leaks, flashing, and storm damage fast. Emergency same-day service available. We restore your roof before it needs replacing.",
    fullDescription: "Don't let a small roof problem become a major disaster. Our emergency roof repair service is available 24/7 to protect your home from water damage and structural issues. From missing shingles to storm damage, our experienced team can handle any repair quickly and professionally. We use high-quality materials and provide warranties on all our work.",
    features: {
      services: [
        "Leak Repair & Patching",
        "Flashing & Sealant Renewal",
        "Storm & Wind Damage",
        "Preventive Maintenance"
      ]
    },
    facts: [
      { icon: "🚨", label: "Response Time", value: "Within 2 hours" },
      { icon: "🔧", label: "Repair Types", value: "All roof types" },
      { icon: "💧", label: "Leak Guarantee", value: "100% stop leaks" },
      { icon: "📞", label: "Availability", value: "24/7 emergency" },
      { icon: "🛡️", label: "Warranty", value: "5 years" },
      { icon: "💰", label: "Insurance", value: "Claims assistance" }
    ],
    images: [
      {
        url: "https://media.istockphoto.com/id/2167217177/photo/worker-fixing-eaves-and-tiles-of-the-old-roof.webp?a=1&b=1&s=612x612&w=0&k=20&c=8d21Kd6QrcasakuGyGGRujgBo4ErVP3zsgrHFp-imE8=",
        alt: "Technician repairing damaged roof shingles"
      },
      {
        url: "https://media.istockphoto.com/id/2168170084/photo/roofer-builder-worker-ensuring-roof-maintenance.webp?a=1&b=1&s=612x612&w=0&k=20&c=LaeBigLpYHgVELqwjvj3QAPxep_7K688jKaSBi1QRZY=",
        alt: "Close-up of roof flashing repair"
      },
      {
        url: "https://media.istockphoto.com/id/2167217177/photo/worker-fixing-eaves-and-tiles-of-the-old-roof.webp?a=1&b=1&s=612x612&w=0&k=20&c=8d21Kd6QrcasakuGyGGRujgBo4ErVP3zsgrHFp-imE8=",
        alt: "Roof repair after storm damage"
      }
    ],
    agent: {
      name: "Sandra from Bravo Roofing",
      role: "Repair Coordinator",
      profile_photo_url: "https://example.com/images/sandra.jpg"
    },
    cta: {
      label: "🔧 Request a Roof Repair Quote",
      url: "https://bravoroofingidaho.com/repair"
    },
    date: "June 15, 2021",
    comments: 28
  },
  {
    id: 3,
    title: "New Roof + Solar Combo",
    status_tag: "QUOTE READY",
    featured_tag: "URGENT",
    price: {
      value: "$0 Down",
      frequency: "Tax Credits May Apply"
    },
    location: "Rebates Available in Boise, ID",
    description: "Bundle your roof and solar install to save thousands. Fully integrated setup, one contractor, one warranty. Clean energy made easy.",
    fullDescription: "Get the best of both worlds with our roof and solar combo package. We handle everything from roof installation to solar panel setup, ensuring perfect integration and maximum efficiency. This comprehensive solution saves you time, money, and hassle while providing clean energy for decades to come.",
    features: {
      services: [
        "New Roof Installation",
        "Solar Panel Setup",
        "25-Year Warranty",
        "Federal Tax Credit Eligible"
      ]
    },
    facts: [
      { icon: "🏠", label: "Coverage Area", value: "Up to 3,000 sq ft" },
      { icon: "☀️", label: "Solar Efficiency", value: "22% efficiency" },
      { icon: "💰", label: "Tax Credits", value: "30% federal credit" },
      { icon: "🛡️", label: "Warranty", value: "25 years" },
      { icon: "⚡", label: "Power Output", value: "Up to 10kW" },
      { icon: "🌱", label: "CO2 Reduction", value: "4 tons/year" }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1635424825057-7fb6dcd651ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fENvbnN0cnVjdGlvbiUyMFdvcmtlciUyMEluc3RhbGxpbmclMjBOZXclMjBSb29mJTIwJTdDJTIwUHJlbWl1bSUyMEFJJTIwZ2VuZXJhdGVkJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D",
        alt: "Solar panels integrated with new roof"
      },
      {
        url: "https://images.unsplash.com/photo-1635424709845-3a85ad5e1f5e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fENvbnN0cnVjdGlvbiUyMFdvcmtlciUyMEluc3RhbGxpbmclMjBOZXclMjBSb29mJTIwJTdDJTIwUHJlbWl1bSUyMEFJJTIwZ2VuZXJhdGVkJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D",
        alt: "Modern home with solar roof system"
      },
      {
        url: "https://images.unsplash.com/photo-1700529289398-dd313f11c9cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fENvbnN0cnVjdGlvbiUyMFdvcmtlciUyMEluc3RhbGxpbmclMjBOZXclMjBSb29mJTIwJTdDJTIwUHJlbWl1bSUyMEFJJTIwZ2VuZXJhdGVkJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D",
        alt: "Roofers installing solar-ready roofing"
      }
    ],
    agent: {
      name: "William from Bravo Roofing",
      role: "Roof + Solar Expert",
      profile_photo_url: "https://example.com/images/william.jpg"
    },
    cta: {
      label: "💡 Bundle Roof + Solar Now",
      url: "https://bravoroofingidaho.com/solar-combo"
    },
    date: "July 2, 2021",
    comments: 42
  },
  {
    id: 4,
    title: "Solar Panel Installation",
    status_tag: "SOLAR READY",
    featured_tag: "ECO FRIENDLY",
    price: {
      value: "$0 Down",
      frequency: "Install & Save"
    },
    location: "Boise, Meridian, Eagle, Nampa",
    description: "Generate clean energy and lower your electric bill. Modern solar systems with built-in monitoring. Financing available.",
    fullDescription: "Go green and save money with our state-of-the-art solar panel installation service. Our certified technicians will design and install a custom solar system tailored to your home's energy needs and roof configuration. With federal tax credits and local incentives, solar has never been more affordable.",
    features: {
      services: [
        "Roof-Mounted Panels",
        "Monitoring App",
        "Permitting & Incentives",
        "Licensed Installers"
      ]
    },
    facts: [
      { icon: "☀️", label: "Panel Efficiency", value: "22% efficiency" },
      { icon: "⚡", label: "Power Output", value: "Up to 10kW" },
      { icon: "💰", label: "Tax Credits", value: "30% federal credit" },
      { icon: "🌱", label: "CO2 Reduction", value: "4 tons/year" },
      { icon: "📈", label: "Home Value", value: "+4% increase" },
      { icon: "🔧", label: "Warranty", value: "25 years" }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        alt: "Solar panels on residential roof"
      },
      {
        url: "https://plus.unsplash.com/premium_photo-1664299621284-6aaffe67a20c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c29sYXIlMjBpbnN0YWxsYXRpb258ZW58MHx8MHx8fDA%3D",
        alt: "Close-up of solar panel installation"
      },
      {
        url: "https://images.unsplash.com/photo-1726866672851-5b99c837603c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHNvbGFyJTIwaW5zdGFsbGF0aW9ufGVufDB8fDB8fHww",
        alt: "Solar technician testing system"
      }
    ],
    agent: {
      name: "Jake from Bravo Solar",
      role: "Solar Project Manager",
      profile_photo_url: "https://example.com/images/jake.jpg"
    },
    cta: {
      label: "☀️ Get a Free Solar Quote",
      url: "https://bravoroofingidaho.com/solar"
    },
    date: "August 10, 2021",
    comments: 31
  },
  {
    id: 5,
    title: "Gutter & Fascia Replacement",
    status_tag: "ADD-ON AVAILABLE",
    featured_tag: "POPULAR",
    price: {
      value: "$349",
      frequency: "Installed"
    },
    location: "Protect Your Roofline",
    description: "Avoid water damage and rotted fascia with seamless gutters. Includes full install, disposal, and warranty. Optional leaf guards.",
    fullDescription: "Protect your home's foundation and exterior with our professional gutter and fascia replacement service. We install seamless gutters that direct water away from your home, preventing costly water damage and foundation issues.",
    features: {
      services: [
        "Gutter Replacement",
        "Fascia Repair or Wrap",
        "Leaf Guard Option",
        "Water Flow Optimization"
      ]
    },
    facts: [
      { icon: "🌧️", label: "Gutter Type", value: "Seamless aluminum" },
      { icon: "🔧", label: "Installation", value: "Professional grade" },
      { icon: "🛡️", label: "Warranty", value: "10 years" },
      { icon: "💧", label: "Water Flow", value: "Optimized drainage" },
      { icon: "🍃", label: "Leaf Guards", value: "Available option" },
      { icon: "💰", label: "Cost", value: "Competitive pricing" }
    ],
    images: [
      {
        url: "https://media.istockphoto.com/id/1302299569/photo/working-at-height-equipment-construction-worker-wearing-safety-harness-belt-during-working-on.webp?a=1&b=1&s=612x612&w=0&k=20&c=HUK8cf4vSjdubX3om5gWGs50FnSIig-9CSi19kRCFiw=",
        alt: "New seamless gutter installation"
      },
      {
        url: "https://media.istockphoto.com/id/1177731437/photo/a-man-in-headphones-paints-the-exterior-wall-of-a-wooden-house.webp?a=1&b=1&s=612x612&w=0&k=20&c=hFt76qd13ce_5XNehu07DeFSjtjwSJWYBhGx5wcAITo=",
        alt: "Gutter with leaf guard detail"
      },
      {
        url: "https://media.istockphoto.com/id/1302299569/photo/working-at-height-equipment-construction-worker-wearing-safety-harness-belt-during-working-on.webp?a=1&b=1&s=612x612&w=0&k=20&c=HUK8cf4vSjdubX3om5gWGs50FnSIig-9CSi19kRCFiw=",
        alt: "Fascia board replacement work"
      }
    ],
    agent: {
      name: "Lisa from Bravo Exteriors",
      role: "Gutter Specialist",
      profile_photo_url: "https://example.com/images/lisa.jpg"
    },
    cta: {
      label: "🌧️ Schedule Gutter Service",
      url: "https://bravoroofingidaho.com/gutters"
    },
    date: "September 5, 2021",
    comments: 19
  },
  {
    id: 6,
    title: "Roof Inspection & Report",
    status_tag: "SCHEDULE NOW",
    featured_tag: "FREE SERVICE",
    price: {
      value: "FREE",
      frequency: "With Any Service"
    },
    location: "For Homeowners & Insurance Claims",
    description: "Get a professional roof inspection with photos and repair suggestions. Ideal for insurance, home sales, or peace of mind.",
    fullDescription: "Our comprehensive roof inspection service provides you with a detailed assessment of your roof's condition. Using advanced techniques including drone technology, we identify potential issues before they become costly problems.",
    features: {
      services: [
        "Drone or On-Roof Inspection",
        "Photos & Summary",
        "Repair Plan Provided",
        "Insurance-Friendly Reports"
      ]
    },
    facts: [
      { icon: "🚁", label: "Inspection Type", value: "Drone & manual" },
      { icon: "📸", label: "Documentation", value: "Photo report" },
      { icon: "📋", label: "Report", value: "Detailed summary" },
      { icon: "💰", label: "Insurance", value: "Claims assistance" },
      { icon: "⏱️", label: "Duration", value: "1-2 hours" },
      { icon: "🔍", label: "Coverage", value: "Complete roof" }
    ],
    images: [
      {
        url: "https://media.istockphoto.com/id/2217839006/photo/construction-engineer-inspecting-a-site-and-using-a-tablet-for-planning.webp?a=1&b=1&s=612x612&w=0&k=20&c=3yPidi2bxuNWPP6Rg1SkA44nF2T1826vAx-B25oArQY=",
        alt: "Drone inspecting residential roof"
      },
      {
        url: "https://media.istockphoto.com/id/2185404700/photo/man-with-hard-hat-standing-on-steps-inspecting-house-roof.webp?a=1&b=1&s=612x612&w=0&k=20&c=CCdN-cL0EQu3aWVIC_zxL-xvNy-bCTPKSQheSXR39YQ=",
        alt: "Inspector examining roof shingles"
      },
      {
        url: "https://images.unsplash.com/photo-1722876720000-f39b65b7d4a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fFJvb2YlMjBJbnNwZWN0aW9uJTIwJTI2JTIwUmVwb3J0fGVufDB8fDB8fHww",
        alt: "Digital roof inspection report"
      }
    ],
    agent: {
      name: "Mike from Bravo Roofing",
      role: "Certified Roof Inspector",
      profile_photo_url: "https://example.com/images/mike.jpg"
    },
    cta: {
      label: "📸 Book a Free Roof Inspection",
      url: "https://bravoroofingidaho.com/inspection"
    },
    date: "October 12, 2021",
    comments: 25
  }
];

export const getServiceById = (id: number): Service | undefined => {
  return servicesData.find(service => service.id === id);
};