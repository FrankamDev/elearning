import clsx from 'clsx';
import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const testimonials = [
 {
  name: 'Frank Kamgang',
  role: 'Développeur Frontend',
  image: '/avatar1.jpg',
  message: 'EscaLearn m’a permis d’évoluer rapidement avec des projets concrets et une pédagogie claire.',
 },
 {
  name: 'Soh Loic',
  role: 'Développeur Backend',
  image: '/avatar2.jpg',
  message: 'Grâce aux parcours structurés, j’ai décroché mon premier job en développement web.',
 },
 {
  name: 'Nathalie T.',
  role: 'UI/UX Designer',
  image: '/avatar3.jpg',
  message: 'Les projets réels m’ont permis de bâtir un portfolio solide et décrocher un stage.',
 },
 {
  name: 'Jean Michel',
  role: 'Mobile Developer',
  image: '/avatar4.jpg',
  message: 'J’ai appris à créer des applications React Native modernes avec les meilleurs outils.',
 },
];

export default function TestimonialGrid() {
 const [hoverIndex, setHoverIndex] = useState<number | null>(null);

 return (
  <section
   className="relative min-h-screen overflow-hidden py-20 text-white"
   style={{
    backgroundImage: "url('/bg-tech.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
   }}
  >
   <div className="absolute inset-0 bg-[#030215]"></div>
   <div className="relative mx-auto grid h-full max-w-7xl grid-cols-2 grid-rows-2 gap-10 px-6">
    {testimonials.map((t, idx) => (
     <div
      key={idx}
      className={clsx(
       'rounded-2xl border border-white/20 bg-white/10 p-6 shadow-lg backdrop-blur-md transition-all duration-500',
       'flex flex-col justify-between',
       hoverIndex !== null ? (idx === hoverIndex ? 'z-20 scale-105 shadow-2xl' : 'scale-95 opacity-70') : 'scale-100',
       // position offsets to push to corners
       idx === 0 && 'self-start justify-self-start',
       idx === 1 && 'self-start justify-self-end',
       idx === 2 && 'self-end justify-self-start',
       idx === 3 && 'self-end justify-self-end',
      )}
      onMouseEnter={() => setHoverIndex(idx)}
      onMouseLeave={() => setHoverIndex(null)}
     >
      <div className="mb-4 flex items-center gap-4">
       <img src={t.image} alt={t.name} className="h-14 w-14 rounded-full border-2 border-white object-cover" />
       <div>
        <h4 className="text-lg font-semibold">{t.name}</h4>
        <p className="text-sm text-gray-300">{t.role}</p>
       </div>
      </div>

      <p className="mb-4 flex-1 text-gray-200 italic">{`“${t.message}”`}</p>

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
  </section>
 );
}
