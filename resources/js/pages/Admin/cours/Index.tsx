import { usePage } from "@inertiajs/react";

export default function CourseIndex() {
 const { cours } = usePage().props; // récupère les cours passés par Laravel

 return (
  <div>
   <h2>Liste des cours</h2>
   <ul>
    {cours.map((c) => (
     <li key={c.id}>
      <strong>{c.title}</strong> - {c.category?.name || "Pas de catégorie"}
     </li>
    ))}
   </ul>
  </div>
 );
}
