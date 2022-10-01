import { Card, Carousel } from 'flowbite-react'
import React from 'react'
import {hero} from '../assets/data';


function Hero() {
  return (
    <div>
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel slideInterval={5000}>
                <img
                src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                alt="..."
                />
                <img
                src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                alt="..."
                />
                <img
                src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                alt="..."
                />
                <img
                src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
                alt="..."
                />
                <img
                src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
                alt="..."
                />
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
                        Appropos  : 
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