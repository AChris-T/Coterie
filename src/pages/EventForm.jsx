import React from 'react';
import FormHero from '../components/EventForm/FormHero';
import FormDetails from '../components/EventForm/FormDetails';

export default function EventForm() {
  return (
    <div className="flex bg-[#FFF6F7] flex-col items-center  gap-5">
      <FormHero />
      <FormDetails />
    </div>
  );
}
