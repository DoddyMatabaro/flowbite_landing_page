import { Card } from 'flowbite-react'
import React, { useEffect } from 'react'
import { projectsEg } from '../assets/data'

function EgProjects() {


    

    return (
    <section className='h-screen sm:h-auto md:h-screen px-10 py-20 flex flex-col gap-20'>
        <article className="flex flex-row gap-4">
                <div className='bg-black h-4 w-3 mt-5'></div>
                <h1 className="text-5xl font-bold uppercase ">Pourquoi nous sommes le meilleur choix</h1>
      </article>
        <article className='flex my-10 flex-row gap-2 justify-center align-middle h-[95%] sm:flex-col sm:h-auto'>
            <div className=' w-1/4 md:rounded-bl-[100px] xl:rounded-bl-[100px] sm:w-full sm:rounded-t-[100px] shadow-2xl shadow-black overflow-hidden'>
              <img src={projectsEg[0]} alt='conception' className='max-w-full h-full object-cover'/>
            </div>
            <div className='w-2/4 sm:w-full  shadow-2xl shadow-black'>
                  <img src={projectsEg[1]} alt='paroisse' className='max-w-full h-full'/>

            </div>
            <div className='bg-black w-1/4 md:rounded-bl-[100px] xl:rounded-bl-[100px] sm:w-full sm:rounded-b-[100px] shadow-2xl shadow-black overflow-hidden'>
              <img src={projectsEg[2]} alt='realisation' className='max-w-full h-full object-cover'/>
            </div>
        </article>
    </section>
  )
}

export default EgProjects