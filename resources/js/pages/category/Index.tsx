import Navbar from "@/components/NavBar";
import { Link, usePage } from "@inertiajs/react";
import Header from "@/components/Header";
import Member from "./Member";


export default function Index({ categories }) {
 const { courses } = usePage().props;
 return (
  <>
   <Navbar />
   <Header />
   <div className="p-6 mt-12 bg-[#0B0E1E]">


   <h1 className="text-2xl font-bold mb-4">Toutes les catégories</h1>

   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {categories.map((category) => (
     <Link
      key={category.id}
      href={`/category/${category.id}`}
      className="block p-4  bg-blue-900 shadow rounded"
     >
      <h2 className="text-lg font-semibold">{category.name}</h2>
      <p> <span>{category.cours_count}</span> cours disponibles.</p>
     </Link>
    ))}
    </div>
    <Member />
  </div>
  </>
 );
}