import React from 'react';
import { motion } from 'framer-motion';

// Composant individuel pour une carte
const CourseCard = ({ titre, description, icone }) => {
 return (
  <motion.div
   className="max-w-xs rounded-xl p-6 bg-gray-900 text-white shadow-lg border border-yellow-400"
   whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
   initial={{ opacity: 0, y: 50 }}
   animate={{ opacity: 1, y: 0 }}
   transition={{ duration: 0.5 }}
  >
   <div className="flex justify-center mb-4">
    <span className="text-5xl">{icone}</span>
   </div>
   <h3 className="text-xl font-semibold mb-2">{titre}</h3>
   <p className="text-sm text-gray-300 mb-4">{description}</p>
   <a href="#" className="text-blue-400 hover:text-blue-300 text-sm font-medium">Vérifiez maintenant →</a>
  </motion.div>
 );
};

// Composant principal pour afficher la liste des cartes
const CourseCards = () => {
 const courses = [
  {
   titre: "Construisez & Lancez Votre SaaS en Moins de 7 Jours",
   description: "Une masterclass complète pour concevoir rapidement, développer, déployer et monétiser votre SaaS...",
   icone: "🚀",
  },
  {
   titre: "Maîtrise des Bases de Données : SQL à Prisma",
   description: "Apprenez à construire et utiliser des bases de données avec SQL et Prisma",
   icone: "🗃️",
  },
  {
   titre: "Parcours Complet vers la Maîtrise de JavaScript",
   description: "Maîtrisez JavaScript, le langage du web ! Apprenez les variables, types de données, fonctions, DOM,...",
   icone: "📚",
  },
 ];

 return (
  <div className="flex justify-center space-x-6 p-6 bg-gray-900">
   {courses.map((course, index) => (
    <CourseCard key={index} {...course} />
   ))}
  </div>
 );
};

export default CourseCards;