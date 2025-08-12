import React from 'react';
import ServiceHero from '../components/service/ServiceHero';
import Services from '../components/service/Services';
import WhyUs from '../components/service/WhyUs';

export default function OurService() {
  return (
    <div className="flex flex-col items-center  gap-5">
      <ServiceHero />
      <Services />
      <WhyUs />
    </div>
  );
}
