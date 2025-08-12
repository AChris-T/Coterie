import React from 'react';
import Hero from '../components/Home/Hero';
import Elegance from '../components/Home/Elegance';
import Services from '../components/Home/Services';
import Client from '../components/Home/Client';
import Portfolio from '../components/Home/Portfolio';
import Journal from '../components/Home/Journal';
import Storey from '../components/Home/Storey';

export default function Home() {
  return (
    <div className="flex flex-col items-center lg:gap-24 gap-10">
      <Hero />
      <Elegance />
      <Services />
      <Client />
      <Portfolio />
      <Journal />
      <Storey />
    </div>
  );
}
