import { Card } from 'flowbite-react'
import React from 'react'
import { dimension } from '../assets/data'
function Dimension() {
  return (
    <section className='h-auto sm:h-auto md:h-screen px-10 py-20 flex flex-col gap-20'>
    <article className="flex flex-row gap-4">
            <div className='bg-black h-4 w-3 mt-5'></div>
            <h1 className="text-5xl font-bold uppercase ">Pourquoi nous sommes le meilleur choix</h1>
   </article>
   <article className='grid grid-cols-3 md:grid-cols-3 place-content-center gap-4 sm:grid-cols-1 '>
        { dimension.map(dimension=>{
            return(
                <div className="max-w-sm">
                    <Card
                        imgAlt="Meaningful alt text for an image that is not purely decorative"
                        imgSrc={dimension.image}
                        >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {dimension.title}
                        </h5>
                       
                    </Card>
                </div>
            )
        })}
        </article>
    </section>
  )
}

export default Dimension