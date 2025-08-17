import React from 'react';
import { PointedArrowIcon } from '../assets/icons';

export default function PlanEvents() {
  return (
    <div className="w-full h-[537px] mb-46 ">
      <div className="clientImage h-full px-3 md:px-[100px] py-4 md:py-[75px] gap-5 lg:gap-0 flex flex-col lg:flex-row   w-full">
        <div className="bg-[#17090BB2] w-full flex-col gap-2 text-white text-center lg:px-[183px] px-2  flex justify-center items-center h-full  border-[#FFFFFF4D]">
          <h3 className="font-playfair text-center  text-2xl font-extrabold  md:text-[40px]">
            Ready to plan an event?
          </h3>
          <p className="font-lato italic">
            Tell us about your vision date and expected guest numbers and we
            will follow up with a practical plan timeline and next steps
            tailored to your objectives and budget
          </p>
          <button className="px-9 py-2 flex items-center gap-5 cursor-pointer text-[#722f37] bg-white  border-1 border-[#722F37]  rounded-md font-lato font-medium text-[18px]">
            <h3> Start your experience</h3>
            <PointedArrowIcon fill={'#722f37'} />
          </button>
        </div>
      </div>
    </div>
  );
}
