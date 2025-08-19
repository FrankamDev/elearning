import React from 'react';
import { usePage } from '@inertiajs/react';
import Footer from '../Footer';
import Navbar from '@/components/NavBar';

interface Cours { id: number; title: string; description: string; }
interface Lesson { id: number; cours_id: number; title: string; content: string | null; video_path: string | null; cours: Cours; }
interface Props { lessons: Lesson[]; }

const Show: React.FC = () => {
 const { lessons } = usePage<Props>().props;

 return (
  <>
   <Navbar />
  <div className="container mx-auto p-6">
    <h1 className="text-3xl font-bold mb-6 text-center">Leçons du Cours</h1>
    {lessons.length === 0 ? (
     <p className="text-center text-gray-500">Aucune leçon</p>
    ) : (
     <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {lessons.map((lesson) => (
       <div key={lesson.id} className="p-6 border rounded-lg shadow-md bg-white">
        <h3 className="text-xl font-semibold mb-2">{lesson.title}</h3>
        <p className="text-gray-600 mb-4">{lesson.cours.description || 'Aucune description'}</p>
        {lesson.video_path ? (
         <video controls className="w-full rounded-md max-h-64" src={`/storage/${lesson.video_path}`}>
          Votre navigateur ne prend pas en charge la vidéo.
         </video>
        ) : (
         <p className="text-gray-500">Aucune vidéo</p>
        )}
        <p className="text-sm text-gray-500 mt-4">Cours : {lesson.cours.title}</p>
       </div>
      ))}
     </div>
    )}
   </div>
   <Footer />
  </>
 );
};

export default Show;