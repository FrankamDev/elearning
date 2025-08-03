import { Link, usePage } from "@inertiajs/react";

export default function Dashboard({ userCount }) {
 const { users } = usePage().props;

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
     className="bg-green-600 text-white p-6 rounded-xl shadow hover:bg-green-700 transition"
    >
     <h2 className="text-xl font-semibold">Gérer les Cours</h2>
     <p className="text-sm mt-2">Ajoute, modifie ou supprime les cours.</p>
    </Link>
   </div>

   {/* Tableau des utilisateurs */}
   <div className="mt-8">
    <h2 className="text-2xl font-semibold mb-4 text-gray-700">Utilisateurs inscrits ({userCount})</h2>
    <div className="overflow-x-auto rounded-lg shadow">
     <table className="min-w-full  border border-gray-200">
      <thead className=" text-left">
       <tr>
        <th className="px-4 py-2 border-b">Numero d'identifiant</th>
        <th className="px-4 py-2 border-b">Nom</th>
        <th className="px-4 py-2 border-b">Email</th>
       </tr>
      </thead>
      <tbody>
       {users.map((user, index) => (
        <tr key={user.id} className="border-t hover:bg-gray-70">

         <td className="px-4 py-2 border-b">{index + 1}</td>
         <td className="px-4 py-2 border-b font-medium">{user.name}</td>
         <td className="px-4 py-2 border-b text-sm text-gray-600">{user.email}</td>
        </tr>
       ))}
      </tbody>
     </table>
    </div>
   </div>
  </div>
 );
}
