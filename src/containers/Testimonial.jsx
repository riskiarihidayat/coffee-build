import React from 'react'

import testimonialImage from './../assets/testimonial.png'

export default function Testimonial() {
  return (
    <section id='testimonial' className='relative flex flex-col justify-center items-center px-12 pb-28 md:gap-8 md:px-40 md:flex-row'>
      <div className='text-center mb-12 md:text-start md:flex-1'>
        <h1 className='section-title text-title mb-6 md:mb-12'>Coffee is the best drink in the morning, it keeps you focused.</h1>
        <p className='font-sans font-medium text-mob-h4 text-grey-text md:text-desk-h4'>Jhon Doe</p>
      </div>
      <div className='md:flex-1 flex justify-end'>
        <img src={testimonialImage} alt="Coffee" className='w-[550px]' />
      </div>
      <div className='section-rounded bg-light-brown'></div>
    </section>
  )
}
