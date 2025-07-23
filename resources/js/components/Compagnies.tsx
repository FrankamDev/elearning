import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const companies = [
    { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
    { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
    { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
    { name: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
    { name: 'Meta', logo: 'https://cdn.worldvectorlogo.com/logos/meta-1.svg' },
    { name: 'Netflix', logo: 'https://cdn.worldvectorlogo.com/logos/netflix-3.svg' },
    { name: 'Tesla', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg' },
    { name: 'Adobe', logo: 'https://cdn.worldvectorlogo.com/logos/adobe-2.svg' },
    { name: 'Samsung', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg' },
    { name: 'Intel', logo: 'https://cdn.worldvectorlogo.com/logos/intel-1.svg' },
];

const Company = () => {
 const controls = useAnimation();
 const containerRef = useRef(null);
 const [isHovered, setIsHovered] = useState(false);

 useEffect(() => {
  if (!isHovered) {
   controls.start({
    x: ['0%', '-100%'],
    transition: {
     x: {
      repeat: Infinity,
      repeatType: 'loop',
      duration: 30,
      ease: 'linear',
     },
    },
   });
  } else {
   controls.stop();
  }
 }, [controls, isHovered]);

 const logos = [...companies, ...companies];

 return (
  <div
   ref={containerRef}
   onMouseEnter={() => setIsHovered(true)}
   onMouseLeave={() => setIsHovered(false)}
   className="overflow-hidden  w-full py-6 flex items-center justify-center gap-10 md:gap-0"
  >
   <motion.div
    animate={controls}
    className="flex items-center gap-16"
   >
    {logos.map((c, i) => (
     <img
      key={`${c.name}-${i}`}
      src={c.logo}
      alt={c.name}
      className="h-8 grayscale-0  transition duration-300 hover:drop-shadow-xl"
     />
    ))}
   </motion.div>
  </div>
 );
};

export default Company;
