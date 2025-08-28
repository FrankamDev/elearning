// import { useState, useEffect, useRef } from "react";
// import { FaBell, FaDiscord, FaSignOutAlt } from "react-icons/fa";
// import { HiChevronDown } from "react-icons/hi";
// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// import { FiHome, FiSettings, FiMessageSquare } from "react-icons/fi";
// import { Link, usePage } from "@inertiajs/react";

// export default function Navbar() {
//  const { auth } = usePage().props;
//  const user = auth.user;
//  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//  const dropdownRef = useRef(null);

//  const profilePhotoSrc = user?.profile_photo
//   ? `/storage/${user.profile_photo}`
//   : "/vraiLogo.svg";

//  // Fermer dropdown si clic en dehors
//  useEffect(() => {
//   function handleClickOutside(e) {
//    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//     setIsDropdownOpen(false);
//    }
//   }
//   if (isDropdownOpen) {
//    document.addEventListener("mousedown", handleClickOutside);
//   }
//   return () => {
//    document.removeEventListener("mousedown", handleClickOutside);
//   };
//  }, [isDropdownOpen]);

//  return (
//   <>
//    <nav className="fixed top-0 left-0 w-full py-4 bg-[#020013]/90 backdrop-blur-md text-white shadow-lg z-50">
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
//      {/* Logo */}
//      <div className="flex items-center space-x-2">
//       <Link href="/" className="text-4xl text-cyan-400 font-light">
//        <img src="/vraiLogo.svg" alt="logo" className="h-12 w-auto" />
//       </Link>
//      </div>

//      {/* Desktop Menu */}
//      <div className="hidden md:flex items-center space-x-6">
//       {user ? (
//        <>
//         <Link
//          href="/categories"
//          className="hover:text-cyan-400 transition-colors duration-200"
//         >
//          Tous les Cours
//         </Link>
//         <Link
//          href="/parcours"
//          className="hover:text-cyan-400 transition-colors duration-200"
//         >
//          Parcours..
//         </Link>


//         <FaBell className="cursor-pointer hover:text-cyan-400 transition-colors duration-200" />

//         {/* Dropdown */}
//         <div className="relative" ref={dropdownRef}>
//          <button
//           onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//           className="flex items-center space-x-1 focus:outline-none"
//          >
//           <img
//            src={profilePhotoSrc}
//            alt="Photo de profil"
//            className="w-8 h-8 rounded-full object-cover"
//           />
//           <HiChevronDown
//            className={`transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""
//             }`}
//           />
//          </button>

//          <div
//           className={`absolute right-0 mt-2 w-56 bg-[#0b0b14]/95 backdrop-blur-md border border-gray-800 rounded-lg shadow-xl z-50 transition-all duration-200 ease-in-out origin-top ${isDropdownOpen
//            ? "opacity-100 scale-100"
//            : "opacity-0 scale-95 pointer-events-none"
//            }`}
//          >
//           <div className="px-4 py-3 border-b border-gray-700">
//            <div className="font-semibold text-white flex">
//             <span>{user.name}</span>
//             <h2>
//              {user && (
//               <span className="text-green-800 px-1/2 rounded-full">
//                👋🏽
//               </span>
//              )}
//             </h2>
//            </div>
//            <div className="text-xs bg-yellow-700 text-white px-2 py-0.5 rounded inline-block mt-1">
//             Bienvenue
//            </div>
//           </div>
//           <ul className="py-2 text-sm space-y-2 px-4">
//            <li>
//             <Link
//              href="/dashboard"
//              className="flex items-center space-x-2 hover:text-cyan-400 transition-colors duration-200"
//             >
//              <FiHome /> <span>Tableau de bord</span>
//             </Link>
//            </li>
//            <li className="my-4">
//             <Link
//              href="/discord"
//              className="flex items-center space-x-2 hover:text-cyan-400 transition-colors duration-200"
//             >
//              <FaDiscord /> <span>Discord</span>
//             </Link>
//            </li>
//            <li className="my-4">
//             <Link
//              href="/settings"
//              className="flex items-center space-x-2 hover:text-cyan-400 transition-colors duration-200"
//             >
//              <FiSettings /> <span>Paramètres</span>
//             </Link>
//            </li>
//            <li>
//             <Link
//              href="/feedback"
//              className="flex items-center space-x-2 hover:text-cyan-400 transition-colors duration-200"
//             >
//              <FiMessageSquare /> <span>Feedback</span>
//             </Link>
//            </li>
//           </ul>
//           <div className="border-t border-gray-700 px-4 py-2">
//            <Link
//             href="/logout"
//             method="post"
//             as="button"
//             className="flex items-center space-x-2 text-red-400 hover:text-red-500 w-full transition-colors duration-200"
//            >
//             <FaSignOutAlt /> <span>Déconnexion</span>
//            </Link>
//           </div>
//          </div>
//         </div>
//        </>
//       ) : (
//        <div className="flex items-center space-x-6">
//          <Link
//           href="/categories"
//           className="hover:text-cyan-400 transition-colors duration-200"
//          >
//           Tous les cours
//          </Link>
//          <Link
//           href="/cours"
//           className="hover:text-cyan-400 transition-colors duration-200"
//          >
//           Parcours
//          </Link>
//          <Link
//           href="/login"
//          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
//         >
//          Connexion
//         </Link>
//        </div>
//       )}
//      </div>

//      {/* Mobile Menu Button */}
//      <div className="md:hidden">
//       <button
//        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//        className="focus:outline-none text-white hover:text-cyan-400 transition-colors duration-200"
//       >
//        {isMobileMenuOpen ? (
//         <AiOutlineClose size={24} />
//        ) : (
//         <AiOutlineMenu size={24} />
//        )}
//       </button>
//      </div>
//     </div>
//    </nav>
//    <div className="h-16"></div>
//   </>
//  );
// }

import { useState, useEffect, useRef } from "react";
import {
 FaBell,
 FaDiscord,
 FaSignOutAlt,
} from "react-icons/fa";
import { HiChevronDown } from "react-icons/hi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FiHome, FiSettings, FiMessageSquare } from "react-icons/fi";
import { Link, usePage } from "@inertiajs/react";

export default function Navbar() {
 const { auth } = usePage().props;
 const user = auth.user;

 const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
 const [isDropdownOpen, setIsDropdownOpen] = useState(false);
 const [hidden, setHidden] = useState(false);
 const [lastScroll, setLastScroll] = useState(0);

 const dropdownRef = useRef(null);

 const profilePhotoSrc = user?.profile_photo
  ? `/storage/${user.profile_photo}`
  : "/vraiLogo.svg";

 const links = [
  { name: "Initiation", href: "/initiation", icon: "😉" },
  { name: "Tous les cours", href: "/categories", icon: "📘" },
  { name: "Parcours", href: "/parcours", icon: "📚" },
  { name: "Formations", href: "/categories", icon: "📖" },
  { name: "Premium", href: "/premium", icon: "★", color: "text-yellow-400" },
  { name: "Blog", href: "/blog", icon: "✍️" },
  { name: "Forum", href: "/forum", icon: "💬" },
 ];


 useEffect(() => {
  const handleScroll = () => {
   const currentScroll = window.scrollY;
   if (currentScroll > lastScroll && currentScroll > 50) {
    setHidden(true);
   } else {
    setHidden(false);
   }
   setLastScroll(currentScroll);
  };
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
 }, [lastScroll]);

 // Fermer dropdown si clic en dehors
 useEffect(() => {
  function handleClickOutside(e) {
   if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
    setIsDropdownOpen(false);
   }
  }
  if (isDropdownOpen) {
   document.addEventListener("mousedown", handleClickOutside);
  }
  return () => document.removeEventListener("mousedown", handleClickOutside);
 }, [isDropdownOpen]);

 return (
  <>
   <nav
    className={`fixed top-0 left-0 w-full bg-[#0E1124]  z-50 transition-transform duration-300 backdrop-blur-md shadow-accent-lg text-white ${hidden ? "-translate-y-full" : "translate-y-0"
     }`}
   >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14">

     <div className="flex items-center space-x-6">
      <Link href="/" className="text-3xl font-semibold text-cyan-400">
       <img src="/vraiLogo.svg" alt="logo" className="h-10 w-auto" />

      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center space-x-4 text-sm">
       {links.map((link) => (
        <Link
         key={link.name}
         href={link.href}
         className={`flex items-center space-x-1 hover:text-cyan-400 transition-colors duration-200 ${link.color || ""}`}
        >
         <span>{link.icon}</span>
         <span>{link.name}</span>
        </Link>
       ))}
      </div>
     </div>


     <div className="flex items-center space-x-3">
      {user && <FaBell className="cursor-pointer hover:text-cyan-400 transition-colors duration-200" />}

      {user && (
       <div className="relative" ref={dropdownRef}>
        <button
         onClick={() => setIsDropdownOpen(!isDropdownOpen)}
         className="flex items-center space-x-1 focus:outline-none"
        >
         <img
          src={profilePhotoSrc}
          alt="Photo de profil"
          className="w-8 h-8 rounded-full object-cover"
         />
         <HiChevronDown
          className={`transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
         />
        </button>

        <div
         className={`absolute right-0 mt-2 w-56 bg-[#1a1f4b]/95  backdrop-blur-md border border-gray-800 rounded-lg shadow-xl z-50 transition-all duration-200 ease-in-out origin-top ${isDropdownOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
         <div className="px-4 py-3 border-b ">
          <div className="font-semibold text-white flex items-center justify-between">
           <span>{user.name}</span>
           <span className="text-green-400">👋🏽</span>
          </div>
          <div className="text-xs bg-yellow-700 text-white px-2 py-0.5 rounded inline-block mt-1">
           Bienvenue
          </div>
         </div>
         <ul className="py-2 text-sm space-y-2 px-4">
          <li>
           <Link href="/dashboard" className="flex items-center space-x-2 hover:text-cyan-400 transition-colors duration-200">
            <FiHome /> <span>Tableau de bord</span>
           </Link>
          </li>
          <li>
           <Link href="/discord" className="flex items-center space-x-2 hover:text-cyan-400 transition-colors duration-200">
            <FaDiscord /> <span>Discord</span>
           </Link>
          </li>
          <li>
           <Link href="/settings" className="flex items-center space-x-2 hover:text-cyan-400 transition-colors duration-200">
            <FiSettings /> <span>Paramètres</span>
           </Link>
          </li>
          <li>
           <Link href="/feedback" className="flex items-center space-x-2 hover:text-cyan-400 transition-colors duration-200">
            <FiMessageSquare /> <span>Feedback</span>
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
       </div>
      )}

      {!user && (
       <Link href="/login" className="bg-blue-600 text-white px-3 py-1.5 rounded-md hover:bg-blue-700 transition-colors duration-200">
        Connexion
       </Link>
      )}

      {/* Mobile Menu Button */}
      <div className="md:hidden">
       <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="focus:outline-none text-white hover:text-cyan-400 transition-colors duration-200"
       >
        {isMobileMenuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
       </button>
      </div>
     </div>
    </div>

    {/* Mobile Menu */}
    {isMobileMenuOpen && (
     <div className="md:hidden bg-[#1a1f4b]/95 backdrop-blur-md px-4 py-4 space-y-2">
      {links.map((link) => (
       <Link key={link.name} href={link.href} className={`block hover:text-cyan-400 transition-colors duration-200 ${link.color || ""}`}>
        {link.icon} {link.name}
       </Link>
      ))}

      {user ? (
       <>
        <Link href="/dashboard" className="block hover:text-cyan-400">Tableau de bord</Link>
        <Link href="/discord" className="block hover:text-cyan-400">Discord</Link>
        <Link href="/settings" className="block hover:text-cyan-400">Paramètres</Link>
        <Link href="/feedback" className="block hover:text-cyan-400">Feedback</Link>
        <Link href="/logout" method="post" as="button" className="block text-red-400 hover:text-red-500">Déconnexion</Link>
       </>
      ) : (
       <Link href="/login" className="block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Connexion</Link>
      )}
     </div>
    )}
   </nav>
   <div className="h-14"></div>
  </>
 );
}
