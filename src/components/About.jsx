'use client';
import React from 'react';
import { motion } from 'framer-motion';
import HeaderSection from './HeaderSection';

const About = () => {
	return (
		<section id='about' className='bg-gray-50'>
			<div className='max-w-6xl py-20 mx-auto px-6'>

			<HeaderSection text="Lorem ipsum dolor sit amet consectetur, adipisicing elit." title="About Analitica Data" />

				<motion.p
					initial={{ opacity: 0, y: -50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: false, amount: 0.6 }}
					transition={{ duration: 0.7 }}
					className='text-gray-700 text-lg leading-relaxed text-center'
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
					fugit dicta dolor animi ratione odio. Architecto corporis consequuntur
					molestias deserunt laudantium, illo ea illum esse corrupti minus natus
					tempore enim?
				</motion.p>
			</div>
		</section>
	);
};

export default About;
