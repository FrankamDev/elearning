import { useForm } from "@inertiajs/react";
import { Link } from "@inertiajs/react";

export default function CourseEdit({ cours, categories }) {
 const { data, setData, put, processing, errors } = useForm({
  title: cours.title || "",
  description: cours.description || "",
  category_id: cours.category_id || "",
  video_url: cours.video_url || "",
 });

 function handleSubmit(e) {
  e.preventDefault();
  put(`/admin/cours/${cours.id}`);
 }

 return (
  <div className="p-6 max-w-lg mx-auto">
   <h1 className="text-2xl font-bold mb-6">Modifier le cours</h1>
   <form onSubmit={handleSubmit} className="space-y-6">
    <div>
     <label htmlFor="title" className="block font-semibold mb-1">
      Titre
     </label>
     <input
      type="text"
      id="title"
      value={data.title}
      onChange={(e) => setData("title", e.target.value)}
      className="w-full border rounded px-3 py-2"
     />
     {errors.title && <p className="text-red-600 mt-1">{errors.title}</p>}
    </div>

    <div>
     <label htmlFor="description" className="block font-semibold mb-1">
      Description
     </label>
     <textarea
      id="description"
      value={data.description}
      onChange={(e) => setData("description", e.target.value)}
      rows={4}
      className="w-full border rounded px-3 py-2"
     />
     {errors.description && (
      <p className="text-red-600 mt-1">{errors.description}</p>
     )}
    </div>

    <div>
     <label htmlFor="category_id" className="block font-semibold mb-1">
      Catégorie
     </label>
     <select
      id="category_id"
      value={data.category_id}
      onChange={(e) => setData("category_id", e.target.value)}
      className="w-full border rounded px-3 py-2"
     >
      <option value=""> -- Choisissez une catégorie --</option>
      {categories.map((cat) => (
       <option key={cat.id} value={cat.id}>
        {cat.name}
       </option>
      ))}
     </select>
     {errors.category_id && (
      <p className="text-red-600 mt-1">{errors.category_id}</p>
     )}
    </div>

    <div>
     <label htmlFor="video_url" className="block font-semibold mb-1">
      URL de la vidéo
     </label>
     <input
      type="url"
      id="video_url"
      value={data.video_url}
      onChange={(e) => setData("video_url", e.target.value)}
      className="w-full border rounded px-3 py-2"
      placeholder="https://youtube.com/from_scratch"
     />
     {errors.video_url && (
      <p className="text-red-600 mt-1">{errors.video_url}</p>
     )}
    </div>

    <div className="flex space-x-4">
     <button
      type="submit"
      disabled={processing}
      className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
     >
      Enregistrer
     </button>
     <Link
      href="/admin/cours"
      className="text-gray-600 px-4 py-2 rounded hover:underline"
     >
      Annuler
     </Link>
    </div>
   </form>
  </div>
 );
}
