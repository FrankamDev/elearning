import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaComments, FaClock } from 'react-icons/fa';
import axios from 'axios';
import Navbar from '@/components/NavBar';
import Footer from './Footer';

const Contact = () => {
 const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
 const [status, setStatus] = useState({ type: '', message: '' });

 const onSubmit = async (data) => {
  setStatus({ type: '', message: '' });
  try {
   await axios.post('/contact', data);
   setStatus({ type: 'success', message: 'Message envoyé avec succès !' });
   reset();
  } catch (err) {
   setStatus({ type: 'error', message: 'Erreur lors de l’envoi du message.' });
   console.error(err);
  }
 };

 const inputClass = (fieldError) =>
  `w-full p-4 rounded-lg bg-gray-700 border ${fieldError ? 'border-red-500' : 'border-gray-600'} focus:outline-none focus:ring-2 ${fieldError ? 'focus:ring-red-500' : 'focus:ring-yellow-400'} transition-all duration-300`;

 return (
  <>
   <Navbar />
   <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center py-16 px-6">
    <motion.div
     className="max-w-5xl w-full rounded-xl p-10 bg-gray-800 shadow-2xl border border-yellow-400"
     initial={{ opacity: 0, y: 50 }}
     animate={{ opacity: 1, y: 0 }}
     transition={{ duration: 0.8 }}
    >
     <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-yellow-400 animate-pulse">
      Contactez-Nous pour Votre Succès en E-Learning
     </h2>
     <p className="text-center text-gray-300 mb-12 text-lg">
      Rejoignez notre communauté d’apprenants ! Posez vos questions, demandez une démo, ou obtenez un support instantané.
     </p>

     {/* Feedback */}
     {status.message && (
      <motion.div
       className={`mb-6 p-4 rounded-lg text-center font-semibold ${status.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
        }`}
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
      >
       {status.message}
      </motion.div>
     )}

     <motion.form
      className="grid grid-cols-1 lg:grid-cols-2 gap-10"
      onSubmit={handleSubmit(onSubmit)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.8 }}
     >
      <div>
       <motion.div className="mb-6" whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}>
        <label className="block text-sm font-medium mb-2 text-gray-200">Nom Complet</label>
        <input
         {...register('name', { required: 'Le nom est requis' })}
         className={inputClass(errors.name)}
         placeholder="Votre nom complet"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
       </motion.div>

       <motion.div className="mb-6" whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}>
        <label className="block text-sm font-medium mb-2 text-gray-200">Adresse Email</label>
        <input
         {...register('email', {
          required: 'Email requis',
          pattern: { value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/, message: 'Email invalide' },
         })}
         className={inputClass(errors.email)}
         placeholder="votre@email.com"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
       </motion.div>

       <motion.div className="mb-6" whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}>
        <label className="block text-sm font-medium mb-2 text-gray-200">Numéro de téléphone</label>
        <input
         {...register('phone')}
         className={inputClass(errors.phone)}
         placeholder="+237 6XXXXXXXX"
        />
       </motion.div>

       <motion.div className="mb-6" whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}>
        <label className="block text-sm font-medium mb-2 text-gray-200">Sujet</label>
        <input
         {...register('subject', { required: 'Le sujet est requis' })}
         className={inputClass(errors.subject)}
         placeholder="Objet de votre message"
        />
        {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
       </motion.div>
      </div>

      <div>
       <motion.div className="mb-6" whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}>
        <label className="block text-sm font-medium mb-2 text-gray-200">Message</label>
        <textarea
         {...register('message', { required: 'Le message est requis' })}
         className={inputClass(errors.message) + ' h-40 resize-none'}
         placeholder="Décrivez votre demande ou question..."
        />
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
       </motion.div>

       <motion.button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-4 font-bold rounded-lg text-gray-900 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
         }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
       >
        {isSubmitting ? 'Envoi...' : 'Envoyer Votre Message'}
       </motion.button>
      </div>
     </motion.form>

     {/* Contact info + horaires */}
     <motion.div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }}>
      <div className="text-center p-4 bg-gray-700 rounded-lg">
       <FaEnvelope className="text-3xl text-yellow-400 mx-auto mb-2" />
       <h4 className="text-lg font-semibold">Email</h4>
       <p className="text-gray-300">support@elearning.com</p>
      </div>
      <div className="text-center p-4 bg-gray-700 rounded-lg">
       <FaPhone className="text-3xl text-yellow-400 mx-auto mb-2" />
       <h4 className="text-lg font-semibold">Téléphone</h4>
       <p className="text-gray-300">+237 690461830</p>
      </div>
      <div className="text-center p-4 bg-gray-700 rounded-lg">
       <FaMapMarkerAlt className="text-3xl text-yellow-400 mx-auto mb-2" />
       <h4 className="text-lg font-semibold">Adresse</h4>
       <p className="text-gray-300">Cameroun, Bafoussam</p>
      </div>
     </motion.div>
    </motion.div>
   </div>
   <Footer />
  </>
 );
};

export default Contact;
