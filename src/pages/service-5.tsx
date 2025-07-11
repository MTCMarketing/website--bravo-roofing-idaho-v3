import React from 'react';
import ServiceDetail from '../Components/ServiceDetail';
import Header from '../Components/header';
import Footer from '../Components/Footer';

const Service5Page: React.FC = () => {
  return (
    <>
      <Header />
      <ServiceDetail serviceId={5} />
      <Footer />
    </>
  );
};

export default Service5Page;
