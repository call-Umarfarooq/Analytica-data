import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-black text-white py-10'>

      <div>
        <div className='max-w-6xl mx-auto px-6 text-center'>
          <p className='text-sm mb-4'>© 2023 Analytica Data. All rights reserved.</p>
          <div className='flex justify-center space-x-4'>
            <a href='#' className='text-gray-400 hover:text-white'>Privacy Policy</a>
            <a href='#' className='text-gray-400 hover:text-white'>Terms of Service</a>
            <a href='#' className='text-gray-400 hover:text-white'>Contact Us</a>
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer