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

import Navbar from "@/components/NavBar";
import { Link, usePage } from "@inertiajs/react";
import Footer from "../Footer";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

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

export default function Show() {
 const { category } = usePage().props;

 return (
  <>
   <Navbar />

   {/* Container principal */}
   <div className="px-6 md:px-12 py-16 min-h-screen bg-gradient-to-b from-[#0B0E1E] to-[#11152B] text-white">
    {/* Titre */}
    <motion.h1
     initial={{ opacity: 0, y: 20 }}
     animate={{ opacity: 1, y: 0 }}
     transition={{ duration: 0.6 }}
     className="text-3xl md:text-5xl font-extrabold text-center mb-16"
     style={{ fontFamily: "'Poppins', sans-serif" }}
    >
     📚 Cours de la catégorie <br />
     <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
      {category.name}
     </span>
    </motion.h1>

    {/* Grille des cours */}
    <motion.div
     variants={containerVariants}
     initial="hidden"
     animate="visible"
     className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
    >
     {category.cours.map((cours, index) => (
      <motion.div
       key={index}
       variants={cardVariants}
       whileHover={{ scale: 1.03 }}
       className="group relative rounded-2xl overflow-hidden shadow-xl transition-all"
      >
       {/* Bordure dégradée */}
       <div className="absolute inset-0 p-[2px] rounded-2xl bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 opacity-90 group-hover:opacity-100 transition duration-500"></div>

       {/* Contenu */}
       <div className="relative bg-[#0d0d1a] rounded-2xl h-full flex flex-col">
        {/* Header cours */}
        <div className="p-6 flex flex-col flex-grow">
         <Link
          href={`/cours/${cours.id}`}
          className="text-xl md:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-sky-400 group-hover:to-blue-600 transition-all mb-3"
         >
          {cours.title}
         </Link>

         <p className="text-gray-400 flex-1 mb-6 line-clamp-4">
          {cours.description}
         </p>

         {/* CTA */}
         <Link
          href={`/cours/${cours.id}`}
          className="mt-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-sky-500 text-white font-medium transition-all hover:bg-sky-600 hover:gap-3"
         >
          Voir le cours <ArrowUpRight size={18} />
         </Link>
        </div>
       </div>
      </motion.div>
     ))}
    </motion.div>
   </div>

   <Footer />
  </>
 );
}




