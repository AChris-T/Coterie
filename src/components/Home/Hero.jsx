import React from 'react';
import Navbar from '../../commons/Navbar';

export default function Hero() {
  return (
    <div className="m-2 md:m-10 herobg h-full rounded-[20px] px-2 lg:px-14 pt-8 pb-28">
      <Navbar />
      <div className="mt-20 md:mt-[250px] flex-col items-center gap-6 flex  text-white px-2 lg:px-10 text-center">
        <h3 className="font-playfair text-3xl md:text-[70px] md:leading-20 font-extrabold">
          Every Experience Should Reflect Insight, Identity, and Impact
        </h3>
        <p className="w-full lg:w-[852px] font-lato text-lg md:text-[26px] italic md:leading-8">
          From boardrooms to ballrooms, we help organizations and individuals
          design moments that matter powered by research and care.
        </p>
        <button className="bg-[#722F37] py-3 px-16 font-lato rounded-lg cursor-pointer">
          Start Your Experience
        </button>
      </div>
    </div>
  );
}
