import React from 'react';

export default function SubText() {
  return (
    <div className="flex flex-col gap-10 w-[100%]">
      <div className="bg-[#722F37] overflow-hidden whitespace-nowrap">
        <h3 className="inline-block animate-marquee px-4 font-medium font-lato text-white">
          Coterie Experience was born from a passion for crafting moments that
          go beyond the ordinary moments that linger, inspire, and connect.
          Rooted in the belief that every gathering, whether corporate or
          social, should reflect the heart and story of its host, we bring
          together creativity, care, and attention to detail to curate
          experiences that feel personal and unforgettable.
        </h3>
      </div>
      <div className="flex gap-10 lg:gap-20 w-full flex-col md:flex-row justify-center px-4 lg:px-[118px]">
        <div className="flex flex-col gap-6">
          <h3 className="text-[#17090B] font-bold font-playfair text-2xl md:text-[40px]">
            Vision Statement
          </h3>
          <p className="font-lato text-lg md:text-xl">
            To become a trusted consultancy and event architecture firm, shaping
            inclusive, expressive, and high-impact experiences that elevate
            hospitality, cultural celebration, and service excellence, one
            meaningful moment at a time.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="text-[#17090B] font-bold font-playfair text-2xl md:text-[40px]">
            Mission Statement
          </h3>
          <p className="font-lato text-lg md:text-xl">
            To blend academic insight and creative strategy in delivering event
            concepts and consulting solutions that support service improvement,
            customer experience innovation, and personalized celebration —
            bridging research with real-world transformation.{' '}
          </p>
        </div>
      </div>
    </div>
  );
}
