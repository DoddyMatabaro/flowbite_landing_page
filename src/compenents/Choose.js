import { Card } from 'flowbite-react'
import React from 'react'
import { chooseUs } from '../assets/data'

function Choose() {
  return (
    <section className='h-screen px-10 py-20 flex flex-col gap-20'>
    <article className="flex flex-row gap-4">
            <div className='bg-black h-4 w-3 mt-5'></div>
            <h1 className="text-5xl font-bold uppercase ">Pourquoi nous sommes le meilleur choix</h1>
   </article>
 <article className='grid gap-4 grid-cols-2 sm:grid-cols-1 md:grid-cols-2'>
      { chooseUs.map((choose)=>{
        return(
            <Card key={choose.id}>
              <div className='flex flex-row gap-4  p-4'>
                    <b className=' text-grey_varient text-xl'>
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
          )
      })}
        {/* <div className='flex flex-row gap-4 w-1/2 border-b-[1px] border-grey_varient p-4'>
              <b className=' text-grey_varient text-xl'>
                  02
              </b>
              <div className='flex flex-col gap-4 '>
                <h3 className='text-2xl font-bold text-left'>Le Prix Raisonnable</h3>
                <p className='text-grey_varient text-xs max-w-[80%]'>Nous faisons tout notre possible pour que nos clients aient accès à un habitat décent à un coût accissible.</p>
              </div>
        </div>
        <div className='flex flex-row gap-4 w-1/2 border-r-[1px]  border-grey_varient p-4'>
              <b className=' text-grey_varient text-xl'>
                  03
              </b>
              <div className='flex flex-col gap-4 '>
                <h3 className='text-xl font-bold text-left'>Le Prix Raisonnable</h3>
                <p className='text-grey_varient text-xs max-w-[80%]'>Nous faisons tout notre possible pour que nos clients aient accès à un habitat décent à un coût accissible.</p>
              </div>
        </div>
        <div className='flex flex-row gap-4 w-1/2  border-grey_varient p-4'>
              <b className=' text-grey_varient text-xl'>
                  04
              </b>
              <div className='flex flex-col gap-4 '>
                <h3 className='text-xl font-bold text-left'>Le Prix Raisonnable</h3>
                <p className='text-grey_varient text-xs max-w-[80%]'>Nous faisons tout notre possible pour que nos clients aient accès à un habitat décent à un coût accissible.</p>
              </div>
        </div> */}
       
  </article>
</section>
  )
}

export default Choose