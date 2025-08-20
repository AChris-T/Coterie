import React from 'react';
import { ArrowRight } from '../../assets/icons';
import { NavLink } from 'react-router-dom';

export default function EventPort() {
  return (
    <div className="flex flex-col md:px-[100px] font-playfair md:flex-row justify-center items-center w-full px-2 gap-5">
      <div className="flex gap-5  flex-col w-full h-full">
        <div className="pop h-[371px] w-full lg:w-[558px] flex  text-white items-end">
          <NavLink to={'/wedding'}>
            <div className="py-6 bg-[#FFFFFF1A] flex gap-10 justify-around  px-3 items-center w-full">
              <div className="text-xl md:text-[40px] font-bold">
                Timeless Love Experience{' '}
              </div>
              <h2 className="bg-[#FFFFFF3D] flex justify-center items-center p-4 rounded-full">
                <ArrowRight />
              </h2>
            </div>
          </NavLink>
        </div>
        <div className="summer h-[371px] w-full lg:w-[558px] flex  text-white items-end">
          <NavLink to={'/bootcamp'}>
            <div className="py-3 bg-[#FFFFFF1A] flex gap-10 justify-around  px-3 items-center w-full">
              <div className="text-xl md:text-[40px] font-bold">
                Summer Skills Experience{' '}
              </div>
              <h2 className="bg-[#FFFFFF3D] flex justify-center items-center p-4 rounded-full">
                <ArrowRight />
              </h2>
            </div>
          </NavLink>
        </div>{' '}
      </div>
      <div className="workers h-[371px] md:h-[755px] w-full flex  text-white items-end">
        <NavLink to={'/workers-dinner'}>
          <div className="py-3 bg-[#FFFFFF1A] flex gap-10 justify-between  px-3 items-center w-full">
            <h3 className="text-xl md:text-[40px] font-bold">
              Corporate Appreciation Event{' '}
            </h3>
            <h2 className="bg-[#FFFFFF3D] flex justify-center items-center p-4 rounded-full">
              <ArrowRight />
            </h2>
          </div>
        </NavLink>
      </div>
    </div>
  );
}
