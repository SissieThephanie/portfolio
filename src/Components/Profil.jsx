import React from 'react'
import Photo from '../assets/photo.jpeg'

const Profil = () => {
  return (
    <div className='bg-black text-white text-center py-20' id='profil'>
      <img src={Photo} alt="" className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105' />
      <h1 className='text-4xl font-bold py-8'>
        Je suis {""}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-green-600 '>JAONINA Sissie Thephanie </span>
        Developper Full Stack 
        <p className='mt-4 text-lg text-gray-300 px-4 md:px-32 '>
          Je me specialise dans la creation d'application Web modernes et reactives.
          Développer avec passion, coder avec précision
        </p>
        <p className='mt-4 text-lg text-gray-300 px-4 md:px-32 '>
        Je ne recule pas devant les bugs, je les transforme en défis !
        </p>
      </h1>
      <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline 
      transform transition-transform duration-0 hover:scale-105 px-4 py-2 rounded-full'>
        <a href="#message" className='hover:text-gray-400'>Message</a>
      </button>
    </div>
  )
}

export default Profil
