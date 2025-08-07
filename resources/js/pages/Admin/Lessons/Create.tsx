import { useForm } from "@inertiajs/react";

export default function Create({ cours, categories }) {
 const { data, setData, post, processing, errors } = useForm({
  title: "",
  video_url: "",
  content: "",
  cours_id: cours.id,
 });

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  post(route("admin.lessons.store"));
 };

 return (
  <div className="p-6 max-w-3xl mx-auto bg-white rounded shadow">
   <h2 className="text-2xl font-bold mb-4">Ajouter une leçon</h2>

   <div className="mb-4">
    <p><strong>Catégorie :</strong> {categories.name}</p>
    <p><strong>Cours :</strong> {cours.title}</p>
   </div>

   <form onSubmit={handleSubmit} className="space-y-4">
    <div>
     <label className="block font-medium">Titre</label>
     <input
      type="text"
      value={data.title}
      onChange={(e) => setData("title", e.target.value)}
      className="w-full p-2 border rounded"
     />
     {errors.title && <div className="text-red-600 text-sm">{errors.title}</div>}
    </div>

    <div>
     <label className="block font-medium">Lien vidéo</label>
     <input
      type="text"
      value={data.video_url}
      onChange={(e) => setData("video_url", e.target.value)}
      className="w-full p-2 border rounded"
     />
     {errors.video_url && <div className="text-red-600 text-sm">{errors.video_url}</div>}
    </div>

    <div>
     <label className="block font-medium">Contenu</label>
     <textarea
      value={data.content}
      onChange={(e) => setData("content", e.target.value)}
      className="w-full p-2 border rounded"
     />
     {errors.content && <div className="text-red-600 text-sm">{errors.content}</div>}
    </div>

    <button
     type="submit"
     disabled={processing}
     className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
    >
     Enregistrer
    </button>
   </form>
  </div>
 );
}
