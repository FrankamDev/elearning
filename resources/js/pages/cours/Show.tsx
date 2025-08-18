import axios from "axios";
import { useState } from "react";
import Footer from "../Footer";
import Navbar from "@/components/NavBar";
import { usePage } from "@inertiajs/react";

export default function Show() {
 const { cours, userProgress } = usePage().props;
 const [progress, setProgress] = useState(userProgress);

 const toggleLesson = async (lessonId: number) => {
  const res = await axios.post("/api/progress/toggle", { lesson_id: lessonId });
  setProgress((prev) => ({
   ...prev,
   [lessonId]: res.data.is_completed,
  }));
 };

 return (
  <>
   <Navbar />
   <main className="bg-cyan-900 min-h-screen text-gray-100 py-10 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
     {/* Titre et description */}
     <header className="max-w-4xl mx-auto mb-12 text-center sm:text-left">
      <h1 className="text-4xl font-extrabold tracking-tight mb-4">
       {cours.title}
      </h1>
      <p className="text-lg text-cyan-300 leading-relaxed">
       {cours.description}
      </p>
     </header>

     {/* Liste des leçons */}
     <section className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-8 border-b border-cyan-700 pb-3">
       Leçons.
      </h2>

      <ul className="space-y-10">
       {cours.lessons.map((lesson) => (
        <li
         key={lesson.id}
         className="bg-cyan-800 rounded-2xl shadow-xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-8 max-w-full overflow-hidden"
        >
         <div className="flex-1 min-w-0 space-y-4">
          <h3 className="text-2xl font-bold text-white truncate">
           {lesson.title}
          </h3>

          <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-inner border border-cyan-600 max-w-full">
           <video
            className="absolute inset-0 w-full h-full"
            src={lesson.video_path} // ⚡ ici on utilise video_path
            controls
           />
          </div>

          <p className="text-cyan-200 leading-relaxed break-words whitespace-pre-line max-w-full overflow-hidden">
           {lesson.content}
          </p>
         </div>

         <div className="flex-shrink-0 flex items-center justify-center">
          <button
           onClick={() => toggleLesson(lesson.id)}
           className={`rounded-lg px-8 py-3 font-semibold transition-colors
                        ${progress[lesson.id]
            ? "bg-green-600 hover:bg-green-700 text-white shadow-md shadow-green-500/50"
            : "bg-gray-300 hover:bg-gray-400 text-gray-900"
            }`}
          >
           {progress[lesson.id] ? "Terminée" : "Marquer terminée"}
          </button>
         </div>
        </li>
       ))}
      </ul>
     </section>
    </div>
   </main>
   <Footer />
  </>
 );
}
