import React from 'react'

import { Navbar } from './components'
import { Hero, About, Products, Steps, Testimonial, Footer } from './containers'

export default function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Products />
      <About />
      <Steps />
      <Testimonial />
      <Footer />
    </main>
  )
}
