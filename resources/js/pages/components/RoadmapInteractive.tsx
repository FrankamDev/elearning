// RoadmapInteractive.tsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaNodeJs, FaReact, FaDatabase, FaGitAlt, FaJsSquare, FaPhp } from "react-icons/fa";

const steps = [
 {
  id: "js",
  title: "Apprendre le JavaScript",
  description:
   "JavaScript est un langage de programmation pensé pour rendre les pages web interactives. Il peut aussi être utilisé côté serveur via Node.js et Deno.",
  icon: <FaJsSquare className="text-yellow-400 text-3xl" />,
 },
 {
  id: "git",
  title: "Comprendre Git",
  description:
   "Git est un outil qui vous permet de versionner vos projets, sauvegarder vos modifications et revenir en arrière à tout moment.",
  icon: <FaGitAlt className="text-orange-500 text-3xl" />,
 },
 {
  id: "php",
  title: "Apprendre le PHP",
  description:
   "PHP est un langage de script rapide et flexible, particulièrement adapté au développement web. Il intègre tous les outils nécessaires à la création de sites dynamiques.",
  icon: <FaPhp className="text-indigo-400 text-3xl" />,
 },
 {
  id: "sql",
  title: "Apprendre et maîtriser SQL",
  description:
   "SQL permet d’interroger et de manipuler des bases de données relationnelles afin de stocker et récupérer des informations efficacement.",
  icon: <FaDatabase className="text-blue-400 text-3xl" />,
 },
 {
  id: "react",
  title: "Spécialisation Framework - React",
  description:
   "React est une librairie JavaScript très populaire pour construire des interfaces utilisateur rapides et dynamiques.",
  icon: <FaReact className="text-cyan-400 text-3xl" />,
 },
 {
  id: "node",
  title: "Backend avec Node.js",
  description:
   "Node.js permet d’exécuter du JavaScript côté serveur, pour construire des APIs rapides, scalables et modernes.",
  icon: <FaNodeJs className="text-green-500 text-3xl" />,
 },
];

const RoadmapInteractive = () => {
 const [selected, setSelected] = useState<string | null>(null);

 const selectedStep = steps.find((step) => step.id === selected);

 return (
  <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col items-center py-10 px-4">
   <h1 className="text-3xl md:text-4xl font-bold mb-10">🚀 Roadmap Interactive</h1>

   <div className="flex flex-col md:flex-row w-full max-w-6xl gap-8">
    {/* Cartes */}
    <div className="relative flex-1">
     <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-indigo-500 to-pink-500 -translate-x-1/2"></div>

     <div className="flex flex-col gap-10 relative">
      {steps.map((step, index) => (
       <motion.div
        key={step.id}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setSelected(step.id)}
        className={`relative cursor-pointer bg-slate-800 border ${selected === step.id ? "border-cyan-400" : "border-slate-700"
         } rounded-2xl shadow-lg p-6 flex items-center gap-4 transition-all duration-300 ${index % 2 === 0 ? "ml-10 md:ml-0 md:mr-20" : "mr-10 md:mr-0 md:ml-20"
         }`}
       >
        <div>{step.icon}</div>
        <div>
         <h2 className="font-semibold text-lg">{step.title}</h2>
        </div>

        {/* Trait qui relie au centre */}
        <div
         className={`absolute top-1/2 w-10 h-1 bg-gradient-to-r from-cyan-400 to-pink-400 ${index % 2 === 0 ? "-left-10 md:-left-20" : "-right-10 md:-right-20"
          }`}
        ></div>
       </motion.div>
      ))}
     </div>
    </div>

    {/* Zone de contenu dynamique */}
    <div className="flex-1">
     <AnimatePresence mode="wait">
      {selectedStep && (
       <motion.div
        key={selectedStep.id}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
        className="bg-slate-800 border border-cyan-400 rounded-2xl shadow-xl p-8"
       >
        <div className="flex items-center gap-3 mb-4">
         {selectedStep.icon}
         <h2 className="text-2xl font-bold">{selectedStep.title}</h2>
        </div>
        <p className="text-slate-300">{selectedStep.description}</p>
       </motion.div>
      )}
     </AnimatePresence>
    </div>
   </div>
  </div>
 );
};

export default RoadmapInteractive;
