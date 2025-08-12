import React from 'react';
import WeddingHero from '../components/Wedding/WeddingHero';
import WeddingGallery from '../components/Wedding/WeddingGallery';

export default function Wedding() {
  return (
    <div className="flex flex-col items-center  gap-5">
      <WeddingHero />
      <WeddingGallery />
    </div>
  );
}
