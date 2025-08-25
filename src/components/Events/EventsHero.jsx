import React from 'react';
import Navbar from '../../commons/Navbar';

export default function EventsHero() {
  return (
    <div className="my-2 mx-10 md:mt-10 h-[500px] EventsHero w-[95%] rounded-[20px] px-2 lg:px-14 pt-8 pb-28">
      <Navbar />
      <div className="  flex-col h-full justify-center items-center gap-2 flex  text-white px-2 lg:px-10 text-center">
        <h3 className="font-playfair max-w-[856px] text-3xl md:text-[70px] md:leading-20 font-extrabold">
          Corporate Events{' '}
        </h3>
        <p>
          From brand launches to leadership summits, we design corporate events
          that inspire connection and deliver impact. With creative strategy and
          precise planning, every detail from venue to guest flow supports your
          objectives and leaves a lasting impression.
        </p>
      </div>
    </div>
  );
}
