
'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu } from 'react-icons/hi'; 
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
	const navItems = ['home', 'about', 'feature', 'contact'];

  const handleScroll = (section) => {
    const element = document.getElementById(section);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
    }
  };
	return (
		<nav className='fixed z-50 w-full bg-white shadow '>
			<div className= ' max-w-6xl mx-auto flex items-center justify-between px-6 py-4'>
				<h1 className='text-xl font-bold text-black'>Analytica Data</h1>
				<div className='hidden  md:flex space-x-6'>
					{navItems.map((item, index) => (
						<button 
            onClick={() => handleScroll(item)}
            className='capitalize text-gray-700 hover:text-blue-600' key={index}>{item}</button>
					))}
				</div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 text-2xl"
        >
           <HiMenu />
        </button>

			</div>

       <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="md:hidden bg-white px-6 py-4"
          >
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleScroll(item)}
                className="block w-full text-left text-gray-700 py-2 capitalize"
              >
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      
		</nav>
	);
};

export default Navbar;
