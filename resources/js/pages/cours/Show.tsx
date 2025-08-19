import React, { useState } from "react";
import { usePage, router } from "@inertiajs/react";
import Navbar from "@/components/NavBar";
import Footer from "../Footer";

interface Cours {
 id: number;
 title: string;
 description: string;
}

interface User {
 id: number;
 name: string;
}

interface Comment {
 id: number;
 lesson_id: number;
 user: User;
 content: string;
 parent_id: number | null;
 likes_count: number;
 replies?: Comment[];
}

interface Lesson {
 id: number;
 cours_id: number;
 title: string;
 content: string | null;
 video_path: string | null;
 cours: Cours;
 comments?: Comment[];
}

interface Props {
 lessons?: Lesson[];
 cours?: Cours;
 auth: { user: User | null };
}

const Show: React.FC = () => {
 const { lessons = [], cours, auth } = usePage<Props>().props;

 // Gère le formulaire de commentaire principal ou réponse
 const [activeCommentForm, setActiveCommentForm] = useState<number | "main" | null>(null);
 const [commentContent, setCommentContent] = useState("");

 const handleCommentSubmit = (lessonId: number, parentId?: number | null) => {
  router.post(route("comments.store", lessonId),
   { content: commentContent, parent_id: parentId || null },
   { onSuccess: () => setCommentContent("") }
  );
  setActiveCommentForm(null);
 };

 return (
  <>
   <Navbar />
   <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 p-8">
    <h1 className="text-4xl font-extrabold mb-10 text-center text-blue-900 drop-shadow-lg">
     📘 Leçons du Cours {cours?.title || ""}
    </h1>

    {lessons.length === 0 ? (
     <p className="text-center text-blue-700 font-medium">
      Aucune leçon disponible.
     </p>
    ) : (
      <div className="space-y-12">
      {lessons.map((lesson) => (
       <div
        key={lesson.id}
        className="p-6 rounded-2xl shadow-lg bg-white/80 backdrop-blur-md border border-blue-200"
       >
        <h3 className="text-2xl font-bold mb-3 text-blue-800">
         {lesson.title}
        </h3>

        {lesson.video_path ? (
         <video
          controls
          className="w-full rounded-lg max-h-[500px] shadow-md border border-blue-100 mb-4"
          src={`/storage/${lesson.video_path}`}
         >
          Votre navigateur ne prend pas en charge la vidéo.
         </video>
        ) : (
         <p className="text-gray-500 italic mb-4">🎥 Aucune vidéo</p>
        )}

        <p className="text-gray-700 mb-4">
         {lesson.content || lesson.cours?.description || "Aucune description disponible."}
        </p>

        <p className="text-sm text-blue-700 font-medium mb-4">
         📖 Cours : <span className="font-semibold">{lesson.cours?.title || "Sans titre"}</span>
        </p>

        {/* Section Commentaires */}
        <div className="mt-6">
         <h4 className="font-bold text-blue-800 mb-2">💬 Commentaires</h4>

         {/* Bouton pour afficher le formulaire principal */}
         {auth.user && (
          <button
           onClick={() => setActiveCommentForm(activeCommentForm === "main" ? null : "main")}
           className="mb-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition-all"
          >
           {activeCommentForm === "main" ? "Annuler" : "Ajouter un commentaire"}
          </button>
         )}

         {/* Formulaire principal conditionnel */}
         {activeCommentForm === "main" && auth.user && (
          <form
           onSubmit={(e) => {
            e.preventDefault();
            handleCommentSubmit(lesson.id);
           }}
           className="mb-4 flex flex-col gap-2 animate-fadeIn"
          >
           <input
            type="text"
            value={commentContent}
            onChange={(e) => setCommentContent(e.target.value)}
            placeholder="Votre commentaire..."
            className="rounded-lg border px-3 py-2 text-sm"
           />
           <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition-all"
           >
            Envoyer
           </button>
          </form>
         )}

         {(lesson.comments ?? []).length === 0 ? (
          <p className="text-gray-500 text-sm">Aucun commentaire pour l’instant.</p>
         ) : (
          (lesson.comments ?? []).map((comment) => (
           <div key={comment.id} className="border rounded-lg p-3 mb-3">
            <p className="text-sm">
             <span className="font-semibold">{comment.user?.name}</span>: {comment.content}
            </p>

            <div className="flex gap-4 mt-2 text-xs text-gray-600">
             <button
              onClick={() => router.post(route("comments.like", comment.id))}
              className="hover:text-blue-600"
             >
              👍 {comment.likes_count || 0}
             </button>

             {auth.user && (
              <button
               onClick={() => setActiveCommentForm(activeCommentForm === comment.id ? null : comment.id)}
               className="hover:text-blue-600"
              >
               ↩️ Répondre
              </button>
             )}
            </div>

            {/* Replies */}
            {(comment.replies ?? []).map((reply) => (
             <div key={reply.id} className="ml-6 mt-2 border-l pl-3 text-sm text-gray-700">
              <span className="font-semibold">{reply.user?.name}</span>: {reply.content}
             </div>
            ))}


            {activeCommentForm === comment.id && auth.user && (
             <form
              onSubmit={(e) => {
               e.preventDefault();
               handleCommentSubmit(lesson.id, comment.id);
              }}
              className="ml-6 mt-2 flex flex-col gap-2 animate-fadeIn"
             >
              <input
               type="text"
               value={commentContent}
               onChange={(e) => setCommentContent(e.target.value)}
               placeholder="Votre réponse..."
               className="rounded-lg border px-2 py-1 text-sm"
              />
              <button
               type="submit"
               className="bg-blue-600 text-black px-3 py-1 rounded-lg shadow hover:bg-blue-700 transition-all"
              >
               Envoyer
              </button>
             </form>
            )}
           </div>
          ))
         )}
        </div>
       </div>
      ))}
     </div>
    )}
   </div>
   {/* <Footer /> */}
  </>
 );
};

export default Show;
