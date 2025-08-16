import Member from '@/pages/category/Member';
import { Link, usePage } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { FaCss3Alt, FaDatabase, FaHtml5, FaJsSquare, FaPhp, FaReact } from 'react-icons/fa';
import { HiOutlineExclamation } from 'react-icons/hi';
import { SiTailwindcss } from 'react-icons/si';
import Footer from './Footer';

const technologies = [
 { icon: <FaHtml5 size={30} />, color: 'bg-orange-600' },
 { icon: <FaCss3Alt size={30} />, color: 'bg-blue-500' },
 { icon: <FaJsSquare size={30} />, color: 'bg-yellow-400' },
 { icon: <FaPhp size={30} />, color: 'bg-indigo-600' },
 { icon: <FaReact size={30} />, color: 'bg-cyan-400' },
 { icon: <SiTailwindcss size={30} />, color: 'bg-sky-500' },
 { icon: <FaDatabase size={30} />, color: 'bg-blue-800' },
];

export default function Header({ categories }) {
 const { courses } = usePage().props;

 return (
  <>
   {/* Hero Section */}
   <section className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#0B0E1E] to-[#11152B] px-6 text-white text-center">
    <motion.h1
     initial={{ opacity: 0, y: 30 }}
     animate={{ opacity: 1, y: 0 }}
     transition={{ duration: 0.7 }}
     className="text-3xl md:text-5xl font-extrabold leading-tight max-w-3xl"
    >
     Des formations qui vous font passer <br />
     de <span className="text-yellow-400">l'apprentissage</span> à <span className="text-green-400">l'action</span>
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
      Pas besoin de filtrer. Chaque cours vous emmène du niveau débutant à avancé, étape par étape.
     </span>
    </div>
   </section>

   {/* Categories Section */}
   <section className="p-6 md:p-12 bg-[#0B0E1E]">
    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Toutes les catégories</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
     {categories.map((category) => (
      <Link
       key={category.id}
       href={`/category/${category.id}`}
       className="group block overflow-hidden rounded-xl bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 shadow-lg hover:scale-105 transition-transform duration-300"
      >
       {category.image && (
        <img
         className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
         src={`/storage/${category.image}`}
         alt={category.name}
        />
       )}
       <div className="p-4">
        <h3 className="text-lg font-semibold text-white">{category.name}</h3>
        <p className="text-gray-300 mt-1">{category.cours_count} cours disponibles</p>
       </div>
      </Link>
     ))}
    </div>

    <div className="mt-12">
     <Member />
    </div>
   </section>

   <Footer />
  </>
 );
}
