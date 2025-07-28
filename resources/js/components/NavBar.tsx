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
  <nav className="bg-gradient-to-r from-[#0b0b14] to-[#05050d] text-white shadow-md w-full z-50">
   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
    {/* Logo */}
    <div className="flex items-center space-x-2">
     <img src="/vraiLogo.svg" alt="logo" className="w-8 h-8" />
     <Link href="/" className="text-4xl text-cyan-400 font-light">.</Link>
    </div>

    {/* Desktop Menu */}
    <div className="hidden md:flex items-center space-x-6">
     {user ? (
      <>
       <Link href="/courses" className="hover:text-gray-300">Tous les Cours</Link>
       <Link href="/parcours" className="hover:text-gray-300">Parcours</Link>
       <FaBell className="cursor-pointer hover:text-gray-300" />

       {/* Dropdown */}
       <div className="relative">
        <button
         onClick={() => setIsDropdownOpen(!isDropdownOpen)}
         className="flex items-center space-x-1 focus:outline-none"
        >
         <img
          src={user.image ?? "/default-avatar.png"}
          alt="avatar"
          className="w-8 h-8 rounded-full object-cover"
         />
         <HiChevronDown className={`transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
        </button>

        {isDropdownOpen && (
         <div className="absolute right-0 mt-2 w-56 bg-[#0b0b14] border border-gray-800 rounded-lg shadow-lg z-50">
          <div className="px-4 py-2 border-b border-gray-700">
           <div className="font-semibold">{user.name}</div>
           <div className="text-xs bg-yellow-700 text-white px-2 py-0.5 rounded inline-block mt-1">
            Bienvenue
           </div>
          </div>
          <ul className="py-2 text-sm space-y-1 px-4">
           <li>
            <Link href="/dashboard" className="flex items-center space-x-2 hover:text-cyan-400">
             <FiHome /> <span>Dashboard</span>
            </Link>
           </li>
           <li>
            <Link href="/discord" className="flex items-center space-x-2 hover:text-cyan-400">
             <FaDiscord /> <span>Discord</span>
            </Link>
           </li>
           <li>
            <Link href="/settings" className="flex items-center space-x-2 hover:text-cyan-400">
             <FiSettings /> <span>Paramètres</span>
            </Link>
           </li>
           <li>
            <Link href="/feedback" className="flex items-center space-x-2 hover:text-cyan-400">
             <FiMessageSquare /> <span>Retour</span>
            </Link>
           </li>
          </ul>
          <div className="border-t border-gray-700 px-4 py-2">
           <Link
            href="/logout"
            method="post"
            as="button"
            className="flex items-center space-x-2 text-red-400 hover:text-red-500 w-full"
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

       <Link
        href="/courses"
        className=" transition"
       >
        Tous les cours
       </Link>
       <Link
        href="/parcours"
        className=" transition"
       >
        Parcours
       </Link>
       <Link
        href="/login"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
       >
        Connexion
       </Link>
      </div>
     )}
    </div>

    {/* Mobile Menu Button */}
    <div className="md:hidden">
     <button
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      className="focus:outline-none"
     >
      {isMobileMenuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
     </button>
    </div>
   </div>

   {/* Mobile Menu */}
   {isMobileMenuOpen && (
    <div className="md:hidden bg-[#0b0b14] px-4 pb-4 space-y-4 text-sm">
     {user ? (
      <>
       <Link href="/courses" className="block hover:text-gray-300">Tous les Cours</Link>
       <Link href="/parcours" className="block hover:text-gray-300">Parcours</Link>
       <div className="flex items-center space-x-2">
        <FaBell />
        <span>Notifications</span>
       </div>
       <div className="flex items-center space-x-2">
        <img
         src={user.image ?? "/default-avatar.png"}
         alt="avatar"
         className="w-8 h-8 rounded-full object-cover"
        />
        <span>{auth.user.name}</span>
       </div>
       <Link
        href="/logout"
        method="post"
        as="button"
        className="block text-red-400 hover:text-red-500"
       >
        Déconnexion
       </Link>
      </>
     ) : (
      <Link
       href="/login"
       className="block bg-blue-600 text-white px-4 py-2 rounded text-center"
      >
       Connexion
      </Link>
     )}
    </div>
   )}
  </nav>
 );
}
