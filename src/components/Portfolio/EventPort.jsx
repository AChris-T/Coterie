import React from 'react';
import { ArrowRight } from '../../assets/icons';
import { NavLink } from 'react-router-dom';

export default function EventPort() {
  return (
    <div className="flex flex-col md:px-[100px] font-playfair md:flex-row justify-center items-center w-full px-2 gap-5">
      <div className="flex gap-5  flex-col w-full h-full">
        <div className="pop h-[371px] w-full lg:w-[558px] flex  text-white items-end">
          <div className="py-6 bg-[#FFFFFF1A] flex gap-10 justify-around  px-3 items-center w-full">
            <NavLink to={'/wedding'}>
              <NavLink
                to={'/wedding'}
                className="text-xl md:text-[40px] font-bold"
              >
                Timeless Love Experience{' '}
              </NavLink>
            </NavLink>
            <h2 className="bg-[#FFFFFF3D] flex justify-center items-center p-4 rounded-full">
              <ArrowRight />
            </h2>
          </div>
        </div>
        <div className="summer h-[371px] w-full lg:w-[558px] flex  text-white items-end">
          <div className="py-3 bg-[#FFFFFF1A] flex gap-10 justify-around  px-3 items-center w-full">
            <NavLink to={'/bootcamp'}>
              <NavLink
                to={'/bootcamp'}
                className="text-xl md:text-[40px] font-bold"
              >
                Summer Skills Experience{' '}
              </NavLink>
            </NavLink>
            <h2 className="bg-[#FFFFFF3D] flex justify-center items-center p-4 rounded-full">
              <ArrowRight />
            </h2>
          </div>
        </div>{' '}
      </div>
      <div className="workers h-[371px] md:h-[755px] w-full flex  text-white items-end">
        <div className="py-3 bg-[#FFFFFF1A] flex gap-10 justify-between  px-3 items-center w-full">
          <NavLink to={'/workers-dinner'}>
            <h3 className="text-xl md:text-[40px] font-bold">
              Corporate Appreciation Event{' '}
            </h3>
          </NavLink>
          <h2 className="bg-[#FFFFFF3D] flex justify-center items-center p-4 rounded-full">
            <ArrowRight />
          </h2>
        </div>
      </div>
    </div>
  );
}
