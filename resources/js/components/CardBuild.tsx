// import React from 'react';
// import { FiArrowUpRight } from 'react-icons/fi';

// const cours = [
//  {
//   titre: 'Créer un Portfolio 3D',
//   description: 'Apprenez à construire un portfolio interactif avec Three.js et React.',
//   image: 'https://cdn-icons-png.flaticon.com/512/1822/1822899.png',
//   lien: '#',
//  },
//  {
//   titre: 'Analyse de CV par IA',
//   description: 'Utilisez l’intelligence artificielle pour analyser et améliorer votre CV.',
//   image: 'https://cdn-icons-png.flaticon.com/512/4712/4712109.png',
//   lien: '#',
//  },
//  {
//   titre: 'Application de Chat Moderne',
//   description: 'Créez une messagerie en temps réel avec Socket.io et React.',
//   image: 'https://cdn-icons-png.flaticon.com/512/2462/2462719.png',
//   lien: '#',
//  },
//  {
//   titre: 'Tableau de Bord E-commerce',
//   description: 'Gérez vos données avec un tableau de bord React et Tailwind.',
//   image: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
//   lien: '#',
//  },
//  {
//   titre: 'Application Météo',
//   description: 'Affichez la météo en direct grâce aux APIs météo.',
//   image: 'https://cdn-icons-png.flaticon.com/512/869/869869.png',
//   lien: '#',
//  },
//  {
//   titre: 'Application de Notes Mobile',
//   description: 'Créez une appli mobile pour vos notes avec React Native.',
//   image: 'https://cdn-icons-png.flaticon.com/512/1250/1250615.png',
//   lien: '#',
//  },
// ];

// const CartesCours = () => {
//  return (
//   <section className="py-12 px-4">
//    <h2 className="text-3xl font-bold text-center mb-10 text-gray-300 font-[arial]">
//     Arrête de regarder. Commence à construire.
//    </h2>

//    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
//     {cours.map((cours, index) => (
//      <a
//       key={index}
//       href={cours.lien}
//       className="relative group rounded-xl p-[2px] bg-gradient-to-b from-pink-500 via-pink-300 to-transparent shadow-md hover:shadow-lg transition-all duration-300"
//      >
//       <div className="relative rounded-[10px] bg-[#13152D] p-6 h-full">

//        <img
//         src={cours.image}
//         alt={cours.titre}
//         className="w-10 h-10 absolute top-5 left-5"
//        />


//        <div className="absolute top-5 right-5 text-gray-400 group-hover:text-pink-500 transition">
//         <FiArrowUpRight size={20} />
//        </div>

//        <div className="mt-12">
//         <h3 className="text-lg font-bold mb-2 text-xl group-hover:text-pink-600 transition">
//          {cours.titre}
//         </h3>
//         <p className="text-white text-sm">{cours.description}</p>
//        </div>
//       </div>
//      </a>
//     ))}
//    </div>
//   </section>
//  );
// };

// export default CartesCours;

import { Link } from '@inertiajs/react';
import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

const cours = [
 {
  titre: 'Créer un Portfolio 3D',
  description: 'Apprenez à construire un portfolio interactif avec Three.js et React.',
  image: 'https://cdn-icons-png.flaticon.com/512/1822/1822899.png',
  lien: 'https://frankam-dev.vercel.app/',
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
 {
  titre: 'Système d’authentification',
  description: 'Implémentez une auth sécurisée avec JWT et React.',
  image: 'https://cdn-icons-png.flaticon.com/512/3064/3064197.png',
  lien: '#',
 },
 {
  titre: 'Dashboard Administrateur',
  description: 'Un tableau de bord complet avec statistiques et gestion.',
  image: 'https://cdn-icons-png.flaticon.com/512/3135/3135716.png',
  lien: 'https://frankamdashboard.vercel.app/',
 },
 {
  titre: 'Application de Streaming',
  description: 'Construisez une plateforme de streaming audio/vidéo moderne.',
  image: 'https://cdn-icons-png.flaticon.com/512/2930/2930034.png',
  lien: '#',
 },
];

const CartesCours = () => {
 return (
  <section className="py-12 px-4">
   <h2 className="text-3xl font-bold text-center mb-10 text-gray-300 font-[arial]">
    Arrête de regarder. Commence à construire.
   </h2>

   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
    {cours.map((cours, index) => (
     <a target='_blank' rel='noopener noreferrer'
      key={index}
      href={cours.lien}
      className="relative group rounded-xl p-[2px] bg-gradient-to-b from-pink-500 via-pink-300 to-transparent shadow-md hover:shadow-lg transition-all duration-300"
     >
      <div className="relative rounded-[12px] bg-[#13152D] p-8 h-[320px] flex flex-col justify-between">
       <div>
        <img
         src={cours.image}
         alt={cours.titre}
         className="w-12 h-12 absolute top-6 left-6"
        />
        <div className="absolute top-6 right-6 text-gray-400 group-hover:text-pink-500 transition">
         <FiArrowUpRight size={22} />
        </div>
       </div>

       <div className="mt-16">
        <h3 className="text-xl font-bold mb-3 group-hover:text-pink-600 transition text-white">
         {cours.titre}
        </h3>
        <p className="text-base text-gray-300">{cours.description}</p>
       </div>
      </div>
     </a>
    ))}
   </div>
  </section>
 );
};

export default CartesCours;
