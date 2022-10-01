import React from 'react'
import Choose from '../compenents/Choose'
import Dimension from '../compenents/Dimension'
import Hero from '../compenents/Hero'

function Home() {
  return (
    <section className='w-screen grid grid-rows-10 grid-flow-row'>
        <Hero/>
        <Choose/>
        <Dimension/>
    </section>
  )
}

export default Home