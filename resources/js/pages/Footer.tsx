// components/Footer.jsx
import { Link } from "@inertiajs/react";
import { FaTwitter, FaGithub, FaYoutube, FaLinkedin } from "react-icons/fa";

export default function Footer() {
 return (
  <footer className="bg-[#0f172a] text-gray-300 py-12 px-6">
   <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

    {/* Brand / Logo */}
    <div>
     <Link href="/" className="text-2xl font-bold text-white">
      Logo
     </Link>
     <p className="mt-4 text-sm leading-relaxed text-gray-400">
      Plateforme de formation moderne pour apprendre le développement web
      et le design avec des parcours guidés et des projets réels.
     </p>
    </div>

   
    <div>
     <h4 className="text-white font-semibold mb-4">Navigation</h4>
     <ul className="space-y-2 text-sm">
      <li><Link href="/cours" className="hover:text-indigo-400">Tous les cours</Link></li>
      <li><Link href="/parcours" className="hover:text-indigo-400">Parcours</Link></li>
      <li><Link href="/connexion" className="hover:text-indigo-400">Connexion</Link></li>
      <li><Link href="/inscription" className="hover:text-indigo-400">Inscription</Link></li>
     </ul>
    </div>

    {/* Ressources */}
    <div>
     <h4 className="text-white font-semibold mb-4">Ressources</h4>
     <ul className="space-y-2 text-sm">
      <li><a href="#" className="hover:text-indigo-400">Documentation</a></li>
      <li><a href="#" className="hover:text-indigo-400">Support</a></li>
      <li><a href="#" className="hover:text-indigo-400">Blog</a></li>
      <li><a href="#" className="hover:text-indigo-400">FAQ</a></li>
     </ul>
    </div>

    {/* Réseaux sociaux */}
    <div>
     <h4 className="text-white font-semibold mb-4">Suivez-nous</h4>
     <div className="flex gap-4 text-xl">
      <a href="#" className="hover:text-indigo-400"><FaTwitter /></a>
      <a href="#" className="hover:text-indigo-400"><FaGithub /></a>
      <a href="#" className="hover:text-indigo-400"><FaYoutube /></a>
      <a href="#" className="hover:text-indigo-400"><FaLinkedin /></a>
     </div>
    </div>
   </div>

   <div className="border-t border-gray-700 mt-12 pt-6 text-sm text-center text-gray-500">
    © {new Date().getFullYear()} EscaLearn. Tous droits réservés.
   </div>
  </footer>
 );
}
