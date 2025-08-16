

// // import Navbar from "@/components/NavBar";
// // import Footer from "@/pages/Footer";

// // import { Link, useForm } from "@inertiajs/react";

// // interface Course {
// //  id: number;
// //  titre: string;
// //  description: string;
// //  image: string;
// //  category: {
// //   name: string;
// //  };
// // }

// // interface Props {
// //  cours: Course[];
// // }

// // export default function Index({ cours }: Props) {
// //  const { delete: destroy } = useForm();

// //  const handleDelete = (id: number) => {
// //   if (confirm("Supprimer ce cours ?")) {
// //    destroy(route("admin.cours.destroy", { cour: id }));
// //    // destroy(`/admin/cours/${id}`)

// //   }
// //  };
// //  // const handleDelete = (id: number) => {
// //  //  if (confirm("Supprimer ce cours ?")) {
// //  //   destroy(route("admin.cours.destroy", { cour: id }), {
// //  //    preserveScroll: true,
// //  //    onSuccess: () => {
// //  //     console.log("Cours supprimé avec succès");
// //  //    },
// //  //   });
// //  //  }
// //  // };

// //  return (
// //   <>
// //    <Navbar />
// //    <div className="py-6 mt-12 h-screen px-2 space-y-6">
// //     <div className="flex justify-between items-center">
// //     <h1 className="text-3xl font-bold">Liste des cours</h1>
// //     <Link
// //      href={route("category.index")}
// //      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
// //     >
// //       Categories
// //     </Link>
// //     <Link
// //      href={route("admin.cours.create")}
// //      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
// //     >
// //      Ajouter un cours
// //     </Link>
// //    </div>

// //    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //     {cours.map((cour) => (
// //      <div
// //       key={cour.id}
// //       className="bg-cyan-950 rounded shadow-md p-4 border border-gray-200"
// //      >
// //       <img
// //        src={cour.image}
// //        alt={cour.titre}
// //        className="w-full h-48 object-cover rounded"
// //       />
// //       <h2 className="text-xl font-semibold mt-4">{cour.titre}</h2>
// //       <p className="text-gray-600">{cour.description}</p>
// //       <p className="mt-2 text-sm text-gray-500">
// //        Catégorie :{" "}
// //        <span className="font-semibold text-gray-700">
// //         {cour.category?.name || "Non défini"}
// //        </span>
// //       </p>
// //       <div className="mt-4 flex justify-between">
// //        <Link
// //         href={route("admin.cours.edit", { cour: cour.id })}
// //         className="text-blue-500 hover:underline"
// //        >
// //         Modifier
// //        </Link>
// //        <button
// //         onClick={() => handleDelete(cour.id)}
// //         className="text-red-500 hover:underline"
// //        >
// //         Supprimer
// //        </button>
// //       </div>
// //      </div>
// //     ))}
// //     </div>
// //    <Footer />
// //    </div>
// //   </>
// //  );
// // }


// import { useForm } from "@inertiajs/react";

// interface Course {
//  id: number;
//  titre: string;
//  description: string;
//  image: string;
//  category: {
//   name: string;
//  };
// }

// interface Props {
//  courses: Course[];
//  onEditCourse: (id: number) => void; // callback pour éditer
//  onManageCategories: () => void;
// }

// export default function CourseIndex({ courses, onEditCourse, onManageCategories }: Props) {
//  const { delete: destroy } = useForm();

//  const handleDelete = (id: number) => {
//   if (confirm("Supprimer ce cours ?")) {
//    destroy(`/admin/cours/${id}`, {
//     preserveScroll: true,
//     onSuccess: () => {
//      console.log("Cours supprimé");
//     },
//    });
//   }
//  };

//  return (
//   <div className="space-y-6">
//    <div className="flex justify-between items-center">
//     <h1 className="text-3xl font-bold">Liste des cours</h1>
//     <button
//      onClick={onManageCategories}
//      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//     >
//      Catégories
//     </button>
//     <button
//      onClick={() => onEditCourse(0)}
//      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//     >
//      Ajouter un cours
//     </button>
//    </div>

//    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//     {courses.map((course) => (
//      <div
//       key={course.id}
//       className="bg-cyan-950 rounded shadow-md p-4 border border-gray-200"
//      >
//       <img
//        src={course.image}
//        alt={course.titre}
//        className="w-full h-48 object-cover rounded"
//       />
//       <h2 className="text-xl font-semibold mt-4">{course.titre}</h2>
//       <p className="text-gray-600">{course.description}</p>
//       <p className="mt-2 text-sm text-gray-500">
//        Catégorie: <span className="font-semibold text-gray-700">{course.category?.name || "Non défini"}</span>
//       </p>
//       <div className="mt-4 flex justify-between">
//        <button
//         onClick={() => onEditCourse(course.id)}
//         className="text-blue-500 hover:underline"
//        >
//         Modifier
//        </button>
//        <button
//         onClick={() => handleDelete(course.id)}
//         className="text-red-500 hover:underline"
//        >
//         Supprimer
//        </button>
//       </div>
//      </div>
//     ))}
//    </div>
//   </div>
//  );
// }
