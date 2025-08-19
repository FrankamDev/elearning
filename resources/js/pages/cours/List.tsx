// import { Link } from '@inertiajs/react';
// import { usePage } from '@inertiajs/react';
// export default function List({ cours }) {
//  const { cours } = usePage().props;
//  return (
//   <div className="p-8">
//    <h1 className="text-2xl font-bold mb-4">Tous les parcours......</h1>
//    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//     {cours.map((cour) => (
//      <Link
//       href={`/cours/${cour.id}`}
//       key={cour.id}
//       className="p-4 bg-white shadow rounded hover:bg-green-50"
//      >
//       <h3 className="text-lg font-semibold">{cour.title}</h3>
//       <p className="text-sm text-gray-500">{cour.category?.name}</p>
//      </Link>
//     ))}
//    </div>
//   </div>
//  );
// }
