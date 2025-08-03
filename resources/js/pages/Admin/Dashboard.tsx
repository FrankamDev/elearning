import { Link } from "@inertiajs/react";

export default function Dashboard() {
 return (
  <div className="p-6 space-y-6">
   <h1 className="text-3xl font-bold text-gray-800">Tableau de bord Admin</h1>

   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <Link
     href={route('admin.category.index')}
     className="bg-blue-600 text-white p-6 rounded-xl shadow hover:bg-blue-700 transition"
    >
     <h2 className="text-xl font-semibold">Gérer les Catégories</h2>
     <p className="text-sm mt-2">Ajoute, modifie ou supprime les catégories de cours.</p>
    </Link>

    <Link
     href={route('admin.cours.index')}
     // href="./cours/Index"
     className="bg-green-600 text-white p-6 rounded-xl shadow hover:bg-green-700 transition"
    >
     <h2 className="text-xl font-semibold">Gérer les Cours</h2>
     <p className="text-sm mt-2">Ajoute, modifie ou supprime les cours.</p>
    </Link>
   </div>
  </div>
 );
}

