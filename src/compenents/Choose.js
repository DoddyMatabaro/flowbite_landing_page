import { Card } from 'flowbite-react'
import React from 'react'
import { chooseUs } from '../assets/data'

function Choose() {
  return (
    <section className='h-screen sm:h-auto  px-10 py-20 flex flex-col gap-20'>
         <div className="mb-4 flex items-center justify-between">
            <h5 className="text-4xl font-bold uppercase leading-none text-gray-900 dark:text-white">
                Pourquoi nous sommes le meilleur choix
            </h5>
          </div>
 <article className='grid gap-4 grid-cols-2 sm:grid-cols-1 md:grid-cols-2'>
      { chooseUs.map((choose)=>{
        return(
          <div className='transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-120'>
            <Card key={choose.id}>
              <div className='flex flex-row gap-4  p-4 '>
                    <b className=' text-xl  text-gray-600 dark:text-white-700'>
                        {choose.id}
                    </b>
                    <div className='flex flex-col gap-4 '>
                      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                           {choose.title}
                      </h5>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                          {choose.detail}
                      </p>
                    </div>
              </div>
          </Card>
          </div>
          )
      })}  
  </article>
</section>
  )
}

export default Choose