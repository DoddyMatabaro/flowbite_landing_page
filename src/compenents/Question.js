import { Accordion } from 'flowbite-react'
import React from 'react'
import { FAQBase } from '../assets/data'


function Question() {
  return (
    <section className=' bg-white min-h-screen dark:bg-gray-900   px-10 flex flex-col gap-20'>
    <article className="h-[5%] flex flex-row  text-gray-900 dark:text-white gap-4">
            <div className= "bg-gray-900 dark:bg-white h-2 w-1 mt-5"></div>
            <h1 className="text-3xl font-bold uppercase ">Question fréquements posées </h1>
  </article>
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