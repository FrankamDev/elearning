import React, { useEffect, useState } from "react";
import axios from "axios";

interface Category {
 id: number;
 name: string;
}

interface Cours {
 id: number;
 title: string;
 description: string;
 category: Category;
}

const CourseCreate: React.FC = () => {
 const [cours, setCours] = useState<Cours[]>([]);
 const [categories, setCategories] = useState<Category[]>([]);
 const [title, setTitle] = useState("");
 const [description, setDescription] = useState("");
 const [categoryId, setCategoryId] = useState<number | "">("");

 const fetchData = async () => {
  const res = await axios.get("/admin/cours");
  setCours(res.data.cours);
  setCategories(res.data.categories);
 };

 useEffect(() => {
  fetchData();
 }, []);

 const handleAdd = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!title || !categoryId) return;

  const res = await axios.post("/admin/cours", {
   title,
   description,
   category_id: categoryId,
  });

  setCours([res.data.cours, ...cours]);
  setTitle("");
  setDescription("");
  setCategoryId("");
 };

 const handleDelete = async (id: number) => {
  await axios.delete(`/admin/cours/${id}`);
  setCours(cours.filter(c => c.id !== id));
 };

 return (
  <div className="max-w-4xl mx-auto p-6">
   <h1 className="text-2xl font-bold mb-4">Gestion des cours</h1>

   <form
    className=" shadow p-6 rounded mb-6"
    onSubmit={handleAdd}
   >
    <div className="mb-4">
     <label className="block text-sm font-medium mb-1">Titre</label>
     <input
      type="text"
      value={title}
      onChange={e => setTitle(e.target.value)}
      className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Titre du cours"
     />
    </div>

    <div className="mb-4">
     <label className="block text-sm font-medium mb-1">Description</label>
     <textarea
      value={description}
      onChange={e => setDescription(e.target.value)}
      className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Description du cours"
     />
    </div>

    <div className="mb-4">
     <label className="block text-sm font-medium mb-1">Catégorie</label>
     <select
      value={categoryId}
      onChange={e => setCategoryId(Number(e.target.value))}
      className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
     >
      <option value="">Sélectionner une catégorie</option>
      {categories.map(cat => (
       <option key={cat.id} value={cat.id}>
        {cat.name}
       </option>
      ))}
     </select>
    </div>

    <button
     type="submit"
     className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
    >
     Ajouter
    </button>
   </form>

   <div>
    <h2 className="text-xl font-semibold mb-3">Tous les cours</h2>
    <div className="space-y-4">
     {cours.map(c => (
      <div
       key={c.id}
       className="flex justify-between items-center  shadow p-4 rounded"
      >
       <div>
        <h3 className="font-bold text-lg">{c.title}</h3>
        <p className="text-gray-600">{c.description}</p>
        <span className="text-sm text-gray-500">
         Catégorie: {c.category?.name}
        </span>
       </div>
       <button
        onClick={() => handleDelete(c.id)}
        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
       >
        Supprimer
       </button>
      </div>
     ))}
    </div>
   </div>
  </div>
 );
};

export default CourseCreate;
