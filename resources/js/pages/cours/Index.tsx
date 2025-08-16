import Navbar from '@/components/NavBar';
import { usePage } from '@inertiajs/react';
import Footer from '../Footer';

export default function Show({ cours }) {
 const { cours } = usePage().props;

 return (
  <>
   <Navbar />
   <div className="p-6 h-screen">
    <h1 className="text-3xl font-bold mb-2">{cours.title}.....</h1>
    <p className="text-gray-600 mb-4">{cours.description}</p>

    <h2 className="text-2xl font-semibold mt-6 mb-2">Leçons :</h2>
    <ul className="space-y-4">
     {cours.lessons.map((lesson) => (
      <li key={lesson.id} className="p-4 shadow rounded">
       <h3 className="text-lg font-bold">{lesson.title}</h3>
       <div className="aspect-video mb-2">
        <iframe
         className="w-full h-full"
         src={lesson.video_url}
         title={lesson.title}
         allowFullScreen
        ></iframe>
       </div>
       <p>{lesson.content}</p>
      </li>
     ))}
    </ul>
    <Footer />
   </div>
  </>
 );
}


