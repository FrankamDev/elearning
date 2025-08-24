import { motion } from 'framer-motion';

const fadeIn = {
 hidden: { opacity: 0, y: 30 },
 visible: (i = 1) => ({
  opacity: 1,
  y: 0,
  transition: {
   delay: i * 0.2,
   duration: 0.6,
   ease: 'easeOut',
  },
 }),
};

const MeetMe = () => {
 return (
  <section className="bg-[#0d0c1d] px-6 py-16 text-white md:px-20">
   <motion.h2 initial="hidden" animate="visible" variants={fadeIn} className="mb-12 text-center text-3xl font-bold md:text-4xl">
    Faites la connaissance de <span className="text-blue-500">Frank</span>, votre <span className="text-blue-400">Instructeur</span>
   </motion.h2>

   <div className="grid gap-8 md:grid-cols-3">
    <motion.div
     initial="hidden"
     animate="visible"
     custom={1}
     variants={fadeIn}
     className="rounded-xl bg-[#1a1a2e] p-6 text-center shadow-lg"
    >
     <div className="mb-4">
      <img src="/logo.png" alt="img" className="mx-auto w-16" />
     </div>
     <h3 className="mb-2 text-xl font-semibold">10 développeurs aidés</h3>
     <p className="mb-4 text-sm">
      Nos cours ont aidé plus d’un million de développeurs à décrocher des emplois dans les meilleures entreprises.
     </p>
     <div className="flex justify-center gap-4 text-sm text-gray-400">
      <span>📍 50</span>
      <span>❤️ 25</span>
      <span>▶️ 100</span>
     </div>

    </motion.div>

    <motion.div
     initial="hidden"
     animate="visible"
     custom={2}
     variants={fadeIn}

     className="rounded-xl bg-[#1a1a2e] p-6 text-center shadow-lg"
    >
     <div className="mb-4 text-4xl text-yellow-400">⭐</div>
     <h3 className="mb-2 text-xl font-semibold">3x GitHub Star</h3>
     <p className="text-sm text-gray-300">
      Sur 2 milles développeurs, seuls 70 ont reçu cette reconnaissance pour leur expertise et influence.
     </p>
    </motion.div>

    <motion.div initial="hidden" animate="visible" custom={3} className="overflow-hidden rounded-xl shadow-lg">
     <img src="" alt="Frank image" className="h-full w-full object-cover" />
    </motion.div>

    <motion.div
     initial="hidden"
     animate="visible"
     custom={4}
     variants={fadeIn}
     className="rounded-xl bg-[#1a1a2e] p-6 text-center shadow-lg md:col-span-2"
    >
     <div className="mb-4 text-4xl text-orange-400">🛡️</div>
     <h3 className="mb-2 text-xl font-semibold">Intervenant à GitNation</h3>
     <p className="text-sm text-gray-300">
      Reconnu comme un éducateur de confiance dans la communauté tech, Frank partage son savoir lors de conférences.
     </p>
    </motion.div>

    <motion.div initial="hidden" animate="visible" custom={5} variants={fadeIn} className="overflow-hidden rounded-xl shadow-lg">
     <img src="./img.jpg" alt="Frank" className="h-full w-full object-cover" />
    </motion.div>
   </div>
  </section>
 );
};

export default MeetMe;
