import { Card } from 'flowbite-react'
import React from 'react'
import { dimension } from '../assets/data'
function Dimension() {
  return (
    <section className='h-screen sm:h-auto md:h-screen px-10 py-20 flex flex-col gap-20'>
    <article className="flex flex-row gap-4">
            <div className='bg-black h-4 w-3 mt-5'></div>
            <h1 className="text-5xl font-bold uppercase ">Pourquoi nous sommes le meilleur choix</h1>
   </article>
   <article className='grid grid-cols-3 md:grid-cols-3 place-content-center gap-8 sm:grid-cols-1 '>
        { dimension.map(dimension=>{
            return(
                <div className="max-w-sm">
                    <Card
                        imgAlt="Meaningful alt text for an image that is not purely decorative"
                        imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
                        >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Noteworthy technology acquisitions 2021
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                        </p>
                    </Card>
                    </div>
            )
        })}
        </article>
    </section>
  )
}

export default Dimension