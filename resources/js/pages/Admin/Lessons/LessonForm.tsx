import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { usePage } from '@inertiajs/react';
import axios from 'axios';

interface FormData {
 cours_id: string;
 title: string;
 content?: string;
 video_url?: string;
 video_file?: FileList;
}

const LessonForm = () => {
 const { cours, lessons, categories } = usePage().props as { cours: { id: number; title: string }[] };
 const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>();
 const [status, setStatus] = useState({ type: '', message: '' });
 const [previewVideo, setPreviewVideo] = useState<string | null>(null);
 // const [cours, setCour] = useState([]);
 const onSubmit = async (data: FormData) => {
  setStatus({ type: '', message: '' });
  const formData = new FormData();
  formData.append('cours_id', data.cours_id);
  formData.append('title', data.title);
  if (data.content) formData.append('content', data.content);
  if (data.video_url) formData.append('video_url', data.video_url);
  if (data.video_file && data.video_file.length > 0) {
   formData.append('video_file', data.video_file[0]);
  }

  try {
   await axios.post('/admin/lessons', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
   setStatus({ type: 'success', message: 'Leçon ajoutée avec succès !' });
   reset();
   setPreviewVideo(null);
  } catch (err) {
   console.error(err);
   setStatus({ type: 'error', message: 'Erreur lors de l’ajout de la leçon.' });
  }
 };

 const handleVideoPreview = (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (file) {
   setPreviewVideo(URL.createObjectURL(file));
  }
 };

 return (
  <>

   <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
    <div className="max-w-3xl w-full bg-gray-800 p-8 rounded-xl border border-cyan-400 shadow-lg animate-fade-in">
     <h2 className="text-3xl font-bold text-center text-cyan-400 mb-6">Ajouter une Leçon</h2>

     {status.message && (
      <div className={`mb-4 p-3 rounded text-center font-semibold ${status.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
       {status.message}
      </div>
     )}

     <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-4">

      <div>
       <label className="text-gray-200 mb-1 block">Cours</label>
       <select
        {...register('cours_id', { required: 'Sélectionnez un cours' })}
        className={`w-full p-3 rounded-lg bg-gray-900 border ${errors.cours_id ? 'border-red-500' : 'border-gray-600'} focus:outline-none focus:ring-2 focus:ring-cyan-400 transition`}
       >
        <option value="">-- Choisir un cours --</option>
        {cours?.map((c) => (
         <option key={c.id} value={c.id}>{c.title}</option>
        ))}
       </select>
       {errors.cours_id && <p className="text-red-500 text-sm mt-1">{errors.cours_id.message}</p>}
      </div>


      <div>
       <label className="text-gray-200 mb-1 block">Titre de la leçon</label>
       <input
        {...register('title', { required: 'Le titre est requis' })}
        className={`w-full p-3 rounded-lg bg-gray-900 border ${errors.title ? 'border-red-500' : 'border-gray-600'} focus:outline-none focus:ring-2 focus:ring-cyan-400 transition`}
        placeholder="Ex: Introduction au HTML"
       />
       {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
      </div>


      <div>
       <label className="text-gray-200 mb-1 block">Contenu (optionnel)</label>
       <textarea
        {...register('content')}
        className="w-full p-3 rounded-lg bg-gray-900 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 h-32 resize-none transition"
        placeholder="Description ou contenu de la leçon"
       />
      </div>


      <div>
       <label className="text-gray-200 mb-1 block">Lien vidéo </label>
       <input
        {...register('video_url')}
        className="w-full p-3 rounded-lg bg-gray-900 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
        placeholder="https://..."
       />
      </div>


      <div>
       <label className="text-gray-200 mb-1 block">Upload vidéo </label>
       <input
        type="file"
        accept="video/*"
        {...register('video_file')}
        onChange={handleVideoPreview}
        className="w-full text-gray-200"
       />
       {previewVideo && (
        <video className="mt-4 w-full rounded-lg" src={previewVideo} controls />
       )}
      </div>

      <button
       type="submit"
       disabled={isSubmitting}
       className={`w-full py-3 rounded-lg font-bold text-gray-900 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 transition-all ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
       {isSubmitting ? 'Envoi...' : 'Ajouter la leçon'}
      </button>
     </form>
    </div>
   </div>

  </>
 );
};

export default LessonForm;





