import React from "react"

const services = [
    {
        id:1,
        title:"Conception Web",
        description :"Création d'interfaces utilisateur modernes et responsives avec des designs attrayants."
    },
    {
        id:2,
        title:"Développement Backend",
        description :"Mise en place de serveurs, bases de données et API robustes pour des applications performantes."
    },
    {
        id:3,
        title:"Développement Frontend",
        description :"Développement d'interfaces dynamiques et interactives avec React, Vue.js ou Angular."
    },
    {
        id:4,
        title:"Développement Full-Stack",
        description :"Création d'applications complètes en gérant à la fois le frontend et le backend."
    },
    {
        id:5,
        title:"Developpement Mobile",
        description: "Création d'applications mobiles multiplateformes performantes et esthétiques avec Flutter."
    },
    {
        id:6,
        title: "Design Graphique",
        description: "Conception visuelle d’identités de marque, interfaces et supports de communication attractifs."
    }
]

const Service = () => {
  return (
    <div className='bg-black text-white py-40' id='service'>
        <div className='bg-black text-white py-40' id='service'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'>Service</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {services.map(service =>(
                    <div key={service.id} className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
                        <div className="text-right text-2xl font-bold text-transparent bg-clip-text 
                        bg-gradient-to-t from-fuchsia-600 to-green-600">
                            {service.id}
                        </div>
                        <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-green-600">
                            {service.title}
                        </h3>
                        <p className="mt-2 text-gray-300">{service.description}</p>
                    </div>
                ))}
            </div>      
        </div>
        </div>
    </div>
  )
}

export default Service
