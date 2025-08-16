import { useState, useEffect } from "react";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/react";
import { Trash2Icon, Edit3Icon, SaveIcon, Loader2Icon, RefreshCcwIcon } from "lucide-react";

export default function CourseCreate() {
 const { cours: coursFromBackend, categories: categoriesFromBackend, flash } = usePage().props;

 const [cours, setCours] = useState(coursFromBackend || []);
 const [categories] = useState(categoriesFromBackend || []);
 const [selectedCourseId, setSelectedCourseId] = useState(cours[0]?.id || null);
 const [editCourse, setEditCourse] = useState(null);
 const [isEditing, setIsEditing] = useState(false);
 const [showAddForm, setShowAddForm] = useState(false);
 const [newCourse, setNewCourse] = useState({
  title: "",
  description: "",
  category_id: "",
  video_url: "",
 });
 const [message, setMessage] = useState(flash?.success || "");
 const [loading, setLoading] = useState(false);
 const [errors, setErrors] = useState({});

 useEffect(() => {
  const c = cours.find((c) => c.id === selectedCourseId);
  setEditCourse(c ? { ...c } : null);
  setIsEditing(false);
 }, [selectedCourseId, cours]);

 useEffect(() => {
  if (flash?.success) {
   setMessage(flash.success);
   const timer = setTimeout(() => setMessage(""), 3000);
   return () => clearTimeout(timer);
  }
 }, [flash]);

 // Ajouter un cours avec redirection Inertia
 const handleAddCourse = (e) => {
  e.preventDefault();
  setLoading(true);
  setErrors({});

  Inertia.post("/admin/cours", newCourse, {
   onSuccess: () => {
    // Redirection automatique vers index qui mettra à jour la liste
    setMessage("Cours ajouté avec succès !");
    setShowAddForm(false);
    setNewCourse({ title: "", description: "", category_id: "", video_url: "" });
    setLoading(false);
   },
   onError: (errs) => {
    setErrors(errs);
    setLoading(false);
   },
  });
 };

 const handleSave = () => {
  if (!editCourse) return;
  setLoading(true);
  setErrors({});

  Inertia.put(`/admin/cours/${editCourse.id}`, editCourse, {
   onSuccess: () => {
    setMessage("Cours mis à jour !");
    setIsEditing(false);
    setLoading(false);
   },
   onError: (errs) => {
    setErrors(errs);
    setLoading(false);
   },
  });
 };

 const handleDelete = (id) => {
  if (!id) return;
  setLoading(true);

  Inertia.delete(`/admin/cours/${id}`, {
   onSuccess: () => {
    setMessage("Cours supprimé !");
    setLoading(false);
   },
  });
 };

 return (
  <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col">
   {message && (
    <div className="fixed top-4 right-4 bg-green-600 text-white px-4 py-2 rounded shadow-lg z-50">
     {message}
    </div>
   )}

   <header className="sticky top-0 bg-white dark:bg-gray-800 shadow-md flex items-center px-6 py-4 justify-between z-10">
    <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
     Gestion des cours
    </h1>
    <button
     onClick={() => Inertia.get("/admin/cours", {}, { preserveState: true })}
     className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
    >
     <RefreshCcwIcon className="w-5 h-5" />
     {loading ? "Chargement..." : "Rafraîchir"}
    </button>
   </header>

   <main className="flex-grow flex flex-col md:flex-row p-4 gap-4">
    {/* Liste des cours */}
    <section className="md:w-1/3 bg-white dark:bg-gray-800 rounded-2xl shadow-lg flex flex-col p-4">
     <button
      onClick={() => setShowAddForm(true)}
      className="mb-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
     >
      Ajouter un cours
     </button>

     {showAddForm && (
      <form
       onSubmit={handleAddCourse}
       className="bg-gray-50 dark:bg-gray-700 rounded p-4 mb-4 shadow"
      >
       <input
        type="text"
        placeholder="Titre"
        value={newCourse.title}
        onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
        className="w-full mb-2 rounded border px-3 py-2"
        required
       />
       <textarea
        placeholder="Description"
        value={newCourse.description}
        onChange={(e) =>
         setNewCourse({ ...newCourse, description: e.target.value })
        }
        className="w-full mb-2 rounded border px-3 py-2"
       />
       <select
        value={newCourse.category_id}
        onChange={(e) =>
         setNewCourse({ ...newCourse, category_id: e.target.value })
        }
        className="w-full mb-2 rounded border px-3 py-2"
        required
       >
        <option value="">-- Choisissez une catégorie --</option>
        {categories.map((cat) => (
         <option key={cat.id} value={cat.id}>
          {cat.name}
         </option>
        ))}
       </select>
       <input
        type="url"
        placeholder="URL de la vidéo"
        value={newCourse.video_url}
        onChange={(e) => setNewCourse({ ...newCourse, video_url: e.target.value })}
        className="w-full mb-2 rounded border px-3 py-2"
       />
       <div className="flex justify-end space-x-2">
        <button
         type="button"
         onClick={() => setShowAddForm(false)}
         className="px-4 py-2 rounded border hover:bg-gray-100"
        >
         Annuler
        </button>
        <button
         type="submit"
         className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
         {loading ? <Loader2Icon className="w-5 h-5 animate-spin" /> : "Ajouter"}
        </button>
       </div>
      </form>
     )}

     <div className="flex-grow overflow-y-auto">
      <ul>
       {cours.map((c) => (
        <li
         key={c.id}
         onClick={() => setSelectedCourseId(c.id)}
         className={`cursor-pointer flex flex-col gap-1 px-4 py-3 border-b border-gray-200 dark:border-gray-700 hover:bg-indigo-100 dark:hover:bg-indigo-700 transition ${c.id === selectedCourseId ? "bg-indigo-200 dark:bg-indigo-900 font-semibold" : "font-normal"
          }`}
        >
         <p className="truncate">{c.title}</p>
         <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{c.category?.name}</p>
        </li>
       ))}
      </ul>
     </div>
    </section>

    {/* Détails / édition */}
    <section className="md:w-2/3 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col">
     {!editCourse ? (
      <p className="text-gray-600 dark:text-gray-400 text-center mt-20">
       Sélectionnez un cours pour voir les détails.
      </p>
     ) : (
      <>
       <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
         {editCourse.title}
        </h3>
        {isEditing ? (
         <button
          onClick={handleSave}
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded shadow transition"
         >
          {loading ? <Loader2Icon className="w-5 h-5 animate-spin" /> : <SaveIcon className="w-5 h-5" />}
          Sauvegarder
         </button>
        ) : (
         <button
          onClick={() => setIsEditing(true)}
          className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded shadow transition"
         >
          <Edit3Icon className="w-5 h-5" />
          Modifier
         </button>
        )}
       </div>

        <form
         onSubmit={(e) => {
          e.preventDefault();
          handleSave();
         }}
         className="flex-grow space-y-4"
        >
         <div>
          <label>Titre</label>
          <input
           type="text"
           disabled={!isEditing}
           value={editCourse.title}
           onChange={(e) => setEditCourse({ ...editCourse, title: e.target.value })}
           className="w-full rounded border px-3 py-2"
          />
         </div>
         <div>
          <label>Description</label>
          <textarea
           disabled={!isEditing}
           value={editCourse.description}
           onChange={(e) =>
            setEditCourse({ ...editCourse, description: e.target.value })
           }
           className="w-full rounded border px-3 py-2"
          />
         </div>
         <div>
          <label>Catégorie</label>
          <select
           disabled={!isEditing}
           value={editCourse.category_id}
           onChange={(e) =>
            setEditCourse({ ...editCourse, category_id: e.target.value })
           }
           className="w-full rounded border px-3 py-2"
          >
           {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
             {cat.name}
            </option>
           ))}
          </select>
         </div>
         <div>
          <label>URL vidéo</label>
          <input
           type="url"
           disabled={!isEditing}
           value={editCourse.video_url}
           onChange={(e) =>
            setEditCourse({ ...editCourse, video_url: e.target.value })
           }
           className="w-full rounded border px-3 py-2"
          />
         </div>
        </form>

        <div className="mt-6 flex justify-end">
         <button
          onClick={() => handleDelete(editCourse.id)}
          className="flex items-center gap-2 px-6 py-2 rounded font-semibold shadow text-white bg-red-600 hover:bg-red-700 transition"
         >
          {loading ? <Loader2Icon className="w-5 h-5 animate-spin" /> : <Trash2Icon className="w-5 h-5" />}
          Supprimer
         </button>
        </div>
      </>
     )}
    </section>
   </main>
  </div>
 );
}
