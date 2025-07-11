import React from 'react';
import ServiceDetail from '../Components/ServiceDetail';
import Header from '../Components/header';
import Footer from '../Components/Footer';


const Service1Page: React.FC = () => {
  return (
    <>
      <Header />
      <ServiceDetail serviceId={1} />
   <Footer/>
    </>
  );
};

export default Service1Page;
