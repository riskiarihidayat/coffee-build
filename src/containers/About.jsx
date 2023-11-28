import React from 'react'

import CoffeeSeedImage from './../assets/about.png'

export default function About() {
  return (
    <section id='about' className='relative px-6 pb-[88px] md:flex md:items-center md:px-40 md:gap-[72px]'>
      <div className='text-center mb-12 md:flex-1 md:order-2 md:text-start'>
        <h1 className='section-title text-title mb-6'>Our History</h1>
        <p className='paragraph text-grey-text'>We make and grow the best coffee in Peru, accompanying families since 1930, with professional workers who harvest, collect and select the coffee with quality work, thus providing exquisite coffee to enjoy together as a family.</p>
      </div>
      <div className='flex justify-center items-center md:flex-1 md:order-1'>
        <img src={CoffeeSeedImage} alt="Coffee Seed" className='md:w-[550px] md:h-[366px] md:object-cover md:bg-cover md:rounded-3xl' />
      </div>
      <div className='section-rounded bg-light-brown'></div>
    </section>
  )
}
