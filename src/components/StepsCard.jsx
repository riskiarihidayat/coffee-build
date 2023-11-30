import React from 'react'

export function StepsCardFirst({ number, img, description }) {
  return (
    <div className='mb-16'>
      <div className='relative mb-6 md:mb-8'>
        <div className='bg-sage rounded-full border-light-brown box-content border-8 w-[50px] h-[50px] flex justify-center items-center absolute -top-3 -left-3 z-[1] md:w-[85px] md:h-[85px]'>
          <p className='font-sans font-semibold text-light-brown text-mob-h1 md:text-desk-h1'>{number}</p>
        </div>
        <div className='bg-grey rounded-full w-[150px] h-[150px] flex justify-center items-center  md:w-[260px] md:h-[260px]'>
          <img src={img} alt="Coffee Seed" className='w-[120px] md:w-52' />
        </div>
      </div>
      <p className='paragraph text-white text-start mr-[100px]'>{description}</p>
    </div>
  )
}

export function StepsCardSecond({ number, img, description2 }) {
  return (
    <div className='mb-16 md:flex md:flex-col md:w-full'>
      <div className='relative mb-6 float-right md:order-2 md:float-none'>
        <div className='bg-sage rounded-full border-light-brown box-content border-8 w-[50px] h-[50px] flex justify-center items-center absolute -top-3 -left-3 z-[1] md:w-[85px] md:h-[85px]'>
          <p className='font-sans font-semibold text-light-brown text-mob-h1 md:text-desk-h1'>{number}</p>
        </div>
        <div className='bg-grey rounded-full w-[150px] h-[150px] flex justify-center items-center md:w-[260px] md:h-[260px]'>
          <img src={img} alt="Coffee Seed" className='w-[120px] md:w-52' />
        </div>
      </div>
      <p className='paragraph text-white text-end float-right md:order-1 ml-[100px] md:float-none md:text-start md:mb-8 md:mr-[100px] md:m-0'>{description2}</p>
    </div>
  )
}