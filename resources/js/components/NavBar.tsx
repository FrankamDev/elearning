import { Link } from "@inertiajs/react";


const NavBar = () => {
 return (
  <nav className="w-full flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">

   <Link href="/" className="text-2xl font-bold text-white">
    <img src="./vraiLogo.svg" alt="logo" className="w-20 h-20 mx-auto" />
   </Link>

   {/* Menu */}
   <ul className="flex gap-6 items-center text-sm md:text-base">
    <li>
     <Link
      href="/courses"
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
      href="/login"
      className="bg-[#38AAFF] px-4 py-2 rounded-sm hover:bg-indigo-600 transition"
     >
      Connexion
     </Link>
    </li>
   </ul>
  </nav>
 )
}
export default NavBar;