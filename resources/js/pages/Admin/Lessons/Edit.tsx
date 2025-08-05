import { useForm } from '@inertiajs/react';
import { useEffect } from 'react';

export default function Edit({ lesson, courses }) {
 const { data, setData, put, processing, errors } = useForm({
  cours_id: lesson.cours_id,
  title: lesson.title,
  video_url: lesson.video_url,
  content: lesson.content || '',
 });

 const handleSubmit = (e) => {
  e.preventDefault();
  put(route('admin.lessons.update', lesson.id));
 };

 return (
  <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-xl mt-10">
   <h1 className="text-2xl font-bold mb-6">Modifier la leçon</h1>
   <form onSubmit={handleSubmit} className="space-y-4">
    <div>
     <label className="block mb-1 font-medium">Cours associé</label>
     <select
      value={data.cours_id}
      onChange={(e) => setData('cours_id', e.target.value)}
      className="w-full border border-gray-300 rounded-lg px-4 py-2"
     >
      <option value="">-- Sélectionner un cours --</option>
      {courses.map((course) => (
       <option key={course.id} value={course.id}>{course.title}</option>
      ))}
     </select>
     {errors.cours_id && <p className="text-red-500 text-sm mt-1">{errors.cours_id}</p>}
    </div>

    <div>
     <label className="block mb-1 font-medium">Titre</label>
     <input
      type="text"
      value={data.title}
      onChange={(e) => setData('title', e.target.value)}
      className="w-full border border-gray-300 rounded-lg px-4 py-2"
     />
     {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
    </div>

    <div>
     <label className="block mb-1 font-medium">URL de la vidéo</label>
     <input
      type="url"
      value={data.video_url}
      onChange={(e) => setData('video_url', e.target.value)}
      className="w-full border border-gray-300 rounded-lg px-4 py-2"
     />
     {errors.video_url && <p className="text-red-500 text-sm mt-1">{errors.video_url}</p>}
    </div>

    <div>
     <label className="block mb-1 font-medium">Contenu</label>
     <textarea
      value={data.content}
      onChange={(e) => setData('content', e.target.value)}
      className="w-full border border-gray-300 rounded-lg px-4 py-2"
      rows="6"
     />
     {errors.content && <p className="text-red-500 text-sm mt-1">{errors.content}</p>}
    </div>

    <button
     type="submit"
     disabled={processing}
     className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
    >
     Mettre à jour
    </button>
   </form>
  </div>
 );
}