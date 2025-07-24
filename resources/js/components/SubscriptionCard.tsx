import { Switch } from '@headlessui/react';
import { Link } from '@inertiajs/react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { GiBookshelf, GiBrain, GiLaptop, GiRocket, GiWorld } from 'react-icons/gi';

const icones = [GiBrain, GiBookshelf, GiLaptop, GiRocket, GiWorld];

export default function SubscriptionCard() {
    const ref = useRef(null);
    const isInView = useInView(ref, { threshold: 0.3 });
    const controls = useAnimation();
    const [abonnement, setAbonnement] = useState('mois');

    useEffect(() => {
        if (isInView) {
            controls.start((i) => ({
                opacity: 1,
                scale: 1,
                y: 0,
                rotate: 0,
                transition: {
                    delay: i * 0.12,
                    type: 'spring',
                    stiffness: 120,
                    damping: 14,
                },
            }));
        } else {
            controls.start((i) => ({
                opacity: 0,
                scale: 0.6,
                y: 50,
                rotate: -8,
            }));
        }
    }, [isInView, controls]);

    const prix = abonnement === 'mois' ? '25.000 FCFA' : '250.000 FCFA';
    const ancienPrix = abonnement === 'mois' ? '50.000 FCFA' : '500.000 FCFA';
    const avantages = [
        'Accès à tous les cours',
        'Support prioritaire',
        'Mises à jour hebdomadaires',
        'Accès mobile et hors ligne',
        'Certificat de fin de formation',
    ];

    return (
        <div className="flex flex-col items-center bg-[#020014] px-4 py-20 text-white">
            {/* Arc de cercle horizontal */}
            <div className="relative mb-32 h-[220px] w-full max-w-4xl" ref={ref}>
                {icones.map((Icon, i) => {
                    const total = icones.length;
                    const radius = 120; // rayon du demi-cercle
                    const angle = (Math.PI / (total - 1)) * i; // de 0 à π
                    const x = radius * Math.sin(angle);
                    const y = -radius * Math.cos(angle); // vers le haut (inversé pour arc vers le haut)

                    return (
                        <motion.div
                            key={i}
                            custom={i}
                            initial={{ opacity: 0, scale: 0.6, y: 50 }}
                            animate={controls}
                            className="absolute"
                            style={{
                                left: `calc(50% + ${x}px - 2.5rem)`,
                                top: `calc(50% + ${y}px - 2.5rem)`,
                            }}
                        >
                            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-yellow-500 shadow-xl sm:h-24 sm:w-24 md:h-28 md:w-28">
                                <Icon className="h-10 w-10 text-yellow-400 sm:h-12 sm:w-12 md:h-16 md:w-16" />
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Carte tarifaire */}
            <div className="relative w-full max-w-3xl rounded-2xl border border-yellow-500 bg-[#101329] p-8 text-center shadow-[0_0_50px_#facc15] transition-all duration-500 sm:p-12">
                <h3 className="text-4xl font-extrabold text-white sm:text-5xl">
                    {prix}
                    <span className="text-lg font-normal text-gray-400 sm:text-xl"> / {abonnement}</span>
                    <span className="ml-3 text-base text-gray-500 line-through sm:text-xl">{ancienPrix}</span>
                </h3>

                {/* Switch */}
                <div className="mt-6 flex items-center justify-center gap-4">
                    <span className={`text-sm ${abonnement === 'mois' ? 'font-bold text-yellow-400' : 'text-gray-400'}`}>Mensuel</span>
                    <Switch
                        checked={abonnement === 'annee'}
                        onChange={() => setAbonnement(abonnement === 'mois' ? 'annee' : 'mois')}
                        className={`${
                            abonnement === 'annee' ? 'bg-yellow-500' : 'bg-gray-500'
                        } relative inline-flex h-[32px] w-[60px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-300 ease-in-out`}
                    >
                        <span
                            aria-hidden="true"
                            className={`${
                                abonnement === 'annee' ? 'translate-x-7' : 'translate-x-1'
                            } pointer-events-none inline-block h-[26px] w-[26px] transform rounded-full bg-white shadow-lg ring-0 transition duration-300 ease-in-out`}
                        />
                    </Switch>
                    <span className={`text-sm ${abonnement === 'annee' ? 'font-bold text-yellow-400' : 'text-gray-400'}`}>Annuel</span>
                </div>

                <p className="mt-4 text-sm text-green-400">✅ Engage-toi sur un an et économise 2 mois !</p>
                <p className="mt-2 text-sm text-gray-400">🌍 Réduction régionale de 74 % appliquée</p>

                <ul className="mt-8 grid gap-4 text-left sm:grid-cols-2">
                    {avantages.map((item, index) => (
                        <li key={index} className="flex items-center gap-3">
                            <FaCheckCircle className="text-green-400" />
                            <span className="text-sm text-gray-200">{item}</span>
                        </li>
                    ))}
                </ul>

                <div className="mt-8">
                    <Link
                        href="/"
                        className="rounded-xl bg-[#47B3FF] px-10 py-3 font-[arial] text-lg text-black transition-all duration-300 hover:bg-blue-700"
                    >
                        S’abonner à EscaLearn
                    </Link>
                </div>
            </div>
        </div>
    );
}
