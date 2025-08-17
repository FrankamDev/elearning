import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Link } from "@inertiajs/react";

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
 const [editingId, setEditingId] = useState<number | null>(null);
 const [editTitle, setEditTitle] = useState("");
 const [editDescription, setEditDescription] = useState("");
 const [editCategoryId, setEditCategoryId] = useState<number | "">("");

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
  setCours(cours.filter((c) => c.id !== id));
 };

 const startEdit = (c: Cours) => {
  setEditingId(c.id);
  setEditTitle(c.title);
  setEditDescription(c.description);
  setEditCategoryId(c.category?.id || "");
 };

 const handleUpdate = async (id: number) => {
  if (!editTitle || !editCategoryId) return;

  const res = await axios.put(`/admin/cours/${id}`, {
   title: editTitle,
   description: editDescription,
   category_id: editCategoryId,
  });

  setCours(cours.map((c) => (c.id === id ? res.data.cours : c)));
  setEditingId(null);
 };

 return (
  <div className="min-h-screen bg-gray-900 p-6 md:p-12">
   <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-10 text-center">
    Gestion des cours
   </h1>

   <div className="flex flex-col md:flex-row gap-8">
    {/* Formulaire */}
    <motion.div
     className="md:w-1/3 bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
     initial={{ opacity: 0, x: -50 }}
     animate={{ opacity: 1, x: 0 }}
     transition={{ duration: 0.5 }}
    >
     <h2 className="text-xl font-bold mb-4 text-green-400">Ajouter un cours</h2>
     <form onSubmit={handleAdd} className="space-y-4">
      <div>
       <label className="block text-gray-300 font-medium mb-1">Titre</label>
       <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Titre du cours"
        className="w-full px-3 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
       />
      </div>

      <div>
       <label className="block text-gray-300 font-medium mb-1">Description</label>
       <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description du cours"
        className="w-full px-3 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
       />
      </div>

      <div>
       <label className="block text-gray-300 font-medium mb-1">Catégorie</label>
       <select
        value={categoryId}
        onChange={(e) => setCategoryId(Number(e.target.value))}
        className="w-full px-3 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
       >
        <option value="">Sélectionner une catégorie</option>
        {categories.map((cat) => (
         <option key={cat.id} value={cat.id}>
          {cat.name}
         </option>
        ))}
       </select>
      </div>

      <button className="w-full bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-400 transition-colors">
       Ajouter
      </button>
     </form>
    </motion.div>

    {/* Liste des cours */}
    <motion.div
     className="md:w-2/3 flex flex-col gap-6"
     initial={{ opacity: 0, x: 50 }}
     animate={{ opacity: 1, x: 0 }}
     transition={{ duration: 0.5 }}
    >
     {cours.map((c, index) => (
      <motion.div
       key={c.id}
       initial={{ opacity: 0, y: 20 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ delay: index * 0.1 }}
       className="bg-gray-800 rounded-2xl shadow-md p-6 flex flex-col md:flex-row justify-between items-start md:items-center hover:shadow-xl transition-shadow duration-300"
      >
       {editingId === c.id ? (
        <div className="flex flex-col md:flex-row md:space-x-4 flex-1 w-full mb-4 md:mb-0">
         <input
          type="text"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
          className="border border-gray-600 rounded-lg px-2 py-1 bg-gray-700 text-white w-full"
         />
         <input
          type="text"
          value={editDescription}
          onChange={(e) => setEditDescription(e.target.value)}
          className="border border-gray-600 rounded-lg px-2 py-1 bg-gray-700 text-white w-full"
         />
         <select
          value={editCategoryId}
          onChange={(e) => setEditCategoryId(Number(e.target.value))}
          className="border border-gray-600 rounded-lg px-2 py-1 bg-gray-700 text-white w-full"
         >
          <option value="">Sélectionner</option>
          {categories.map((cat) => (
           <option key={cat.id} value={cat.id}>
            {cat.name}
           </option>
          ))}
         </select>
        </div>
       ) : (
        <div className="flex-1 mb-4 md:mb-0">
         <h3 className="text-lg md:text-xl font-bold text-white">{c.title}</h3>
         <p className="text-gray-300">{c.description}</p>
         <span className="text-sm text-gray-400">
          Catégorie: {c.category?.name}
         </span>
        </div>
       )}

       <div className="flex space-x-3">
        {editingId === c.id ? (
         <button
          onClick={() => handleUpdate(c.id)}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-400 transition-colors"
         >
          Sauvegarder
         </button>
        ) : (
         <button
          onClick={() => startEdit(c)}
          className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-400 transition-colors"
         >
          Modifier
         </button>
        )}
        <button
         onClick={() => handleDelete(c.id)}
         className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-400 transition-colors"
        >
         Supprimer
        </button>
       </div>
      </motion.div>
     ))}
    </motion.div>
   </div>
   <Link href="/categories">Liste des categories</Link>
  </div>
 );
};

export default CourseCreate;
