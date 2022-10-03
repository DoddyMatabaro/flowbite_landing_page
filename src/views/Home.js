import React from 'react'
import Choose from '../compenents/Choose'
import Dimension from '../compenents/Dimension'
import EgProjects from '../compenents/EgProjects'
import Hero from '../compenents/Hero'
import Presentation from '../compenents/Presentation'
import Question from '../compenents/Question'
import Testimonials from '../compenents/Testimonials'

function Home() {
  return (
    <section className='w-screen grid grid-rows-10 grid-flow-row'>
        <Hero/>
        <Choose/>
        <Dimension/>
        <EgProjects/>
        <Presentation/>
        <Testimonials/>
        <Question/>
    </section>
  )
}

export default Home