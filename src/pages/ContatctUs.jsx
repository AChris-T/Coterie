import React from 'react';
import ContactHero from '../components/contact/ContactHero';
import ContactDetails from '../components/contact/ContactDetails';

export default function ContatctUs() {
  return (
    <div className="flex flex-col items-center  gap-5">
      <ContactHero />
      <ContactDetails />
    </div>
  );
}
