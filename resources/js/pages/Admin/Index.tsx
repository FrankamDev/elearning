import React, { useState } from "react";
import { router, usePage } from "@inertiajs/react";

export default function CoursIndex() {
 const { cours, categories, filters } = usePage().props;
 const [search, setSearch] = useState(filters.search || "");
 const [form, setForm] = useState({
  title: "",
  description: "",
  category_id: "",
 });
 const [editId, setEditId] = useState(null);

 const handleSearch = (e) => {
  setSearch(e.target.value);
  router.get("/cours", { search: e.target.value }, { preserveState: true, replace: true });
 };

 const handleSubmit = (e) => {
  e.preventDefault();
  if (editId) {
   router.put(`/cours/${editId}`, form);
   setEditId(null);
  } else {
   router.post("/cours", form);
  }
  setForm({ title: "", description: "", category_id: "" });
 };

 const handleEdit = (cours) => {
  setEditId(cours.id);
  setForm({
   title: cours.title,
   description: cours.description,
   category_id: cours.category_id,
  });
 };

 const handleDelete = (id) => {
  if (confirm("Supprimer ce cours ?")) {
   router.delete(`/cours/${id}`);
  }
 };

 return (
  <div className="p-6">
   <h1 className="text-2xl font-bold mb-4">Gestion des Cours</h1>

   {/* Barre de recherche */}
   <input
    type="text"
    value={search}
    onChange={handleSearch}
    placeholder="Rechercher un cours..."
    className="border p-2 mb-4 w-full"
   />

   {/* Formulaire */}
   <form onSubmit={handleSubmit} className="mb-6 space-y-2">
    <input
     type="text"
     placeholder="Titre"
     value={form.title}
     onChange={(e) => setForm({ ...form, title: e.target.value })}
     className="border p-2 w-full"
     required
    />
    <textarea
     placeholder="Description"
     value={form.description}
     onChange={(e) => setForm({ ...form, description: e.target.value })}
     className="border p-2 w-full"
    />
    <select
     value={form.category_id}
     onChange={(e) => setForm({ ...form, category_id: e.target.value })}
     className="border p-2 w-full"
     required
    >
     <option value="">-- Choisir une catégorie --</option>
     {categories.map((cat) => (
      <option key={cat.id} value={cat.id}>
       {cat.name}
      </option>
     ))}
    </select>
    <button
     type="submit"
     className="bg-blue-600 text-white px-4 py-2 rounded"
    >
     {editId ? "Modifier" : "Ajouter"} le cours
    </button>
   </form>

   {/* Liste des cours */}
   <table className="w-full border">
    <thead>
     <tr className="bg-gray-200">
      <th className="border p-2">Titre</th>
      <th className="border p-2">Catégorie</th>
      <th className="border p-2">Description</th>
      <th className="border p-2">Actions</th>
     </tr>
    </thead>
    <tbody>
     {cours.map((c) => (
      <tr key={c.id}>
       <td className="border p-2">{c.title}</td>
       <td className="border p-2">{c.category?.name}</td>
       <td className="border p-2">{c.description}</td>
       <td className="border p-2 space-x-2">
        <button
         onClick={() => handleEdit(c)}
         className="bg-yellow-500 text-white px-2 py-1 rounded"
        >
         Modifier
        </button>
        <button
         onClick={() => handleDelete(c.id)}
         className="bg-red-600 text-white px-2 py-1 rounded"
        >
         Supprimer
        </button>
       </td>
      </tr>
     ))}
    </tbody>
   </table>
  </div>
 );
}
