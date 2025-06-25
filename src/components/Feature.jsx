'use client'
import React from 'react'
import HeaderSection from './HeaderSection'
import { motion } from 'framer-motion'

const Feature = () => {
  const features = [
    {
      title: "React Js",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "/assets/react.png"
    },
    {
      title: "Next Js",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "/assets/next.png"
    },
    {
      title: "Node Js",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "/assets/node.png"
    },
    {
      title: "MongoDB",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "/assets/mongodb.png"
      }
  ]
  return (
    <section id='feature' className='bg-white py-20'>
      <HeaderSection title={"Feature"} text={"Lorem ipsum dolor sit amet consectetur, adipisicing elit."} />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8  px-10'>
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -50 }}  
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{ duration: 0.7 }}
            className='border p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'
          >
            <img src={feature.image} alt={feature.title} className='w-16 h-16 mb-4' />
            <h3 className='text-xl text-black font-bold mb-2'>{feature.title}</h3>
            <p className='text-gray-600'>{feature.description}</p>
          </motion.div>
        ))}
      
      </div>
    </section>
  )
}

export default Feature