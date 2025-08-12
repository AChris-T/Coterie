import React from 'react';
import DinnerHero from '../components/Dinner/DinnerHero';
import DinnerGallery from '../components/Dinner/DinnerGallery';

export default function Dinner() {
  return (
    <div className="flex flex-col items-center  gap-5">
      <DinnerHero />
      <DinnerGallery />
    </div>
  );
}
