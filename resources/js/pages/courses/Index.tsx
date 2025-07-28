import { Link, usePage } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaCss3Alt, FaHtml5, FaLaravel, FaPhp, FaReact } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss } from 'react-icons/si';
import { useInView } from 'react-intersection-observer';
import CardCourses from './CardCourses';
import Member from './Member';
import NavBar from '@/components/NavBar';
const Index = () => {

 const [isInViewx, setIsInView] = useState(false);
    const { data, isLoading } = usePage().props;
    const { ref, inView } = useInView();

    useEffect(() => {
     if (inView) {
            setIsInView(true);
        }
    }, [inView]);

    return (
     <>
      <NavBar />
      <div className="flex flex-col items-center justify-center">
       <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center text-white">
        <motion.h1
         className="mb-4 text-8xl font-bold md:text-6xl"
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8 }}
        >
         Des cours qui vous emmène <span className="text-yellow-400">de</span> <span className="text-green-400">l'apprentissage</span>{' '}
         <span className="text-yellow-400">à</span> <span className="text-green-400">la pratique</span>
        </motion.h1>
        <motion.p
         className="mb-6 text-lg md:text-xl"
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
         <FaReact title="React" className="animate-spin-slow text-cyan-400" />
         <FaLaravel title="Laravel" className="text-red-600" />
         <FaPhp title="PHP" className="text-indigo-600" />
        </div>
        <motion.p
         className="text-sm text-yellow-400 md:text-base"
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8, delay: 0.4 }}
        >
         <p className="mt-8">⚠️ Pas besoin de filtrer. Chaque cours vous emmène du débutant au avancé, étape par étape.</p>
        </motion.p>
       </div>
       <CardCourses />
       <div className="my-12">
        <h2 className="text-2xl">Attends... Mais si je veux apprendre TOUTES les technologies?</h2>
        <h2 className="text-center text-2xl">
         Devenir un <span className="text-cyan-600">Membre</span>
        </h2>
       </div>
       <Member />
       <div className="flex items-center justify-center">
        <Link href="/contact" className="rounded-sm bg-[#3EAEFF] p-4 px-44 text-center font-bold">
         Besoin d'une assistance personnalisée? Contactez nous directement👌
        </Link>
       </div>
      </div>
     </>
    );
};
export default Index;
