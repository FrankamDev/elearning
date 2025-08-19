import { Link } from "@inertiajs/react";
import { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';

import NavBar from '@/components/NavBar';
import Footer from './Footer';
import FeaturedCourses from "@/components/FeaturedCourses";
import Compagnies from "@/components/Compagnies";
import CardBuild from "@/components/CardBuild";
import Quotes from "@/components/Quotes";
import Group from "@/components/Group";
import MeetMe from "@/components/MeetMe";
import Questions from "./Questions";
import AnotherQuestion from '@/components/AnotherQuestion';
import CardTestimonials from '@/pages/CardTestimonials';
import SubscriptionCard from '@/components/SubscriptionCard';

export default function Home({ flash }) {
 useEffect(() => {
  if (flash.message.success) toast.success(flash.message.success);
  if (flash.message.error) toast.error(flash.message.error);
 }, [flash]);

 return (
  <div className="bg-[#030215] text-white">
   <NavBar />
   <ToastContainer />

   {/* Hero Section */}
   <section className="flex flex-col items-center justify-center text-center min-h-screen px-6 md:px-12">
    <h1
     style={{ fontFamily: "'Playfair Display', serif" }}
     className="text-3xl md:text-5xl font-extrabold leading-tight max-w-3xl">
     Partez de <br />
     <span
      style={{ fontFamily: "'Playfair Display', serif" }}
      className="text-yellow-300">Je veux apprendre </span>à{' '}
     <span
      style={{ fontFamily: "'Playfair Display', serif" }}
      className="text-green-400">
      j'ai réalisé ça <i className="text-white">!!</i>
     </span>
    </h1>
    <p className="mt-6 text-gray-300 text-base md:text-lg max-w-2xl">
     Arrêtez de consommer. Commencez à créer. Réalisez des projets réels qui feront progresser votre niveau.
    </p>
   </section>

   {/* Featured Courses */}
   <section className="">
    <FeaturedCourses />
   </section>

   {/* Companies Section */}
   <section className="mt-12 text-center px-6">
    <p className="text-xl md:text-2xl">
     Ils ont commencés comme <span className="font-serif font-bold text-cyan-200 text-2xl">Toi</span>, actuellement ils travaillent ici 👇👇
    </p>
    <div className="mt-6">
     <Compagnies />
    </div>
   </section>

   {/* Build Section */}
   <section className="mt-16 px-6 flex flex-col items-center">
    <CardBuild />
    <div className="mt-8 flex flex-col items-center gap-4">
     <Link
      href="/cours"
      className="rounded-lg bg-[#3EAEFF] px-12 py-4 text-center font-bold text-lg hover:bg-blue-500 transition-colors"
     >
      Voir Tous Les Cours 🖤
     </Link>
     <Link
      href="/"
      className="text-sm md:text-base font-bold underline hover:text-yellow-400 transition-colors"
     >
      Ne sais pas où commencer? Crée ton chemin d'apprentissage ✔
     </Link>
    </div>
   </section>


   <section className="mt-16 px-6 md:px-12">
    <CardTestimonials />
    <Quotes />
   </section>


   <section className="mt-16 px-6 md:px-12 flex flex-col gap-12">
    <Group />
    <SubscriptionCard />
   </section>

   {/* Meet Me & Questions */}
   <section className="mt-16 px-6 md:px-12 flex flex-col gap-12">
    <MeetMe />
    <Questions />
    <AnotherQuestion />
   </section>

   <Footer />
  </div>
 );
}
