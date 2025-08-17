import React from 'react';
import CCEHero from '../components/CCEvents/CCEHero';
import CCEDetails from '../components/CCEvents/CCEDetails';
import PlanEvents from '../commons/PlanEvents';

export default function CCEEvents() {
  return (
    <div className="flex w-full flex-col items-center  gap-5">
      <CCEHero />
      <CCEDetails />
      <PlanEvents />
    </div>
  );
}
