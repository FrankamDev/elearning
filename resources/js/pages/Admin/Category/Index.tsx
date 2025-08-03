import { Link, useForm } from "@inertiajs/react";

export default function CategoryIndex({ categories }) {
 const { delete: destroy } = useForm();

 const handleDelete = (id) => {
  if (confirm("Supprimer cette catégorie ?")) {
   destroy(`/admin/categories/${id}`);
  }
 };

 return (
  <div className="p-6 space-y-4">
   <div className="flex justify-between items-center">
    <h1 className="text-2xl font-bold">Liste des catégories</h1>
    <Link
     href="/admin/categories/create"
     className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
    >
     + Nouvelle catégorie
    </Link>
   </div>

   <div className="overflow-x-auto">
    <table className="min-w-full bg-white shadow rounded">
     <thead>
      <tr className="bg-gray-100 text-left">
       <th className="p-4">ID</th>
       <th className="p-4">Nom</th>
       <th className="p-4">Cours associés</th>
       <th className="p-4">Actions</th>
      </tr>
     </thead>
     <tbody>
      {categories.map((category) => (
       <tr key={category.id} className="border-t hover:bg-gray-50">
        <td className="p-4">{category.id}</td>
        <td className="p-4">{category.name}</td>
        <td className="p-4">{category.cours_count}</td>
        <td className="p-4 space-x-2">
         <Link
          href={`/admin/categories/${category.id}/edit`}
          className="text-indigo-600 hover:underline"
         >
          Modifier
         </Link>
         <button
          onClick={() => handleDelete(category.id)}
          className="text-red-600 hover:underline"
         >
          Supprimer
         </button>
        </td>
       </tr>
      ))}
     </tbody>
    </table>
   </div>
  </div>
 );
}
