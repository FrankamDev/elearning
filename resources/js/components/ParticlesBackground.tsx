
const ParticlesBackground = () => {
 return (
  <div className="relative w-full h-screen bg-[#050816] overflow-hidden">
   {/* Gradient violet vertical */}
   <div className="absolute left-10 top-32 flex flex-col items-center">
    <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
    <div className="w-1 h-60 sm:h-80 violet-gradient" />
   </div>


   <div className="absolute bottom-0 w-full h-full flex justify-center">
    <img
     src="/oki.jpg"
     alt="background visual"
     className="md:ml-[12rem] mt-[12rem] h-1/2 object-contain opacity-80"
    />

   </div>
  </div>
 );
};

export default ParticlesBackground;
