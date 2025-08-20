import { FaGitAlt, FaDatabase, FaNodeJs } from "react-icons/fa";
import { GiFlowerEmblem } from "react-icons/gi";
import {
 SiJavascript,
 SiPhp,
 SiReact,
 // SiVueDotJs,
 SiLaravel,
 SiTailwindcss,
} from "react-icons/si";
// import { GiFlowerEmblem } from "react-icons/gi";

const formations = {
 frontend: [
  {
   icon: <SiJavascript className="text-yellow-400 text-5xl" />,
   title: "Apprendre le JavaScript",
   desc: "Langage pour rendre les pages web interactives, utilisable aussi côté serveur avec NodeJS et Deno.",
  },
  {
   icon: <FaGitAlt className="text-orange-500 text-5xl" />,
   title: "Comprendre Git",
   desc: "Outil de versioning permettant de sauvegarder, suivre et revenir sur les changements d’un projet.",
  },
  {
   icon: <SiTailwindcss className="text-cyan-400 text-5xl" />,
   title: "Maîtriser Tailwind CSS",
   desc: "Framework CSS moderne basé sur les classes utilitaires pour concevoir des interfaces rapidement.",
  },
  {
   icon: <SiReact className="text-sky-400 text-5xl" />,
   title: "Se spécialiser en React",
   desc: "Bibliothèque JavaScript pour construire des interfaces dynamiques, réactives et modernes.",
  },
 ],
 backend: [
  {
   icon: <SiPhp className="text-blue-400 text-5xl" />,
   title: "Apprendre le PHP",
   desc: "Langage backend rapide et flexible, très utilisé pour développer des sites et applications web.",
  },
  {
   icon: <FaDatabase className="text-blue-500 text-5xl" />,
   title: "Apprendre et maîtriser SQL",
   desc: "Langage permettant de manipuler et interroger les bases de données relationnelles.",
  },
  {
   icon: <SiLaravel className="text-red-500 text-5xl" />,
   title: "Découvrir Laravel",
   desc: "Framework PHP puissant qui simplifie le développement backend avec une structure claire et moderne.",
  },
  {
   icon: <FaNodeJs className="text-green-500 text-5xl" />,
   title: "Apprendre NodeJS",
   desc: "Environnement JavaScript côté serveur, rapide et efficace, idéal pour les applications temps réel.",
  },
 ],
};

const Roadmap = () => {
 return (
  <div className="bg-[#0f1033] text-white min-h-screen py-16 px-6">
   <div className="max-w-6xl mx-auto">
    {/* TITRES */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
     <h2 className="text-3xl font-extrabold text-center relative">
      FRONTEND
      <GiFlowerEmblem className="absolute -top-6 -left-6 text-pink-400 text-3xl animate-pulse" />
     </h2>
     <h2 className="text-3xl font-extrabold text-center relative">
      BACKEND
      <GiFlowerEmblem className="absolute -top-6 -right-6 text-yellow-400 text-3xl animate-pulse" />
     </h2>
    </div>

    {/* ORGANIGRAMME */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-12 relative">
     {/* LIGNE CENTRALE */}
     <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-400 via-purple-500 to-blue-400 rounded-full hidden md:block"></div>

     {/* FRONTEND */}
     <div className="flex flex-col gap-20 relative">
      {formations.frontend.map((f, idx) => (
       <div
        key={idx}
        className={`bg-[#1a1b3c] p-6 rounded-xl shadow-lg hover:shadow-xl transition relative ${idx % 2 === 0 ? "translate-x-6" : "-translate-x-6"
         }`}
       >
        {/* trait de liaison */}
        <div className="absolute -right-10 top-1/2 w-10 h-1 bg-gradient-to-r from-pink-400 to-purple-500 hidden md:block"></div>
        <div className="flex items-center gap-4 mb-4">
         {f.icon}
         <h3 className="text-xl font-semibold">{f.title}</h3>
        </div>
        <p className="text-sm text-gray-300 mb-4">{f.desc}</p>
        <a
         href="#"
         className="text-blue-400 font-semibold hover:underline"
        >
         Voir la formation →
        </a>
       </div>
      ))}
     </div>

     {/* BACKEND */}
     <div className="flex flex-col gap-20 relative">
      {formations.backend.map((f, idx) => (
       <div
        key={idx}
        className={`bg-[#1a1b3c] p-6 rounded-xl shadow-lg hover:shadow-xl transition relative ${idx % 2 === 0 ? "-translate-x-6" : "translate-x-6"
         }`}
       >
        {/* trait de liaison */}
        <div className="absolute -left-10 top-1/2 w-10 h-1 bg-gradient-to-r from-blue-400 to-cyan-500 hidden md:block"></div>
        <div className="flex items-center gap-4 mb-4">
         {f.icon}
         <h3 className="text-xl font-semibold">{f.title}</h3>
        </div>
        <p className="text-sm text-gray-300 mb-4">{f.desc}</p>
        <a
         href="#"
         className="text-blue-400 font-semibold hover:underline"
        >
         Voir la formation →
        </a>
       </div>
      ))}
     </div>
    </div>
   </div>
  </div>
 );
};

export default Roadmap;
