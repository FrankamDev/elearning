import React from "react";

const Quotes = () => {
 return (
  <div className="relative bg-[#0b0b1e] text-center font-bold  text-slate-200 p-8 md:p-10 rounded-xl max-w-4xl mx-auto my-10 text-lg leading-relaxed">
   <span className="absolute -top-6 left-3 text-8xl text-purple-300">“</span>
   <p>
    <span className="text-blue-400 font-semibold">Tous Les apprenants</span> rencontrent des blockages{" "}
    <span className="text-yellow-400 font-semibold">en chemin</span>. Le genre que tu as envie de jeter ton laptop par la fenetre😂.{" "}
    <span className="text-red-400 font-semibold">Tu n'es pas seul.</span>
   </p>
   <span className="absolute -bottom-18 right-3 text-8xl text-purple-300">”</span>
  </div>
 );
};

export default Quotes;
