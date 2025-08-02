import { Link } from '@inertiajs/react';

export default function List({ categories }) {
 return (
  <div className="p-8">
   <h1 className="text-2xl font-bold mb-4">Toutes les catégories</h1>
   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {categories.map((cat) => (
     <Link
      href={`/categories/${cat.id}`}
      key={cat.id}
      className="p-4 bg-white shadow rounded hover:bg-blue-50"
     >
      <h3 className="text-lg font-semibold">{cat.name}</h3>
      <p className="text-sm text-gray-500">
       {cat.cours_count} cours
      </p>
     </Link>
    ))}
   </div>
  </div>
 );
}
