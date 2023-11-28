import React from 'react'

import CoffeIcon from './../assets/hero-coffee-icon.png'
import HeroCoffee from './../assets/hero-coffee.png'

import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

export default function Hero() {
  return (
    <section className='bg-brown pt-28 px-6 relative sm:px-16 md:pb-20 md:flex md:justify-between md:items-center md:gap-[72px] md:px-44'>
      <div className='mb-8 md:order-2'>
        <div className='text-center mb-9 md:text-start md:mb-10'>
          <p className='font-sans text-mob-h4 text-sage font-medium mb-3 md:text-desk-h4'>
            EXCEPTIONAL QUALITY
          </p>
          <div className='max-w-[273px] m-auto md:m-0 md:max-w-[447px]'>
            <h1 className='font-cursive text-mob-biggest text-white font-normal leading-[52px] md:text-desk-biggest md:leading-[86px]'>
              It's time for a good coffee
              <img
                src={CoffeIcon}
                alt='Coffee Seed'
                className='float-right w-20 -mr-3 -mt-2 md:w-28'
              />
            </h1>
          </div>
        </div>
        <p className='paragraph mb-8 text-center md:text-start md:text-desk-h4 md:mb-12'>
          Each select coffee bean reflects our commitment to Peruvian coffee
          growers, who bring the best select coffee to your table.
        </p>
        <button className='flex items-center gap-2 bg-sage py-4 px-7 rounded-full m-auto md:text-start md:m-0'>
          <p className='font-sans text-mob-h4 font-medium text-title md:text-desk-h4'>Get Started</p>
          <MdOutlineKeyboardArrowRight className='text-2xl text-title' />
        </button>
      </div>
      <div className='pb-28 m-auto md:order-1'>
        <img src={HeroCoffee} alt="Coffee Product Illustrator" className='md:w-[550px] ' />
      </div>
      <div className='section-rounded bg-light-brown'></div>
    </section>
  )
}
