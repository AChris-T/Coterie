import React from 'react';
import Navbar from '../../commons/Navbar';

export default function ConsultingHero() {
  return (
    <div className="my-2 mx-10 md:mt-10 h-[500px] ConsultingHero w-[95%] rounded-[20px] px-2 lg:px-14 pt-8 pb-28">
      <Navbar />
      <div className="  flex-col h-full justify-center items-center gap-2 flex  text-white px-2 lg:px-10 text-center">
        <h3 className="font-playfair max-w-[856px] text-3xl md:text-[70px] md:leading-20 font-extrabold">
          Consulting{' '}
        </h3>
        <p>
          We provide strategy, service design and creative direction to help
          organizations and teams reduce uncertainty and plan with confidence.
          From event strategy to service delivery improvement and brand
          activation, our consulting turns ideas into clear roadmaps with
          measurable results. Whether for short-term support or full project
          guidance, we bring clarity, creativity, and impact to every initiative
        </p>
      </div>
    </div>
  );
}
