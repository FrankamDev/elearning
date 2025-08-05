import { useState } from "react";
import { FaBell, FaDiscord, FaSignOutAlt } from "react-icons/fa";
import { HiChevronDown } from "react-icons/hi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FiHome, FiSettings, FiMessageSquare } from "react-icons/fi";
import { Link, usePage } from "@inertiajs/react";


export default function Navbar() {
 const { auth } = usePage().props;
 const user = auth.user;
 const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
 const [isDropdownOpen, setIsDropdownOpen] = useState(false);

 return (
  <>
   <nav className="fixed top-0 left-0 w-full py-4 bg-[#020013]/90 backdrop-blur-md text-white shadow-lg z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">

     <div className="flex items-center space-x-2">

      <Link href="/" className="text-4xl text-cyan-400 font-light">
       <img src="/vraiLogo.svg" alt="logo" className="w-full h-12" />
      </Link>
     </div>


     <div className="hidden md:flex items-center space-x-6">
      {user ? (
       <>

        <Link href="/categories" className="hover:text-cyan-400 transition-colors duration-200">
         Tous les Cours
        </Link>
        <Link href="/cours" className="hover:text-cyan-400 transition-colors duration-200">
         Parcours
        </Link>
        <FaBell className="cursor-pointer hover:text-cyan-400 transition-colors duration-200" />

        <Link href="/admin" className="hover:text-cyan-400 transition-colors duration-200"><strong className="text-center">Espace <br /></strong>Developpeur</Link>
        <div className="relative">
         <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center space-x-1 focus:outline-none"
         >
          <img
           src={user.image ?? "./vraiLogo.svg"}
           alt="avatar"
           className="w-8 h-8 rounded-full object-cover"
          />
          <HiChevronDown
           className={`transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
          />
         </button>

         {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-56 bg-[#0b0b14]/95 backdrop-blur-md border border-gray-800 rounded-lg shadow-xl z-50">
           <div className="px-4 py-3 border-b border-gray-700">
            <div className="font-semibold text-white">{user.name}</div>
            <div className="text-xs bg-yellow-700 text-white px-2 py-0.5 rounded inline-block mt-1">
             Bienvenue
            </div>
           </div>
           <ul className="py-2 text-sm space-y-2 px-4">
            <li>
             <Link
              href="/dashboard"
              className="flex items-center space-x-2 hover:text-cyan-400 transition-colors duration-200"
             >
              <FiHome /> <span>Tableau de bord</span>
             </Link>
            </li>
            <li>
             <Link
              href='/admin'
              className="flex items-center space-x-2 hover:text-cyan-400 transition-colors duration-200"
             >
              <FiHome /> <span>Super Admin</span>
             </Link>
            </li>
            <li className="my-4">
             <Link
              href="/discord"
              className="flex items-center space-x-2 hover:text-cyan-400 transition-colors duration-200"
             >
              <FaDiscord /> <span>Discord</span>
             </Link>
            </li>
            <li className="my-4">
             <Link
              href="/settings"
              className="flex items-center space-x-2 hover:text-cyan-400 transition-colors duration-200"
             >
              <FiSettings /> <span>Paramètres</span>
             </Link>
            </li>
            <li>
             <Link
              href="/feedback"
              className="flex items-center space-x-2 hover:text-cyan-400 transition-colors duration-200"
             >
              <FiMessageSquare /> <span>Retour</span>
             </Link>
            </li>
           </ul>
           <div className="border-t border-gray-700 px-4 py-2">
            <Link
             href="/logout"
             method="post"
             as="button"
             className="flex items-center space-x-2 text-red-400 hover:text-red-500 w-full transition-colors duration-200"
            >
             <FaSignOutAlt /> <span>Déconnexion</span>
            </Link>
           </div>
          </div>
         )}
        </div>
       </>
      ) : (
       <div className="flex items-center space-x-6">
         <Link href="/categories" className="hover:text-cyan-400 transition-colors duration-200">
          Tous les cours
         </Link>
         <Link href="/cours" className="hover:text-cyan-400 transition-colors duration-200">
          Parcours
         </Link>

         <Link
          href="/login"
         className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
         Connexion
        </Link>
       </div>
      )}
     </div>


     <div className="md:hidden">
      <button
       onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
       className="focus:outline-none text-white hover:text-cyan-400 transition-colors duration-200"
      >
       {isMobileMenuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </button>
     </div>
    </div>


    {isMobileMenuOpen && (
     <div className="md:hidden bg-[#0b0b14]/95 backdrop-blur-md px-4 pb-4 space-y-4 text-sm border-t border-gray-800">
      {user ? (
       <>
        <Link href="/categories" className="block hover:text-cyan-400 transition-colors duration-200">
         Tous les Cours
        </Link>
        <Link href="/cours" className="block hover:text-cyan-400 transition-colors duration-200">
         Parcours
        </Link>
        <div className="flex items-center space-x-2">
         <FaBell className="hover:text-cyan-400 transition-colors duration-200" />
         <span>Notifications</span>
        </div>
        <div className="flex items-center space-x-2">
         <img
          src={user.image ?? "/vraiLogo.svg"}
          alt="avatar"
          className="w-8 h-8 rounded-full object-cover"
         />
         <span>{user.name}</span>
        </div>
        <Link
         href="/dashboard"
         className="block hover:text-cyan-400 transition-colors duration-200"
        >
         Dashboard
        </Link>
        <Link
         href="/discord"
         className="block hover:text-cyan-400 transition-colors duration-200"
        >
         Discord
        </Link>
        <Link
         href="/settings"
         className="block hover:text-cyan-400 transition-colors duration-200"
        >
         Paramètres
        </Link>
        <Link
         href="/feedback"
         className="block hover:text-cyan-400 transition-colors duration-200"
        >
         Retour
        </Link>
        <Link
         href="/logout"
         method="post"
         as="button"
         className="block text-red-400 hover:text-red-500 transition-colors duration-200"
        >
         Déconnexion
        </Link>
       </>
      ) : (
        <>
         <Link href="/categories" className="block hover:text-cyan-400 transition-colors duration-200">
          Tous les Cours
         </Link>
         <Link href="/cours" className="block hover:text-cyan-400 transition-colors duration-200">
          Parcours
         </Link>
         <Link
          href="/login"
          className="block bg-blue-600 text-white px-4 py-2 rounded-lg text-center hover:bg-blue-700 transition-colors duration-200"
         >
          Connexion
         </Link>
        </>
      )}
     </div>
    )}
   </nav>
   <div className="h-16"></div>
   {/* <AssistantIA /> */}
  </>
 );
}