import { Card } from 'flowbite-react';
import React from 'react';
import ecr from '../assets/ecr.jpg';
import {hero} from '../assets/data';

function About() {
  return (
    <div className='dark:bg-slate-900'>

    <Card  className="grid grid-cols-2 gap-4 ">
      <h5 className="text-5xl uppercase font-bold tracking-tight text-gray-900 dark:text-white">
        Qui sommes-nous ? 
      </h5>
    <div className='flex flex-row gap-4 align-middle justify-center sm:flex-col'>
    <div className="max-w-sm">
      <Card
        horizontal={true}
        imgSrc={ecr}
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            ECR sarl
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
             {hero.about_info}
        </p>
      </Card>
    </div>
    <Card href="#" >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Contacts : 
        </h5>
            <div className='flex flex-row gap-4 sm:flex-col'>
            <Card href='#'>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Siège social   
              </h5>
              <ul className="font-semibold text-gray-700 dark:text-gray-400">
                <li>Boulevard Patrice Emery Lumumba</li>
                <li>Quartier Ndendere</li>
                <li>Ville de Bukavu</li>
                <li>Province du Sud-Kivu </li>
                <li>République démocratique du Congo</li>
              </ul>    
            </Card>
            <Card>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Téléphone   
              </h5>
              <div className='flex flex-row gap-4'>
                <span className='font-semibold text-gray-700 dark:text-gray-400'>(+ 243)</span>
                <ul className="font-semibold text-gray-700 dark:text-gray-400">
                  <li>970458935</li>
                  <li>847296554</li>
                  <li>973681681</li>
                  <li>843076318</li>
                 <br/>
                </ul>  
              </div>    
            </Card>
            <Card>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Mail   
              </h5>
                <ul className="font-semibold text-gray-700 dark:text-gray-400">
                   <li> ecrsarl24@gmail.com</li>
                   <br/>
                   <br/>
                   <br/>
                  <br/>

                </ul>  
            </Card>
            </div>
      </Card>
        </div>
    </Card>
    </div>

  )
}

export default About