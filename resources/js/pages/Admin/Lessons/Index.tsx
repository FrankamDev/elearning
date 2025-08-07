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
     href='/categories'
     className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
    >
     Categories
    </Link>
    <Link
     href={route('admin.lessons.create')}
     className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
    >
     Ajouter une leçon
    </Link>
   </div>
   <table className="w-full border-collapse">
    <thead>
     <tr className="">
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



// resources/js/Pages/Admin/Lesson/Create.tsx

// import { useForm } from "@inertiajs/react";

// export default function CreateLesson({ cours }) {
//  const { data, setData, post, processing, errors } = useForm({
//   title: "",
//   content: "",
//   cours_id: cours.id,
//  });

//  const handleSubmit = (e) => {
//   e.preventDefault();
//   post(route("admin.lessons.store"));
//  };

//  return (
//   <form onSubmit={handleSubmit} className="space-y-4">
//    <h2>Ajouter une leçon au cours : {cours.title}</h2>

//    <input
//     type="text"
//     placeholder="Titre"
//     value={data.title}
//     onChange={(e) => setData("title", e.target.value)}
//     className="border p-2 w-full"
//    />
//    {errors.title && <div className="text-red-500">{errors.title}</div>}

//    <textarea
//     placeholder="Contenu"
//     value={data.content}
//     onChange={(e) => setData("content", e.target.value)}
//     className="border p-2 w-full"
//    />
//    {errors.content && <div className="text-red-500">{errors.content}</div>}

//    <button
//     type="submit"
//     disabled={processing}
//     className="bg-blue-600 text-white px-4 py-2 rounded"
//    >
//     Enregistrer
//    </button>
//   </form>
//  );
// }
