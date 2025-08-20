// import Navbar from "@/components/NavBar";
// import { Link, usePage } from "@inertiajs/react";
// import Footer from "../Footer";
// import { motion } from "framer-motion";

// export default function Show() {
//  const { category } = usePage().props;

//  return (
//   <>
//    <Navbar />

//    {/* Container principal avec dégradé bleu */}
//    <div className="px-6 md:px-12 py-12 min-h-screen bg-gradient-to-b from-blue-200 to-blue-600">

//     {/* Titre */}
//     <motion.h1
//      initial={{ opacity: 0, y: 20 }}
//      animate={{ opacity: 1, y: 0 }}
//      transition={{ duration: 0.6 }}
//      className="text-3xl md:text-5xl font-extrabold text-center text-blue-900 mb-12"
//      style={{ fontFamily: "'Poppins', sans-serif" }}
//     >
//      📚 Cours de la catégorie :{" "}
//      <span className="text-blue-600">{category.name}</span>
//     </motion.h1>

//     {/* Grille des cours */}
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//      {category.cours.map((cours, index) => (
//       <motion.div
//        key={index}
//        initial={{ opacity: 0, y: 20 }}
//        animate={{ opacity: 1, y: 0 }}
//        transition={{ delay: index * 0.1, duration: 0.5 }}
//        className="bg-blue-50 rounded-2xl shadow-md p-6 flex flex-col justify-between hover:shadow-xl hover:scale-105 transition-all duration-300"
//       >
//        <Link
//         href={`/cours/${cours.id}`}
//         className="text-xl md:text-2xl font-bold text-blue-800 hover:text-blue-600 transition-colors mb-2"
//        >
//         {cours.title}
//        </Link>
//        <p className="text-blue-700 flex-1 mb-4">{cours.description}</p>
//        <Link
//         href={`/cours/${cours.id}`}
//         className="mt-2 inline-block text-center bg-blue-600 text-white font-semibold rounded-lg px-4 py-2 hover:bg-blue-500 transition-colors"
//        >
//         Voir le cours
//        </Link>
//       </motion.div>
//      ))}
//     </div>
//    </div>

//    <Footer />
//   </>
//  );
// }

// import Navbar from "@/components/NavBar";
// import { Link, usePage } from "@inertiajs/react";
// import Footer from "../Footer";
// import { motion } from "framer-motion";
// import { ArrowUpRight } from "lucide-react";

// const containerVariants = {
//  hidden: { opacity: 0 },
//  visible: {
//   opacity: 1,
//   transition: { staggerChildren: 0.15, delayChildren: 0.3 },
//  },
// };

// const cardVariants = {
//  hidden: { opacity: 0, y: 40, scale: 0.95 },
//  visible: {
//   opacity: 1,
//   y: 0,
//   scale: 1,
//   transition: { duration: 0.6, ease: "easeOut" },
//  },
// };

// export default function Show() {
//  const { category } = usePage().props;

//  return (
//   <>
//    <Navbar />

//    {/* Container principal */}
//    <div className="px-6 md:px-12 py-16 min-h-screen bg-gradient-to-b from-[#0B0E1E] to-[#11152B] text-white">
//     {/* Titre */}
//     <motion.h1
//      initial={{ opacity: 0, y: 20 }}
//      animate={{ opacity: 1, y: 0 }}
//      transition={{ duration: 0.6 }}
//      className="text-3xl md:text-5xl font-extrabold text-center mb-16"
//      style={{ fontFamily: "'Poppins', sans-serif" }}
//     >
//      📚 Cours de la catégorie <br />
//      <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
//       {category.name}
//      </span>
//     </motion.h1>

//     {/* Grille des cours */}
//     <motion.div
//      variants={containerVariants}
//      initial="hidden"
//      animate="visible"
//      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
//     >
//      {category.cours.map((cours, index) => (
//       <motion.div
//        key={index}
//        variants={cardVariants}
//        whileHover={{ scale: 1.03 }}
//        className="group relative rounded-2xl overflow-hidden shadow-xl transition-all"
//       >
//        {/* Bordure dégradée */}
//        <div className="absolute inset-0 p-[2px] rounded-2xl bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 opacity-90 group-hover:opacity-100 transition duration-500"></div>

//        {/* Contenu */}
//        <div className="relative bg-[#0d0d1a] rounded-2xl h-full flex flex-col">
//         {/* Header cours */}
//         <div className="p-6 flex flex-col flex-grow">
//          <Link
//           href={`/cours/${cours.id}`}
//           className="text-xl md:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-sky-400 group-hover:to-blue-600 transition-all mb-3"
//          >
//           {cours.title}
//          </Link>

//          <p className="text-gray-400 flex-1 mb-6 line-clamp-4">
//           {cours.description}
//          </p>

//          {/* CTA */}
//          <Link
//           href={`/cours/${cours.id}`}
//           className="mt-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-sky-500 text-white font-medium transition-all hover:bg-sky-600 hover:gap-3"
//          >
//           Voir le cours <ArrowUpRight size={18} />
//          </Link>
//         </div>
//        </div>
//       </motion.div>
//      ))}
//     </motion.div>
//    </div>

//    <Footer />
//   </>
//  );
// }



import React, { useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/NavBar";
import Footer from "../Footer";
import {
 FaBook,
 FaClock,
 FaCheckCircle,
 FaTimesCircle,
 FaHeart,
 FaFilePdf,
 FaLink,
 FaMoon,
 FaSun,
 FaChevronDown,
 FaChartBar,
} from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";

const mockCategory = {
 name: "Développement Web",
 cours: [
  {
   id: 1,
   title: "HTML Fondamentaux",
   description:
    "Apprenez les bases de HTML pour structurer des pages web modernes et sémantiques. Idéal pour débutants.",
   category: "Frontend",
   level: "Débutant",
   duration: "2h 30min",
   progress: 45,
   pdf: "/docs/html-fundamentals.pdf",
   externalLink: "https://developer.mozilla.org/en-US/docs/Learn/HTML",
  },
  {
   id: 2,
   title: "CSS Stylisation Avancée",
   description:
    "Maîtrisez flexbox, grid et animations CSS pour créer des interfaces élégantes et responsives.",
   category: "Frontend",
   level: "Intermédiaire",
   duration: "3h",
   progress: 60,
   pdf: "/docs/css-advanced.pdf",
   externalLink: "https://developer.mozilla.org/en-US/docs/Learn/CSS",
  },
  {
   id: 3,
   title: "JavaScript Interactivité",
   description:
    "Ajoutez de la dynamique à vos sites avec JavaScript : manipulez le DOM et gérez les événements.",
   category: "Frontend",
   level: "Intermédiaire",
   duration: "4h",
   progress: 30,
   pdf: "/docs/js-interactivity.pdf",
   externalLink: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript",
  },
  {
   id: 4,
   title: "PHP Backend",
   description:
    "Développez des applications web côté serveur avec PHP : formulaires, sessions et bases de données.",
   category: "Backend",
   level: "Avancé",
   duration: "5h",
   progress: 75,
   pdf: "/docs/php-backend.pdf",
   externalLink: "https://www.php.net/manual/en/",
  },
  {
   id: 5,
   title: "React Composants",
   description:
    "Construisez des interfaces utilisateur modernes avec React et ses composants réutilisables.",
   category: "Frontend",
   level: "Avancé",
   duration: "4h 30min",
   progress: 50,
   pdf: "/docs/react-components.pdf",
   externalLink: "https://react.dev/learn",
  },
 ],
};

const containerVariants = {
 hidden: { opacity: 0 },
 visible: {
  opacity: 1,
  transition: { staggerChildren: 0.15, delayChildren: 0.3 },
 },
};

const cardVariants = {
 hidden: { opacity: 0, y: 40, scale: 0.95 },
 visible: {
  opacity: 1,
  y: 0,
  scale: 1,
  transition: { duration: 0.6, ease: "easeOut" },
 },
};

interface Cours {
 id: number;
 title: string;
 description: string;
 category: string;
 level: string;
 duration?: string;
 progress: number;
 pdf?: string;
 externalLink?: string;
}

interface Category {
 name: string;
 cours: Cours[];
}

interface Props {
 category: Category;
}

export default function Show() {
 const { category = mockCategory } = usePage<Props>().props;
 const [isDarkMode, setIsDarkMode] = useState(false);
 const [modal, setModal] = useState({ show: false, isSuccess: false, message: "" });
 const [filter, setFilter] = useState({ level: "" });
 const [visibleCoursCount, setVisibleCoursCount] = useState(6);
 const [favorites, setFavorites] = useState<number[]>([]);

 const toggleDarkMode = () => {
  setIsDarkMode(!isDarkMode);
  document.documentElement.classList.toggle("dark");
 };

 const toggleFavorite = (coursId: number) => {
  setFavorites((prev) =>
   prev.includes(coursId) ? prev.filter((id) => id !== coursId) : [...prev, coursId]
  );
  setModal({
   show: true,
   isSuccess: true,
   message: favorites.includes(coursId) ? "Retiré des favoris !" : "Ajouté aux favoris ! ❤️",
  });
  setTimeout(() => setModal({ show: false, isSuccess: false, message: "" }), 3000);
 };

 const filteredCours = category.cours
  .filter((cours) => !filter.level || cours.level === filter.level)
  .slice(0, visibleCoursCount);

 const loadMoreCours = () => {
  setVisibleCoursCount((prev) => Math.min(prev + 3, category.cours.length));
 };

 return (
  <div
   className={`min-h-screen flex flex-col ${isDarkMode ? "dark bg-gray-900" : "bg-gradient-to-b from-[#0B0E1E] to-[#11152B]"
    } transition-colors duration-500`}
  >
   <AnimatePresence>
    {modal.show && (
     <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 p-4 rounded-xl shadow-lg flex items-center gap-3 max-w-md w-[90%] sm:w-full"
      style={{ backgroundColor: modal.isSuccess ? "#10B981" : "#EF4444" }}
     >
      {modal.isSuccess ? (
       <FaCheckCircle className="text-white text-xl sm:text-2xl" />
      ) : (
       <FaTimesCircle className="text-white text-xl sm:text-2xl" />
      )}
      <p className="text-white font-semibold text-sm sm:text-base">{modal.message}</p>
     </motion.div>
    )}
   </AnimatePresence>

   <Navbar />

   <div className="px-4 sm:px-6 md:px-12 lg:px-16 py-12 sm:py-16 flex-1">
    <div className="max-w-7xl mx-auto">
     <header className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-10 sm:mb-12">
      <motion.h1
       initial={{ opacity: 0, y: 20 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.6 }}
       className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center sm:text-left"
       style={{ fontFamily: "'Poppins', sans-serif" }}
      >
       📚 Cours de <br className="sm:hidden" />
       <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
        {category.name}
       </span>
      </motion.h1>
      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
       <button
        onClick={toggleDarkMode}
        className="p-2 rounded-full bg-blue-600 dark:bg-gray-700 text-white hover:bg-blue-700 dark:hover:bg-gray-600 transition"
        aria-label="Toggle dark mode"
       >
        {isDarkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
       </button>
       <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
        <select
         value={filter.level}
         onChange={(e) => setFilter({ ...filter, level: e.target.value })}
         className="px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs sm:text-sm w-full"
        >
         <option value="">Tous Niveaux</option>
         <option value="Débutant">Débutant</option>
         <option value="Intermédiaire">Intermédiaire</option>
         <option value="Avancé">Avancé</option>
        </select>
       </div>
      </div>
     </header>

     <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/10 dark:bg-gray-800/50 p-4 sm:p-6 rounded-xl mb-8 sm:mb-10"
     >
      <h2 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">
       Statistiques de la catégorie
      </h2>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-sm sm:text-base text-gray-300">
       <p>
        <FaBook className="inline mr-1" /> Cours : {category.cours.length}
       </p>
       <p>
        <FaClock className="inline mr-1" /> Durée totale :{" "}
        {category.cours.reduce((acc, cours) => {
         if (!cours.duration) return acc;
         const [hours, minutes] = cours.duration.split("h ");
         return acc + parseInt(hours) * 60 + parseInt(minutes || "0");
        }, 0)}{" "}
        min
       </p>
       <p>
        <FaChartBar className="inline mr-1" /> Progression moyenne :{" "}
        {category.cours.length > 0
         ? Math.round(
          category.cours.reduce((acc, cours) => acc + (cours.progress || 0), 0) /
          category.cours.length
         )
         : 0}
        %
       </p>
      </div>
     </motion.div>

     <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
     >
      {filteredCours.length === 0 ? (
       <p className="text-gray-400 text-center col-span-full text-sm sm:text-base">
        Aucun cours disponible pour ce filtre.
       </p>
      ) : (
       filteredCours.map((cours) => (
        <motion.div
         key={cours.id}
         variants={cardVariants}
         whileHover={{ scale: 1.03 }}
         className="group relative rounded-2xl overflow-hidden shadow-xl transition-all"
        >
         <div className="absolute inset-0 p-[2px] rounded-2xl bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 opacity-80 group-hover:opacity-100 transition duration-500"></div>
         <div className="relative bg-[#0d0d1a] dark:bg-gray-800 rounded-2xl h-full flex flex-col">
          <div className="p-4 sm:p-6 flex flex-col flex-grow">
           <div className="flex justify-between items-start mb-3 sm:mb-4">
            <Link
             href={`/cours/${cours.id}`}
             className="text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-sky-400 group-hover:to-blue-600 transition-all"
            >
             {cours.title}
            </Link>
            <button
             onClick={() => toggleFavorite(cours.id)}
             className="text-yellow-500 hover:text-yellow-600 transition"
             aria-label={favorites.includes(cours.id) ? "Retirer des favoris" : "Ajouter aux favoris"}
            >
             {favorites.includes(cours.id) ? (
              <FaHeart size={18} />
             ) : (
              <FaHeart className="opacity-50" size={18} />
             )}
            </button>
           </div>
           <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
            <span className="text-xs text-gray-400 px-2 py-1 bg-blue-900/50 rounded-full">
             {cours.category}
            </span>
            <span className="text-xs text-gray-400 px-2 py-1 bg-blue-900/50 rounded-full">
             {cours.level}
            </span>
            <span className="text-xs text-gray-400 px-2 py-1 bg-blue-900/50 rounded-full">
             {cours.duration || "N/A"}
            </span>
           </div>
           <p className="text-gray-400 flex-1 mb-4 sm:mb-6 text-sm sm:text-base line-clamp-4">
            {cours.description}
           </p>
           <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-4 sm:mb-6">
            {cours.pdf && (
             <a
              href={cours.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-600 text-white font-semibold rounded-xl shadow hover:bg-blue-700 transition text-xs sm:text-sm"
             >
              <FaFilePdf className="mr-1 sm:mr-2" /> PDF
             </a>
            )}
            {cours.externalLink && (
             <a
              href={cours.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-green-600 text-white font-semibold rounded-xl shadow hover:bg-green-700 transition text-xs sm:text-sm"
             >
              <FaLink className="mr-1 sm:mr-2" /> Doc
             </a>
            )}
           </div>
           <Link
            href={`/cours/${cours.id}`}
            className="mt-auto inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-sky-500 text-white font-medium transition-all hover:bg-sky-600 hover:gap-3 text-xs sm:text-sm"
           >
            Voir le cours <ArrowUpRight size={16} />
           </Link>
          </div>
         </div>
        </motion.div>
       ))
      )}
     </motion.div>

     {visibleCoursCount < category.cours.length && (
      <motion.button
       onClick={loadMoreCours}
       className="mt-6 sm:mt-8 w-full sm:w-auto sm:max-w-xs mx-auto py-2 sm:py-3 px-4 sm:px-6 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-xl shadow hover:from-sky-600 hover:to-blue-700 transition flex items-center justify-center gap-2 text-sm sm:text-base"
       whileHover={{ scale: 1.05 }}
       whileTap={{ scale: 0.95 }}
      >
       Charger plus <FaChevronDown className="text-white" />
      </motion.button>
     )}
    </div>
   </div>

   <Footer />
  </div>
 );
}