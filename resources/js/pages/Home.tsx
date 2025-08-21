// import { Link } from "@inertiajs/react";
// import { useEffect } from "react";
// import { ToastContainer, toast } from 'react-toastify';

// import NavBar from '@/components/NavBar';
// import Footer from './Footer';
// import FeaturedCourses from "@/components/FeaturedCourses";
// import Compagnies from "@/components/Compagnies";
// import CardBuild from "@/components/CardBuild";
// import Quotes from "@/components/Quotes";
// import Group from "@/components/Group";
// import MeetMe from "@/components/MeetMe";
// import Questions from "./Questions";
// import AnotherQuestion from '@/components/AnotherQuestion';
// import CardTestimonials from '@/pages/CardTestimonials';
// import SubscriptionCard from '@/components/SubscriptionCard';

// export default function Home({ flash }) {
//  useEffect(() => {
//   if (flash.message.success) toast.success(flash.message.success);
//   if (flash.message.error) toast.error(flash.message.error);
//  }, [flash]);

//  return (
//   <div className="text-white bg-[#020013]">
//    <NavBar />
//    <ToastContainer />

//    {/* Hero Section */}
//    <section className="flex flex-col items-center justify-center text-center min-h-screen px-6 md:px-12">
//     <h1
//      style={{ fontFamily: "'Playfair Display', serif" }}
//      className="text-3xl md:text-5xl font-extrabold leading-tight max-w-3xl">
//      Partez de <br />
//      <span
//       style={{ fontFamily: "'Playfair Display', serif" }}
//       className="text-yellow-300">Je veux apprendre </span>à{' '}
//      <span
//       style={{ fontFamily: "'Playfair Display', serif" }}
//       className="text-green-400">
//       j'ai réalisé ça <i className="text-white">!!</i>
//      </span>
//     </h1>
//     <p className="mt-6 text-gray-300 text-base md:text-lg max-w-2xl">
//      Arrêtez de consommer. Commencez à créer. Réalisez des projets réels qui feront progresser votre niveau.
//     </p>
//    </section>

//    {/* Featured Courses */}
//    <section className="">
//     <FeaturedCourses />
//    </section>


//    <section className="mt-12 text-center px-6">
//     <p className="text-xl md:text-2xl">
//      Ils ont commencés comme <span className="font-serif font-bold text-cyan-200 text-2xl">Toi</span>, actuellement ils travaillent ici 👇👇
//     </p>
//     <div className="mt-6">
//      <Compagnies />
//     </div>
//    </section>


//    <section className="mt-16 px-6 flex flex-col items-center">
//     <CardBuild />
//     <div className="mt-8 flex flex-col items-center gap-4">
//      <Link
//       href="/cours"
//       className="rounded-lg bg-[#3EAEFF] px-12 py-4 text-center font-bold text-lg hover:bg-blue-500 transition-colors"
//      >
//       Voir Tous Les Cours 🖤
//      </Link>
//      <Link
//       href="/"
//       className="text-sm md:text-base font-bold underline hover:text-yellow-400 transition-colors"
//      >
//       Ne sais pas où commencer? Crée ton chemin d'apprentissage ✔
//      </Link>
//     </div>
//    </section>


//    <section className="mt-16 px-6 md:px-12">
//     <CardTestimonials />
//     <Quotes />
//    </section>


//    <section className="mt-16 px-6 md:px-12 flex flex-col gap-12">
//     <Group />
//     <SubscriptionCard />
//    </section>

//    {/* Meet Me & Questions */}
//    <section className="mt-16 px-6 md:px-12 flex flex-col gap-12">
//     <MeetMe />
//     <Questions />
//     <AnotherQuestion />
//    </section>

//    <Footer />
//   </div>
//  );
// }


import React, { useEffect } from "react";
import { Link, usePage } from "@inertiajs/react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "@/components/NavBar";
import Footer from "./Footer";
import FeaturedCourses from "@/components/FeaturedCourses";
import Compagnies from "@/components/Compagnies";
import CardBuild from "@/components/CardBuild";
import Quotes from "@/components/Quotes";
import Group from "@/components/Group";
import MeetMe from "@/components/MeetMe";
import Questions from "./Questions";
import AnotherQuestion from "@/components/AnotherQuestion";
import CardTestimonials from "@/pages/CardTestimonials";
import SubscriptionCard from "@/components/SubscriptionCard";
import { FaArrowRight, FaChartBar } from "react-icons/fa";

const sectionVariants = {
 hidden: { opacity: 0, y: 30 },
 visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

interface FlashMessage {
 success?: string;
 error?: string;
}

interface Props {
 flash: FlashMessage | null;
}

export default function Home() {
 const { flash } = usePage<Props>().props;

 useEffect(() => {
  if (flash?.message?.success) toast.success(flash.message.success);
  if (flash?.message?.error) toast.error(flash.message.error);
 }, [flash]);

 return (
  <div className="min-h-screen flex flex-col text-white bg-[#020013]">
   <ToastContainer
    position="top-right"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="dark"
    className="text-sm sm:text-base"
   />

   <NavBar />

   <motion.section
    variants={sectionVariants}
    initial="hidden"
    animate="visible"
    className="flex flex-col items-center justify-center text-center min-h-screen px-4 sm:px-6 md:px-12"
   >
    <h1
     style={{ fontFamily: "'Poppins', sans-serif" }}
     className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight max-w-4xl"
    >
     Partez de <br className="sm:hidden" />
     <span
      style={{ fontFamily: "'Poppins', sans-serif" }}
      className="text-yellow-300"
     >
      Je veux apprendre
     </span>{" "}
     à{" "}
     <span
      style={{ fontFamily: "'Poppins', sans-serif" }}
      className="text-green-400"
     >
      j'ai réalisé ça <i className="text-white">!!</i>
     </span>
    </h1>
    <p
     style={{ fontFamily: "'Inter', sans-serif" }}
     className="mt-4 sm:mt-6 text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl"
    >
     Arrêtez de consommer. Commencez à créer. Réalisez des projets réels qui feront progresser votre niveau.
    </p>
    <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
     <Link
      href="/categories"
      className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-[#3EAEFF] text-white font-semibold text-sm sm:text-base hover:bg-blue-600 transition-all"
      aria-label="Voir tous les cours"
     >
      Découvrir les Cours <FaArrowRight size={16} />
     </Link>
     <Link
      href="/initiation"
      className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl border border-gray-300 text-white font-semibold text-sm sm:text-base hover:bg-gray-800 transition-all"
      aria-label="Créer un chemin d'apprentissage"
     >
      Créer mon Chemin <FaArrowRight size={16} />
     </Link>
    </div>
    <div className="mt-6 sm:mt-8 w-full max-w-md">
     <p
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="text-sm sm:text-base text-gray-300 mb-2"
     >
      Progression moyenne des apprenants
     </p>
     <div className="w-full bg-gray-700 rounded-full h-2 sm:h-3">
      <div
       className="bg-[#3EAEFF] h-2 sm:h-3 rounded-full"
       style={{ width: "75%" }}
      ></div>
     </div>
    </div>
   </motion.section>

   <motion.section
    variants={sectionVariants}
    initial="hidden"
    animate="visible"
    className="px-4 sm:px-6 md:px-12 py-12 sm:py-16 bg-[#020013]"
   >
    <FeaturedCourses />
   </motion.section>

   <motion.section
    variants={sectionVariants}
    initial="hidden"
    animate="visible"
    className="mt-12 sm:mt-16 px-4 sm:px-6 md:px-12 text-center"
   >
    <p
     style={{ fontFamily: "'Inter', sans-serif" }}
     className="text-lg sm:text-xl md:text-2xl text-gray-200"
    >
     Ils ont commencé comme{" "}
     <span
      style={{ fontFamily: "'Poppins', sans-serif" }}
      className="font-bold text-cyan-300 text-xl sm:text-2xl"
     >
      Toi
     </span>
     , maintenant ils travaillent ici 👇
    </p>
    <div className="mt-6 sm:mt-8">
     <Compagnies />
    </div>
   </motion.section>

   <motion.section
    variants={sectionVariants}
    initial="hidden"
    animate="visible"
    className="mt-12 sm:mt-16 px-4 sm:px-6 md:px-12 flex flex-col items-center"
   >
    <CardBuild />
    <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
     <Link
      href="/cours"
      className="inline-flex items-center justify-center gap-2 px-8 sm:px-12 py-3 sm:py-4 rounded-xl bg-[#3EAEFF] text-white font-semibold text-sm sm:text-base hover:bg-blue-600 transition-all"
      aria-label="Voir tous les cours"
     >
      Voir Tous Les Cours <FaArrowRight size={16} />
     </Link>
     <Link
      href="/learning-path"
      className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-semibold text-white underline hover:text-yellow-400 transition-all"
      aria-label="Créer un chemin d'apprentissage"
     >
      Créer ton Chemin ✔
     </Link>
    </div>
   </motion.section>

   <motion.section
    variants={sectionVariants}
    initial="hidden"
    animate="visible"
    className="mt-12 sm:mt-16 px-4 sm:px-6 md:px-12 bg-[#020013] py-12 sm:py-16"
   >
    <CardTestimonials />
    <Quotes />
   </motion.section>

   <motion.section
    variants={sectionVariants}
    initial="hidden"
    animate="visible"
    className="mt-12 sm:mt-16 px-4 sm:px-6 md:px-12 flex flex-col gap-8 sm:gap-12"
   >
    <Group />
    <SubscriptionCard />
   </motion.section>

   <motion.section
    variants={sectionVariants}
    initial="hidden"
    animate="visible"
    className="mt-12 sm:mt-16 px-4 sm:px-6 md:px-12 flex flex-col gap-8 sm:gap-12"
   >
    <MeetMe />
    <Questions />
    <AnotherQuestion />
   </motion.section>

   <Footer />
  </div>
 );
}