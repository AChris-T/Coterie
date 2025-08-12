import React, { useState } from 'react';
import logo from '../../src/assets/Images/logo.png';
import { NavLink } from 'react-router-dom';
import OpenBar, { CloseBar } from '../assets/icons';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About us', path: '/about-us' },
    { name: 'Our services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Journal', path: '/journal' },
  ];

  return (
    <div className="w-full bg-[#FFFFFFCC] h-[88px] font-lato flex justify-between items-center px-6 lg:px-10 rounded-full">
      <img src={logo} alt="logo" className="object-cover h-10" />

      {/* Desktop Links */}
      <div className="hidden lg:flex gap-5 text-sm">
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              isActive
                ? 'font-extrabold text-[#722F37] border-b-2 border-[#722F37]'
                : 'font-semibold text-[#17090B]'
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>

      {/* Desktop Button */}
      <NavLink
        to="/contact-us"
        className="hidden lg:block px-8 py-4 rounded-full text-white font-bold text-sm bg-[#722F37]"
      >
        Start Your Experience
      </NavLink>

      {/* Hamburger for mobile */}
      <div className="lg:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <CloseBar /> : <OpenBar />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-[100px] left-0 w-full mx-2 bg-white shadow-lg py-6 px-4 flex flex-col gap-4 lg:hidden z-50">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)} // close menu on click
              className={({ isActive }) =>
                isActive
                  ? 'font-extrabold text-[#722F37] border-b-2 border-[#722F37]'
                  : 'font-semibold text-[#17090B]'
              }
            >
              {link.name}
            </NavLink>
          ))}
          <button className="px-8 py-6 mt-4 rounded-full text-white font-bold text-sm bg-[#722F37]">
            Start Your Experience
          </button>
        </div>
      )}
    </div>
  );
}
