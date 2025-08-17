import React, { useState, useEffect } from "react";
import { usePage, router } from "@inertiajs/react";

export default function LessonCrud() {
 const { cours = [], flash } = usePage().props;
 useEffect(() => {
  console.log('Props cours reçues : ', cours);
 }, [cours]);

 const [form, setForm] = useState({
  cours_id: "",
  title: "",
  content: "",
  video_file: null,
 });

 const [errors, setErrors] = useState({});

 const handleSubmit = async (e) => {
  e.preventDefault();
  setErrors({});

  const formData = new FormData();
  formData.append("cours_id", form.cours_id);
  formData.append("title", form.title);
  formData.append("content", form.content);
  if (form.video_file) formData.append("video_file", form.video_file);

  router.post("/admin/lessons", formData, {
   onError: (err) => setErrors(err),
   onSuccess: () => {
    setForm({ cours_id: "", title: "", content: "", video_file: null });
    document.getElementById("video_file").value = "";
   },
  });
 };

 const selectedCoursTitle = form.cours_id
  ? cours.find((c) => c.id === Number(form.cours_id))?.title
  : "";

 if (cours.length === 0) {
  return <p className="p-6 text-center text-gray-500">Aucun cours disponible pour ajouter une leçon.</p>;
 }

 console.log('Props cours reçues : ', cours);
 return (
  <div className="p-6 max-w-lg mx-auto bg-white shadow-md rounded-lg">
   {flash?.success && (
    <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
     {flash.success}
    </div>
   )}
   <h1 className="text-2xl font-bold mb-6 text-gray-800">
    Ajouter une leçon {selectedCoursTitle && `au cours : ${selectedCoursTitle}`}
   </h1>

   <form onSubmit={handleSubmit} className="space-y-4">
    <div>
     <label className="block text-sm font-medium text-gray-700">Cours</label>
     <select
      value={form.cours_id}
      onChange={(e) => setForm({ ...form, cours_id: e.target.value })}
      className="w-full border-gray-300 p-2 rounded-md focus:ring-blue-500 focus:border-blue-500"
      required
     >
      <option value="">-- Choisir un cours --</option>
      {cours.map((c) => (
       <option key={c.id} value={c.id}>
        {c.title}
       </option>
      ))}
     </select>
     {errors.cours_id && <p className="text-red-500 text-sm mt-1">{errors.cours_id}</p>}
    </div>

    <div>
     <label className="block text-sm font-medium text-gray-700">Titre</label>
     <input
      type="text"
      value={form.title}
      onChange={(e) => setForm({ ...form, title: e.target.value })}
      className="w-full border-gray-300 p-2 rounded-md focus:ring-blue-500 focus:border-blue-500"
      required
     />
     {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
    </div>

    <div>
     <label className="block text-sm font-medium text-gray-700">Contenu (facultatif)</label>
     <textarea
      value={form.content}
      onChange={(e) => setForm({ ...form, content: e.target.value })}
      className="w-full border-gray-300 p-2 rounded-md focus:ring-blue-500 focus:border-blue-500"
      rows={4}
     />
     {errors.content && <p className="text-red-500 text-sm mt-1">{errors.content}</p>}
    </div>

    <div>
     <label className="block text-sm font-medium text-gray-700">Vidéo (facultatif)</label>
     <input
      id="video_file"
      type="file"
      accept="video/*"
      onChange={(e) => setForm({ ...form, video_file: e.target.files ? e.target.files[0] : null })}
      className="w-full text-gray-700"
     />
     {errors.video_file && <p className="text-red-500 text-sm mt-1">{errors.video_file}</p>}
    </div>

    <button
     type="submit"
     className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
    >
     Ajouter la leçon
    </button>
   </form>
  </div>
 );
}