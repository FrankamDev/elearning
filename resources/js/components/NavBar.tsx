import { Link } from '@inertiajs/react';


const NavBar = () => {

 return (
     <>
         <nav className="flex w-full max-w-7xl mt-4 justify-between px-36">
             <Link href="/" className="text-2xl font-bold text-white">
                 <img src="./vraiLogo.svg" alt="logo" className="mx-auto h-10 w-20" />
             </Link>

             {/* Menu */}
             <ul className="flex items-center gap-2 text-sm md:text-base">
                 <li className="text-[14px]">
                     <Link href="/courses" className="transition duration-200 hover:text-indigo-400">
                         Tous les cours
                     </Link>
                 </li>
                 <li className="font-arial mx-6 text-[14px]">
                     <Link href="/parcours" className="transition duration-200 hover:text-indigo-400">
                         Parcours
                     </Link>
                 </li>
                 <li>
                     <Link href="/login" className="rounded-sm bg-[#38AAFF] px-4 py-2 transition hover:bg-indigo-600">
                         Connexion
                     </Link>
                 </li>
             </ul>
         </nav>
     </>
 );

}
export default NavBar;