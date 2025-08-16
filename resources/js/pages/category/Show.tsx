import Navbar from "@/components/NavBar";
import { Link, usePage } from "@inertiajs/react";
import Footer from "../Footer";
import { motion } from "framer-motion";

export default function Show() {
 const { category } = usePage().props;

 return (
  <>
   <Navbar />

   {/* Container principal avec dégradé bleu */}
   <div className="px-6 md:px-12 py-12 min-h-screen bg-gradient-to-b from-blue-200 to-blue-600">

    {/* Titre */}
    <motion.h1
     initial={{ opacity: 0, y: 20 }}
     animate={{ opacity: 1, y: 0 }}
     transition={{ duration: 0.6 }}
     className="text-3xl md:text-5xl font-extrabold text-center text-blue-900 mb-12"
     style={{ fontFamily: "'Poppins', sans-serif" }}
    >
     📚 Cours de la catégorie :{" "}
     <span className="text-blue-600">{category.name}</span>
    </motion.h1>

    {/* Grille des cours */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
     {category.cours.map((cours, index) => (
      <motion.div
       key={index}
       initial={{ opacity: 0, y: 20 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ delay: index * 0.1, duration: 0.5 }}
       className="bg-blue-50 rounded-2xl shadow-md p-6 flex flex-col justify-between hover:shadow-xl hover:scale-105 transition-all duration-300"
      >
       <Link
        href={`/cours/${cours.id}`}
        className="text-xl md:text-2xl font-bold text-blue-800 hover:text-blue-600 transition-colors mb-2"
       >
        {cours.title}
       </Link>
       <p className="text-blue-700 flex-1 mb-4">{cours.description}</p>
       <Link
        href={`/cours/${cours.id}`}
        className="mt-2 inline-block text-center bg-blue-600 text-white font-semibold rounded-lg px-4 py-2 hover:bg-blue-500 transition-colors"
       >
        Voir le cours
       </Link>
      </motion.div>
     ))}
    </div>
   </div>

   <Footer />
  </>
 );
}
