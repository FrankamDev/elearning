import { Link } from "@inertiajs/react";

const CardCourses = () => {

 return (

  <div className="">
   <h1 className="text-3xl my-8 font-bold text-white">Tous les cours</h1>
   <div className="cards flex my-12 flex gap-4 items-center justify-center">

    <Link href="/">
     <div className=" bg-[#14172F] p-4 h-[340px] rounded-lg">
     <img src="" alt="" />
     <h2>Cours complet  d'Animation web</h2>
     <p className="text-gray-300 my-4">Apprendre tout a Propos du developpement web</p>
     <Link href="/" className="text-blue-500">Regarder <span>-</span></Link>
    </div>
    </Link>
    <Link href="/">
     <div className="bg-[#14172F] p-4 h-[340px] rounded-lg bg-[#14172F] p-4">
     <img src="" alt="" />
     <h2>Cours complet  d'Animation web</h2>
     <p>Apprendre tout a Propos du developpement web</p>
     <Link href="/" className="text-blue-500">Regarder <span>-</span></Link>
    </div>
    </Link>
    <Link href="/">
     <div className=" bg-[#14172F] bg-[#14172F] p-4 h-[340px] rounded-lg p-4 rounded-lg">
     <img src="" alt="" />
     <h2>Cours complet  d'Animation web</h2>
     <p>Apprendre tout a Propos du developpement web</p>
     <Link href="/" className="text-blue-500">Regarder <span>-</span></Link>
    </div>
    </Link>
   </div>
  </div>
 )
}

export default CardCourses;