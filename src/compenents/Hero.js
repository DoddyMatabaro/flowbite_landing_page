import { Card, Carousel } from 'flowbite-react'
import React from 'react'
import {hero, heroPics} from '../assets/data';

function Hero() {
    console.log(heroPics);
  return (
    <div>
        <div className="sm:h-64 xl:h-96 2xl:h-96 ">
            <Carousel slideInterval={5000}>
                {heroPics.map((pics, index)=>{
                        return(
                            <img
                                src={pics}
                                alt="Project "
                                key={index.toString()}
                                className="h-full"
                            />
                        )
                })}
            </Carousel>
        </div>
        <div className='grid grid-cols-2 gap-4 m-4 md:grid-cols-2 sm:grid-cols-1'>
                <Card href="#" className="">
                    <h3 className="text-3xl uppercase font-bold tracking-tight text-gray-900 dark:text-white">
                         {hero.devise}
                    </h3>
                </Card>
                <Card href="#">
                    <h3 className="text-2xl  font-bold tracking-tight text-gray-900 dark:text-white">
                        Apropos  : 
                    </h3>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                          {hero.about_info}
                    </p>
                </Card>
        </div>

    </div>
  )
}

export default Hero