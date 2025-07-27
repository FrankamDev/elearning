import { FaBrain, FaRoute, FaBriefcase, FaComments } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    title: "Learn Why, Not Just What to Code",
    icon: <FaBrain className="text-green-400 text-4xl group-hover:scale-110 transition-transform" />,
    glow: "shadow-green-400",
  },
  {
    title: "Structured Full Stack Roadmap from Day One",
    icon: <FaRoute className="text-blue-400 text-4xl group-hover:scale-110 transition-transform" />,
    glow: "shadow-blue-400",
  },
  {
    title: "Get Feedback from Expert Developers",
    icon: <FaComments className="text-purple-400 text-4xl group-hover:scale-110 transition-transform" />,
    glow: "shadow-purple-400",
  },
  {
    title: "Portfolio Projects That Get You Hired",
    icon: <FaBriefcase className="text-pink-400 text-4xl group-hover:scale-110 transition-transform" />,
    glow: "shadow-pink-400",
  },
];

export default function Member() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-4 py-10 text-white max-w-7xl mx-auto">

      {/* Left column */}
      <div className="flex flex-col gap-6">
        {features.slice(0, 2).map((f, i) => (
          <div
            key={i}
            className={`bg-[#0f172a] rounded-xl p-6 text-center group hover:scale-[1.02] transition-transform border border-slate-800 shadow-lg ${f.glow}`}
          >
            <div className="mb-4">{f.icon}</div>
            <h3 className="font-semibold">{f.title}</h3>
          </div>
        ))}
      </div>

      {/* Center card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-[#0f172a] border border-slate-800 rounded-2xl p-8 text-center flex flex-col items-center justify-center shadow-2xl relative overflow-hidden"
      >
        <img src="/jsmastery-logo.png" alt="Logo" className="w-16 mb-4" />
        <h2 className="text-xl font-bold mb-2">JSM Pro Circle</h2>
        <p className="text-sm text-gray-400">
          Accède à tous les cours, les parcours professionnels, et tout ce dont tu as besoin pour progresser.
        </p>
        <div className="absolute bottom-2 animate-bounce text-blue-500 text-2xl">↓</div>
      </motion.div>

      {/* Right column */}
      <div className="flex flex-col gap-6">
        {features.slice(2).map((f, i) => (
          <div
            key={i}
            className={`bg-[#0f172a] rounded-xl p-6 text-center group hover:scale-[1.02] transition-transform border border-slate-800 shadow-lg ${f.glow}`}
          >
            <div className="mb-4">{f.icon}</div>
            <h3 className="font-semibold">{f.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
