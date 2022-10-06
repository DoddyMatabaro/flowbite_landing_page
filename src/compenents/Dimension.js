import { Card } from 'flowbite-react'
import React, { useState } from 'react'
import { dimension } from '../assets/data'
import { useTransition, animated } from 'react-spring'

function Dimension() {
    const [isVisible, setIsVisible] = useState(false) 
    const transition = useTransition(isVisible, {
            from: {x:-100, y:800, opacity: 0},
            enter: {x:0, y:0, opacity: 1},
            leave:{},
    })
  return (
    <section className='h-auto sm:h-auto md:h-screen px-10 py-20 flex flex-col gap-20'>
        <div className="mb-4 flex items-center justify-between">
            <h5 className="text-4xl font-bold uppercase leading-none text-gray-900 dark:text-white">
                Notre dimension
            </h5> 
            <button onClick={()=>{
                setIsVisible(v => !v);
            }}>
                {isVisible? "demonter" : "monter"}
            </button>
          </div>
   {transition((style, item) => item ? <animated.article className='grid grid-cols-3 md:grid-cols-3 place-content-center gap-4 sm:grid-cols-1 '>
        { dimension.map((dimension,index)=>{
            return(
                <div key={index.toString()} className="max-w-sm ">
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
        </animated.article> : "")}
    </section>
  )
}

export default Dimension