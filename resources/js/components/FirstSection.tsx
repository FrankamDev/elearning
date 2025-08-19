import React from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";

export default function WebLearningSection() {
 return (
  <section className="bg-[#1b1d3b] text-gray-400 py-20 flex flex-col items-center">
   <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
    Apprenez le développement web
   </h2>
   <p className="text-center text-gray-300 max-w-xl mb-12 text-[20px]">
    Apprenez les bases du développement web et découvrez pas à pas comment construire un site complet.
   </p>

   <div className="relative flex flex-col items-center">
    {/* Ligne verticale */}
    <div className="absolute top-12 w-1 h-full bg-gray-600"></div>

    {/* HTML Card */}
    <div className="relative bg-[#2a2d57] p-6 rounded-[4px] w-140 shadow-lg text-left mb-16">
     <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#e44d26] p-3 rounded-full shadow-md">
      <FaHtml5 size={36} />
     </div>
     <div className="flex items-center justify-between mb-2">
      <h3 className="font-semibold text-lg">Apprendre l'HTML</h3>
      <a href="/formations/html" className="text-cyan-400 hover:underline text-sm">
       Voir la formation
      </a>
     </div>
     <p className="text-gray-300 text-sm">
      L'HTML constitue le langage de base d'un site internet. Il permet de définir la structure d'un document grâce à un système de balisage.
     </p>
    </div>

    {/* CSS Card */}
    <div className="relative bg-[#2a2d57]  p-6 rounded-[4px] w-140 shadow-lg text-left mb-16">
     <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-purple-700 p-3 clip-path: poligone(0 0, 100% 20%, 100% 100%, 0, 80%) shadow-md">
      <FaCss3Alt size={36} />
     </div>
     <div className="flex items-center justify-between mb-2">
      <h3 className="font-semibold text-lg">Découverte du CSS</h3>
      <a href="/formations/css" className="text-cyan-400 hover:underline text-sm">
       Voir la formation
      </a>
     </div>
     <p className="text-gray-300 text-sm">
      Le CSS permet de décrire l'apparence d'une page. Il cible différents éléments HTML pour définir leur présentation.
     </p>
    </div>

    {/* JavaScript Card */}
    <div className="relative bg-[#2a2d57] p-6 rounded-[4px] w-140 shadow-lg text-left">
     <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 rotate-45 bg-yellow-600 p-3  shadow-md">
      <FaJsSquare size={36} />
     </div>
     <div className="flex items-center justify-between mb-2">
      <h3 className="font-semibold text-lg">Introduction à JavaScript</h3>
      <a href="/formations/javascript" className="hover:underline text-gray-400 font-bold text-sm">
       Voir la formation
      </a>
     </div>
     <p className="text-gray-300 text-sm">
      JavaScript est un langage de programmation qui rend les pages web interactives. Il permet de manipuler le DOM et de créer des fonctionnalités dynamiques.
     </p>
    </div>
   </div>
  </section>
 );
}
