import React from 'react'

import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

import product1 from './../assets/product-1.png'
import product2 from './../assets/product-2.png'
import product3 from './../assets/product-3.png'

export default function Products() {
  return (
    <section className='relative bg-light-brown px-10 pb-24 md:flex md:items-center md:px-44 md:pb-32'>
      <div className='mb-14 md:flex-1'>
        <button className='flex items-center gap-2 bg-brown py-4 px-7 rounded-full mb-8 m-auto md:text-start md:m-0 md:mb-8'>
          <p className='font-sans text-mob-h4 font-medium text-white md:text-desk-h4'>Scroll Down</p>
          <MdOutlineKeyboardArrowRight className='text-2xl text-white rotate-90' />
        </button>
        <p className='paragraph md:text-start'>We strive to form deep partnerships with farmers from all over the world to create perspective together and form healthy working relationships built on trust and respect.</p>
      </div>
      <div className='flex md:flex-[2] md:justify-end'>
        <div className='flex flex-wrap justify-center items-center gap-14'>
          <div className='text-center'>
            <img src={product1} alt="Coffee Product" className='w-[120px] mb-6' />
            <div>
              <p className='mob-product-detail'>Classic Coffee</p>
              <p className='mob-product-detail'>$17.90</p>
            </div>
          </div>
          <div className='text-center'>
            <img src={product2} alt="Coffee Product" className='w-[120px] mb-6' />
            <div>
              <p className='mob-product-detail'>Black Coffee</p>
              <p className='mob-product-detail'>$24.90</p>
            </div>
          </div>
          <div className='text-center'>
            <img src={product3} alt="Coffee Product" className='w-[120px] mb-6' />
            <div>
              <p className='mob-product-detail'>Strong Coffee</p>
              <p className='mob-product-detail'>$32.90</p>
            </div>
          </div>
        </div>
      </div>
      <div className='section-rounded bg-white'></div>
    </section>
  )
}
