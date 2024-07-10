import React, { useState } from 'react';
import { TbDeviceMobileDollar } from "react-icons/tb";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r  from-cyan-100 via-cyan-200 to-cyan-300  p-4" >
      <div className="container mx-auto flex justify-between items-center">
      <div className='flex xs:ml-[40px] pt-[40px] lg:ml-[90px] '>
                    <div >
                        <TbDeviceMobileDollar className='xs:h-[43px] xs:w-[25px] text-cyan-800 ' />
                    </div>
                    <div className='flex-col'>
                        <h3 className='ml-4 tracking-widest font-bold'>Hub</h3>
                        <h3 className='ml-4 xs:mb-[40px] tracking-widest font-bold'>store</h3>
                    </div>
                </div>
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="Black focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <div className={`sm:flex sm:items-center ${isOpen ? 'block' : 'hidden'} w-full sm:w-auto`}>
          <a href="#home" className="block sm:inline-block Black px-4 py-2">Home</a>
          <a href="#login" className="block sm:inline-block Black px-4 py-2">Login</a>
          <a href="#signup" className="block sm:inline-block Black px-4 py-2">Signup</a>
          <a href="#products" className="block sm:inline-block Black px-4 py-2">Products</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
