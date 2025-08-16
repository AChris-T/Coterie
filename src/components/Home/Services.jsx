import React from 'react';
import { ArrowRight } from '../../assets/icons';
import { NavLink } from 'react-router-dom';

export default function Services() {
  return (
    <div className="font-playfair flex items-center flex-col gap-14">
      <h3 className="text-2xl font-extrabold md:text-[60px]">
        Our Signature Services{' '}
      </h3>
      <div className="flex flex-col w-full px-2 gap-5">
        <div className="flex gap-5 flex-col lg:flex-row w-full ">
          <NavLink
            to="/services"
            className="corporateimage h-[368px] w-full lg:w-[558px] flex  text-white items-end"
          >
            <div className="py-6 bg-[#FFFFFF1A] flex gap-10 justify-around  px-3 items-center w-full">
              <div>
                <h3 className="text-xl md:text-[40px] font-bold">
                  Corporate Events
                </h3>
                <p className="text-sm md:text-base">
                  Brand launches, summits, appreciation events, team offsites
                </p>
              </div>
              <h2 className="bg-[#FFFFFF3D] flex justify-center items-center p-4 rounded-full">
                <ArrowRight />
              </h2>
            </div>
          </NavLink>
          <NavLink
            to="/services"
            className="hospimage h-[368px] w-full lg:w-[550px] flex  text-white items-end"
          >
            <div className="py-3 bg-[#FFFFFF1A] flex gap-10 justify-around  px-3 items-center w-full">
              <div>
                <h3 className="text-xl md:text-[40px] font-bold">
                  Hospitality Consulting{' '}
                </h3>
                <p className="text-sm md:text-base">
                  Service delivery audits, guest journey enhancement, training
                  and feedback loops{' '}
                </p>
              </div>
              <h2 className="bg-[#FFFFFF3D] flex justify-center items-center p-4 rounded-full">
                <ArrowRight />
              </h2>
            </div>
          </NavLink>{' '}
        </div>
        <NavLink
          to="/services"
          className="cultureimage h-[368px] w-full flex  text-white items-end"
        >
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
        </NavLink>
      </div>
    </div>
  );
}
