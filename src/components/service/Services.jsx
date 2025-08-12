import React from 'react';
import { ArrowRight } from '../../assets/icons';

export default function Services() {
  return (
    <div className="font-playfair flex mt-10 items-center flex-col gap-14">
      <div className="flex flex-col w-full px-2 gap-5">
        <div className="flex gap-5 flex-col lg:flex-row w-full ">
          <div className="corporateimage h-[368px] w-full lg:w-[558px] flex  text-white items-end">
            <div className="py-3 bg-[#FFFFFF1A] flex gap-10 justify-around  px-3 items-center w-full">
              <div>
                <h3 className="text-xl md:text-[40px] font-bold">Events</h3>
                <p className="text-sm md:text-base">
                  Crafting seamless gatherings that leave guests talking for
                  days.{' '}
                </p>
              </div>
              <h2 className="bg-[#FFFFFF3D] flex justify-center items-center p-4 rounded-full">
                <ArrowRight />
              </h2>
            </div>
          </div>
          <div className="hospimage h-[368px] w-full lg:w-[550px] flex  text-white items-end">
            <div className="py-3 bg-[#FFFFFF1A] flex gap-10 justify-around  px-3 items-center w-full">
              <div>
                <h3 className="text-xl md:text-[40px] font-bold">
                  Consulting{' '}
                </h3>
                <p className="text-sm md:text-base">
                  Sharpening your creative process for flawless execution.
                </p>
              </div>
              <h2 className="bg-[#FFFFFF3D] flex justify-center items-center p-4 rounded-full">
                <ArrowRight />
              </h2>
            </div>
          </div>{' '}
        </div>
        <div className="cultureimage h-[368px] w-full flex  text-white items-end">
          <div className="py-3 bg-[#FFFFFF1A] flex gap-10 justify-between  px-3 items-center w-full">
            <div>
              <h3 className="text-xl md:text-[40px] font-bold">
                Cultural & Community Events{' '}
              </h3>
              <p className="text-sm md:text-base">
                Heritage celebrations, nonprofit galas, inclusive milestone
                events
              </p>
            </div>
            <h2 className="bg-[#FFFFFF3D] flex justify-center items-center p-4 rounded-full">
              <ArrowRight />
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
