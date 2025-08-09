import axios from 'axios';
import { useState } from 'react';
import Footer from '../Footer';
import Navbar from '@/components/NavBar';
import { usePage } from '@inertiajs/react';

export default function Show() {
 const { cours, userProgress } = usePage().props;
 const [progress, setProgress] = useState(userProgress);

 const toggleLesson = async (lessonId: number) => {
  const res = await axios.post('/api/progress/toggle', { lesson_id: lessonId });
  setProgress((prev) => ({
   ...prev,
   [lessonId]: res.data.is_completed,
  }));
 };

 return (
  <>
   <Navbar />
   <div className="p-6 h-screen">
    <h1 className="mb-2 text-3xl font-bold">{cours.title}</h1>
    <p className="mb-4 text-gray-600">{cours.description}</p>

    <h2 className="mt-6 mb-2 text-2xl font-semibold">Leçons :</h2>
    <ul className="space-y-4">
     {cours.lessons.map((lesson) => (
      <li key={lesson.id} className="flex items-center justify-between rounded  p-4 shadow">
       <div>
        <h3 className="text-lg font-bold">{lesson.title}</h3>
        <div className="mb-2 aspect-video">
         <iframe className="h-full w-full" src={lesson.video_url} title={lesson.title} allowFullScreen></iframe>
        </div>
        <p>{lesson.content}</p>
       </div>
       <button
        onClick={() => toggleLesson(lesson.id)}
        className={`rounded px-4 py-2 ${progress[lesson.id] ? 'bg-green-500 text-white' : 'bg-gray-300'}`}
       >
        {progress[lesson.id] ? 'Terminée' : 'Marquer terminée'}
       </button>
      </li>
     ))}
    </ul>
   </div>
   <Footer />
  </>
 );
}
