import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import axios from 'axios';
import Navbar from '@/components/NavBar';
import Footer from './Footer';

const Contact = () => {
 const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
 const [status, setStatus] = useState({ type: '', message: '' });

 const onSubmit = async (data: any) => {
  setStatus({ type: '', message: '' });
  try {
   await axios.post('/contact', data);
   setStatus({ type: 'success', message: 'Merci ! Votre message a été envoyé.' });
   reset();
  } catch (err) {
   setStatus({ type: 'error', message: 'Oops ! Une erreur est survenue.' });
   console.error(err);
  }
 };

 const inputClass = (fieldError: boolean) =>
  `w-full p-4 rounded-xl bg-gray-900 border ${fieldError ? 'border-red-500' : 'border-gray-700'}
     focus:outline-none focus:ring-2 ${fieldError ? 'focus:ring-red-500' : 'focus:ring-blue-400'}
     transition-all duration-300`;

 return (
  <>
   <Navbar />
   <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 flex flex-col items-center justify-center py-12 px-4">
    <motion.div
     className="max-w-6xl w-full bg-gray-900 p-10 rounded-3xl shadow-2xl border border-blue-400"
     initial={{ opacity: 0, y: 60 }}
     animate={{ opacity: 1, y: 0 }}
     transition={{ duration: 1 }}
    >
     {/* Title */}
     <motion.h2
      className="text-5xl font-extrabold text-center text-blue-400 mb-6"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8 }}
     >
      Contactez Frankam
     </motion.h2>
     <motion.p
      className="text-center text-gray-300 mb-12 text-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
     >
      Posez vos questions, demandez une démo ou simplement dites bonjour ! Je suis disponible pour vous aider à créer votre site e-learning.
     </motion.p>

     {/* Status message */}
     {status.message && (
      <motion.div
       className={`mb-6 p-4 rounded-xl text-center font-semibold ${status.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}
       initial={{ opacity: 0, y: -20 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.5 }}
      >
       {status.message}
      </motion.div>
     )}

     {/* Form */}
     <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 md:grid-cols-2 gap-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.8 }}
     >
      <motion.div className="space-y-5">
       <motion.div whileFocus={{ scale: 1.03 }} className="relative">
        <label className="block text-gray-200 mb-1">Nom complet</label>
        <input
         {...register('name', { required: 'Le nom est requis' })}
         className={inputClass(!!errors.name)}
         placeholder="Votre nom complet"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
       </motion.div>

       <motion.div whileFocus={{ scale: 1.03 }} className="relative">
        <label className="block text-gray-200 mb-1">Email</label>
        <input
         {...register('email', {
          required: 'Email requis',
          pattern: { value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/, message: 'Email invalide' }
         })}
         className={inputClass(!!errors.email)}
         placeholder="votre@email.com"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
       </motion.div>

       <motion.div whileFocus={{ scale: 1.03 }} className="relative">
        <label className="block text-gray-200 mb-1">Téléphone</label>
        <input
         {...register('phone')}
         className={inputClass(!!errors.phone)}
         placeholder="+237 6XXXXXXXX"
        />
       </motion.div>

       <motion.div whileFocus={{ scale: 1.03 }} className="relative">
        <label className="block text-gray-200 mb-1">Sujet</label>
        <input
         {...register('subject', { required: 'Le sujet est requis' })}
         className={inputClass(!!errors.subject)}
         placeholder="Objet de votre message"
        />
        {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
       </motion.div>
      </motion.div>

      <motion.div className="space-y-5">
       <motion.div whileFocus={{ scale: 1.03 }} className="relative">
        <label className="block text-gray-200 mb-1">Message</label>
        <textarea
         {...register('message', { required: 'Le message est requis' })}
         className={inputClass(!!errors.message) + ' h-full resize-none'}
         placeholder="Votre message..."
        />
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
       </motion.div>

       <motion.button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-4 rounded-2xl font-bold text-gray-900 bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 transition-all shadow-xl`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
       >
        {isSubmitting ? 'Envoi...' : 'Envoyer le message'}
       </motion.button>
      </motion.div>
     </motion.form>

     {/* Contact info section */}
     <motion.div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }}>
      <div className="text-center p-6 bg-gray-800 rounded-2xl border border-blue-400 hover:scale-105 transition-transform duration-300">
       <FaEnvelope className="text-3xl text-blue-400 mx-auto mb-3" />
       <h4 className="text-lg font-semibold text-white mb-1">Email</h4>
       <p className="text-gray-300">frankam@gmail.com</p>
      </div>
      <div className="text-center p-6 bg-gray-800 rounded-2xl border border-blue-400 hover:scale-105 transition-transform duration-300">
       <FaPhone className="text-3xl text-blue-400 mx-auto mb-3" />
       <h4 className="text-lg font-semibold text-white mb-1">Téléphone</h4>
       <p className="text-gray-300">+237 690461830</p>
      </div>
      <div className="text-center p-6 bg-gray-800 rounded-2xl border border-blue-400 hover:scale-105 transition-transform duration-300">
       <FaMapMarkerAlt className="text-3xl text-blue-400 mx-auto mb-3" />
       <h4 className="text-lg font-semibold text-white mb-1">Adresse</h4>
       <p className="text-gray-300">Bafoussam, Cameroun</p>
      </div>
     </motion.div>

    </motion.div>
   </div>
   <Footer />
  </>
 );
};

export default Contact;
