import React from 'react';
import EventsHero from '../components/Events/EventsHero';
import EventsDetails from '../components/Events/EventsDetails';
import PlanEvents from '../commons/PlanEvents';

export default function Events() {
  return (
    <div className="flex w-full flex-col items-center  gap-5">
      <EventsHero />
      <EventsDetails />
      <PlanEvents />
    </div>
  );
}
