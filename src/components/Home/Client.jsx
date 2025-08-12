import React from 'react';
import client from '../../assets/Images/client.png';

export default function Client() {
  return (
    <div className="bg-[#17090B] w-full lg:p-[95px] px-3 flex flex-col gap-10 py-10 text-white">
      <h3 className="text-2xl text-center flex justify-center items-center font-extrabold md:text-[60px]">
        Client Journey Visual Map
      </h3>
      <div>
        <img src={client} alt="" className="w-full object-cover" />
      </div>
    </div>
  );
}
