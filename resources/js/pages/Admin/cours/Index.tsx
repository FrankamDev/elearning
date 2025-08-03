import { Link, useForm } from "@inertiajs/react";

export default function CourseIndex({ courses }) {
 const { delete: destroy } = useForm();

 const handleDelete = (id) => {
  if (confirm("Supprimer ce cours ?")) {
   destroy(`/admin/courses/${id}`);
  }
 };

 return (
  <div className="p-6 space-y-4">
   <div className="flex justify-between items-center">
    <h1 className="text-2xl font-bold">Liste des cours</h1>
    <Link
     href="/admin/courses/create"
     className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
    >
     + Nouveau cours
    </Link>
   </div>

   <div className="overflow-x-auto">
    <table className="min-w-full bg-white shadow rounded">
     <thead>
      <tr className="bg-gray-100 text-left">
       <th className="p-4">ID</th>
       <th className="p-4">Titre</th>
       <th className="p-4">Catégorie</th>
       <th className="p-4">Actions</th>
      </tr>
     </thead>
     <tbody>
      {courses.map((course) => (
       <tr key={course.id} className="border-t hover:bg-gray-50">
        <td className="p-4">{course.id}</td>
        <td className="p-4">{course.title}</td>
        <td className="p-4">{course.category?.name || '—'}</td>
        <td className="p-4 space-x-2">
         <Link
          href={`/admin/courses/${course.id}/edit`}
          className="text-indigo-600 hover:underline"
         >
          Modifier
         </Link>
         <button
          onClick={() => handleDelete(course.id)}
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
