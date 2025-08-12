import React from 'react';
import { PointedArrowIcon } from '../assets/icons';

export default function Comment() {
  return (
    <div className="flex flex-col gap-[44px]">
      <div className="flex flex-col gap-4">
        <h3 className="text-[#17090B] font-lato font-semibold text-[32px]">
          Leave a comment
        </h3>
        <p className="text-[#17090B] font-lato text-sm">
          Your email address will not be published. Required fields are marked
        </p>
      </div>
      <div className="flex-col flex gap-6 md:w-[502px]">
        <div className="flex flex-col gap-2">
          <label className="text-[#4B4D4A] font-medium font-lato">
            Your comment*
          </label>
          <textarea className="h-[200px] p-3 border-[#17090B33] border-1  rounded-md focus:outline-none" />
        </div>
        <div className="flex flex-col w-full md:flex-row gap-4">
          <div className="flex flex-col gap-2 w-full">
            <label className="text-[#4B4D4A] font-medium font-lato">
              Email address*
            </label>
            <input className="h-[56px] border-[#17090B33] border-1 focus:outline-none rounded-md " />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label className="text-[#4B4D4A] font-medium font-lato">
              First name *{' '}
            </label>
            <input className="h-[56px] border-[#17090B33] border-1 focus:outline-none rounded-md " />
          </div>
        </div>
        <div>
          <button className="px-9 py-5 flex items-center gap-5 cursor-pointer h-full  bg-[#722F37] text-white rounded-md font-lato font-medium text-[18px]">
            <h3> Submit</h3>
            <PointedArrowIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
