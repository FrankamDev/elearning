// import React, { useState, useEffect } from 'react';

// import { Inertia } from '@inertiajs/inertia';
// import { motion } from 'framer-motion';
// import { FaBook, FaVideo, FaPlus } from 'react-icons/fa';
// import { useForm, usePage } from '@inertiajs/react';


// interface Cours {
//  id: number;
//  title: string;
// }

// interface Lesson {
//  id: number;
//  cours_id: number;
//  title: string;
//  content?: string;
//  video_url?: string;
//  video_path?: string;
//  cours: { title: string };
// }

// interface PageProps {
//  lessons: Lesson[];
//  cours: Cours[];
//  categories: any[];
// }

// const LessonForm = () => {
//  const { lessons = [], cours, categories } = usePage<PageProps>().props;
//  const { data, setData, post, errors, reset, processing } = useForm({
//   cours_id: '',
//   title: '',
//   content: '',
//   video_url: '',
//   video_file: null as File | null,
//  });
//  const [selectedCours, setSelectedCours] = useState('');
//  const [status, setStatus] = useState({ type: '', message: '' });

//  useEffect(() => {
//   if (status.message) {
//    const timer = setTimeout(() => setStatus({ type: '', message: '' }), 5000);
//    return () => clearTimeout(timer);
//   }
//  }, [status.message]);

//  const handleSubmit = (e: React.FormEvent) => {
//   e.preventDefault();
//   post('/admin/lessons', {
//    onSuccess: () => {
//     setStatus({ type: 'success', message: 'Leçon ajoutée avec succès !' });
//     reset();
//    },
//    onError: () => setStatus({ type: 'error', message: 'Erreur lors de l\'ajout de la leçon.' }),
//   });
//  };

//  const handleFilter = (coursId: string) => {
//   setSelectedCours(coursId);
//   Inertia.get('/admin/lessons', { cours_id: coursId }, { preserveState: true });
//  };

//  const inputClass = (fieldError: boolean) =>
//   `w-full p-4 rounded-xl bg-gray-900 border ${fieldError ? 'border-red-500' : 'border-gray-700'
//   } focus:outline-none focus:ring-2 ${fieldError ? 'focus:ring-red-500' : 'focus:ring-blue-400'
//   } transition-all duration-300`;

//  return (
//   <>

//    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-blue-600 to-blue-900 flex flex-col items-center py-12 px-4">
//     <motion.div
//      className="max-w-6xl w-full bg-gradient-to-br from-blue-900 via-blue-900 to-black p-10 rounded-3xl shadow-2xl border border-blue-400"
//      initial={{ opacity: 0, y: 60 }}
//      animate={{ opacity: 1, y: 0 }}
//      transition={{ duration: 1 }}
//     >
//      <motion.h2
//       className="text-5xl font-extrabold text-center text-blue-400 mb-6"
//       initial={{ scale: 0.8, opacity: 0 }}
//       animate={{ scale: 1, opacity: 1 }}
//       transition={{ duration: 0.8 }}
//      >
//       Gestion des Leçons
//      </motion.h2>

//      {status.message && (
//       <motion.div
//        className={`mb-6 p-4 rounded-xl text-center font-semibold ${status.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
//         }`}
//        initial={{ opacity: 0, y: -20 }}
//        animate={{ opacity: 1, y: 0 }}
//        transition={{ duration: 0.5 }}
//       >
//        {status.message}
//       </motion.div>
//      )}

//      {/* Filtre par cours */}
//      <motion.div className="mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
//       <label className="block text-gray-200 mb-2">Filtrer par cours</label>
//       <select
//        value={selectedCours}
//        onChange={(e) => handleFilter(e.target.value)}
//        className={inputClass(false)}
//       >
//        <option value="">Tous les cours</option>
//        {cours.map((c) => (
//         <option key={c.id} value={c.id}>
//          {c.title}
//         </option>
//        ))}
//       </select>
//      </motion.div>

//      {/* Formulaire d'ajout */}
//      <motion.form
//       onSubmit={handleSubmit}
//       encType="multipart/form-data"
//       className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ delay: 0.3 }}
//      >
//       <motion.div className="space-y-5">
//        <motion.div whileFocus={{ scale: 1.03 }}>
//         <label className="block text-gray-200 mb-1">Cours</label>
//         <select
//          value={data.cours_id}
//          onChange={(e) => setData('cours_id', e.target.value)}
//          className={inputClass(!!errors.cours_id)}
//         >
//          <option value="">Sélectionner un cours</option>
//          {cours.map((c) => (
//           <option key={c.id} value={c.id}>
//            {c.title}
//           </option>
//          ))}
//         </select>
//         {errors.cours_id && <p className="text-red-500 text-sm mt-1">{errors.cours_id}</p>}
//        </motion.div>

//        <motion.div whileFocus={{ scale: 1.03 }}>
//         <label className="block text-gray-200 mb-1">Titre</label>
//         <input
//          value={data.title}
//          onChange={(e) => setData('title', e.target.value)}
//          className={inputClass(!!errors.title)}
//          placeholder="Titre de la leçon"
//         />
//         {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
//        </motion.div>

//        <motion.div whileFocus={{ scale: 1.03 }}>
//         <label className="block text-gray-200 mb-1">URL Vidéo</label>
//         <input
//          value={data.video_url}
//          onChange={(e) => setData('video_url', e.target.value)}
//          className={inputClass(!!errors.video_url)}
//          placeholder="http://example.com/video"
//         />
//         {errors.video_url && <p className="text-red-500 text-sm mt-1">{errors.video_url}</p>}
//        </motion.div>
//       </motion.div>

//       <motion.div className="space-y-5">
//        <motion.div whileFocus={{ scale: 1.03 }}>
//         <label className="block text-gray-200 mb-1">Contenu</label>
//         <textarea
//          value={data.content}
//          onChange={(e) => setData('content', e.target.value)}
//          className={inputClass(!!errors.content) + ' h-32 resize-none'}
//          placeholder="Contenu de la leçon..."
//         />
//         {errors.content && <p className="text-red-500 text-sm mt-1">{errors.content}</p>}
//        </motion.div>

//        <motion.div whileFocus={{ scale: 1.03 }}>
//         <label className="block text-gray-200 mb-1">Fichier Vidéo</label>
//         <input
//          type="file"
//          accept="video/*"
//          onChange={(e) => setData('video_file', e.target.files?.[0] || null)}
//          className={inputClass(!!errors.video_file)}
//         />
//         {errors.video_file && <p className="text-red-500 text-sm mt-1">{errors.video_file}</p>}
//        </motion.div>

//        <motion.button
//         type="submit"
//         disabled={processing}
//         className={`w-full py-4 rounded-2xl font-bold text-gray-900 bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 transition-all shadow-xl`}
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//        >
//         {processing ? 'Envoi...' : 'Ajouter la leçon'}
//        </motion.button>
//       </motion.div>
//      </motion.form>

//      {/* Liste des leçons */}
//      <motion.div
//       className="mt-12"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ delay: 0.5 }}
//      >
//       <h3 className="text-3xl font-bold text-blue-400 mb-6">Leçons</h3>
//       {lessons.length === 0 ? (
//        <p className="text-gray-300">Aucune leçon trouvée.</p>
//       ) : (
//        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {lessons.map((lesson) => (
//          <motion.div
//           key={lesson.id}
//           className="p-6 bg-gray-800 rounded-2xl border border-blue-400 hover:scale-105 transition-transform duration-300"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//          >
//           <h4 className="text-lg font-semibold text-white mb-2 flex items-center">
//            <FaBook className="mr-2 text-blue-400" /> {lesson.title}
//           </h4>
//           <p className="text-gray-300">Cours : {lesson.cours.title}</p>
//           {lesson.video_url && (
//            <p className="text-gray-300 flex items-center">
//             <FaVideo className="mr-2 text-blue-400" />
//             <a href={lesson.video_url} target="_blank" rel="noopener noreferrer">
//              Vidéo
//             </a>
//            </p>
//           )}
//           {lesson.video_path && (
//            <p className="text-gray-300">Fichier : {lesson.video_path}</p>
//           )}
//           <p className="text-gray-300">{lesson.content?.substring(0, 100)}...</p>
//          </motion.div>
//         ))}
//         </div>
//       )}
//      </motion.div>
//     </motion.div>
//    </div>

//   </>
//  );
// };

// export default LessonForm;



import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaVideo } from 'react-icons/fa';
import axios from 'axios';

interface Cours {
 id: number;
 title: string;
}

interface Lesson {
 id: number;
 cours_id: number;
 title: string;
 content?: string;
 video_url?: string;
 video_path?: string;
 cours: { title: string };
}

interface Props {
 cours: Cours[];
}

const LessonForm = ({ cours }: Props) => {
 const [lessons, setLessons] = useState<Lesson[]>([]);
 const [selectedCours, setSelectedCours] = useState('');
 const [form, setForm] = useState({
  cours_id: '',
  title: '',
  content: '',
  video_url: '',
  video_file: null as File | null,
 });
 const [status, setStatus] = useState({ type: '', message: '' });

 // Charger les leçons au montage ou quand on filtre
 const fetchLessons = async (coursId = '') => {
  try {
   const res = await axios.get('/admin/lessons', { params: { cours_id: coursId } });
   setLessons(res.data.lessons);
  } catch (err) {
   console.error(err);
  }
 };

 useEffect(() => {
  fetchLessons();
 }, []);

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
   const formData = new FormData();
   for (const key in form) {
    if (form[key as keyof typeof form]) formData.append(key, form[key as keyof typeof form] as any);
   }
   const res = await axios.post('/admin/lessons', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
   });

   setStatus({ type: 'success', message: res.data.message });
   setForm({ cours_id: '', title: '', content: '', video_url: '', video_file: null });
   fetchLessons(selectedCours); // actualiser la liste
  } catch (err: any) {
   console.error(err);
   setStatus({ type: 'error', message: err.response?.data?.message || 'Erreur lors de l\'ajout de la leçon.' });
  }
 };

 const handleFilter = (coursId: string) => {
  setSelectedCours(coursId);
  fetchLessons(coursId);
 };

 const inputClass = (hasError: boolean) =>
  `w-full p-4 rounded-xl bg-gray-900 border ${hasError ? 'border-red-500' : 'border-gray-700'} focus:outline-none focus:ring-2 ${hasError ? 'focus:ring-red-500' : 'focus:ring-blue-400'} transition-all duration-300`;

 return (
  <div className="min-h-screen bg-gradient-to-br from-blue-200 via-blue-600 to-blue-900 flex flex-col items-center py-12 px-4">
   <motion.div className="max-w-6xl w-full bg-gradient-to-br from-blue-900 via-blue-900 to-black p-10 rounded-3xl shadow-2xl border border-blue-400">
    <motion.h2 className="text-5xl font-extrabold text-center text-blue-400 mb-6">
     Gestion des Leçons
    </motion.h2>

    {status.message && (
     <motion.div
      className={`mb-6 p-4 rounded-xl text-center font-semibold ${status.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}
     >
      {status.message}
     </motion.div>
    )}

    {/* Filtre par cours */}
    <select
     value={selectedCours}
     onChange={(e) => handleFilter(e.target.value)}
     className={inputClass(false)}
    >
     <option value="">Tous les cours</option>
     {cours.map((c) => (
      <option key={c.id} value={c.id}>{c.title}</option>
     ))}
    </select>

    {/* Formulaire */}
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6" encType="multipart/form-data">
     <input type="text" placeholder="Titre" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} className={inputClass(false)} />
     <select value={form.cours_id} onChange={e => setForm({ ...form, cours_id: e.target.value })} className={inputClass(false)}>
      <option value="">Sélectionner un cours</option>
      {cours.map(c => <option key={c.id} value={c.id}>{c.title}</option>)}
     </select>
     <input type="text" placeholder="URL Vidéo" value={form.video_url} onChange={e => setForm({ ...form, video_url: e.target.value })} className={inputClass(false)} />
     <textarea placeholder="Contenu" value={form.content} onChange={e => setForm({ ...form, content: e.target.value })} className={inputClass(false) + ' h-32'} />
     <input type="file" accept="video/*" onChange={e => setForm({ ...form, video_file: e.target.files?.[0] || null })} className={inputClass(false)} />
     <button type="submit" className="col-span-2 py-4 bg-blue-500 rounded-xl text-white font-bold">{status.type === 'success' ? 'Envoi...' : 'Ajouter la leçon'}</button>
    </form>

    {/* Liste des leçons */}
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
     {lessons.map(lesson => (
      <div key={lesson.id} className="p-6 bg-gray-800 rounded-2xl border border-blue-400">
       <h4 className="text-lg font-semibold text-white flex items-center"><FaBook className="mr-2 text-blue-400" /> {lesson.title}</h4>
       <p className="text-gray-300">Cours : {lesson.cours.title}</p>
       {lesson.video_url && <p className="text-gray-300 flex items-center"><FaVideo className="mr-2 text-blue-400" /> <a href={lesson.video_url} target="_blank" rel="noopener noreferrer">Vidéo</a></p>}
       {lesson.video_path && <p className="text-gray-300">Fichier : {lesson.video_path}</p>}
       <p className="text-gray-300">{lesson.content?.substring(0, 100)}...</p>
      </div>
     ))}
    </div>
   </motion.div>
  </div>
 );
};

export default LessonForm;

