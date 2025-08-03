import { Link, usePage } from "@inertiajs/react";

export default function Show() {
 const { category } = usePage().props;

 return (
  <div className="p-6">
   <h1 className="text-3xl font-bold text-gray-800 mb-6">
    📚 Cours de la catégorie :{" "}
    <span className="text-blue-600">{category.name}</span>
   </h1>

   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {category.cours.map((cours, index) => (
     <li key={index} className="p-4 bg-white rounded shadow">
      <Link href={`/cours/${cours.id}`} className="text-xl font-semibold text-blue-600 hover:underline">
       {cours.title}
      </Link>
      <Link href={`/cours/${cours.id}`} className="text-xl font-semibold text-blue-600 hover:underline">
       {cours.title}
      </Link>
      <p className="text-gray-600">{cours.description}</p>
     </li>
    ))}
   </div>
  </div>
 );
}
