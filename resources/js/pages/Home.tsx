// resources/js/Pages/Home.jsx (ou Home.tsx si tu utilises TypeScript)
import { Link } from "@inertiajs/react";
import Footer from "./Footer";

export default function Home() {
 return (
  <>
   <div className="min-h-screen bg-[#0f172a] text-white">
    <nav className="w-full flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
     {/* Logo */}
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
      <li>
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
     <h1 className="text-center text-6xl my-22 font-bold text-white">
      Partez de <br /> <span className="text-yellow-300">Je veux apprendre </span> à <span className="text-green-300">j'ai réalisé ça</span>
     </h1>
    </div>
   </div>
   <Footer />
  </>
 );
}
