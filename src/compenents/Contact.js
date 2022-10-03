import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react'
import React from 'react'

function Contact() {
  return (
    <div className='px-10 py-20'>
        <Card>
            <div className='grid grid-cols-2'>

                <h5 className="mb-2 text-4xl p-8 font-bold text-gray-900 dark:text-white">
                         ALORS, QU'ATTENDEZ-VOUS ? PARLONS DE VOTRE PROJET !
                </h5>
                
            
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
                    placeholder="ecrsarl@gmail.com"
                    required={true}
                    shadow={true}
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