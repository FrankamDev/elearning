import { Switch } from '@headlessui/react';
import { Link } from '@inertiajs/react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FC, useEffect, useRef, useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { GiBookshelf, GiBrain, GiLaptop, GiRocket, GiWorld } from 'react-icons/gi';

// Define interfaces for type safety
interface Pricing {
 monthly: { price: string; oldPrice: string };
 yearly: { price: string; oldPrice: string };
}

interface SubscriptionCardProps {
 pricing?: Pricing;
 benefits?: string[];
 className?: string;
}

// Default props
const defaultPricing: Pricing = {
 monthly: { price: '25.000 FCFA', oldPrice: '50.000 FCFA' },
 yearly: { price: '250.000 FCFA', oldPrice: '500.000 FCFA' },
};

const defaultBenefits = [
 'Accès à tous les cours',
 'Support prioritaire',
 'Mises à jour hebdomadaires',
 'Accès mobile et hors ligne',
 'Certificat de fin de formation',
];

const icones = [GiBrain, GiBookshelf, GiLaptop, GiRocket, GiWorld];

const SubscriptionCard: FC<SubscriptionCardProps> = ({ pricing = defaultPricing, benefits = defaultBenefits, className = '' }) => {
 const ref = useRef<HTMLDivElement>(null);
 const isInView = useInView(ref, { threshold: 0.3, once: false });
 const controls = useAnimation();
 const [abonnement, setAbonnement] = useState<'mois' | 'annee'>('mois');

 useEffect(() => {
  controls.start((i) => ({
   opacity: isInView ? 1 : 0,
   scale: isInView ? 1 : 0.7,
   y: isInView ? 0 : 60,
   rotate: isInView ? 0 : -10,
   transition: {
    delay: i * 0.15,
    type: 'spring',
    stiffness: 140,
    damping: 16,
    mass: 0.6,
   },
  }));
 }, [isInView, controls]);

 const currentPrice = abonnement === 'mois' ? pricing.monthly : pricing.yearly;

 return (
  <div
   className={`relative flex flex-col items-center overflow-hidden bg-gradient-to-b from-[#020014] to-[#0a0a2a] px-4 py-12 text-white sm:py-16 md:py-20 ${className}`}
   role="region"
   aria-label="Subscription pricing section"
  >
   {/* Subtle background pattern */}
   <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05)_0%,transparent_50%)] opacity-50" />

   {/* Icon arc */}
   <div className="relative mb-12 h-[160px] w-full max-w-5xl sm:h-[200px] md:h-[240px]" ref={ref}>
    {icones.map((Icon, i) => {
     const total = icones.length;
     const radius = 140;
     const angle = (Math.PI / (total - 1)) * i;
     const x = radius * Math.sin(angle);
     const y = -radius * Math.cos(angle);

     return (
      <motion.div
       key={i}
       custom={i}
       initial={{ opacity: 0, scale: 0.7, y: 60 }}
       animate={controls}
       whileHover={{ scale: 1.1, rotate: 5 }}
       className="my10 absolute py-8"
       style={{
        left: `calc(50% + ${x}px - 2.5rem)`,
        top: `calc(30% + ${y}px - 2.8rem)`,
       }}
       role="presentation"
      >
       <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-yellow-400 bg-gradient-to-br from-yellow-500/20 to-transparent shadow-lg transition-all duration-300 hover:border-yellow-300 hover:shadow-xl sm:h-20 sm:w-20 md:h-24 md:w-24">
        <Icon className="h-8 w-8 text-yellow-400 sm:h-10 sm:w-10 md:h-12 md:w-12" />
       </div>
      </motion.div>
     );
    })}
   </div>

   <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
    className="relative w-full max-w-4xl rounded-2xl border-2 border-yellow-400 bg-gradient-to-br from-[#101329] to-[#1a2040] p-6 text-center shadow-[0_0_60px_rgba(250,204,21,0.3)] transition-all duration-500 hover:shadow-[0_0_80px_rgba(250,204,21,0.4)] sm:p-8 md:p-12"
   >
    <h3 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
     {currentPrice.price}
     <span className="text-base font-normal text-gray-300 sm:text-lg md:text-xl"> / {abonnement === 'mois' ? 'mois' : 'an'}</span>
     <span className="ml-2 text-sm text-gray-400 line-through sm:text-base md:text-xl">{currentPrice.oldPrice}</span>
    </h3>

    {/* Switch */}
    <div className="mt-6 flex items-center justify-center gap-3 sm:gap-4">
     <span className={`text-sm font-medium sm:text-base ${abonnement === 'mois' ? 'text-yellow-400' : 'text-gray-300'}`}>Mensuel</span>
     <Switch
      checked={abonnement === 'annee'}
      onChange={() => setAbonnement(abonnement === 'mois' ? 'annee' : 'mois')}
      className={`relative inline-flex h-8 w-14 shrink-0 cursor-pointer rounded-full border-2 border-yellow-400 bg-gradient-to-r sm:h-9 sm:w-16 ${abonnement === 'annee' ? 'from-yellow-500 to-yellow-600' : 'from-gray-500 to-gray-600'
       } transition-all duration-300 ease-in-out focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-[#101329] focus:outline-none`}
      aria-label={`Switch to ${abonnement === 'mois' ? 'yearly' : 'monthly'} plan`}
     >
      <span
       aria-hidden="true"
       className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow-md ring-0 transition duration-300 ease-in-out sm:h-7 sm:w-7 ${abonnement === 'annee' ? 'translate-x-6 sm:translate-x-7' : 'translate-x-1'
        }`}
      />
     </Switch>
     <span className={`text-sm font-medium sm:text-base ${abonnement === 'annee' ? 'text-yellow-400' : 'text-gray-300'}`}>Annuel</span>
    </div>

    <p className="mt-4 text-sm font-medium text-green-400 sm:text-base">✅ Engagez-vous sur un an et économisez 2 mois !</p>
    <p className="mt-2 text-xs text-gray-300 sm:text-sm">🌍 Réduction régionale de 74 % appliquée</p>

    <ul className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4">
     {benefits.map((item, index) => (
      <li key={index} className="flex items-center gap-2 sm:gap-3">
       <FaCheckCircle className="h-4 w-4 text-green-400 sm:h-5 sm:w-5" />
       <span className="text-xs text-gray-200 sm:text-sm">{item}</span>
      </li>
     ))}
    </ul>

    <div className="mt-6 sm:mt-8">
     <Link
      href="/"
      className="inline-block rounded-xl bg-gradient-to-r from-[#47B3FF] to-[#1E90FF] px-8 py-2.5 font-[arial] text-base font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:from-[#1E90FF] hover:to-[#47B3FF] hover:shadow-lg focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#101329] focus:outline-none sm:px-10 sm:py-3 sm:text-lg"
      aria-label="S'abonner à EscaLearn"
     >
      S’abonner à EscaLearn
     </Link>
    </div>
   </motion.div>
  </div>
 );
};

export default SubscriptionCard;
