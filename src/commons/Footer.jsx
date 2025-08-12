import React from 'react';
import logo from '../../src/assets/Images/Coterie-1.png';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About us', path: '/about-us' },
    { name: 'Our service', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Journal', path: '/journal' },
  ];
  return (
    <div className="flex flex-col font-lato items-center -mt-20 justify-center">
      <div className="bg-[#722F37]  py-[42px] w-[90%] lg:w-[70%] flex flex-col gap-6 items-center justify-center text-white rounded-3xl">
        <h3 className="font-playfair text-2xl md:text-4xl font-extrabold">
          Don’t miss out.
        </h3>
        <div className="w-full md:px-[131px] flex px-3">
          <input
            placeholder="Email Address"
            className="bg-white w-full h-[46px] focus:outline-none text-black px-2 rounded-tl-[5px] rounded-bl-[5px] "
          />
          <button className="bg-black text-sm md:text-base font-bold cursor-pointer text-white h-[47px] rounded-br-[5px] rounded-tr-[5px] px-3 md:px-10">
            Subscribe
          </button>
        </div>
        <h3 className="">Sign up for our newsletter to stay in the loop</h3>
      </div>
      <div className="mt-[56px] mb-[24px]">
        <img src={logo} alt="logo" className="object-cover " />
      </div>
      <div className="w-full flex flex-col gap-5">
        <div className="flex items-center justify-center flex-row flex-wrap  gap-5 text-sm">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} className="text-[#17090B] ">
              {link.name}
            </NavLink>
          ))}
        </div>
        <div className="bg-[#17090B] text-white flex items-center justify-center py-3 w-full font-lato">
          <h3>© 2025 .All Rights Reserved.</h3>
        </div>
      </div>
    </div>
  );
}
