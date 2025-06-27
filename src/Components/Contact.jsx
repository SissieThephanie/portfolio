import React, { useState } from 'react';
import { FaEnvelope, FaGithub, FaMapMarkedAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');

    try {
      // URL de l'API - s'adapte automatiquement à votre environnement
      const apiUrl = window.location.origin + '/api/send-email';
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.text();
      
      // if (response.ok) {
      //   setStatus('✅ ' + data);
      //   setFormData({ name: '', email: '', message: '' }); // Réinitialiser le formulaire
      // } else {
      //   setStatus('❌ ' + data);
      // }
    } catch (error) {
      console.error('Erreur:', error);
      // setStatus('❌ Erreur lors de l\'envoi. Vérifiez votre connexion.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='bg-black text-white py-40' id='contact'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>Mon Contact</h2>
        <div className='flex flex-col md:flex-row items-center md:space-x-12'>
          <div className='flex-1'>
            <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-green-600 mb-4'>
              Contactez-moi
            </h3>
            <p className='mb-4 font-bold'>
              Développement, innovation, collaboration : je suis prêt à échanger avec vous !
            </p>
            <div className='mb-4'>
              <FaEnvelope className='inline-block text-green-500 mr-2'></FaEnvelope>
              <a href='mailto:jaoninasissiethephanie@gmail.com' className='hover:underline'>
                jaoninasissiethephanie@gmail.com
              </a>
            </div>
            <div className='mb-4'>
              <FaPhone className='inline-block text-green-500 mr-2'></FaPhone>
              <span>+261 38 58 375 22 / 032 65 709 94</span>
            </div>
            <div className='mb-4'>
              <FaMapMarkedAlt className='inline-block text-green-500 mr-2'></FaMapMarkedAlt>
              <span>Soatsihadino Fianarantsoa Madagascar</span>
            </div>
            <div className='mb-4'>
              <FaGithub className='inline-block text-green-500 mr-2'></FaGithub>
              <span>SisseThephanie</span>
            </div>
          </div>
          <div className='flex-1 w-full'>
            <form onSubmit={handleSubmit} className='space-y-4'>
              <div>
                <label htmlFor='name' className='block mb-2'>Votre nom</label>
                <input
                  type='text'
                  name='name'
                  className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-500'
                  placeholder='Entrer votre nom'
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor='email' className='block mb-2'>Votre adresse e-mail</label>
                <input
                  type='email'
                  name='email'
                  className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-500'
                  placeholder='Entrer votre email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor='message' className='block mb-2'>Votre message</label>
                <textarea
                  name='message'
                  className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-500'
                  rows='5'
                  placeholder='Entrer votre message'
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <button
                  type='submit'
                  disabled={isLoading}
                  className={`bg-gradient-to-r from-fuchsia-600 to-green-600 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full ${
                    isLoading ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isLoading ? '📤 Envoi en cours...' : 'Envoyer'}
                </button>
                {status && (
                  <p className={`mt-2 font-medium ${
                    status.includes('✅') ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {status}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;