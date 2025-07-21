import NavBar from "@/components/NavBar";
import CoursesCards from "@/pages/CoursesCard";
import { Link } from "@inertiajs/react";
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaReact, FaPhp, FaLaravel } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript } from 'react-icons/si';
const Courses = () => {
 return (
  <div className="bg-[#020012] flex flex-col items-center justify-center">
   <NavBar />
   <div className="text-white min-h-screen flex items-center justify-center flex-col px-6 text-center">
    <motion.h1
     className="text-4xl md:text-6xl font-bold mb-4"
     initial={{ opacity: 0, y: 20 }}
     animate={{ opacity: 1, y: 0 }}
     transition={{ duration: 0.8 }}
    >
     Des cours qui vous emmènent <span className="text-yellow-400">de</span>{' '}
     <span className="text-green-400">l'apprentissage</span>{' '}
     <span className="text-yellow-400">à</span>{' '}
     <span className="text-green-400">la pratique</span>

    </motion.h1>
    <motion.p
     className="text-lg md:text-xl mb-6"
     initial={{ opacity: 0, y: 20 }}
     animate={{ opacity: 1, y: 0 }}
     transition={{ duration: 0.8, delay: 0.2 }}
    >
     Apprenez les compétences. Construisez votre portfolio. Obtenez le job.
    </motion.p>
    <div className="flex gap-4 text-4xl text-blue-600">
     <FaHtml5 title="HTML5" className="text-orange-600" />
     <FaCss3Alt title="CSS3" className="text-blue-500" />
     <SiTailwindcss title="TailwindCSS" className="text-teal-400" />
     <SiJavascript title="JavaScript" className="text-yellow-400" />
     <FaReact title="React" className="text-cyan-400 animate-spin-slow" />
     <FaLaravel title="Laravel" className="text-red-600" />
     <FaPhp title="PHP" className="text-indigo-600" />
    </div>
    <motion.p
     className="text-yellow-400 text-sm md:text-base"
     initial={{ opacity: 0, y: 20 }}
     animate={{ opacity: 1, y: 0 }}
     transition={{ duration: 0.8, delay: 0.4 }}
    >
     <p className="mt-8">⚠️ Pas besoin de filtrer. Chaque cours vous emmène du débutant au avancé, étape par étape.</p>
    </motion.p>
   </div>
   <CoursesCards />
   <div className="flex justify-center items-center">
    <Link href="/contact" className="bg-[#3EAEFF] p-4 px-44 text-center font-bold rounded-sm">Besoin d'une assistance personnalisée? Contactez nous directement👌</Link>
   </div>
  </div>
 )
}
export default Courses;