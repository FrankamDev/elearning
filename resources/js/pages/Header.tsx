// import Member from '@/pages/category/Member';
// import { Link, usePage } from '@inertiajs/react';
// import { motion } from 'framer-motion';
// import { FaCss3Alt, FaDatabase, FaHtml5, FaJsSquare, FaPhp, FaReact } from 'react-icons/fa';
// import { HiOutlineExclamation } from 'react-icons/hi';
// import { SiTailwindcss } from 'react-icons/si';
// import Footer from './Footer';

// const technologies = [
//  { icon: <FaHtml5 size={30} />, color: 'bg-orange-600' },
//  { icon: <FaCss3Alt size={30} />, color: 'bg-blue-500' },
//  { icon: <FaJsSquare size={30} />, color: 'bg-yellow-400' },
//  { icon: <FaPhp size={30} />, color: 'bg-indigo-600' },
//  { icon: <FaReact size={30} />, color: 'bg-cyan-400' },
//  { icon: <SiTailwindcss size={30} />, color: 'bg-sky-500' },
//  { icon: <FaDatabase size={30} />, color: 'bg-blue-800' },
// ];

// export default function Header({ categories }) {
//  const { courses } = usePage().props;

//  return (
//   <>
//    {/* Hero Section */}
//    <section className="pt-20relative flex items-center justify-center min-h-screen bg-gradient-to-b from-[#0B0E1E] to-[#11152B] px-6 text-white text-center flex flex-col items-center">
//     <motion.h1
//      initial={{ opacity: 0, y: 30 }}
//      animate={{ opacity: 1, y: 0 }}
//      transition={{ duration: 0.7 }}
//      className="text-3xl md:text-5xl font-extrabold leading-tight max-w-3xl"
//     >
//      Des formations qui vous font passer <br />
//      de <span className="text-yellow-400">l'apprentissage</span> à <span className="text-green-400">l'action</span>
//     </motion.h1>

//     <motion.p
//      initial={{ opacity: 0 }}
//      animate={{ opacity: 1 }}
//      transition={{ delay: 0.5 }}
//      className="mt-4 text-gray-300 max-w-xl"
//     >
//      Apprenez les compétences. Créez votre portfolio. Trouvez un emploi.
//     </motion.p>

//     <div className="mt-10 flex flex-wrap justify-center gap-5">
//      {technologies.map((tech, index) => (
//       <motion.div
//        key={index}
//        className={`flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-xl shadow-lg ${tech.color}`}
//        whileHover={{ scale: 1.15, rotate: 5 }}
//        whileTap={{ scale: 0.95 }}
//       >
//        {tech.icon}
//       </motion.div>
//      ))}
//     </div>

//     <div className="mt-6 flex items-start gap-3 text-sm md:text-base text-gray-400 max-w-lg">
//      <HiOutlineExclamation className="text-yellow-400 mt-1" />
//      <span className="font-semibold">
//       Pas besoin de filtrer. Chaque cours vous emmène du niveau débutant à avancé, étape par étape.
//      </span>
//     </div>
//    </section>

//    {/* Categories Section */}
//    <section className="p-6 md:p-12 bg-[#0B0E1E]">
//     <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Toutes les catégories</h2>

//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//      {categories.map((category) => (
//       <Link
//        key={category.id}
//        href={`/category/${category.id}`}
//        className="group block overflow-hidden rounded-xl bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 shadow-lg hover:scale-105 transition-transform duration-300"
//       >
//        {category.image && (
//         <img
//          className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
//          src={`/storage/${category.image}`}
//          alt={category.name}
//         />
//        )}
//        <div className="p-4 bg-amber-400">
//         <h3 className="text-lg font-semibold text-white">{category.name}</h3>
//         <p className="text-gray-300 mt-1">{category.cours_count} cours disponibles</p>
//        </div>
//       </Link>
//      ))}
//     </div>

//     <div className="mt-12">
//      <Member />
//     </div>
//    </section>

//    <Footer />
//   </>
//  );
// }


// import { ArrowUpRight } from "lucide-react";

// export default function TailwindCard() {
//  return (
//   <div className="max-w-md mx-auto">
//    <div
//     className="relative group rounded-2xl p-[2px] bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-600 shadow-lg transition-transform transform hover:scale-[1.02] hover:shadow-2xl"
//    >
//     {/* Inner content */}
//     <div className="rounded-2xl bg-[#0d0d1a] p-8 flex flex-col items-center h-full">
//      {/* Icon */}
//      <div className="flex items-center justify-center mb-6">
//       <img
//        src="https://raw.githubusercontent.com/tailwindlabs/tailwindcss/HEAD/.github/logo-light.svg"
//        alt="Tailwind Logo"
//        className="w-20 h-20 group-hover:scale-110 transition-transform"
//       />
//      </div>

//      {/* Title */}
//      <h2 className="text-2xl font-extrabold text-white text-center mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-sky-400 group-hover:to-blue-600 transition-colors">
//       Tailwind CSS v4 Crash Course
//      </h2>

//      {/* Description */}
//      <p className="text-gray-400 text-center leading-relaxed mb-6">
//       Master Tailwind CSS v4 with this hands-on crash course!
//       Learn fundamentals, JIT compilation, components and more
//       with modern best practices.
//      </p>

//      {/* Link */}
//      <a
//       href="#"
//       className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-sky-500 text-white font-medium transition-all hover:bg-sky-600 hover:gap-3"
//      >
//       Check it now
//       <ArrowUpRight size={18} />
//      </a>
//     </div>
//    </div>
//   </div>
//  );
// }


import Member from "@/pages/category/Member";
import { Link, usePage } from "@inertiajs/react";
import { motion } from "framer-motion";
import {
 FaCss3Alt,
 FaDatabase,
 FaHtml5,
 FaJsSquare,
 FaPhp,
 FaReact,
} from "react-icons/fa";
import { HiOutlineExclamation } from "react-icons/hi";
import { SiTailwindcss } from "react-icons/si";
import Footer from "./Footer";
import { ArrowUpRight } from "lucide-react";

// Icônes dans le hero
const technologies = [
 { icon: <FaHtml5 size={30} />, color: "bg-orange-600" },
 { icon: <FaCss3Alt size={30} />, color: "bg-blue-500" },
 { icon: <FaJsSquare size={30} />, color: "bg-yellow-400" },
 { icon: <FaPhp size={30} />, color: "bg-indigo-600" },
 { icon: <FaReact size={30} />, color: "bg-cyan-400" },
 { icon: <SiTailwindcss size={30} />, color: "bg-sky-500" },
 { icon: <FaDatabase size={30} />, color: "bg-blue-800" },
];

// Variants Framer Motion
const containerVariants = {
 hidden: { opacity: 0 },
 visible: {
  opacity: 1,
  transition: { staggerChildren: 0.15, delayChildren: 0.3 },
 },
};

const cardVariants = {
 hidden: { opacity: 0, y: 40, scale: 0.95 },
 visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Header({ categories }) {
 const { courses } = usePage().props;

 return (
  <>
   {/* Hero Section */}
   <section className="relative flex items-center justify-center min-h-screen bg-gradient-to-b from-[#0B0E1E] to-[#11152B] px-6 text-white text-center flex flex-col items-center">
    <motion.h1
     initial={{ opacity: 0, y: 30 }}
     animate={{ opacity: 1, y: 0 }}
     transition={{ duration: 0.7 }}
     className="text-3xl md:text-5xl font-extrabold leading-tight max-w-3xl"
    >
     Des formations qui vous font passer <br />
     de{" "}
     <span className="text-yellow-400">l'apprentissage</span> à{" "}
     <span className="text-green-400">l'action</span>
    </motion.h1>

    <motion.p
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     transition={{ delay: 0.5 }}
     className="mt-4 text-gray-300 max-w-xl"
    >
     Apprenez les compétences. Créez votre portfolio. Trouvez un emploi.
    </motion.p>

    <div className="mt-10 flex flex-wrap justify-center gap-5">
     {technologies.map((tech, index) => (
      <motion.div
       key={index}
       className={`flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-xl shadow-lg ${tech.color}`}
       whileHover={{ scale: 1.15, rotate: 5 }}
       whileTap={{ scale: 0.95 }}
      >
       {tech.icon}
      </motion.div>
     ))}
    </div>

    <div className="mt-6 flex items-start gap-3 text-sm md:text-base text-gray-400 max-w-lg">
     <HiOutlineExclamation className="text-yellow-400 mt-1" />
     <span className="font-semibold">
      Pas besoin de filtrer. Chaque cours vous emmène du niveau débutant à
      avancé, étape par étape.
     </span>
    </div>
   </section>

   {/* Categories Section */}
   <section className="p-6 md:p-16 bg-[#0B0E1E]">
    <h2 className="text-2xl md:text-4xl font-extrabold mb-12 text-center text-white">
     Découvrez nos catégories
    </h2>

    <motion.div
     variants={containerVariants}
     initial="hidden"
     animate="visible"
     className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
    >
     {categories.map((category) => (
      <motion.div
       key={category.id}
       variants={cardVariants}
       whileHover={{ scale: 1.03 }}
       className="group relative rounded-2xl overflow-hidden shadow-xl transition-all"
      >
       {/* Bordure dégradée */}
       <div className="absolute inset-0 p-[2px] rounded-2xl bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-600 opacity-90 group-hover:opacity-100 transition duration-500"></div>

       {/* Contenu */}
       <div className="relative bg-[#0d0d1a] rounded-2xl h-full flex flex-col">
        {/* Image */}
        {category.image && (
         <div className="relative h-48 overflow-hidden rounded-t-2xl">
          <img
           src={`/storage/${category.image}`}
           alt={category.name}
           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
         </div>
        )}

        {/* Texte */}
        <div className="flex flex-col flex-grow p-6">
         <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-sky-400 group-hover:to-blue-600 transition-all">
          {category.name}
         </h3>
         <p className="text-gray-400 mb-6">
          {category.cours_count} cours disponibles
         </p>

         {/* CTA */}
         <Link
          href={`/category/${category.id}`}
          className="mt-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-sky-500 text-white font-medium transition-all hover:bg-sky-600 hover:gap-3"
         >
          Explorer <ArrowUpRight size={18} />
         </Link>
        </div>
       </div>
      </motion.div>
     ))}
    </motion.div>

    <div className="mt-16">
     <Member />
    </div>
   </section>

   <Footer />
  </>
 );
}
