import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { GiBrain, GiBookshelf, GiLaptop, GiRocket, GiWorld } from "react-icons/gi";

const icones = [
 GiBrain, GiBookshelf, GiLaptop, GiRocket, GiWorld
];

export default function TarifAvecCartesFr() {
 const ref = useRef<HTMLDivElement | null>(null);
 const controls = useAnimation();
 const [enVue, setEnVue] = useState(false);

 useEffect(() => {
  const obs = new IntersectionObserver(
   ([entry]) => setEnVue(entry.isIntersecting),
   { threshold: 0.4 }
  );
  if (ref.current) obs.observe(ref.current);
  return () => ref.current && obs.unobserve(ref.current);
 }, []);

 useEffect(() => {
  if (enVue) {
   controls.start((i) => ({
    x: `${(i - 2) * 80}px`,
    rotate: (i - 2) * 12,
    opacity: 1,
    transition: { delay: i * 0.1, type: "spring", stiffness: 100 },
   }));
  }
 }, [enVue]);

 return (
  <div className="bg-[#020014] z-12 text-white py-20 px-4 flex flex-col items-center">
   {/* Cartes animées */}
   <div ref={ref} className="relative flex justify-center items-center h-96">
    {icones.map((Icon, i) => (
     <motion.div
      key={i}
      custom={i}
      initial={{ x: 0, rotate: 0, opacity: 0 }}
      animate={controls}
      className="absolute flex items-center justify-center w-28 h-28 bg-[#111] rounded-xl shadow-xl border border-yellow-500"
     >
      <Icon className="text-yellow-400 w-16 h-16" />
     </motion.div>
    ))}
   </div>

   {/* Carte tarifaire */}
   <div className="relative -mt-30 z-11 w-full max-w-lg bg-[#0D0D26] border border-yellow-500 rounded-xl p-8 shadow-xl text-center">
    <h3 className="text-5xl font-bold text-white">
     25.000FCFA <span className="text-xl font-normal text-gray-400">/mois</span>
     <span className="line-through text-gray-500 text-xl ml-3">50.000FCFA</span>
    </h3>

    <div className="flex justify-center gap-4 mt-6 text-sm">
     <button className="bg-white text-black rounded-full px-5 py-1">Forfait Mensuel</button>
     <button className="text-white border border-white rounded-full px-5 py-1">Forfait Annuel</button>
    </div>

    <p className="text-green-400 text-xs mt-4">
     ✅ Engage-toi sur un an et économise 2 mois !
    </p>

    <p className="text-sm text-gray-400 mt-2">
     🌍 Réduction régionale de 74 % appliquée
    </p>

    <button className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl font-semibold transition">
     S’abonner à EscaLearn
    </button>
   </div>
  </div>
 );
}
