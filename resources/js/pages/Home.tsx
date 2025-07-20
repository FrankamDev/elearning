
import { Link } from "@inertiajs/react";
import Footer from "./Footer";
import FeaturedCourses from "@/components/FeaturedCourses";
import Compagnies from "@/components/Compagnies";
import CardBuild from "@/components/CardBuild";
import Quotes from "@/components/Quotes";
import Group from "@/components/Group";
import MeetMe from "@/components/MeetMe";


export default function Home() {
 return (
  <>
   <div className="min-h-screen bg-[#020012] text-white">
    <nav className="w-full flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">

     <Link href="/" className="text-2xl font-bold text-white hover:text-indigo-400 transition">
      <span className="text-blue-300">E</span>sca<span className="text-blue-300">L</span>earn
     </Link>

     {/* Menu */}
     <ul className="flex gap-6 items-center text-sm md:text-base">
      <li>
       <Link
        href="/cours"
        className="hover:text-indigo-400 transition duration-200"
       >
        Tous les cours
       </Link>
      </li>
      <li className="mx-6 font-arial">
       <Link
        href="/parcours"
        className="hover:text-indigo-400 transition duration-200"
       >
        Parcours
       </Link>
      </li>
      <li>
       <Link
        href="/connexion"
        className="bg-[#38AAFF] px-4 py-2 rounded-sm hover:bg-indigo-600 transition"
       >
        Connexion
       </Link>
      </li>
     </ul>
    </nav>

    <div>
     <h1 className="text-center font-serif md:text-4xl my-8 font-bold text-white">
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

     <Link href="/" className="bg-[#3EAEFF] p-4 px-44 text-center font-bold rounded-sm">Voir Tous Les Cours🖤</Link>
     <Link href="/" className="underline font-bold text-[1.1rem] mt-4">Ne sais pas où  commencer? cree ton chemin d'apprentissage✔</Link>
    </div>
    <Quotes />
    <Group />
    <MeetMe/>
   </div>
   <Footer />
  </>
 );
}
