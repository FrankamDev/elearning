import { Link, useForm } from '@inertiajs/react';

export default function Index({ lessons }) {
 const { delete: destroy } = useForm();

 const handleDelete = (id) => {
  if (confirm('Voulez-vous vraiment supprimer cette leçon ?')) {
   destroy(route('admin.lessons.destroy', id));
  }
 };

 return (
  <div className="max-w-5xl mx-auto p-6">
   <div className="flex justify-between items-center mb-6">
    <h1 className="text-2xl font-bold">Liste des leçons</h1>
    <Link
     href={route('admin.lessons.create')}
     className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
    >
     Ajouter une leçon
    </Link>
   </div>
   <table className="w-full border-collapse">
    <thead>
     <tr className="bg-gray-100">
      <th className="border p-3">Titre</th>
      <th className="border p-3">Cours</th>
      <th className="border p-3">Actions</th>
     </tr>
    </thead>
    <tbody>
     {lessons.map((lesson) => (
      <tr key={lesson.id} className="text-center">
       <td className="border p-3">{lesson.title}</td>
       <td className="border p-3">{lesson.cours.title}</td>
       <td className="border p-3 space-x-2">
        <Link
         href={route('admin.lessons.edit', lesson.id)}
         className="text-blue-600 hover:underline"
        >Modifier</Link>
        <button
         onClick={() => handleDelete(lesson.id)}
         className="text-red-600 hover:underline"
        >Supprimer</button>
       </td>
      </tr>
     ))}
    </tbody>
   </table>
  </div>
 );
}
