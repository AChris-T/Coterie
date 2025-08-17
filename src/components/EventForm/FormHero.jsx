import React from 'react';
import Navbar from '../../commons/Navbar';

export default function FormHero() {
  return (
    <div className="my-2 mx-10 md:mt-10 h-[500px] bg-[#17090B] w-[95%] rounded-[20px] px-2 lg:px-14 pt-8 pb-28">
      <Navbar />
      <div className="  flex-col h-full justify-center items-center gap-3 flex  text-white px-2 lg:px-10 text-center">
        <h3 className="font-playfair max-w-[856px] text-3xl md:text-[70px] md:leading-20 font-extrabold">
          Let’s Begin Something Beautiful{' '}
        </h3>
        <p>
          Tell us a little about your vision and we will help bring it to life
          with purpose care and creativity
        </p>
      </div>
    </div>
  );
}
