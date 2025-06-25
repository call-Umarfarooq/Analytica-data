
'use client'
import React from 'react'
import { motion } from 'framer-motion'
const HeaderSection = ({text,title}) => {
  return (
    <motion.div
					initial={{ opacity: 0, y: -50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: false, amount: 0.6 }}
					transition={{ duration: 0.7 }}
					className='text-center mb-12'
				>
					<h2 className='text-4xl font-bold text-black mb-3'>
						{title}
					</h2>
					<p className='text-lg text-gray-600'>
						{text}
					</p>
					  
				</motion.div>
  )
}

export default HeaderSection