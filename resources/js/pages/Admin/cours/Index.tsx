// import { Link, useForm } from "@inertiajs/react";

// export default function CourseIndex({ cours, categories }) {
//  const { delete: destroy } = useForm();

//  const handleDelete = (id) => {
//   if (confirm("Supprimer ce cours ?")) {
//    destroy(route('admin.cours.destroy', cours.id));


//   }
//  };

//  return (
//   <div className="p-6 space-y-4">
//    <div className="flex justify-between items-center">
//     <h1 className="text-2xl font-bold">Liste des cours</h1>
//     <Link
//      href={route('admin.cours.create')}
//      className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//     >
//      + Nouveau cours
//     </Link>
//     <Link
//      href={route('admin.category.index')}
//      className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//     >
//      Categories
//     </Link>
//    </div>

//    <div className="overflow-x-auto">
//     <table className="min-w-full shadow rounded">
//      <thead>
//       <tr className=" text-left">
//        <th className="p-4">ID</th>
//        <th className="p-4">Titre</th>
//        <th className="p-4">Catégorie</th>
//        <th className="p-4">Actions</th>
//       </tr>
//      </thead>
//      <tbody>
//       {cours.map((course) => (
//        <tr key={course.id} className="border-t">
//         <td className="p-4">{course.id}</td>
//         <td className="p-4">{course.title}</td>
//         <td className="p-4">{course.category?.name || "—"}</td>
//         <td className="p-4 space-x-2">
//          <Link
//           href={`/admin/cours/${course.id}/edit`}
//           className="text-indigo-600 hover:underline"
//          >
//           Modifier
//          </Link>
//          <button
//           onClick={() => handleDelete(course.id)}
//           className="text-red-600 hover:underline"
//          >
//           Supprimer
//          </button>
//         </td>
//        </tr>
//       ))}
//      </tbody>
//     </table>
//    </div>
//   </div>
//  );
// }















import { Link, useForm } from "@inertiajs/react";

interface Course {
 id: number;
 titre: string;
 description: string;
 image: string;
 category: {
  name: string;
 };
}

interface Props {
 cours: Course[];
}

export default function CourseIndex({ cours }: Props) {
 const { delete: destroy } = useForm();

 const handleDelete = (id: number) => {
  if (confirm("Supprimer ce cours ?")) {
   destroy(route("admin.cours.destroy", { cour: id }));

  }
 };

 return (
  <div className="p-6 space-y-6">
   <div className="flex justify-between items-center">
    <h1 className="text-3xl font-bold">Liste des cours</h1>
    <Link
     href={route("category.index")}
     className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
    >
     Categories
    </Link>
    <Link
     href={route("admin.cours.create")}
     className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
    >
     Ajouter un cours
    </Link>
   </div>

   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {cours.map((cour) => (
     <div
      key={cour.id}
      className="bg-white rounded shadow-md p-4 border border-gray-200"
     >
      <img
       src={cour.image}
       alt={cour.titre}
       className="w-full h-48 object-cover rounded"
      />
      <h2 className="text-xl font-semibold mt-4">{cour.titre}</h2>
      <p className="text-gray-600">{cour.description}</p>
      <p className="mt-2 text-sm text-gray-500">
       Catégorie :{" "}
       <span className="font-semibold text-gray-700">
        {cour.category?.name || "Non défini"}
       </span>
      </p>
      <div className="mt-4 flex justify-between">
       <Link
        href={route("admin.cours.edit", { cour: cour.id })}
        className="text-blue-500 hover:underline"
       >
        Modifier
       </Link>
       <button
        onClick={() => handleDelete(cour.id)}
        className="text-red-500 hover:underline"
       >
        Supprimer
       </button>
      </div>
     </div>
    ))}
   </div>
  </div>
 );
}
