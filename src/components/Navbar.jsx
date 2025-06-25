
'use client'
import React from 'react';

const Navbar = () => {
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
				<div className='flex space-x-6'>
					{navItems.map((item, index) => (
						<button 
            onClick={() => handleScroll(item)}
            className='capitalize text-gray-700 hover:text-blue-600' key={index}>{item}</button>
					))}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
