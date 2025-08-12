import React from 'react';
import JournalHero from '../components/Journal/JournalHero';
import JournalDetails from '../components/Journal/JournalDetails';

export default function Journal() {
  return (
    <div className="flex flex-col items-center  gap-5">
      <JournalHero />
      <JournalDetails />
    </div>
  );
}
