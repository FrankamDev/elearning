import { FaBrain, FaRoute, FaBriefcase, FaComments } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    title: "Comprendre le Pourquoi, pas seulement le Comment",
    icon: <FaBrain className="text-green-400 text-4xl group-hover:scale-110 transition-transform drop-shadow-glow" />,
    glow: "shadow-[0_0_20px_#4ade80]",
  },
  {
    title: "Feuille de Route Full Stack dès le Premier Jour",
    icon: <FaRoute className="text-blue-400 text-4xl group-hover:scale-110 transition-transform drop-shadow-glow" />,
    glow: "shadow-[0_0_20px_#60a5fa]",
  },
  {
    title: "Retour d'Experts Développeurs",
    icon: <FaComments className="text-purple-400 text-4xl group-hover:scale-110 transition-transform drop-shadow-glow" />,
    glow: "shadow-[0_0_20px_#c084fc]",
  },
  {
    title: "Projets Portfolio qui T’embauchent",
    icon: <FaBriefcase className="text-pink-400 text-4xl group-hover:scale-110 transition-transform drop-shadow-glow" />,
    glow: "shadow-[0_0_20px_#f472b6]",
  },
];

export default function ProCircleCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-6 py-12 text-white max-w-7xl mx-auto">

      {/* Colonne gauche */}
      <div className="flex flex-col gap-6">
        {features.slice(0, 2).map((f, i) => (
          <div
            key={i}
            className={`bg-[#0f172a] rounded-2xl p-6 text-center group transition-transform border border-slate-700 hover:scale-[1.03] cursor-pointer ${f.glow}`}
          >
            <div className="mb-4">{f.icon}</div>
            <h3 className="font-semibold leading-snug text-lg">{f.title}</h3>
          </div>
        ))}
      </div>

      {/* Carte centrale animée */}
      <motion.div
        initial={{ rotateY: 180, opacity: 0 }}
        whileInView={{ rotateY: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-gradient-to-b from-[#0f172a] to-[#1e293b] border border-slate-700 rounded-2xl p-10 text-center flex flex-col items-center justify-center shadow-xl relative overflow-hidden animate-pulse-slow"
      >
        <motion.img
          src="/jsmastery-logo.png"
          alt="Logo"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-16 mb-4 drop-shadow-glow"
        />
        <h2 className="text-2xl font-bold mb-2">Cercle Pro JSM</h2>
        <p className="text-sm text-gray-300 max-w-xs">
          Accès complet à tous les cours, parcours pro, défis pratiques, et tout ce qu’il te faut pour devenir un développeur de haut niveau.
        </p>
        <div className="absolute bottom-3 animate-bounce text-blue-500 text-xl">↓</div>
      </motion.div>

      {/* Colonne droite */}
      <div className="flex flex-col gap-6">
        {features.slice(2).map((f, i) => (
          <div
            key={i}
            className={`bg-[#0f172a] rounded-2xl p-6 text-center group transition-transform border border-slate-700 hover:scale-[1.03] cursor-pointer ${f.glow}`}
          >
            <div className="mb-4">{f.icon}</div>
            <h3 className="font-semibold leading-snug text-lg">{f.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
