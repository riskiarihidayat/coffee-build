import React from 'react'

import { RiHome5Fill, RiCompass3Fill, RiMessage3Fill } from 'react-icons/ri'
import { PiMedalFill } from 'react-icons/pi'

export default function MobNavbar() {
  return (
    <div className='flex justify-between items-center bg-gradient-to-br from-[#6B4238] to-[#36211C] py-6 px-16 rounded-t-[56px] fixed bottom-0 left-0 right-0 sm:hidden'>
      <a className='flex flex-col items-center' href='#'>
        <RiHome5Fill className='mob-nav-icons' />
        <p className='mob-nav-links text-sage'>Home</p>
      </a>
      <a className='flex flex-col items-center' href='#about'>
        <PiMedalFill className='mob-nav-icons' />
        <p className='mob-nav-links'>About</p>
      </a>
      <a className='flex flex-col items-center' href='#steps'>
        <RiCompass3Fill className='mob-nav-icons' />
        <p className='mob-nav-links'>Steps</p>
      </a>
      <a className='flex flex-col items-center' href='testimonial'>
        <RiMessage3Fill className='mob-nav-icons' />
        <p className='mob-nav-links'>Testimonial</p>
      </a>
    </div>
  )
}
