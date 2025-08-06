
import { Link } from "@inertiajs/react";
import Footer from "./Footer";
import FeaturedCourses from "@/components/FeaturedCourses";
import Compagnies from "@/components/Compagnies";
import CardBuild from "@/components/CardBuild";
import Quotes from "@/components/Quotes";
import Group from "@/components/Group";
import MeetMe from "@/components/MeetMe";
import Questions from "./Questions";
import { ToastContainer, toast } from 'react-toastify';
import CardTestimonials from '@/pages/CardTestimonials';
import NavBar from '@/components/NavBar';
import SubscriptionCard from '@/components/SubscriptionCard';
import AnotherQuestion from '@/components/AnotherQuestion';
import { useEffect } from "react";

export default function Home({ flash }) {
 useEffect(() => {
  if (flash.message.success) {
   toast.success(flash.message.success);
  }
  if (flash.message.error) {
   toast.error(flash.message.error);
  }
 }, [flash]);
 return (
  <div className="bg-amber-400">

   <div className="min-h-screen bg-[#030215] text-white">
    <NavBar />

    <ToastContainer />
    <div className="mx-auto my-12 max-w-3xl px-4 text-center">
     <h1 className="text-3xl leading-tight font-extrabold text-white md:text-5xl">
      Partez de <br />
      <span className="text-yellow-300">Je veux apprendre </span>à{' '}
      <span className="text-green-400">
       j'ai réalisé ça <i className="text-white">!!</i>
      </span>
     </h1>
     <p className="mt-6 text-base text-gray-300 md:text-lg">
      Arrêtez de consommer. Commencez à créer. Réalisez des projets réels qui feront progresser votre niveau.
     </p>
    </div>

    <FeaturedCourses />

    <p className="text-center text-xl">
     Ils ont commencés comme <span className="font-serif text-2xl font-bold text-cyan-200">Toi</span>. actuellement ils travaillent ici{' '}
     <span className="font-serif text-2xl">👇👇</span>
    </p>

    <Compagnies />
    <div className="flex flex-col items-center justify-center">
     {/*
     <h2>Arretez de regarder. Commencer à créer/Construire.</h2>
     <p>Créez des projets réels qui augmenteront votre niveau.</p> */}
    </div>
    <CardBuild />
    <div className="flex flex-col items-center justify-center py-8">
     <Link href="/cours" className="rounded-sm bg-[#3EAEFF] p-4 px-44 text-center font-bold">
      Voir Tous Les Cours🖤
     </Link>
     <Link href="/" className="mt-4 text-[1.1rem] font-bold underline">
      Ne sais pas où commencer? cree ton chemin d'apprentissage✔
     </Link>
    </div>
    <CardTestimonials />
    <Quotes />
    <Group />
    <SubscriptionCard />
    <MeetMe />
    <Questions />
    <AnotherQuestion />
    {/* <Contact /> */}
   </div>
   <Footer />
  </div>
 );
}
