import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

const cours = [
 {
  titre: 'Créer un Portfolio 3D',
  description: 'Apprenez à construire un portfolio interactif avec Three.js et React.',
  image: 'https://cdn-icons-png.flaticon.com/512/1822/1822899.png',
  lien: '#',
 },
 {
  titre: 'Analyse de CV par IA',
  description: 'Utilisez l’intelligence artificielle pour analyser et améliorer votre CV.',
  image: 'https://cdn-icons-png.flaticon.com/512/4712/4712109.png',
  lien: '#',
 },
 {
  titre: 'Application de Chat Moderne',
  description: 'Créez une messagerie en temps réel avec Socket.io et React.',
  image: 'https://cdn-icons-png.flaticon.com/512/2462/2462719.png',
  lien: '#',
 },
 {
  titre: 'Tableau de Bord E-commerce',
  description: 'Gérez vos données avec un tableau de bord React et Tailwind.',
  image: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
  lien: '#',
 },
 {
  titre: 'Application Météo',
  description: 'Affichez la météo en direct grâce aux APIs météo.',
  image: 'https://cdn-icons-png.flaticon.com/512/869/869869.png',
  lien: '#',
 },
 {
  titre: 'Application de Notes Mobile',
  description: 'Créez une appli mobile pour vos notes avec React Native.',
  image: 'https://cdn-icons-png.flaticon.com/512/1250/1250615.png',
  lien: '#',
 },
];

const CartesCours = () => {
 return (
  <section className="py-12 px-4">
   <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
    Arrête de regarder. Commence à construire.
   </h2>

   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
    {cours.map((cours, index) => (
     <a
      key={index}
      href={cours.lien}
      className="relative group rounded-xl p-[2px] bg-gradient-to-b from-pink-500 via-pink-300 to-transparent shadow-md hover:shadow-lg transition-all duration-300"
     >
      <div className="relative rounded-[10px] bg-[#13152D] p-6 h-full">

       <img
        src={cours.image}
        alt={cours.titre}
        className="w-10 h-10 absolute top-5 left-5"
       />

       {/* Flèche en haut à droite */}
       <div className="absolute top-5 right-5 text-gray-400 group-hover:text-pink-500 transition">
        <FiArrowUpRight size={20} />
       </div>

       <div className="mt-12">
        <h3 className="text-lg font-bold mb-2 text-xl group-hover:text-pink-600 transition">
         {cours.titre}
        </h3>
        <p className="text-white text-sm">{cours.description}</p>
       </div>
      </div>
     </a>
    ))}
   </div>
  </section>
 );
};

export default CartesCours;
