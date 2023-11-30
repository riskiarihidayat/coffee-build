import React from 'react'

import ProductsCard from '../components/ProductsCard'
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
        <p className='paragraph text-center md:text-start'>We strive to form deep partnerships with farmers from all over the world to create perspective together and form healthy working relationships built on trust and respect.</p>
      </div>
      <div className='flex md:flex-[2] md:justify-end'>
        <div className='flex flex-wrap justify-center items-center gap-14 m-auto'>
          <ProductsCard
            img={product1}
            productName='Classic Coffee'
            productPrice='$17.90'
          />
          <ProductsCard
            img={product2}
            productName='Black Coffee'
            productPrice='$24.90'
          />
          <ProductsCard
            img={product3}
            productName='Strong Coffee'
            productPrice='$32.90'
          />
        </div>
      </div>
      <div className='section-rounded bg-white'></div>
    </section>
  )
}
