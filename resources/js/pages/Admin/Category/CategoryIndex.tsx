import { useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import axios from "axios";

export default function CategoryIndex() {
 const { categories: initialCategories } = usePage().props;
 const [categories, setCategories] = useState(initialCategories);
 const [adding, setAdding] = useState(false);
 const [editing, setEditing] = useState(null); // id de la catégorie en cours d'édition
 const [form, setForm] = useState({ name: "", image: null });
 const [errors, setErrors] = useState({});
 const [processing, setProcessing] = useState(false);

 // Gérer champs texte
 const handleChange = (e) => {
  setForm({ ...form, [e.target.name]: e.target.value });
 };

 // Gérer image
 const handleFileChange = (e) => {
  setForm({ ...form, image: e.target.files[0] });
 };

 // Ajouter catégorie
 const handleAdd = (e) => {
  e.preventDefault();
  setProcessing(true);
  setErrors({});

  const formData = new FormData();
  formData.append("name", form.name);
  if (form.image) {
   formData.append("image", form.image);
  }

  axios.post("/admin/category", formData)
   .then(res => {
    setCategories(prev => [...prev, res.data]);
    setAdding(false);
    setForm({ name: "", image: null });
   })
   .catch(err => {
    if (err.response?.data?.errors) {
     setErrors(err.response.data.errors);
    }
   })
   .finally(() => setProcessing(false));
 };

 // Supprimer catégorie
 const handleDelete = (id) => {
  if (!confirm("Supprimer cette catégorie ?")) return;
  setProcessing(true);

  axios.delete(`/admin/category/${id}`)
   .then(() => {
    setCategories(prev => prev.filter(cat => cat.id !== id));
   })
   .finally(() => setProcessing(false));
 };

 // Préparer modification
 const startEdit = (cat) => {
  setEditing(cat.id);
  setForm({ name: cat.name, image: null });
 };

 // Annuler modification
 const cancelEdit = () => {
  setEditing(null);
  setForm({ name: "", image: null });
  setErrors({});
 };

 // Sauvegarder modification
 const handleUpdate = (e) => {
  e.preventDefault();
  if (!editing) return;

  setProcessing(true);
  setErrors({});

  const formData = new FormData();
  formData.append("name", form.name);
  if (form.image) {
   formData.append("image", form.image);
  }
  formData.append("_method", "PUT");

  axios.post(`/admin/category/${editing}`, formData)
   .then(res => {
    setCategories(prev =>
     prev.map(cat => (cat.id === editing ? res.data : cat))
    );
    cancelEdit();
   })
   .catch(err => {
    if (err.response?.data?.errors) {
     setErrors(err.response.data.errors);
    }
   })
   .finally(() => setProcessing(false));
 };

 return (
  <div className="p-6">
   <div className="flex justify-between items-center mb-4">
    <h1 className="text-2xl font-bold">Catégories</h1>
    <button
     onClick={() => setAdding(true)}
     className="bg-blue-600 text-white px-4 py-2 rounded"
    >
     Ajouter
    </button>
   </div>

   {/* Formulaire ajout */}
   {adding && (
    <form onSubmit={handleAdd} className="mb-4 space-y-3 border p-4 rounded">
     <input
      type="text"
      name="name"
      value={form.name}
      onChange={handleChange}
      placeholder="Nom de la catégorie"
      className="border rounded px-3 py-2 w-full"
     />
     {errors.name && <p className="text-red-600">{errors.name}</p>}

     <input
      type="file"
      name="image"
      onChange={handleFileChange}
      className="border rounded px-3 py-2 w-full"
     />
     {errors.image && <p className="text-red-600">{errors.image}</p>}

     <div className="flex space-x-3">
      <button
       type="submit"
       disabled={processing}
       className="bg-green-600 text-white px-4 py-2 rounded"
      >
       Enregistrer
      </button>
      <button
       type="button"
       onClick={() => setAdding(false)}
       className="bg-gray-400 text-white px-4 py-2 rounded"
      >
       Annuler
      </button>
     </div>
    </form>
   )}

   {/* Liste catégories */}
   <div className="grid grid-cols-3 gap-4">
    {categories.map(cat => (
     <div key={cat.id} className="border rounded p-4 flex flex-col items-center">
      {cat.image && (
       <img
        src={`/storage/${cat.image}`}
        alt={cat.name}
        className="w-24 h-24 object-cover mb-2 rounded"
       />
      )}

      {/* Mode édition */}
      {editing === cat.id ? (
       <form onSubmit={handleUpdate} className="w-full space-y-2">
        <input
         type="text"
         name="name"
         value={form.name}
         onChange={handleChange}
         className="border rounded px-3 py-2 w-full"
        />
        {errors.name && <p className="text-red-600">{errors.name}</p>}

        <input
         type="file"
         name="image"
         onChange={handleFileChange}
         className="border rounded px-3 py-2 w-full"
        />
        {errors.image && <p className="text-red-600">{errors.image}</p>}

        <div className="flex space-x-2">
         <button
          type="submit"
          disabled={processing}
          className="bg-green-600 text-white px-3 py-1 rounded"
         >
          Sauvegarder
         </button>
         <button
          type="button"
          onClick={cancelEdit}
          className="bg-gray-400 text-white px-3 py-1 rounded"
         >
          Annuler
         </button>
        </div>
       </form>
      ) : (
       <>
        <h2 className="font-bold">{cat.name}</h2>
        <p className="text-sm text-gray-600">{cat.cours_count} cours</p>
        <div className="flex mt-2 space-x-2">
         <button
          onClick={() => startEdit(cat)}
          className="bg-yellow-500 text-white px-3 py-1 rounded"
         >
          Modifier
         </button>
         <button
          onClick={() => handleDelete(cat.id)}
          className="bg-red-600 text-white px-3 py-1 rounded"
         >
          Supprimer
         </button>
        </div>
       </>
      )}
     </div>
    ))}
   </div>
   <Link href="/categories/" className="bg-blue-600 mt-14 text-white px-4 py-2 rounded hover:bg-blue-700"> Retour à la liste des catégories</Link>
  </div>
 );
}
