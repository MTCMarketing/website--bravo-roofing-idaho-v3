import React from 'react';
import ServiceDetail from '../Components/ServiceDetail';
import Header from '../Components/header';
import Footer from '../Components/Footer';

const Service4Page: React.FC = () => {
  return (
    <>
      <Header />
      <ServiceDetail serviceId={4} />
      <Footer />
    </>
  );
};

export default Service4Page;
