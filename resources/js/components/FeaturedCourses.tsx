
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import clsx from "clsx";

const testimonials = [
 {
  name: "Frank Kamgang",
  role: "Développeuse Frontend",
  image: "",
  message:
   "EscaLearn m’a permis d’évoluer rapidement avec des projets concrets et une pédagogie claire.",
 },
 {
  name: "Soh Loic",
  role: "Developpeur Backend",
  image: "./logo.svg",
  message:
   "Grâce aux parcours structurés, j’ai décroché mon premier job en développement web.",
 },
];

export default function TestimonialCards() {
 const [isHovering, setIsHovering] = useState(false);

 return (
  <section className="py-20 bg-[#020012] bg-[url('./frank.png')] text-white">
   <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
     Ils nous font confiance
    </h2>

    <div
     className="relative flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0"
     onMouseEnter={() => setIsHovering(true)}
     onMouseLeave={() => setIsHovering(false)}
    >
     {testimonials.map((t, index) => (
      <div
       key={index}
       className={clsx(
        "bg-[#161933] h-[330px] rounded-xl shadow-lg w-full max-w-sm p-6 transform transition-all duration-500",
        "hover:scale-105",
        isHovering && (index === 0 ? "translate-x-24" : "-translate-x-32")
       )}
      >

       <div className="flex items-center gap-4 mb-4 ">
        <img
         src={t.image}
         alt={t.name}
         className="w-16 h-16 rounded-full object-cover border-2 border-white"
        />
        <div>
         <h4 className="font-semibold text-lg">{t.name}</h4>
         <p className="text-sm text-gray-400">{t.role}</p>
        </div>
       </div>

       {/* Temoignage */}
       <p className="text-gray-300 text-sm mb-4 leading-relaxed">
        “{t.message}”
       </p>

       {/* Étoiles */}
       <div className="flex gap-1 text-yellow-400">
        {Array(5)
         .fill(0)
         .map((_, i) => (
          <FaStar key={i} />
         ))}
       </div>
      </div>
     ))}
    </div>
   </div>
  </section>
 );
}
