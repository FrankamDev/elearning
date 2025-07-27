import SelectQuestion from '@/components/SelectQuestion';



const Questions = () => {
 return (
     <div className="mx-2.5 grid-cols-[40%_60%] gap-4 rounded-lg bg-[#020013] md:my-4 md:grid md:p-6">
         <div className="block">
             <p className="question w-[60%] rounded-md bg-[#22274A] text-center font-[Segeo_UI_Symbol] text-[14px] text-white">
                 Trouvez des reponses aux questions courantes <span className="rotate-[20deg] transform text-cyan-400">👇👇</span>
             </p>
             <h2 className="my-4 text-6xl font-bold text-white">
                 Questions <br />
                 Frequemment <br />
                 Demandéee
             </h2>
             <p>Ton parcours pour etre a la ligne de la tech</p>
         </div>
         <div className="">
             <SelectQuestion />
         </div>
     </div>
 );
}
export default Questions;