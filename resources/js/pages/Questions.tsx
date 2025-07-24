import SelectQuestion from '@/components/SelectQuestion';



const Questions = () => {
 return (
  <div className="md:grid  md:my-4 grid-cols-[40%_60%] gap-4 md:p-6 mx-2.5 bg-[#020013] rounded-lg">
   <div className="block">
    <p className='bg-[#22274A] w-[60%] text-[14px] text-white text-center rounded-md font-[Segeo_UI_Symbol]'>Trouvez des reponses aux questions courantes <span className="text-cyan-400 transform rotate-[20deg]">👇👇</span></p>
    <h2 className="text-white text-6xl my-4 font-bold">Questions <br />
     Frequemment <br />
     Demandéee
    </h2>
    <p>Ton parcours pour etre a la ligne de la tech</p>
   </div>
   <div className="">
    <SelectQuestion />
   </div>
  </div>
 )
}
export default Questions;