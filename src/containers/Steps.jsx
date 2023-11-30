import React from 'react'

import { StepsCardFirst, StepsCardSecond } from '../components/StepsCard'
import steps1 from './../assets/steps-1.png'
import steps2 from './../assets/steps-2.png'
import steps3 from './../assets/steps-3.png'

export default function Steps() {
  return (
    <section id='steps' className='bg-light-brown bg-mob-steps px-6 pb-[132px] md:px-52'>
      <div className='mb-16 md:mb-28'>
        <h1 className='section-title text-white text-center'>Steps of manufacturing our products</h1>
      </div>
      <div className='flex flex-col md:flex-row md:justify-between'>
        <StepsCardFirst
          number='01'
          img={steps1}
          description='Harvest occurs annually when the coffee beans reach maturity and are collected for processing.'
        />
        <StepsCardSecond
          number='02'
          img={steps2}
          description2='The beans are dried using a wet or dry technique, depending on the taste we want to obtain.'
        />
        <StepsCardFirst
          number='03'
          img={steps3}
          description='The coffee is roasted and acquires its flavor by processing the grain in ovens.'
        />
      </div>
      <div className='section-rounded bg-white'></div>
    </section>
  )
}
