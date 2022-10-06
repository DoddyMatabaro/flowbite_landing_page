import { Button, Card, Checkbox, Label, Textarea, TextInput } from 'flowbite-react'
import React from 'react'
import { FaFacebookMessenger, FaWhatsapp, FaWhatsappSquare } from 'react-icons/fa'

function Contact() {
  return (
    <div className='px-10 py-20'>
        <Card>
            <div className='flex sm:flex-col'>
                <div className='flex flex-col p-4'>
                        <h5 className="mb-2 text-4xl p-8 font-bold text-gray-900 dark:text-white">
                                ALORS, QU'ATTENDEZ-VOUS ? PARLONS DE VOTRE PROJET !
                        </h5>

                        <Card href="">
                        <div className='gap-4 flex sm:flex-col md:flex-row justify-center  flex-row '>
                            
                            <Card href='#'>
                               <div>
                                    <FaFacebookMessenger className='text-3xl text-gray-900 dark:text-white'/>
                                    <p className='text-xl text-gray-900 dark:text-white'>Messenger</p>
                                    <p className='text-sm text-gray-400 font-bold '>ecrsarl</p>
                                    <a href="" className='text-blue-600 '>Envoyez un message</a>
                               </div>
                            </Card>
                            <Card href='#' >
                               <div className='flex flex-col justify-center align-middle text-center'>
                                    <div><FaWhatsapp className='text-3xl text-center text-gray-900 dark:text-white'/></div>
                                    <p className='text-xl text-gray-900 dark:text-white'>Whatsapp</p>
                                    <p className='text-gray-900 dark:text-white text-sm  font-bold '>ecrsarl</p>
                                    <a href="" className='text-blue-600 '>Envoyez un message</a>
                               </div>
                            </Card>
                        </div>
                        </Card>
                </div>
                
            
            <Card>
            <form className="flex flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                    <Label
                        htmlFor="email2"
                        value="Votre adresse e-mail professionnelle"
                    />
                    </div>
                    <TextInput
                    id="email2"
                    type="email"
                    name='mail'
                    placeholder="ecrsarl@gmail.com"
                    required={true}
                    shadow={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                    <Label
                        htmlFor="email2"
                        value="Votre nom complet"
                    />
                    </div>
                    <TextInput
                    name='noms'
                    id="email2"
                    type="email"
                    placeholder="Axel Murhula Junior"
                    required={true}
                    shadow={true}
                    />
                </div>
                    <div id="textarea">
                        <div className="mb-2 block">
                            <Label
                            htmlFor="comment"
                            value="Votre message"
                            />
                        </div>
                        <Textarea
                            id="comment"
                            placeholder="Entrez votre message"
                            required={true}
                            rows={4}
                            name='message'
                        />
                        </div>
           
                <Button type="submit">
                    Contactez-nous
                </Button>
                </form>
            </Card>
        </div>
    </Card>
    </div>
  )
}

export default Contact