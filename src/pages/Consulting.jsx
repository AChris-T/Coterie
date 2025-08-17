import React from 'react';
import ConsultingHero from '../components/Consulting/ConsultingHero';
import ConsultingDetails from '../components/Consulting/ConsultingDetails';
import PlanEvents from '../commons/PlanEvents';

export default function Consulting() {
  return (
    <div className="flex w-full flex-col items-center  gap-5">
      <ConsultingHero />
      <ConsultingDetails />
      <PlanEvents />
    </div>
  );
}
