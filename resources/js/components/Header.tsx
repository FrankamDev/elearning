
import { motion } from 'framer-motion';
import { FaCss3Alt, FaDatabase, FaHtml5, FaJsSquare, FaPhp, FaReact } from 'react-icons/fa';
import { HiOutlineExclamation } from 'react-icons/hi';
import { SiTailwindcss } from 'react-icons/si';



const technologies = [
 { icon: <FaHtml5 size={30} />, color: 'bg-orange-700' },
 { icon: <FaCss3Alt size={30} />, color: 'bg-blue-500' },
 { icon: <FaJsSquare size={30} />, color: 'bg-yellow-300' },
 { icon: <FaPhp size={30} />, color: 'bg-indigo-700' },
 { icon: <FaReact size={30} />, color: 'bg-cyan-400' },
 { icon: <SiTailwindcss size={30} />, color: 'bg-sky-500' },
 { icon: <FaDatabase size={30} />, color: 'bg-blue-800' },
];

export default function Header() {
 return (
  <>

   <section className="my-8 flex min-h-screen flex-col items-center justify-center bg-[#0B0E1E] px-4 text-white">
    <motion.h1
     initial={{ opacity: 0, y: 20 }}
     animate={{ opacity: 1, y: 0 }}
     transition={{ duration: 0.6 }}
     className="text-center text-4xl leading-tight font-bold md:text-5xl"
    >
     Des formations qui vous font passer <br />
     de <span className="text-yellow-400">l'apprentissage</span> à <span className="text-green-400">l'action.</span>
    </motion.h1>

    <p className="mt-4 text-center text-lg text-gray-300">Apprenez les compétences. Créez votre portfolio. Trouvez un emploi.</p>

    <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
     {technologies.map((tech, index) => (
      <motion.div
       key={index}
       className={`flex h-14 w-14 items-center justify-center rounded-lg shadow-lg ${tech.color}`}
       whileHover={{ scale: 1.1 }}
       whileTap={{ scale: 0.95 }}
      >
       {tech.icon}
      </motion.div>
     ))}
    </div>

    <div className="mt-6 flex items-center gap-2 text-sm text-gray-400">
     <HiOutlineExclamation className="text-yellow-400" />
     <span className="font-bold">Pas besoin de filtrer. Chaque cours vous emmène du niveau débutant à avancé, étape par étape.</span>
    </div>
   </section>


  </>
 );
}



