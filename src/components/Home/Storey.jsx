import React from 'react';
import { PointedArrowIcon } from '../../assets/icons';

export default function Storey() {
  return (
    <div className="lg:px-24 pb-56 w-full  bg-[#EDD4D7]  md:px-10 py-10 px-3 font-playfair flex flex-col gap-10 ">
      <div className="flex gap-10 md:flex-row flex-col justify-center items-center">
        <div className="w-full flex flex-col items-center">
          <h3 className="text-2xl flex  font-extrabold md:text-[60px]">
            Tell Us Your Story
          </h3>
          <p className="text-[#17090B]">We’ll tailor a plan just for you.</p>
          <div className="flex justify-center items-center mt-4">
            <button className="bg-[#722F37] py-3 text-white px-16 font-lato rounded-lg cursor-pointer">
              Download Our Planning Kit
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full bg-white rounded-lg p-6">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2 ">
            <div className="flex flex-col gap-2">
              <label>First Name*</label>
              <input className="h-[56px] border-1 rounded-md border-[#00000014]" />
            </div>
            <div className="flex flex-col gap-2">
              <label>Last Name*</label>
              <input className="h-[56px] border-1 rounded-md border-[#00000014]" />
            </div>
            <div className="flex flex-col gap-2">
              <label>Phone Number*</label>
              <input className="h-[56px] border-1 rounded-md border-[#00000014]" />
            </div>
            <div className="flex flex-col gap-2">
              <label>Email Address*</label>
              <input className="h-[56px] border-1 rounded-md border-[#00000014]" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label>Message*</label>
            <input className="h-[156px] md:[200px] border-1 rounded-md border-[#00000014]" />
          </div>
          <button
            type="submit"
            className="bg-[#722F37] h-full font-medium flex gap-1 mt-10 items-center py-3 justify-center  text-white px-16 font-lato rounded-lg cursor-pointer"
          >
            Send my story
            <h3 className="flex items-center mt-1 justify-center">
              <PointedArrowIcon />
            </h3>
          </button>{' '}
        </div>
      </div>
    </div>
  );
}
