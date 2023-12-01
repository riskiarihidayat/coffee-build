import React from 'react'

import logo from './../assets/logo.svg'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { FaFacebookF, FaTwitter } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'

export default function Footer() {
  return (
    <footer className='bg-light-brown bg-mob-steps px-6 pb-8 md:px-[160px]'>
      <div className='flex flex-col justify-center items-center mb-[72px] md:flex-row md:mb-24'>
        <div className='m-auto mb-[72px] md:flex-1 md:flex md:flex-col md:justify-start'>
          <div className='flex justify-center items-center gap-2 md:justify-start'>
            <img src={logo} alt="logo" className='w-7 mb-4' />
            <p className='font-cursive font-normal text-mob-h3 text-white md:text-desk-h3'>Coffetto</p>
          </div>
          <p className='font-cursive font-normal text-white text-mob-big md:text-desk-h1'>Sign up for our newsletter</p>
        </div>
        <form>
          <input type="email" placeholder='Enter e-mail address' className='w-[328px] h-16 rounded-full border-4 border-light-grey-text bg-transparent mb-4 placeholder:font-sans placeholder:font-medium placeholder:text-mob-h4 placeholder:pl-6' />
          <button className='flex justify-center items-center gap-2 bg-sage w-[328px] h-16 rounded-full m-auto md:text-start md:m-0'>
            <p className='font-sans text-mob-h4 font-medium text-title md:text-desk-h4'>Subcribe</p>
            <MdOutlineKeyboardArrowRight className='text-2xl text-title' />
          </button>
          <p className='font-sans font-normal text-white text-mob-small mt-4'>We care about your data. Read our <span className='text-sage'>Privacy Policy</span></p>
        </form>
      </div>
      <div className='flex flex-col items-center'>
        <div className='flex items-center gap-8 mb-8'>
          <a href="/"><FaFacebookF className='footer-icon' /></a>
          <a href="/"><AiFillInstagram className='footer-icon' /></a>
          <a href="/"><FaTwitter className='footer-icon' /></a>
        </div>
        <p className='font-sans text-sm text-light-grey-text'>&copy; Copyright Bedimcode. All rights reserved</p>
      </div>
    </footer>
  )
}
