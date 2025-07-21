import { motion } from "framer-motion";
// import instructorImage from "";

const fadeIn = {
 hidden: { opacity: 0, y: 30 },
 visible: (i = 1) => ({
  opacity: 1,
  y: 0,
  transition: {
   delay: i * 0.2,
   duration: 0.6,
   ease: "easeOut",
  },
 }),
};

const MeetMe = () => {
 return (
  <section className="bg-[#0d0c1d] text-white py-16 px-6 md:px-20">
   <motion.h2
    initial="hidden"
    animate="visible"
    variants={fadeIn}
    className="text-3xl md:text-4xl font-bold text-center mb-12"
   >
    Faites la connaissance de <span className="text-blue-500">Frank</span>, votre <span className="text-blue-400">instructeur</span>
   </motion.h2>

   <div className="grid md:grid-cols-3 gap-8">

    <motion.div
     initial="hidden"
     animate="visible"
     custom={1}
     variants={fadeIn}
     className="bg-[#1a1a2e] rounded-xl p-6 text-center shadow-lg"
    >
     <div className="mb-4">
      <img src="/logo.png" alt="img" className="mx-auto w-16" />
     </div>
     <h3 className="text-xl font-semibold mb-2">10 développeurs aidés</h3>
     <p className="text-sm mb-4">
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
     className="bg-[#1a1a2e] rounded-xl p-6 text-center shadow-lg"
    >
     <div className="text-yellow-400 text-4xl mb-4">⭐</div>
     <h3 className="text-xl font-semibold mb-2">3x GitHub Star</h3>
     <p className="text-sm text-gray-300">
      Sur 150 millions de développeurs, seuls 70 ont reçu cette reconnaissance pour leur expertise et influence.
     </p>
    </motion.div>


    <motion.div
     initial="hidden"
     animate="visible"
     custom={3}

     className="rounded-xl overflow-hidden shadow-lg"
    >
     <img src='' alt="Frank image" className="w-full h-full object-cover" />
    </motion.div>


    <motion.div
     initial="hidden"
     animate="visible"
     custom={4}
     variants={fadeIn}
     className="bg-[#1a1a2e] rounded-xl p-6 text-center shadow-lg md:col-span-2"
    >
     <div className="text-orange-400 text-4xl mb-4">🛡️</div>
     <h3 className="text-xl font-semibold mb-2">Intervenant à GitNation</h3>
     <p className="text-sm text-gray-300">
      Reconnu comme un éducateur de confiance dans la communauté tech, Frank partage son savoir lors de conférences.
     </p>
    </motion.div>


    <motion.div
     initial="hidden"
     animate="visible"
     custom={5}
     variants={fadeIn}
     className="rounded-xl overflow-hidden shadow-lg"
    >
     <img src='./img.jpg' alt="Frank" className="w-full h-full object-cover" />
    </motion.div>
   </div>
  </section>
 );
};

export default MeetMe;
