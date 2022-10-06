import { Accordion } from 'flowbite-react'
import React from 'react'
import { FAQBase } from '../assets/data'


function Question() {
  return (
    <section className='w-full bg-white min-h-screen dark:bg-gray-900   px-10 flex flex-col gap-20'>
        <div className="mb-4 flex items-center justify-between">
            <h5 className="text-4xl uppercase font-bold leading-none text-gray-900 dark:text-white">
                Nos projets
            </h5>
        </div>
  <div>
  {FAQBase.map((item)=>{
                    return(
                        <Accordion alwaysOpen={true}  key={item.id} >
                                <Accordion.Panel>
                                    <Accordion.Title>
                                        {item.question}
                                    </Accordion.Title>
                                    <Accordion.Content>
                                    <p className="text-gray-500 dark:text-gray-400">
                                            {item.answer}
                                    </p>
                                    </Accordion.Content>
                                </Accordion.Panel>
                            </Accordion>
                        )
                }
            )
}
    </div>
</section>
  )
}

export default Question