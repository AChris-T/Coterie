import React from 'react';
import BootcampHero from '../components/Bootcamp/BootcampHero';
import BootCampGallery from '../components/Bootcamp/BootCampGallery';

export default function Bootcamp() {
  return (
    <div className="flex flex-col items-center  gap-5">
      <BootcampHero />
      <BootCampGallery />
    </div>
  );
}
