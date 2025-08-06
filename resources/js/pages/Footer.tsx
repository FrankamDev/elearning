import { Link } from '@inertiajs/react';
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaXTwitter, FaYoutube } from 'react-icons/fa6';

export default function Footer() {
    return (
     <footer className="bg-[#090c1d]  px-6 py-4 text-white">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">

                <div className="text-sm text-gray-400">© Copyright {new Date().getFullYear()} EsCaLearn Pro</div>
                <div className="flex items-center gap-5 text-xl text-gray-300">
                    <Link href="#" className="transition hover:text-white">
                        <FaInstagram />
                    </Link>
                    <Link href="#" className="transition hover:text-white">
                        <FaXTwitter />
                    </Link>
                    <Link href="#" className="transition hover:text-white">
                        <FaEnvelope />
                    </Link>
                    <Link href="#" className="transition hover:text-white">
                        <FaLinkedin />
                    </Link>
                    <Link href="#" className="transition hover:text-white">
                        <FaGithub />
                    </Link>
                    <Link href="#" className="transition hover:text-white">
                        <FaYoutube />
                    </Link>
                </div>


                <div className="flex items-center gap-6 text-sm text-gray-400">
                    <Link href="#" className="transition hover:text-white">
                        Blog
                    </Link>
                    <Link href="#" className="transition hover:text-white">
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
