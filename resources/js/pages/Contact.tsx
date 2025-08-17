import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaComments, FaClock } from 'react-icons/fa';
import Navbar from '@/components/NavBar';
import Footer from './Footer';

const Contact = () => {
 const [formData, setFormData] = useState({
  name: '',
  email: '',
  subject: '',
  message: '',
 });

 const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
 };

 const handleSubmit = (e) => {
  e.preventDefault();
  console.log('Form submitted:', formData);
 };

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

    <motion.div
     className="grid grid-cols-1 lg:grid-cols-2 gap-10"
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     transition={{ delay: 0.2, duration: 0.8 }}
    >
     <div>
      <motion.div className="mb-6" whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}>
       <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-200">Nom Complet</label>
       <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="w-full p-4 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
        placeholder="Votre nom complet"
       />
      </motion.div>

      <motion.div className="mb-6" whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}>
       <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-200">Adresse Email</label>
       <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-4 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
        placeholder="votre@email.com"
       />
      </motion.div>
       <motion.div className="mb-6" whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}>
        <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-200">Numero de telephone</label>
        <input
         type="number"
         id="number"
         name="numer"
         value={formData.email}
         onChange={handleChange}
         className="w-full p-4 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
         placeholder="votre@email.com"
        />
       </motion.div>

      <motion.div className="mb-6" whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}>
       <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-200">Sujet</label>
       <input
        type="text"
        id="subject"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        className="w-full p-4 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
        placeholder="Objet de votre message"
       />
      </motion.div>
     </div>

     <div>
      <motion.div className="mb-6" whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}>
       <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-200">Message</label>
       <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        className="w-full p-4 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 h-40 resize-none transition-all duration-300"
        placeholder="Décrivez votre demande ou question..."
       />
      </motion.div>

      <motion.button
       type="submit"
       onClick={handleSubmit}
       className="w-full py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold rounded-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300"
       whileHover={{ scale: 1.1 }}
       whileTap={{ scale: 0.95 }}
      >
       Envoyer Votre Message
      </motion.button>
     </div>
    </motion.div>

    {/* Options de contact */}
    <motion.div
     className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     transition={{ delay: 0.4, duration: 0.8 }}
    >
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

    <motion.div
     className="mt-12 text-center"
     initial={{ opacity: 0, y: 20 }}
     animate={{ opacity: 1, y: 0 }}
     transition={{ delay: 0.6, duration: 0.8 }}
    >
     <h3 className="text-xl font-semibold mb-4 text-yellow-400">Support en Direct</h3>
     <motion.button
      className="flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
     >
      <FaComments className="text-xl" />
      Chattez avec Nous Maintenant
     </motion.button>
     <p className="text-gray-300 mt-2">Disponible 24/7 pour vos questions</p>
    </motion.div>

    {/* Horaires */}
    <motion.div
     className="mt-6 text-center"
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     transition={{ delay: 0.8, duration: 0.8 }}
    >
     <h4 className="text-lg font-semibold flex items-center justify-center gap-2 text-yellow-400">
      <FaClock /> Horaires d'Ouverture
     </h4>
     <p className="text-gray-300">Lundi - Vendredi : 9h - 18h</p>
     <p className="text-gray-300">Samedi - Dimanche : 10h - 14h</p>
    </motion.div>

    {/* Carte statique */}
    <motion.div
     className="mt-12"
     initial={{ opacity: 0, y: 20 }}
     animate={{ opacity: 1, y: 0 }}
     transition={{ delay: 1.0, duration: 0.8 }}
    >
     <div className="w-full h-64 bg-gray-700 rounded-lg flex items-center justify-center">
      <p className="text-gray-300">Carte Google Maps (Remplacez par une iframe ou une image)</p>
     </div>
    </motion.div>

    {/* Icône décorative animée */}
    <motion.div
     className="flex justify-center mt-8"
     initial={{ opacity: 0, rotate: -15 }}
     animate={{ opacity: 1, rotate: 15 }}
     transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
    >
     <FaMapMarkerAlt className="text-6xl text-yellow-400" />
    </motion.div>
   </motion.div>
   </div>
   <Footer />
  </>
 );
};

export default Contact;
