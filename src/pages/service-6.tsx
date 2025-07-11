import React from 'react';
import ServiceDetail from '../Components/ServiceDetail';
import Header from '../Components/header';
import Footer from '../Components/Footer';

const Service6Page: React.FC = () => {
  return (
    <>
      <Header />
      <ServiceDetail serviceId={6} />
      
      <Footer />
    </>
  );
};

export default Service6Page;
