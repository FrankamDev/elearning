import { useForm, Head, Link } from '@inertiajs/react';

interface Course {
 id: number;
 title: string;
}

interface Props {
 courses: Course[];
}

export default function Create({ courses }: Props) {
 const { data, setData, post, processing, errors } = useForm({
  cours_id: '',
  title: '',
  video_url: '',
  content: '',
 });

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  post(route('admin.lessons.store'));
 };

 return (
  <>
   <Head title="Créer une leçon" />

   <div className="max-w-3xl mx-auto p-4 bg-white rounded-xl shadow">
    <h1 className="text-2xl font-bold mb-4">Créer une nouvelle leçon</h1>

    <form onSubmit={handleSubmit} className="space-y-4">
     {/* Sélection du cours */}
     <div>
      <label className="block text-sm font-medium mb-1">Cours</label>
      <select
       value={data.cours_id}
       onChange={e => setData('cours_id', e.target.value)}
       className="w-full border px-3 py-2 rounded"
      >
       <option value="">-- Choisir un cours --</option>
       {courses.map(course => (
        <option key={course.id} value={course.id}>
         {course.title}
        </option>
       ))}
      </select>
      {errors.cours_id && <p className="text-red-500 text-sm">{errors.cours_id}</p>}
     </div>

     {/* Titre de la leçon */}
     <div>
      <label className="block text-sm font-medium mb-1">Titre</label>
      <input
       type="text"
       value={data.title}
       onChange={e => setData('title', e.target.value)}
       className="w-full border px-3 py-2 rounded"
      />
      {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
     </div>

     {/* URL de la vidéo */}
     <div>
      <label className="block text-sm font-medium mb-1">URL de la vidéo</label>
      <input
       type="url"
       value={data.video_url}
       onChange={e => setData('video_url', e.target.value)}
       className="w-full border px-3 py-2 rounded"
      />
      {errors.video_url && <p className="text-red-500 text-sm">{errors.video_url}</p>}
     </div>

     {/* Contenu de la leçon */}
     <div>
      <label className="block text-sm font-medium mb-1">Contenu (optionnel)</label>
      <textarea
       value={data.content}
       onChange={e => setData('content', e.target.value)}
       className="w-full border px-3 py-2 rounded"
       rows={4}
      />
      {errors.content && <p className="text-red-500 text-sm">{errors.content}</p>}
     </div>

     {/* Boutons */}
     <div className="flex justify-between mt-6">
      <Link
       href={route('admin.lessons.index')}
       className="text-gray-600 hover:underline"
      >
       ⬅ Retour
      </Link>

      <button
       type="submit"
       disabled={processing}
       className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
      >
       Créer la leçon
      </button>
     </div>
    </form>
   </div>
  </>
 );
}
