import { useForm } from "@inertiajs/react";

export default function Create({ cours, categories }) {
 const { data, setData, post, processing, errors } = useForm({
  title: "",
  video_file: null,
  content: "",
  cours_id: "",
 });

 const handleSubmit = (e) => {
  e.preventDefault();
  post(route("admin.lessons.store"), {
   preserveScroll: true,
   forceFormData: true, // 🔥 Nécessaire pour envoyer un fichier
  });
 };

 return (
  <div className="p-6 max-w-3xl mx-auto rounded shadow">
   <h2 className="text-2xl font-bold mb-6">Ajouter une leçon</h2>

   <form
    onSubmit={handleSubmit}
    className="space-y-6"
    encType="multipart/form-data"
   >
    {/* Sélection du cours */}
    <div>
     <label className="block font-medium mb-1">Cours</label>
     <select
      value={data.cours_id}
      onChange={(e) => setData("cours_id", e.target.value)}
      className="w-full p-2 border rounded"
      required
     >
      <option value="">-- Choisissez un cours --</option>
      {cours.map((cour) => (
       <option key={cour.id} value={cour.id}>
        {cour.title}
       </option>
      ))}
     </select>
     {errors.cours_id && (
      <div className="text-red-600 text-sm mt-1">{errors.cours_id}</div>
     )}
    </div>

    {/* Titre */}
    <div>
     <label className="block font-medium mb-1">Titre</label>
     <input
      type="text"
      value={data.title}
      onChange={(e) => setData("title", e.target.value)}
      className="w-full p-2 border rounded"
      required
     />
     {errors.title && (
      <div className="text-red-600 text-sm mt-1">{errors.title}</div>
     )}
    </div>

    {/* Vidéo */}
    <div>
     <label className="block font-medium mb-1">Vidéo</label>
     <input
      type="file"
      accept="video/*"
      onChange={(e) => setData("video_file", e.target.files?.[0] ?? null)}
      className="w-full p-2 border rounded"
      required
     />
     {errors.video_file && (
      <div className="text-red-600 text-sm mt-1">{errors.video_file}</div>
     )}
    </div>

    {/* Contenu */}
    <div>
     <label className="block font-medium mb-1">Contenu</label>
     <textarea
      value={data.content}
      onChange={(e) => setData("content", e.target.value)}
      className="w-full p-2 border rounded"
     />
     {errors.content && (
      <div className="text-red-600 text-sm mt-1">{errors.content}</div>
     )}
    </div>

    {/* Bouton */}
    <button
     type="submit"
     disabled={processing}
     className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
    >
     Enregistrer
    </button>
   </form>
  </div>
 );
}
