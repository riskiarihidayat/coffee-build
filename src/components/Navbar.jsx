import React from 'react'

import MobNavbar from './MobNavbar'

import Logo from './../assets/logo.svg'

export default function Navbar() {
  return (
    <nav className='flex flex-col fixed top-0 right-0 left-0 z-50'>
      <div className='py-9 bg-brown rounded-e-sm border-dashed border-b-[100%] border-b-2 border-[#847571] sm:flex sm:justify-between sm:items-center sm:px-14 md:px-24 lg:px-40 2xl:px-96'>
        <div className='flex justify-center items-center gap-2'>
          <img src={Logo} alt='Logo' className='w-7' />
          <p className='text-mob-h3 text-white font-cursive font-normal'>
            Coffetto
          </p>
        </div>
        <ul className='hidden sm:flex sm:items-center sm:gap-12 md:gap-16 lg:gap-[72px]'>
          <li><a href="#" className='desk-nav-links text-sage'>Home</a></li>
          <li><a href="#about" className='desk-nav-links'>About</a></li>
          <li><a href="#steps" className='desk-nav-links'>Steps</a></li>
          <li><a href="#testimonial" className='desk-nav-links'>Testimonial</a></li>
        </ul>
      </div>
      <MobNavbar />
    </nav>
  )
}
