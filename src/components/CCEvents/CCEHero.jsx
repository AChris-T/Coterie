import React from 'react';
import Navbar from '../../commons/Navbar';

export default function CCEHero() {
  return (
    <div className="my-2 mx-10 md:mt-10 h-[500px] CCEHero w-[95%] rounded-[20px] px-2 lg:px-14 pt-8 pb-28">
      <Navbar />
      <div className="  flex-col h-full justify-center items-center gap-2 flex  text-white px-2 lg:px-10 text-center">
        <h3 className="font-playfair w-full text-center text-3xl md:text-[70px] md:leading-20 font-extrabold">
          Cultural & Community Events{' '}
        </h3>
      </div>
    </div>
  );
}
