import { Link } from "@inertiajs/react";

export default function Index({ categories }) {
 return (
  <div className="p-6">
   <h1 className="text-2xl font-bold mb-4">Toutes les catégories</h1>

   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {categories.map((category) => (
     <Link
      key={category.id}
      href={`/categories/${category.id}`}
      className="block p-4 bg-white shadow rounded hover:bg-blue-50"
     >
      <h2 className="text-lg font-semibold">{category.name}</h2>
     </Link>
    ))}
   </div>
  </div>
 );
}