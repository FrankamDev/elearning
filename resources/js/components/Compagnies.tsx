// CompanyLogosScroller.jsx
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const companies = [
 { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
 { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
 { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
 { name: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
 { name: 'Meta', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Meta_Platforms_Inc._logo.svg' },
 { name: 'Netflix', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_N_logo.svg' },
 { name: 'Tesla', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg' },
 { name: 'Adobe', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Adobe_Corporate_logo.svg' },
 { name: 'Samsung', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg' },
 { name: 'Intel', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Intel-logo.svg' },
];

const CompanyLogosScroller = () => {
 const controls = useAnimation();

 useEffect(() => {
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
 }, [controls]);


 const logos = [...companies, ...companies];

 return (
  <div
   style={{
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    width: '100%',
    background: '#fff',
    padding: '20px 0',
   }}
  >
   <motion.div
    animate={controls}
    style={{
     display: 'inline-flex',
     alignItems: 'center',
     gap: '50px',
    }}
   >
    {logos.map((c, i) => (
     <img
      key={`${c.name}-${i}`}
      src={c.logo}
      alt={c.name}
      style={{
       height: '60px',
       filter: 'grayscale(100%)',
       transition: 'filter 0.3s ease',
      }}
      onMouseEnter={e => e.currentTarget.style.filter = 'grayscale(0%)'}
      onMouseLeave={e => e.currentTarget.style.filter = 'grayscale(100%)'}
     />
    ))}
   </motion.div>
  </div>
 );
};

export default CompanyLogosScroller;
