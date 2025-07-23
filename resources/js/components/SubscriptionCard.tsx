import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import {
 GiBrain,
 GiBookshelf,
 GiLaptop,
 GiRocket,
 GiWorld,
} from "react-icons/gi";
import { Switch } from "@headlessui/react";
import { FaCheckCircle } from "react-icons/fa";

const icones = [GiBrain, GiBookshelf, GiLaptop, GiRocket, GiWorld];

export default function TarifAvecCartesFr() {
 const ref = useRef(null);
 const controls = useAnimation();
 const [enVue, setEnVue] = useState(false);
 const [abonnement, setAbonnement] = useState("mois");

 useEffect(() => {
  const observer = new IntersectionObserver(
   ([entry]) => setEnVue(entry.isIntersecting),
   { threshold: 0.4 }
  );
  if (ref.current) observer.observe(ref.current);
  return () => ref.current && observer.unobserve(ref.current);
 }, []);

 useEffect(() => {
  if (enVue) {
   controls.start((i) => ({
    x: `${(i - 2) * 100}px`,
    rotate: (i - 2) * 12,
    opacity: 1,
    transition: { delay: i * 0.15, type: "spring", stiffness: 120 },
   }));
  }
 }, [enVue, controls]);

 const prix = abonnement === "mois" ? "25.000 FCFA" : "250.000 FCFA";
 const ancienPrix = abonnement === "mois" ? "50.000 FCFA" : "500.000 FCFA";
 const avantages = [
  "Accès à tous les cours",
  "Support prioritaire",
  "Mises à jour hebdomadaires",
  "Accès mobile et hors ligne",
  "Certificat de fin de formation",
 ];

 return (
  <div className="bg-[#020014] text-white py-20 px-4 flex flex-col items-center">
   {/* Icônes animées */}
   <div ref={ref} className="relative -my-32 flex justify-center items-center h-96 w-full max-w-6xl overflow-x-hidden">
    {icones.map((Icon, i) => (
     <motion.div
      key={i}
      custom={i}
      initial={{ x: 0, rotate: 0, opacity: 0 }}
      animate={controls}
      className="absolute flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-[#111] rounded-xl shadow-xl border border-yellow-500"
     >
      <Icon className="text-yellow-400 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16" />
     </motion.div>
    ))}
   </div>

   {/* Carte tarifaire complète */}
   <div className="relative mt-16 w-full max-w-3xl bg-[#101329] border border-yellow-500 rounded-2xl p-8 sm:p-12 shadow-[0_0_50px_#facc15] text-center transition-all duration-500">
    <h3 className="text-4xl sm:text-5xl font-extrabold text-white">
     {prix} <span className="text-lg sm:text-xl font-normal text-gray-400">/ {abonnement}</span>
     <span className="line-through text-gray-500 text-base sm:text-xl ml-3">{ancienPrix}</span>
    </h3>

    {/* Switch Mensuel/Annuel */}
    <div className="flex items-center justify-center gap-4 mt-6">
     <span className={`text-sm ${abonnement === "mois" ? "text-yellow-400 font-bold" : "text-gray-400"}`}>Mensuel</span>
     <Switch
      checked={abonnement === "annee"}
      onChange={() => setAbonnement(abonnement === "mois" ? "annee" : "mois")}
      className={`${abonnement === "annee" ? "bg-yellow-500" : "bg-gray-500"} relative inline-flex h-[32px] w-[60px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-300 ease-in-out`}
     >
      <span
       aria-hidden="true"
       className={`${abonnement === "annee" ? "translate-x-7" : "translate-x-1"} pointer-events-none inline-block h-[26px] w-[26px] transform rounded-full bg-white shadow-lg ring-0 transition duration-300 ease-in-out`}
      />
     </Switch>
     <span className={`text-sm ${abonnement === "annee" ? "text-yellow-400 font-bold" : "text-gray-400"}`}>Annuel</span>
    </div>

    <p className="text-green-400 text-sm mt-4">✅ Engage-toi sur un an et économise 2 mois !</p>
    <p className="text-sm text-gray-400 mt-2">🌍 Réduction régionale de 74 % appliquée</p>


    <ul className="mt-8 grid sm:grid-cols-2 gap-4 text-left">
     {avantages.map((item, index) => (
      <li key={index} className="flex items-center gap-3">
       <FaCheckCircle className="text-green-400" />
       <span className="text-sm text-gray-200">{item}</span>
      </li>
     ))}
    </ul>

    <button className="mt-10 w-full bg-[#3FAEFF] hover:bg-blue-700 transition-all duration-300 text-black py-3 rounded-xl font-semibold text-lg">
     S’abonner à EscaLearn
    </button>
   </div>
  </div>
 );
}
