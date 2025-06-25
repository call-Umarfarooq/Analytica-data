"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Hero = () => {
	const { scrollY } = useScroll(); // Track full page scroll
	const y = useTransform(scrollY, [0, 300], ['0%', '40%']); // Parallax scroll

	return (
		<section
			id='home'
			className='relative h-[400px] flex items-center pt-16 justify-center text-white overflow-hidden'
		>
			<motion.div
				style={{
					y,
					backgroundImage: "url('/assets/data.jpg')",
				}}
				className='absolute inset-0  bg-center'
			>
				<div className='absolute inset-0 bg-black opacity-60' />
			</motion.div>

			{/* Foreground Content */}
			<div className='relative z-10 text-center px-4 max-w-xl'>
				<motion.h1
					initial={{ opacity: 0, y: -50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: false, amount: 0.6 }}
					transition={{ duration: 0.7 }}
					className='text-4xl md:text-6xl font-extrabold mb-4'
				>
					Umar Farooq, Mern Developer
				</motion.h1>
				<motion.p
					initial={{ opacity: 0, y: -50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: false, amount: 0.6 }}
					transition={{ duration: 0.7 }}
					className='text-lg mb-6'
				>
			     I AM Umar Farooq Computer Science Graduate About to three Year of experience in web
				</motion.p>
				<motion.button
					whileHover={{ scale: 1.05 }}
					className='bg-blue-600 px-6 py-3 rounded-full font-medium'
					
				>
					Get Started
				</motion.button>
			</div>
		</section>
	);
};

export default Hero;