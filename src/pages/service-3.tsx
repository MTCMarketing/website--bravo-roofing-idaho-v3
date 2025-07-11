import React from 'react';
import ServiceDetail from '../Components/ServiceDetail';
import Header from '../Components/header';
import Footer from '../Components/Footer';


const Service3Page: React.FC = () => {
  return (
    <>
      <Header />
      <ServiceDetail serviceId={3} />
    <Footer/>
    </>
  );
};

export default Service3Page;
