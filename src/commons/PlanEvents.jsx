import React from 'react';
import { PointedArrowIcon } from '../assets/icons';
import { NavLink } from 'react-router-dom';

export default function PlanEvents() {
  return (
    <div className="w-full h-[537px] mb-46 ">
      <div className="clientImage h-full px-3 md:px-[100px] py-4 md:py-[75px] gap-5 lg:gap-0 flex flex-col lg:flex-row   w-full">
        <div className="bg-[#17090BB2] w-full flex-col gap-2 text-white text-center lg:px-[183px] px-2  flex justify-center items-center h-full  border-[#FFFFFF4D]">
          <h3 className="font-playfair text-center  text-2xl font-extrabold  md:text-[40px]">
            Ready to bring your vision to life?{' '}
          </h3>
          <p className="font-lato italic">
            Let’s design your next experience together crafted with care,
            clarity, and a touch of timeless elegance.
          </p>
          <NavLink
            to="/events-form"
            className="px-9 mt-2 py-2 flex items-center gap-5 cursor-pointer text-[#722f37] bg-white  border-1 border-[#722F37]  rounded-md font-lato font-medium text-[18px]"
          >
            <h3>Start Your Experience </h3>
            <PointedArrowIcon fill={'#722f37'} />
          </NavLink>
        </div>
      </div>
    </div>
  );
}
