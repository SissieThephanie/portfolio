import React from 'react'
import Rb from '../assets/tof.jpg'
//import Rb from '../assets/Rb.png'

const Apropos = () => {
  return (
    <div className='bg-black text-white py-40' id='apropos'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>Apropos de moi</h2>
        <div className='flex flex-col md:flex-row items-center md:space-x-12'>
            <img src={Rb} alt="" className='w-82 h-80 rounded object-cover mb-8 md:mb-0' />

            <div className='flex-1'>

            <p className='text-lg mb-8'>
            Je suis actuellement en Licence 3 à l'École Nationale de l'Informatique à Fianarantsoa, où je suis le parcours Informatique Générale.
            Passionné par le développement d’applications, j’élargis mes compétences pour travailler sur tous les aspects d’un projet.
            Je commence à avoir une bonne maîtrise des outils nécessaires pour concevoir des interfaces modernes et gérer la partie serveur.
            Mon objectif est de perfectionner mes connaissances, améliorer mes méthodes de travail et être capable de créer des applications complètes, optimisées et performantes.
            J’avance pas à pas en explorant de nouvelles pratiques et en consolidant ce que je sais déjà.
            </p>
            <div className='space-y-4'>
                <div className='flex items-center'>
                    <label htmlFor="htmlandcss" className='w-2/12'> HTML & CSS</label>
                        <div className='grow bg-gray-800 rounded-full h-2.5'>
                            <div className="bg-gradient-to-r from-pink-800 to-green-600 h-2.5 rounded-full transform
                             transition-transform duration-300 hover:scale-105 w-10/12"></div>
                        </div>
                </div>
                <div className='flex items-center'>
                    <label htmlFor="htmlandcss" className='w-2/12'> React js</label>
                        <div className='grow bg-gray-800 rounded-full h-2.5'>
                            <div className="bg-gradient-to-r from-pink-800 to-green-600 h-2.5 rounded-full transform
                             transition-transform duration-300 hover:scale-105 w-8/12"></div>
                        </div>
                </div>
                <div className='flex items-center'>
                    <label htmlFor="htmlandcss" className='w-2/12'> Laravel</label>
                        <div className='grow bg-gray-800 rounded-full h-2.5'>
                            <div className="bg-gradient-to-r from-pink-800 to-green-600 h-2.5 rounded-full transform
                             transition-transform duration-300 hover:scale-105 w-7/12"></div>
                        </div>
                </div>
                <div className='flex items-center'>
                    <label htmlFor="htmlandcss" className='w-2/12'> Java</label>
                        <div className='grow bg-gray-800 rounded-full h-2.5'>
                            <div className="bg-gradient-to-r from-pink-800 to-green-600 h-2.5 rounded-full transform
                             transition-transform duration-300 hover:scale-105 w-10/12"></div>
                        </div>
                </div>
                <div className='flex items-center'>
                    <label htmlFor="htmlandcss" className='w-2/12'> C++ </label>
                        <div className='grow bg-gray-800 rounded-full h-2.5'>
                            <div className="bg-gradient-to-r from-pink-800 to-green-600 h-2.5 rounded-full transform
                             transition-transform duration-300 hover:scale-105 w-9/12"></div>
                        </div>
                </div>
                <div className='flex items-center'>
                    <label htmlFor="htmlandcss" className='w-2/12'> Python</label>
                        <div className='grow bg-gray-800 rounded-full h-2.5'>
                            <div className="bg-gradient-to-r from-pink-800 to-green-600 h-2.5 rounded-full transform
                             transition-transform duration-300 hover:scale-105 w-7/12"></div>
                        </div>
                </div>
            </div>
            <div className="mt-12 flex justify-center text-center">
              <div>
                <h3></h3>
              </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Apropos
