import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ title, iconClass, bgColor, textColor }) => {
 return (
  <motion.div
   className={`max-w-xs rounded-xl p-6 text-center ${bgColor} ${textColor} shadow-lg`}
   whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
   initial={{ opacity: 0, y: 50 }}
   animate={{ opacity: 1, y: 0 }}
   transition={{ duration: 0.5 }}
  >
   <div className="flex justify-center mb-4">
    <span className={`text-4xl ${iconClass}`}></span>
   </div>
   <h3 className="text-xl font-semibold mb-2">{title}</h3>
   <p className="text-sm opacity-80">Obtenez des retours et améliorez vos compétences.</p>
  </motion.div>
 );
};

const CardsComponent = () => {
 return (
  <div className="flex justify-center space-x-6 p-6 bg-gray-900">
   <Card
    title="Get Feedback from Expert Developers"
    iconClass="text-purple-400"
    bgColor="bg-gray-800"
    textColor="text-white"
   />
   <Card
    title="AI Mock Trainer for Job Interviews"
    iconClass="text-yellow-400"
    bgColor="bg-gray-800"
    textColor="text-white"
   />
   <Card
    title="AI Assistant Built for Developers"
    iconClass="text-green-400"
    bgColor="bg-gray-800"
    textColor="text-white"
   />
  </div>
 );
};

export default CardsComponent;