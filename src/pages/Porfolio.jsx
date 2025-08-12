import React from 'react';
import PorfolioHero from '../components/Portfolio/PorfolioHero';
import EventPort from '../components/Portfolio/EventPort';
import Testimonials from '../commons/Testimonials';
import Storey from '../components/Home/Storey';

export default function Porfolio() {
  return (
    <div className="flex flex-col items-center  gap-[100px]">
      <PorfolioHero />
      <EventPort />
      <div>
        <Testimonials />
        <Storey />
      </div>
    </div>
  );
}
