import { FaBrain, FaRoute, FaBriefcase, FaComments } from "react-icons/fa";
import { motion } from "framer-motion";
import NavBar from '@/components/NavBar';

const features = [
    {
        title: 'Comprendre le Pourquoi, pas seulement le Comment',
        icon: <FaBrain className="drop-shadow-glow text-4xl text-green-400 transition-transform group-hover:scale-110" />,
        glow: 'shadow-[0_0_20px_#4ade80]',
    },
    {
        title: 'Feuille de Route Full Stack dès le Premier Jour',
        icon: <FaRoute className="drop-shadow-glow text-4xl text-blue-400 transition-transform group-hover:scale-110" />,
        glow: 'shadow-[0_0_20px_#60a5fa]',
    },
    {
        title: "Retour d'Experts Développeurs",
        icon: <FaComments className="drop-shadow-glow text-4xl text-purple-400 transition-transform group-hover:scale-110" />,
        glow: 'shadow-[0_0_20px_#c084fc]',
    },
    {
        title: 'Projets Portfolio qui T’embauchent',
        icon: <FaBriefcase className="drop-shadow-glow text-4xl text-pink-400 transition-transform group-hover:scale-110" />,
        glow: 'shadow-[0_0_20px_#f472b6]',
    },
];

export default function Courses() {
    return (
        <>
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 py-12 text-white sm:grid-cols-3 ">
                <NavBar />
       <div className="flex flex-col gap-6">
                    {features.slice(0, 2).map((f, i) => (
                        <div
                            key={i}
                            className={`group cursor-pointer rounded-2xl border border-slate-700 bg-[#0f172a] p-6 text-center transition-transform hover:scale-[1.03] ${f.glow}`}
                        >
                            <div className="mb-4">{f.icon}</div>
                            <h3 className="text-lg leading-snug font-semibold">{f.title}</h3>
                        </div>
                    ))}
                </div>

                <motion.div
                    initial={{ rotateY: 180, opacity: 0 }}
                    whileInView={{ rotateY: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="animate-pulse-slow relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-slate-700 bg-gradient-to-b from-[#0f172a] to-[#1e293b] p-10 text-center shadow-xl"
                >
                    <motion.img
                        src=""
                        alt="Logo"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="drop-shadow-glow mb-4 w-16"
                    />
                    <h2 className="mb-2 text-2xl font-bold">EsCaLearn</h2>
                    <p className="max-w-xs text-sm text-gray-300">
                        Accès complet à tous les cours, parcours pro, défis pratiques, et tout ce qu’il te faut pour devenir un développeur de haut
                        niveau.
                    </p>
                    <div className="absolute bottom-3 animate-bounce text-xl text-blue-500">↓</div>
                </motion.div>

                <div className="flex flex-col gap-6">
                    {features.slice(2).map((f, i) => (
                        <div
                            key={i}
                            className={`group cursor-pointer rounded-2xl border border-slate-700 bg-[#0f172a] p-6 text-center transition-transform hover:scale-[1.03] ${f.glow}`}
                        >
                            <div className="mb-4">{f.icon}</div>
                            <h3 className="text-lg leading-snug font-semibold">{f.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
