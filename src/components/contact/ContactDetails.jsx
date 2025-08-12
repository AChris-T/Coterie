import React from 'react';
import {
  EmailIcon,
  FacebooksIcon,
  InstagramIcon,
  MessageIcon,
  PhoneNumberIcon,
  PointedArrowIcon,
  TwittersIcon,
} from '../../assets/icons';

export default function ContactDetails() {
  return (
    <div className="mt-20 mb-40 w-full md:px-10 px-4 flex flex-col lg:flex-row justify-between items-center gap-10">
      <div className="flex flex-2/3 flex-col gap-[44px]">
        <div className="flex flex-col gap-4">
          <h3 className="text-[#17090B] font-lato font-semibold text-[32px]">
            Leave a comment
          </h3>
          <p className="text-[#17090B] font-lato text-sm">
            Your email address will not be published. Required fields are marked
          </p>
        </div>
        <div className="flex-col flex gap-6 ">
          <div className="flex flex-col w-full md:flex-row gap-4">
            <div className="flex flex-col gap-2 w-full">
              <label className="text-[#4B4D4A] font-medium font-lato">
                First name *
              </label>
              <input className="h-[56px] px-2 border-[#17090B33] border-1 focus:outline-none rounded-md " />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label className="text-[#4B4D4A] font-medium font-lato">
                Last name *{' '}
              </label>
              <input className="h-[56px] px-2 border-[#17090B33] border-1 focus:outline-none rounded-md " />
            </div>
          </div>
          <div className="flex flex-col w-full md:flex-row gap-4">
            <div className="flex flex-col gap-2 w-full">
              <label className="text-[#4B4D4A] font-medium font-lato">
                Phone Number*
              </label>
              <input className="h-[56px] px-2 border-[#17090B33] border-1 focus:outline-none rounded-md " />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label className="text-[#4B4D4A] font-medium font-lato">
                Email address*{' '}
              </label>
              <input className="h-[56px] px-2 border-[#17090B33] border-1 focus:outline-none rounded-md " />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[#4B4D4A] font-medium font-lato">
              Your message*
            </label>
            <textarea className="h-[200px] p-3 px-2 border-[#17090B33] border-1  rounded-md focus:outline-none" />
          </div>

          <div>
            <button className="px-9 py-5 flex items-center gap-5 cursor-pointer h-full  bg-[#722F37] text-white rounded-md font-lato font-medium text-[18px]">
              <h3> Submit Message</h3>
              <PointedArrowIcon />
            </button>
          </div>
        </div>
      </div>
      <div className="flex-1/3 bg-[#722f37] h-full flex flex-col gap-[37px] w-full rounded-lg text-white px-[34px] py-[59px]">
        <h3>Hi, we are always here to help you.</h3>
        <div className="flex flex-col gap-6">
          <div className="bg-[#FFFFFF1A] px-6 py-4 flex items-center font-lato font-semibold gap-3 rounded-lg">
            <PhoneNumberIcon />
            <div>
              <h3>Phone Number</h3>
              <p>+2348123456789</p>
            </div>
          </div>
          <div className="bg-[#FFFFFF1A] px-6 py-4 flex items-center font-lato font-semibold gap-3 rounded-lg">
            <MessageIcon />
            <div>
              <h3>Sms/Whatsapp</h3>
              <p>+2348123456789</p>
            </div>
          </div>
          <div className="bg-[#FFFFFF1A] px-6 py-4 flex items-center font-lato font-semibold gap-3 rounded-lg">
            <EmailIcon />
            <div>
              <h3>Sms/Whatsapp</h3>
              <p>+2348123456789</p>
            </div>
          </div>
          <hr className="text-white " />
          <div className="flex flex-col gap-2">
            <h2 className="font-lato font-semibold text-[18px]">
              Connect with us
            </h2>
            <div className="flex gap-3">
              <InstagramIcon />
              <FacebooksIcon />
              <TwittersIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
