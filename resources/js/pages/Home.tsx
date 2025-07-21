
import { Link } from "@inertiajs/react";
import Footer from "./Footer";
import FeaturedCourses from "@/components/FeaturedCourses";
import Compagnies from "@/components/Compagnies";
import CardBuild from "@/components/CardBuild";
import Quotes from "@/components/Quotes";
import Group from "@/components/Group";
import MeetMe from "@/components/MeetMe";
import Questions from "./Questions";
import Testimonial from '@/components/Testimonial';
import CardTestimonials from '@/pages/CardTestimonials';
import NavBar from "@/components/NavBar";
import Contact from "./Contact";



export default function Home() {
 return (
  <>
   <div className="min-h-screen bg-[#020012] text-white">
    <NavBar />
    <div>
     <h1 className="text-center  md:text-4xl my-8 font-bold text-white">
      Partez de <br /> <span className="text-yellow-300">Je veux apprendre </span> à <span className="text-green-300">j'ai réalisé ça <i className="text-white">!!</i> </span>
     </h1>
     <p className="text-center text-lg">Arretez de consommer. Commencez à creer. creer des projets reels qui augmenterons votre niveau.</p>
    </div>
    <FeaturedCourses />


    <p className="text-center text-xl">Ils ont commencé comme <span className="text-2xl text-cyan-200 font-serif font-bold">Toi</span>. actuellement ils comme ca <span className="font-serif text-2xl">👇👇</span></p>

    <Compagnies />
    <div className="flex flex-col items-center justify-center">

     <h2>Arretez de regarder. Commencer à créer/Construire.</h2>
     <p>Créez des projets réels qui augmenteront votre niveau.</p>
    </div>
    <CardBuild />
    <div className="flex flex-col justify-center items-center py-8">

     <Link href="/courses" className="bg-[#3EAEFF] p-4 px-44 text-center font-bold rounded-sm">Voir Tous Les Cours🖤</Link>
     <Link href="/" className="underline font-bold text-[1.1rem] mt-4">Ne sais pas où  commencer? cree ton chemin d'apprentissage✔</Link>
    </div>
    <CardTestimonials />
    <Quotes />
    <Group />
    <MeetMe />
    <Questions />
    {/* <Contact /> */}
   </div>
   <Footer />
  </>
 );
}
