import { Link } from '@inertiajs/react';

import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaXTwitter, FaYoutube } from 'react-icons/fa6';

export default function Footer() {


 return (
  <footer className="bg-[#090c1d] px-6 py-6 text-white">
   <div className="mx-auto flex max-w-7xl flex-col items-center gap-y-6 md:flex-row md:items-center md:justify-between md:gap-4">

    <div className="text-sm text-gray-400 text-center md:text-left">
     © Copyright {new Date().getFullYear()} EsCaLearn Pro
    </div>

    <div className="flex flex-wrap justify-center gap-5 text-xl text-gray-300">
     <Link href="#" className="transition hover:text-white">
      <FaInstagram />
     </Link>
     <Link href="#" target='_blank' className="transition hover:text-white">
      <FaXTwitter />
     </Link>
     <Link href="#" target='_blank' className="transition hover:text-white">
      <FaEnvelope />
     </Link>
     <Link href="#" target='_blank' className="transition hover:text-white">
      <FaLinkedin />
     </Link>
     <Link href="#" target='_blank' className="transition hover:text-white">
      <FaGithub />
     </Link>
     <Link href="#" target='_blank' className="transition hover:text-white">
      <FaYoutube />
     </Link>
    </div>

    {/* Liens */}
    <div className="flex flex-col items-center gap-3 text-sm text-gray-400 md:flex-row md:gap-6">
     <Link href="#" target='_blank' className="transition hover:text-white">
      Blog
     </Link>
     <Link href="#" target='_blank' className="transition hover:text-white">
      Termes du Service
     </Link>
     <button className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/20">
      🚨 FrankamDev Evolutions
     </button>
    </div>
   </div>

  </footer>
 );
}
