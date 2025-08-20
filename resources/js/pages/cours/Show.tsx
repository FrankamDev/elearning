// import React, { useState } from "react";
// import { usePage, router } from "@inertiajs/react";
// import NavBar from '@/components/NavBar';

// interface Cours {
//  id: number;
//  title: string;
//  description: string;
// }

// interface User {
//  id: number;
//  name: string;
// }

// interface Comment {
//  id: number;
//  lesson_id: number;
//  user: User;
//  content: string;
//  parent_id: number | null;
//  likes_count: number;
//  replies?: Comment[];
// }

// interface Lesson {
//  id: number;
//  cours_id: number;
//  title: string;
//  content: string | null;
//  video_path: string | null;
//  cours: Cours;
//  comments?: Comment[];
// }

// interface Props {
//  lessons?: Lesson[];
//  cours?: Cours;
//  auth: { user: User | null };
// }

// const Navbar: React.FC = () => (
//  <nav className="bg-blue-900 text-white p-4 shadow-lg">
//   <div className="container mx-auto flex justify-between items-center">
//    <h1 className="text-2xl font-bold">Cours Platform</h1>
//    <div className="space-x-4">
//     <a href="#" className="hover:text-blue-300 transition-colors">Accueil</a>
//     <a href="#" className="hover:text-blue-300 transition-colors">Cours</a>
//     <a href="#" className="hover:text-blue-300 transition-colors">Profil</a>
//    </div>
//   </div>
//  </nav>
// );

// const Footer: React.FC = () => (
//  <footer className="bg-blue-900 text-white p-6 mt-8">
//   <div className="container mx-auto text-center">
//    <p>&copy; 2025 Cours Platform. Tous droits réservés.</p>
//   </div>
//  </footer>
// );

// const Show: React.FC = () => {
//  const { lessons = [], cours, auth } = usePage<Props>().props;
//  const [activeCommentForm, setActiveCommentForm] = useState<number | `main-${number}` | null>(null);
//  const [commentContent, setCommentContent] = useState("");
//  const [isSubmitting, setIsSubmitting] = useState(false);

//  const handleCommentSubmit = (lessonId: number, parentId: number | null = null) => {
//   if (!commentContent.trim()) return;
//   setIsSubmitting(true);
//   router.post(
//    route("comments.store", lessonId),
//    { content: commentContent, parent_id: parentId },
//    {
//     onSuccess: () => {
//      setCommentContent("");
//      setActiveCommentForm(null);
//      setIsSubmitting(false);
//     },
//     onError: () => setIsSubmitting(false),
//    }
//   );
//  };

//  const handleLike = (commentId: number) => {
//   router.post(route("comments.like", commentId));
//  };

//  return (
//   <>
//    <NavBar />
//    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 py-12 px-4 sm:px-6 lg:px-8">
//     <div className="max-w-5xl mx-auto">
//      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-blue-900 mb-12 drop-shadow-lg animate-slideIn">
//       📘 Leçons du Cours: {cours?.title || "Sans titre"}
//      </h1>

//      {lessons.length === 0 ? (
//       <p className="text-center text-lg text-blue-700 font-medium animate-fadeIn">
//        Aucune leçon disponible pour ce cours.
//       </p>
//      ) : (
//        <div className="space-y-8">
//         {lessons.map((lesson) => (
//          <div
//           key={lesson.id}
//           className="bg-white/80 p-6 rounded-2xl shadow-xl border border-blue-100 backdrop-blur-md transition-all hover:shadow-2xl animate-slideUp"
//          >
//           <h3 className="text-2xl font-bold text-blue-800 mb-4">{lesson.title}</h3>

//           {lesson.video_path ? (
//            <video
//             controls
//             className="w-full rounded-lg shadow-md border border-gray-200 mb-6 max-h-[500px] object-cover"
//             src={`/storage/${lesson.video_path}`}
//            >
//             Votre navigateur ne prend pas en charge la vidéo.
//            </video>
//           ) : (
//            <p className="text-gray-500 italic mb-6">🎥 Aucune vidéo disponible</p>
//           )}

//           <p className="text-gray-700 mb-4 leading-relaxed">
//            {lesson.content || lesson.cours?.description || "Aucune description disponible."}
//           </p>

//           <p className="text-sm text-blue-700 font-medium mb-6">
//            📖 Cours : <span className="font-semibold">{lesson.cours?.title || "Sans titre"}</span>
//           </p>

//           <div className="mt-6">
//            <h4 className="font-bold text-blue-800 text-lg mb-4">💬 Commentaires</h4>

//            {auth.user && (
//             <button
//              onClick={() => setActiveCommentForm(activeCommentForm === `main-${lesson.id}` ? null : `main-${lesson.id}`)}
//              className="mb-6 bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
//             >
//              {activeCommentForm === `main-${lesson.id}` ? "Annuler" : "Ajouter un commentaire"}
//             </button>
//            )}

//            {activeCommentForm === `main-${lesson.id}` && auth.user && (
//             <form
//              onSubmit={(e) => {
//               e.preventDefault();
//               handleCommentSubmit(lesson.id);
//              }}
//              className="mb-6 flex flex-col gap-3 animate-fadeIn"
//             >
//              <textarea
//               value={commentContent}
//               onChange={(e) => setCommentContent(e.target.value)}
//               placeholder="Votre commentaire..."
//               className="rounded-lg border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none h-24"
//               disabled={isSubmitting}
//              />
//              <button
//               type="submit"
//               disabled={isSubmitting || !commentContent.trim()}
//               className={`px-6 py-2 rounded-lg shadow transition-all duration-300 transform hover:scale-105 ${isSubmitting || !commentContent.trim()
//                ? "bg-gray-400 cursor-not-allowed"
//                : "bg-blue-600 text-white hover:bg-blue-700"
//                }`}
//              >
//               {isSubmitting ? "Envoi..." : "Envoyer"}
//              </button>
//             </form>
//            )}

//            {(lesson.comments ?? []).length === 0 ? (
//             <p className="text-gray-500 text-sm italic">Aucun commentaire pour l’instant.</p>
//            ) : (
//             (lesson.comments ?? []).map((comment) => (
//              <div key={comment.id} className="border rounded-lg p-4 mb-4 bg-white/50">
//               <p className="text-sm text-gray-800">
//                <span className="font-semibold text-blue-900">{comment.user?.name}</span>: {comment.content}
//               </p>

//               <div className="flex gap-4 mt-3 text-xs text-gray-600">
//                <button
//                 onClick={() => handleLike(comment.id)}
//                 className="hover:text-blue-600 transition-colors flex items-center gap-1"
//                >
//                 👍 {comment.likes_count || 0}
//                </button>

//                {auth.user && (
//                 <button
//                  onClick={() =>
//                   setActiveCommentForm(
//                    activeCommentForm === comment.id ? null : comment.id
//                   )
//                  }
//                  className="hover:text-blue-600 transition-colors flex items-center gap-1"
//                 >
//                  ↩️ Répondre
//                 </button>
//                )}
//               </div>

//               {(comment.replies ?? []).map((reply) => (
//               <div
//                key={reply.id}
//                className="ml-6 mt-3 border-l-2 border-blue-200 pl-4 text-sm text-gray-700"
//               >
//                <span className="font-semibold text-blue-900">{reply.user?.name}</span>: {reply.content}
//               </div>
//              ))}

//               {activeCommentForm === comment.id && auth.user && (
//                <form
//                 onSubmit={(e) => {
//                  e.preventDefault();
//                  handleCommentSubmit(lesson.id, comment.id);
//                 }}
//                 className="ml-6 mt-3 flex flex-col gap-3 animate-fadeIn"
//                >
//                 <textarea
//                  value={commentContent}
//                  onChange={(e) => setCommentContent(e.target.value)}
//                  placeholder="Votre réponse..."
//                  className="rounded-lg border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none h-20"
//                  disabled={isSubmitting}
//                 />
//                 <button
//                  type="submit"
//                  disabled={isSubmitting || !commentContent.trim()}
//                  className={`px-6 py-2 rounded-lg shadow transition-all duration-300 transform hover:scale-105 ${isSubmitting || !commentContent.trim()
//                   ? "bg-gray-400 cursor-not-allowed"
//                   : "bg-blue-600 text-white hover:bg-blue-700"
//                   }`}
//                 >
//                  {isSubmitting ? "Envoi..." : "Envoyer"}
//                 </button>
//                </form>
//               )}
//              </div>
//             ))
//            )}
//           </div>
//          </div>
//         ))}
//       </div>
//      )}
//     </div>
//    </div>

//   </>
//  );
// };

// export default Show;




import React, { useState } from "react";
import { usePage, router } from "@inertiajs/react";
import NavBar from '@/components/NavBar';

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
 const [activeCommentForm, setActiveCommentForm] = useState<number | `main-${number}` | null>(null);
 const [commentContent, setCommentContent] = useState("");
 const [isSubmitting, setIsSubmitting] = useState(false);

 const handleCommentSubmit = (lessonId: number, parentId: number | null = null) => {
  if (!commentContent.trim()) return;
  setIsSubmitting(true);
  router.post(
   route("comments.store", lessonId),
   { content: commentContent, parent_id: parentId },
   {
    onSuccess: () => {
     setCommentContent("");
     setActiveCommentForm(null);
     setIsSubmitting(false);
    },
    onError: () => setIsSubmitting(false),
   }
  );
 };

 const handleLike = (commentId: number) => {
  router.post(route("comments.like", commentId));
 };

 return (
  <>
   <NavBar />
   <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 py-14 px-6 sm:px-8 lg:px-10">
    <div className="max-w-6xl mx-auto">

     {/* Titre principal */}
     <h1 className="text-4xl md:text-5xl font-extrabold text-center text-blue-900 mb-14 drop-shadow-lg tracking-tight">
      📘 Leçons du Cours :{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">
       {cours?.title || "Sans titre"}
      </span>
     </h1>

     {lessons.length === 0 ? (
      <p className="text-center text-lg text-blue-700 font-medium animate-fadeIn">
       Aucune leçon disponible pour ce cours.
      </p>
     ) : (
       <div className="grid gap-10 md:grid-cols-2">
        {lessons.map((lesson) => (
         <div
          key={lesson.id}
         className="bg-white/80 p-8 rounded-3xl shadow-xl border border-blue-100 backdrop-blur-md transition-all hover:shadow-2xl hover:scale-[1.01] duration-300"
        >
         {/* Titre de la leçon */}
         <h3 className="text-2xl font-bold text-blue-900 mb-6 border-b border-blue-200 pb-3">
          {lesson.title}
         </h3>

         {/* Vidéo */}
         {lesson.video_path ? (
          <video
           controls
           className="w-full rounded-xl shadow-md border border-gray-200 mb-6 max-h-[400px] object-cover"
           src={`/storage/${lesson.video_path}`}
          >
           Votre navigateur ne prend pas en charge la vidéo.
          </video>
         ) : (
          <p className="text-gray-500 italic mb-6">🎥 Aucune vidéo disponible</p>
         )}

         {/* Contenu */}
         <p className="text-gray-700 mb-6 leading-relaxed">
          {lesson.content || lesson.cours?.description || "Aucune description disponible."}
         </p>

         {/* Infos cours */}
         <p className="text-sm text-blue-700 font-medium mb-8">
          📖 Cours :{" "}
          <span className="font-semibold">{lesson.cours?.title || "Sans titre"}</span>
         </p>

         {/* Bloc commentaires */}
         <div>
          <h4 className="font-bold text-blue-900 text-lg mb-4">💬 Commentaires</h4>

          {auth.user && (
           <button
            onClick={() =>
             setActiveCommentForm(
              activeCommentForm === `main-${lesson.id}` ? null : `main-${lesson.id}`
             )
            }
            className="mb-6 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-2 rounded-lg shadow hover:from-blue-700 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
           >
            {activeCommentForm === `main-${lesson.id}` ? "Annuler" : "➕ Ajouter un commentaire"}
           </button>
          )}

          {activeCommentForm === `main-${lesson.id}` && auth.user && (
           <form
            onSubmit={(e) => {
             e.preventDefault();
             handleCommentSubmit(lesson.id);
            }}
            className="mb-6 flex flex-col gap-3 animate-fadeIn"
           >
            <textarea
             value={commentContent}
             onChange={(e) => setCommentContent(e.target.value)}
             placeholder="Votre commentaire..."
             className="rounded-lg border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none h-24 shadow-inner"
             disabled={isSubmitting}
            />
            <button
             type="submit"
             disabled={isSubmitting || !commentContent.trim()}
             className={`px-6 py-2 rounded-lg shadow transition-all duration-300 transform hover:scale-105 ${isSubmitting || !commentContent.trim()
               ? "bg-gray-400 cursor-not-allowed"
               : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
             {isSubmitting ? "Envoi..." : "Envoyer"}
            </button>
           </form>
          )}

          {(lesson.comments ?? []).length === 0 ? (
           <p className="text-gray-500 text-sm italic">Aucun commentaire pour l’instant.</p>
          ) : (
           (lesson.comments ?? []).map((comment) => (
            <div
             key={comment.id}
             className="border rounded-xl p-4 mb-4 bg-white/60 shadow-sm"
            >
             <p className="text-sm text-gray-800">
              <span className="font-semibold text-blue-900">{comment.user?.name}</span>
              : {comment.content}
             </p>

             {/* Actions commentaire */}
             <div className="flex gap-6 mt-3 text-xs text-gray-600">
              <button
               onClick={() => handleLike(comment.id)}
               className="hover:text-blue-600 transition-colors flex items-center gap-1"
              >
               👍 {comment.likes_count || 0}
              </button>

              {auth.user && (
               <button
                onClick={() =>
                 setActiveCommentForm(
                  activeCommentForm === comment.id ? null : comment.id
                 )
                }
                className="hover:text-blue-600 transition-colors flex items-center gap-1"
               >
                ↩️ Répondre
               </button>
              )}
             </div>

             {/* Réponses */}
             {(comment.replies ?? []).map((reply) => (
              <div
               key={reply.id}
               className="ml-6 mt-3 border-l-2 border-blue-200 pl-4 text-sm text-gray-700"
              >
               <span className="font-semibold text-blue-900">{reply.user?.name}</span>
               : {reply.content}
              </div>
             ))}

             {/* Formulaire réponse */}
             {activeCommentForm === comment.id && auth.user && (
              <form
               onSubmit={(e) => {
                e.preventDefault();
                handleCommentSubmit(lesson.id, comment.id);
               }}
               className="ml-6 mt-3 flex flex-col gap-3 animate-fadeIn"
              >
               <textarea
                value={commentContent}
                onChange={(e) => setCommentContent(e.target.value)}
                placeholder="Votre réponse..."
                className="rounded-lg border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none h-20 shadow-inner"
                disabled={isSubmitting}
               />
               <button
                type="submit"
                disabled={isSubmitting || !commentContent.trim()}
                className={`px-6 py-2 rounded-lg shadow transition-all duration-300 transform hover:scale-105 ${isSubmitting || !commentContent.trim()
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700"
                 }`}
               >
                {isSubmitting ? "Envoi..." : "Envoyer"}
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
   </div>
  </>
 );
};

export default Show;


