import React from 'react'
import Choose from '../compenents/Choose'
import Contact from '../compenents/Contact'
import Dimension from '../compenents/Dimension'
import EgProjects from '../compenents/EgProjects'
import Hero from '../compenents/Hero'
import Presentation from '../compenents/Presentation'
import Question from '../compenents/Question'
import Testimonials from '../compenents/Testimonials'
import { useTransition } from 'react-spring'

function Home() {

  return (
 <section className='w-full scroll-smooth grid grid-rows-10 grid-flow-row dark:bg-slate-900'>
        <Hero/>
        <Choose/>
        <Dimension/>
        <EgProjects/>
        <Presentation/>
        <Testimonials/>
        <Question/>
        <Contact/>
     </section>
 
  )
}

export default Home