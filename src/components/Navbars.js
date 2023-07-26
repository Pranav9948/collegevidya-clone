// Navbar.js

import React, { useState } from 'react';
import MainLogo from '../images/main-logo.webp'
import { FaTwitter } from 'react-icons/fa';

const Navbars = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className="bg-white  py-4 px-8">
      <div className="flex items-center justify-between">
        {/* Logo */}
       <img src={MainLogo} className='w-32' alt="mainLogo" />

        {/* Mobile Menu Icon */}
        <button
          className="lg:hidden text-black text-2xl focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? '×' : '☰'}
        </button>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex space-x-56">
          <li className='flex items-center '>
            <div  className="text-black  hover:text-gray-200">
              #ChunoWahiJoHaiSahi
              
            </div>
            <FaTwitter className='ms-2 text-blue-500' size={20} />
          </li>
         
         <div>
          <li className='-ms-44 mt-2'>
            <button href="/about" className="text-white px-8 py-2 font-bold  bg-blue-700 rounded-lg  hover:text-gray-200">
             Explore&nbsp;Programs
            </button>
            </li>
            </div>

            <div >
          <li style={{marginLeft:'-200px'}} className='mt-3' >
            <a href="/services" className="text-black text-sm hover:text-gray-200">
             Top&nbsp;universities
            </a>
          </li>
          </div>
          <div>
          <li style={{marginLeft:'-300px'}} className='mt-3'  >
            <a href="/contact" className="text-black text-sm hover:text-gray-200">
             Resources
            </a>
          </li>

          <div>
          <li style={{marginLeft:'-220px'}} className='-mt-8'>
            <button href="/about" className="text-blue-600 border-2  border-blue-200 px-4 py-2 font-bold  bg-white rounded-lg  hover:text-gray-200">
             Sign In
            </button>
            </li>
            </div>

            <div>
          <li style={{marginLeft:'-100px'}} className='-mt-11'>
            <button href="/about" className="text-blue-600 border-2 border-blue-200  px-2 py-2 font-bold  bg-white rounded-lg  hover:text-gray-200">
             Search
            </button>
            </li>
            </div>



          </div>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="lg:hidden mt-4 space-y-2">
          <li>
            <a href="/" className="text-white block hover:text-gray-200">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="text-white block hover:text-gray-200">
              About
            </a>
          </li>
          <li>
            <a href="/services" className="text-white block hover:text-gray-200">
              Services
            </a>
          </li>
          <li>
            <a href="/contact" className="text-white block hover:text-gray-200">
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbars;
