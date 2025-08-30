import React from 'react';
import AboutHero from '../components/About/AboutHero';
import SubText from '../components/About/SubText';
import OurStory from '../components/About/OurStory';
import Portfolio from '../components/Home/Portfolio';
import Testimonials from '../commons/Testimonials';
import Storey from '../components/Home/Storey';
import FAQ from '../components/About/FAQ';

export default function About() {
  return (
    <div className="flex flex-col items-center  gap-5">
      <AboutHero />
      <SubText />
      <OurStory />
      <FAQ />
      <div>
        <Testimonials />
        <Storey />
      </div>
    </div>
  );
}
