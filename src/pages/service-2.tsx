import React from 'react';
import ServiceDetail from '../Components/ServiceDetail';
import Header from '../Components/header';

import Footer from '../Components/Footer';


const Service2Page: React.FC = () => {
  return (
    <>
      <Header />
      <ServiceDetail serviceId={2} />
    <Footer/>
    </>
  );
};

export default Service2Page;
