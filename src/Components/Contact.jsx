import React from 'react'
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='bg-black text-white py-40' id='contact'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'>Mon Contact</h2>
            <div className='flex flex-col md:flex-row  items-center md:space-x-12'>
                <div className='flex-1'>
                    <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-green-600 mb-4'>Contactez-moi</h3>
                    <p className='mb-4 font-bold'>Développement, innovation, collaboration : je suis prêt à échanger avec vous !</p>
                    <div className="mb-4">
                        <FaEnvelope className='inline-block text-green-500 mr-2'></FaEnvelope>
                        <a href="mailto:jaoninasissiethephanie@gmail.com" className='hover:underline'>
                            jaoninasissiethephanie@gmail.com
                        </a>
                    </div>
                    <div className="mb-4 ">
                        <FaPhone className='inline-block text-green-500 mr-2'></FaPhone>
                        <span>+261 38 58 375 22 / 032 65 709 94</span>
                    </div>
                    <div className="mb-4">
                        <FaMapMarkedAlt className='inline-block text-green-500 mr-2'></FaMapMarkedAlt>
                        <span>Soatsihadino Fianarantsoa Madagascar</span>
                    </div>
                </div>
                    <div className="flex-1 w-full ">
                        <form className='space-y-4'>
                            <div>
                                <label htmlFor="name" className='block mb-2'>Votre nom</label>
                                <input type="text" className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none 
                                focus:border-green-500' placeholder='Entrer votre nom' />
                            </div>
                            <div>
                                <label htmlFor="email" className='block mb-2'>Votre adresse e-mail</label>
                                <input type="text" className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none 
                                focus:border-green-500' placeholder='Entrer votre email' />
                            </div>
                            <div>
                                <label htmlFor="message" id='message' className='block mb-2'>Votre message</label>
                                <textarea type="text" className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none 
                                focus:border-green-500' rows='5' placeholder='Entrer votre message' />
                            </div>
                            <div>
                                <button className='bg-gradient-to-r from-fuchsia-600 to-green-600 text-white
                                transform transition-transform duration-0 hover:scale-105 px-4 py-2 rounded-full'>Envoyer</button>
                            </div>
                        </form>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
