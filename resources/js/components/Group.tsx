import React from "react";
import {
 FaLaptopCode,
 FaBrain,
 FaLock,
 FaRocket,
 FaChartLine,
 FaCogs,
 FaBox,
 FaGlobe,
 FaVial,
 FaTools,
 FaImages,
 FaUserCircle,
} from "react-icons/fa";

import { motion } from "framer-motion";


const cardVariants = {
 hidden: { opacity: 0, y: 50 },
 visible: (i) => ({
  opacity: 1,
  y: 0,
  transition: {
   delay: i * 0.1,
   duration: 0.6,
   ease: "easeOut",
  },
 }),
};

const features = [
 {
  title: "Développement Web Moderne",
  icon: <FaLaptopCode size={48} className="text-blue-400 drop-shadow" />,
  glow: "bg-blue-600/30",
 },
 {
  title: "Intelligence Artificielle Appliquée",
  icon: <FaBrain size={48} className="text-purple-400 drop-shadow" />,
  glow: "bg-purple-600/30",
 },
 {
  title: "Sécurité et Protection des Données",
  icon: <FaLock size={48} className="text-red-400 drop-shadow" />,
  glow: "bg-red-600/30",
 },
 {
  title: "Lancement de Produits Numériques",
  icon: <FaRocket size={48} className="text-pink-400 drop-shadow" />,
  glow: "bg-pink-600/30",
 },
 {
  title: "Analyse de Performance",
  icon: <FaChartLine size={48} className="text-green-400 drop-shadow" />,
  glow: "bg-green-600/30",
 },
 {
  title: "Automatisation des Processus",
  icon: <FaCogs size={48} className="text-yellow-400 drop-shadow" />,
  glow: "bg-yellow-500/30",
 },
 {
  title: "Gestion de Modules et Librairies",
  icon: <FaBox size={48} className="text-indigo-400 drop-shadow" />,
  glow: "bg-indigo-600/30",
 },
 {
  title: "Applications Web Internationales",
  icon: <FaGlobe size={48} className="text-teal-400 drop-shadow" />,
  glow: "bg-teal-600/30",
 },
 {
  title: "Environnements de Test Intelligents",
  icon: <FaVial size={48} className="text-orange-400 drop-shadow" />,
  glow: "bg-orange-500/30",
 },
 {
  title: "Outils de Débogage Avancés",
  icon: <FaTools size={48} className="text-gray-300 drop-shadow" />,
  glow: "bg-gray-500/30",
 },
 {
  title: "Création de Portfolios Professionnels",
  icon: <FaImages size={48} className="text-cyan-400 drop-shadow" />,
  glow: "bg-cyan-600/30",
 },
 {
  title: "Identité Visuelle pour Développeurs",
  icon: <FaUserCircle size={48} className="text-lime-400 drop-shadow" />,
  glow: "bg-lime-600/30",
 },
];

const CardGrid = () => {
 return (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 bg-[#0c0c1d] min-h-screen">
   {features.map((feature, index) => (
    <motion.div
     key={index}
     className="relative w-full h-72 bg-gradient-to-b from-[#0e0e23] to-[#0a0a1a] rounded-xl p-6 shadow-lg flex flex-col justify-center items-center text-center hover:scale-105 transition"
     variants={cardVariants}
     initial="hidden"
     whileInView="visible"
     viewport={{ once: true, amount: 0.2 }}
     custom={index}
    >
     <div className={`absolute w-32 h-32 rounded-full ${feature.glow} blur-2xl z-0`} />
     <div className="z-10 mb-6">{feature.icon}</div>
     <h3 className="z-10 text-white text-lg font-semibold">{feature.title}</h3>
    </motion.div>
   ))}
  </div>
 );
};

export default CardGrid;
