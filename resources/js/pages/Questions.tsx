import SelectQuestion from "@/components/SelectQuestion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const Questions = () => {
 const [open, setOpen] = useState(false)
 return (
  <div className="grid my-4 grid-cols-[40%_60%] gap-4 p-6 bg-gray-900 rounded-lg">
   <div className="block">
    <p>Trouvez des reponses aux questions courantes <span className="text-cyan-400">👇</span></p>
    <h2>Questions <br />
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