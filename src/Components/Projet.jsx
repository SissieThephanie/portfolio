import React from 'react'
import Banks from '../assets/banks.png'
import Chambre from '../assets/chambre.png'
import Diamadio from '../assets/diamadio.png'
import Portail from '../assets/portail.png'

const projets = [
    {
        id: 1,
        nom: "Gestion de réservation de chambres d'hôtel",
        description: "Une application développée en PHP permettant de gérer les réservations de chambres, incluant la gestion des disponibilités, des paiements et des clients.",
        image: Chambre
    },
    {
        id: 2,
        nom: "Gestion bancaire",
        description: "Une application de gestion bancaire développée en C#, offrant des fonctionnalités telles que la gestion des comptes, des transactions et des utilisateurs.",
        image: Banks
    },
    {
        id: 3,
        nom: "Portail captif",
        description: "Un portail captif réalisé avec pfSense, intégrant des fonctionnalités comme la gestion des vouchers, l'authentification via LDAP et FreeRADIUS, la connexion par adresse MAC, ainsi que l'envoi de notifications par e-mail.",
        image: Portail
    },
    {
        id: 4,
        nom: "DIAMADIO",
        description: "Une application de gestion des ressources et des activités au sein d'une collectivité locale, facilitant l'organisation, la planification et le suivi des projets communautaires.",
        image: Diamadio
    }
];


const Projet = () => {
  return (
    <div className='bg-black text-white py-40' id='projet'>
    <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>Mon Projet</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projets.map(projet =>(
                <div key={projet.id} className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
                    <img src={projet.image} alt={projet.nom} className='rounded-lg mb-4 w-full h-48 object-cover' />
                    <h3 className=" text-2xl font-bold ">
                    {projet.nom}
                </h3>
                <p className=" text-2xl font-bold">{projet.description}</p>
                <a href="#" className="mt-4 inline-block text-fuchsia-600 hover:text-green-600">Voir plus</a>
            </div>
            ))}
        </div>
    </div>
    </div>
  )
}

export default Projet
