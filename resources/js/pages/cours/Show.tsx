// import React, { useState } from "react";
// import { usePage, router } from "@inertiajs/react";
// // import NavBar from '@/components/NavBar';

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
//    <Navbar />
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
//       <div className="space-y-8">
//        {lessons.map((lesson) => (
//         <div
//          key={lesson.id}
//          className="bg-white/80 p-6 rounded-2xl shadow-xl border border-blue-100 backdrop-blur-md transition-all hover:shadow-2xl animate-slideUp"
//         >
//          <h3 className="text-2xl font-bold text-blue-800 mb-4">{lesson.title}</h3>

//          {lesson.video_path ? (
//           <video
//            controls
//            className="w-full rounded-lg shadow-md border border-gray-200 mb-6 max-h-[500px] object-cover"
//            src={`/storage/${lesson.video_path}`}
//           >
//            Votre navigateur ne prend pas en charge la vidéo.
//           </video>
//          ) : (
//           <p className="text-gray-500 italic mb-6">🎥 Aucune vidéo disponible</p>
//          )}

//          <p className="text-gray-700 mb-4 leading-relaxed">
//           {lesson.content || lesson.cours?.description || "Aucune description disponible."}
//          </p>

//          <p className="text-sm text-blue-700 font-medium mb-6">
//           📖 Cours : <span className="font-semibold">{lesson.cours?.title || "Sans titre"}</span>
//          </p>

//          <div className="mt-6">
//           <h4 className="font-bold text-blue-800 text-lg mb-4">💬 Commentaires</h4>

//           {auth.user && (
//            <button
//             onClick={() => setActiveCommentForm(activeCommentForm === `main-${lesson.id}` ? null : `main-${lesson.id}`)}
//             className="mb-6 bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
//            >
//             {activeCommentForm === `main-${lesson.id}` ? "Annuler" : "Ajouter un commentaire"}
//            </button>
//           )}

//           {activeCommentForm === `main-${lesson.id}` && auth.user && (
//            <form
//             onSubmit={(e) => {
//              e.preventDefault();
//              handleCommentSubmit(lesson.id);
//             }}
//             className="mb-6 flex flex-col gap-3 animate-fadeIn"
//            >
//             <textarea
//              value={commentContent}
//              onChange={(e) => setCommentContent(e.target.value)}
//              placeholder="Votre commentaire..."
//              className="rounded-lg border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none h-24"
//              disabled={isSubmitting}
//             />
//             <button
//              type="submit"
//              disabled={isSubmitting || !commentContent.trim()}
//              className={`px-6 py-2 rounded-lg shadow transition-all duration-300 transform hover:scale-105 ${isSubmitting || !commentContent.trim()
//               ? "bg-gray-400 cursor-not-allowed"
//               : "bg-blue-600 text-white hover:bg-blue-700"
//               }`}
//             >
//              {isSubmitting ? "Envoi..." : "Envoyer"}
//             </button>
//            </form>
//           )}

//           {(lesson.comments ?? []).length === 0 ? (
//            <p className="text-gray-500 text-sm italic">Aucun commentaire pour l’instant.</p>
//           ) : (
//            (lesson.comments ?? []).map((comment) => (
//             <div key={comment.id} className="border rounded-lg p-4 mb-4 bg-white/50">
//              <p className="text-sm text-gray-800">
//               <span className="font-semibold text-blue-900">{comment.user?.name}</span>: {comment.content}
//              </p>

//              <div className="flex gap-4 mt-3 text-xs text-gray-600">
//               <button
//                onClick={() => handleLike(comment.id)}
//                className="hover:text-blue-600 transition-colors flex items-center gap-1"
//               >
//                👍 {comment.likes_count || 0}
//               </button>

//               {auth.user && (
//                <button
//                 onClick={() =>
//                  setActiveCommentForm(
//                   activeCommentForm === comment.id ? null : comment.id
//                  )
//                 }
//                 className="hover:text-blue-600 transition-colors flex items-center gap-1"
//                >
//                 ↩️ Répondre
//                </button>
//               )}
//              </div>

//              {(comment.replies ?? []).map((reply) => (
//               <div
//                key={reply.id}
//                className="ml-6 mt-3 border-l-2 border-blue-200 pl-4 text-sm text-gray-700"
//               >
//                <span className="font-semibold text-blue-900">{reply.user?.name}</span>: {reply.content}
//               </div>
//              ))}

//              {activeCommentForm === comment.id && auth.user && (
//               <form
//                onSubmit={(e) => {
//                 e.preventDefault();
//                 handleCommentSubmit(lesson.id, comment.id);
//                }}
//                className="ml-6 mt-3 flex flex-col gap-3 animate-fadeIn"
//               >
//                <textarea
//                 value={commentContent}
//                 onChange={(e) => setCommentContent(e.target.value)}
//                 placeholder="Votre réponse..."
//                 className="rounded-lg border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none h-20"
//                 disabled={isSubmitting}
//                />
//                <button
//                 type="submit"
//                 disabled={isSubmitting || !commentContent.trim()}
//                 className={`px-6 py-2 rounded-lg shadow transition-all duration-300 transform hover:scale-105 ${isSubmitting || !commentContent.trim()
//                  ? "bg-gray-400 cursor-not-allowed"
//                  : "bg-blue-600 text-white hover:bg-blue-700"
//                  }`}
//                >
//                 {isSubmitting ? "Envoi..." : "Envoyer"}
//                </button>
//               </form>
//              )}
//             </div>
//            ))
//           )}
//          </div>
//         </div>
//        ))}
//       </div>
//      )}
//     </div>
//    </div>

//   </>
//  );
// };

// export default Show;




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
//    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 py-14 px-6 sm:px-8 lg:px-10">
//     <div className="max-w-6xl mx-auto">

//      {/* Titre principal */}
//      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-blue-900 mb-14 drop-shadow-lg tracking-tight">
//       📘 Leçons du Cours :{" "}
//       <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">
//        {cours?.title || "Sans titre"}
//       </span>
//      </h1>

//      {lessons.length === 0 ? (
//       <p className="text-center text-lg text-blue-700 font-medium animate-fadeIn">
//        Aucune leçon disponible pour ce cours.
//       </p>
//      ) : (
//       <div className="grid gap-10 md:grid-cols-2">
//        {lessons.map((lesson) => (
//         <div
//          key={lesson.id}
//          className="bg-white/80 p-8 rounded-3xl shadow-xl border border-blue-100 backdrop-blur-md transition-all hover:shadow-2xl hover:scale-[1.01] duration-300"
//         >
//          {/* Titre de la leçon */}
//          <h3 className="text-2xl font-bold text-blue-900 mb-6 border-b border-blue-200 pb-3">
//           {lesson.title}
//          </h3>

//          {/* Vidéo */}
//          {lesson.video_path ? (
//           <video
//            controls
//            className="w-full rounded-xl shadow-md border border-gray-200 mb-6 max-h-[400px] object-cover"
//            src={`/storage/${lesson.video_path}`}
//           >
//            Votre navigateur ne prend pas en charge la vidéo.
//           </video>
//          ) : (
//           <p className="text-gray-500 italic mb-6">🎥 Aucune vidéo disponible</p>
//          )}

//          {/* Contenu */}
//          <p className="text-gray-700 mb-6 leading-relaxed">
//           {lesson.content || lesson.cours?.description || "Aucune description disponible."}
//          </p>

//          {/* Infos cours */}
//          <p className="text-sm text-blue-700 font-medium mb-8">
//           📖 Cours :{" "}
//           <span className="font-semibold">{lesson.cours?.title || "Sans titre"}</span>
//          </p>

//          {/* Bloc commentaires */}
//          <div>
//           <h4 className="font-bold text-blue-900 text-lg mb-4">💬 Commentaires</h4>

//           {auth.user && (
//            <button
//             onClick={() =>
//              setActiveCommentForm(
//               activeCommentForm === `main-${lesson.id}` ? null : `main-${lesson.id}`
//              )
//             }
//             className="mb-6 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-2 rounded-lg shadow hover:from-blue-700 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
//            >
//             {activeCommentForm === `main-${lesson.id}` ? "Annuler" : "➕ Ajouter un commentaire"}
//            </button>
//           )}

//           {activeCommentForm === `main-${lesson.id}` && auth.user && (
//            <form
//             onSubmit={(e) => {
//              e.preventDefault();
//              handleCommentSubmit(lesson.id);
//             }}
//             className="mb-6 flex flex-col gap-3 animate-fadeIn"
//            >
//             <textarea
//              value={commentContent}
//              onChange={(e) => setCommentContent(e.target.value)}
//              placeholder="Votre commentaire..."
//              className="rounded-lg border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none h-24 shadow-inner"
//              disabled={isSubmitting}
//             />
//             <button
//              type="submit"
//              disabled={isSubmitting || !commentContent.trim()}
//              className={`px-6 py-2 rounded-lg shadow transition-all duration-300 transform hover:scale-105 ${isSubmitting || !commentContent.trim()
//               ? "bg-gray-400 cursor-not-allowed"
//               : "bg-blue-600 text-white hover:bg-blue-700"
//               }`}
//             >
//              {isSubmitting ? "Envoi..." : "Envoyer"}
//             </button>
//            </form>
//           )}

//           {(lesson.comments ?? []).length === 0 ? (
//            <p className="text-gray-500 text-sm italic">Aucun commentaire pour l’instant.</p>
//           ) : (
//            (lesson.comments ?? []).map((comment) => (
//             <div
//              key={comment.id}
//              className="border rounded-xl p-4 mb-4 bg-white/60 shadow-sm"
//             >
//              <p className="text-sm text-gray-800">
//               <span className="font-semibold text-blue-900">{comment.user?.name}</span>
//               : {comment.content}
//              </p>

//              {/* Actions commentaire */}
//              <div className="flex gap-6 mt-3 text-xs text-gray-600">
//               <button
//                onClick={() => handleLike(comment.id)}
//                className="hover:text-blue-600 transition-colors flex items-center gap-1"
//               >
//                👍 {comment.likes_count || 0}
//               </button>

//               {auth.user && (
//                <button
//                 onClick={() =>
//                  setActiveCommentForm(
//                   activeCommentForm === comment.id ? null : comment.id
//                  )
//                 }
//                 className="hover:text-blue-600 transition-colors flex items-center gap-1"
//                >
//                 ↩️ Répondre
//                </button>
//               )}
//              </div>

//              {/* Réponses */}
//              {(comment.replies ?? []).map((reply) => (
//               <div
//                key={reply.id}
//                className="ml-6 mt-3 border-l-2 border-blue-200 pl-4 text-sm text-gray-700"
//               >
//                <span className="font-semibold text-blue-900">{reply.user?.name}</span>
//                : {reply.content}
//               </div>
//              ))}

//              {/* Formulaire réponse */}
//              {activeCommentForm === comment.id && auth.user && (
//               <form
//                onSubmit={(e) => {
//                 e.preventDefault();
//                 handleCommentSubmit(lesson.id, comment.id);
//                }}
//                className="ml-6 mt-3 flex flex-col gap-3 animate-fadeIn"
//               >
//                <textarea
//                 value={commentContent}
//                 onChange={(e) => setCommentContent(e.target.value)}
//                 placeholder="Votre réponse..."
//                 className="rounded-lg border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none h-20 shadow-inner"
//                 disabled={isSubmitting}
//                />
//                <button
//                 type="submit"
//                 disabled={isSubmitting || !commentContent.trim()}
//                 className={`px-6 py-2 rounded-lg shadow transition-all duration-300 transform hover:scale-105 ${isSubmitting || !commentContent.trim()
//                  ? "bg-gray-400 cursor-not-allowed"
//                  : "bg-blue-600 text-white hover:bg-blue-700"
//                  }`}
//                >
//                 {isSubmitting ? "Envoi..." : "Envoyer"}
//                </button>
//               </form>
//              )}
//             </div>
//            ))
//           )}
//          </div>
//         </div>
//        ))}
//       </div>
//      )}
//     </div>
//    </div>
//   </>
//  );
// };

// export default Show;



// import React, { useState, useEffect } from "react";
// import { usePage, router } from "@inertiajs/react";
// import { motion, AnimatePresence } from "framer-motion";
// import Navbar from '../../components/NavBar';
// import Footer from '@/pages/Footer';
// import {
//  FaBook,
//  FaVideo,
//  FaComment,
//  FaThumbsUp,
//  FaReply,
//  FaMoon,
//  FaSun,
//  FaCheckCircle,
//  FaTimesCircle,
//  FaChevronDown,
//  FaFilter,
//  FaStar,
//  FaHeart,
//  FaFilePdf,
//  FaLink,
//  FaChartBar,
// } from "react-icons/fa";

// // Mock data pour démonstration créative (basé sur une BD fictive, en attendant l'accès réel)
// const mockLessons = [
//  {
//   id: 1,
//   cours_id: 1,
//   title: "Introduction à HTML",
//   content: "Apprenez les bases de la structure web avec HTML. Créez des pages simples et structurées.",
//   video_path: "videos/html-intro.mp4",
//   cours: {
//    id: 1,
//    title: "HTML Fondamentaux",
//    description: "Cours complet sur HTML pour débutants.",
//    category: "Frontend",
//    level: "Débutant",
//   },
//   comments: [
//    {
//     id: 1,
//     lesson_id: 1,
//     user: { id: 1, name: "Alice" },
//     content: "Super introduction !",
//     parent_id: null,
//     likes_count: 5,
//     replies: [
//      { id: 2, user: { id: 2, name: "Bob" }, content: "Oui, très clair !", parent_id: 1, likes_count: 2 },
//     ],
//    },
//   ],
//   pdf: "/docs/html-intro.pdf",
//   externalLink: "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction",
//   progress: 45,
//  },
//  {
//   id: 2,
//   cours_id: 1,
//   title: "Balises Avancées en HTML",
//   content: "Explorez les balises sémantiques et multimédia pour des sites plus riches.",
//   video_path: "videos/html-advanced.mp4",
//   cours: {
//    id: 1,
//    title: "HTML Fondamentaux",
//    description: "Cours complet sur HTML pour débutants.",
//    category: "Frontend",
//    level: "Débutant",
//   },
//   comments: [],
//   pdf: "/docs/html-advanced.pdf",
//   externalLink: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element",
//   progress: 60,
//  },
//  {
//   id: 3,
//   cours_id: 2,
//   title: "Bases de CSS",
//   content: "Découvrez comment styliser vos pages avec CSS : couleurs, layouts et plus.",
//   video_path: "videos/css-basics.mp4",
//   cours: {
//    id: 2,
//    title: "CSS Essentiel",
//    description: "Maîtrisez le style web avec CSS.",
//    category: "Frontend",
//    level: "Intermédiaire",
//   },
//   comments: [
//    {
//     id: 3,
//     lesson_id: 3,
//     user: { id: 3, name: "Charlie" },
//     content: "J'adore les animations !",
//     parent_id: null,
//     likes_count: 8,
//     replies: [],
//    },
//   ],
//   pdf: "/docs/css-basics.pdf",
//   externalLink: "https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps",
//   progress: 30,
//  },
//  {
//   id: 4,
//   cours_id: 3,
//   title: "JavaScript Interactivité",
//   content: "Ajoutez de la dynamique à vos sites avec JavaScript : événements et DOM.",
//   video_path: "videos/js-interactivity.mp4",
//   cours: {
//    id: 3,
//    title: "JavaScript Dynamique",
//    description: "Programmez le web interactif.",
//    category: "Frontend",
//    level: "Intermédiaire",
//   },
//   comments: [],
//   pdf: "/docs/js-interactivity.pdf",
//   externalLink: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps",
//   progress: 75,
//  },
//  {
//   id: 5,
//   cours_id: 4,
//   title: "PHP Serveur-Side",
//   content: "Créez des applications dynamiques côté serveur avec PHP.",
//   video_path: "videos/php-server.mp4",
//   cours: {
//    id: 4,
//    title: "PHP Avancé",
//    description: "Développement backend avec PHP.",
//    category: "Backend",
//    level: "Avancé",
//   },
//   comments: [
//    {
//     id: 4,
//     lesson_id: 5,
//     user: { id: 4, name: "David" },
//     content: "Très utile pour les forms !",
//     parent_id: null,
//     likes_count: 3,
//     replies: [
//      { id: 5, user: { id: 1, name: "Alice" }, content: "Absolument !", parent_id: 4, likes_count: 1 },
//     ],
//    },
//   ],
//   pdf: "/docs/php-server.pdf",
//   externalLink: "https://www.php.net/manual/en/",
//   progress: 90,
//  },
//  // Ajoute plus de leçons créatives pour remplir la page
//  {
//   id: 6,
//   cours_id: 5,
//   title: "React Composants",
//   content: "Construisez des UIs réactives avec des composants React.",
//   video_path: "videos/react-components.mp4",
//   cours: {
//    id: 5,
//    title: "React Mastery",
//    description: "Bibliothèque JS pour interfaces dynamiques.",
//    category: "Frontend",
//    level: "Avancé",
//   },
//   comments: [],
//   pdf: "/docs/react-components.pdf",
//   externalLink: "https://react.dev/learn",
//   progress: 55,
//  },
//  {
//   id: 7,
//   cours_id: 6,
//   title: "Laravel Routing",
//   content: "Gérez les routes et controllers dans Laravel.",
//   video_path: "videos/laravel-routing.mp4",
//   cours: {
//    id: 6,
//    title: "Laravel Pro",
//    description: "Framework PHP pour web apps modernes.",
//    category: "Backend",
//    level: "Avancé",
//   },
//   comments: [
//    {
//     id: 6,
//     lesson_id: 7,
//     user: { id: 5, name: "Eve" },
//     content: "Laravel rend tout si facile !",
//     parent_id: null,
//     likes_count: 10,
//     replies: [],
//    },
//   ],
//   pdf: "/docs/laravel-routing.pdf",
//   externalLink: "https://laravel.com/docs/routing",
//   progress: 80,
//  },
//  // ... Ajoute autant que nécessaire pour remplir créativement
// ];

// const mockCours = {
//  id: 1,
//  title: "Développement Web Complet",
//  description: "Un parcours exhaustif du web dev frontend et backend.",
//  category: "Full Stack",
//  level: "Tous niveaux",
// };

// interface Cours {
//  id: number;
//  title: string;
//  description: string;
//  category: string;
//  level: string;
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
//  pdf?: string;
//  externalLink?: string;
//  progress?: number;
// }

// interface Props {
//  lessons?: Lesson[];
//  cours?: Cours;
//  auth: { user: User | null };
// }

// const Show: React.FC = () => {
//  const pageProps = usePage<Props>().props;
//  const lessons = pageProps.lessons?.length ? pageProps.lessons : mockLessons; // Utilise mock si pas de données BD
//  const cours = pageProps.cours || mockCours; // Utilise mock si pas de données BD
//  const auth = pageProps.auth;

//  const [activeCommentForm, setActiveCommentForm] = useState<number | `main-${number}` | null>(null);
//  const [commentContent, setCommentContent] = useState("");
//  const [isSubmitting, setIsSubmitting] = useState(false);
//  const [isDarkMode, setIsDarkMode] = useState(false);
//  const [modal, setModal] = useState({ show: false, isSuccess: false, message: "" });
//  const [filter, setFilter] = useState({ category: "", level: "" });
//  const [visibleLessonsCount, setVisibleLessonsCount] = useState(6);
//  const [favorites, setFavorites] = useState<number[]>([]);

//  // Toggle dark mode
//  const toggleDarkMode = () => {
//   setIsDarkMode(!isDarkMode);
//   document.documentElement.classList.toggle("dark");
//  };

//  // Filter lessons
//  const filteredLessons = lessons
//   .filter(
//    (lesson) =>
//     (!filter.category || lesson.cours?.category === filter.category) &&
//     (!filter.level || lesson.cours?.level === filter.level)
//   )
//   .slice(0, visibleLessonsCount);

//  // Load more lessons
//  const loadMoreLessons = () => {
//   setVisibleLessonsCount((prev) => Math.min(prev + 4, lessons.length));
//  };

//  // Toggle favorite
//  const toggleFavorite = (lessonId: number) => {
//   setFavorites((prev) =>
//    prev.includes(lessonId) ? prev.filter((id) => id !== lessonId) : [...prev, lessonId]
//   );
//  };

//  // Handle comment submission
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
//      setModal({
//       show: true,
//       isSuccess: true,
//       message: "Commentaire envoyé avec succès ! 🎉",
//      });
//      setTimeout(() => setModal({ show: false, isSuccess: false, message: "" }), 3000);
//     },
//     onError: () => {
//      setIsSubmitting(false);
//      setModal({
//       show: true,
//       isSuccess: false,
//       message: "Erreur lors de l'envoi du commentaire. Réessayez. 😅",
//      });
//      setTimeout(() => setModal({ show: false, isSuccess: false, message: "" }), 3000);
//     },
//    }
//   );
//  };

//  // Handle like
//  const handleLike = (commentId: number) => {
//   router.post(route("comments.like", commentId), {}, {
//    onSuccess: () => {
//     setModal({
//      show: true,
//      isSuccess: true,
//      message: "Like ajouté ! 👍",
//     });
//     setTimeout(() => setModal({ show: false, isSuccess: false, message: "" }), 3000);
//    },
//    onError: () => {
//     setModal({
//      show: true,
//      isSuccess: false,
//      message: "Erreur lors de l'ajout du like. 😅",
//     });
//     setTimeout(() => setModal({ show: false, isSuccess: false, message: "" }), 3000);
//    },
//   });
//  };

//  // Mock progress if not provided (créativité pour simuler BD)
//  useEffect(() => {
//   lessons.forEach((lesson) => {
//    if (!lesson.progress) lesson.progress = Math.floor(Math.random() * 100);
//   });
//  }, [lessons]);

//  return (
//   <div className={`min-h-screen flex flex-col ${isDarkMode ? "dark bg-gray-900" : "bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200"} transition-colors duration-500`}>
//    {/* Modal for Feedback */}
//    <AnimatePresence>
//     {modal.show && (
//      <motion.div
//       initial={{ opacity: 0, y: -50 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -50 }}
//       className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 p-4 rounded-xl shadow-lg flex items-center gap-3 max-w-md w-full"
//       style={{ backgroundColor: modal.isSuccess ? "#10B981" : "#EF4444" }}
//      >
//       {modal.isSuccess ? (
//        <FaCheckCircle className="text-white text-2xl" />
//       ) : (
//         <FaTimesCircle className="text-white text-2xl" />
//       )}
//       <p className="text-white font-semibold">{modal.message}</p>
//      </motion.div>
//     )}
//    </AnimatePresence>

//    {/* Header */}
//    <header className="bg-white dark:bg-gray-800 shadow-md p-4 flex flex-col sm:flex-row justify-between items-center gap-4">
//     <h1 className="text-2xl md:text-3xl font-bold text-blue-800 dark:text-blue-300 text-center sm:text-left">
//      📘 Leçons du Cours : {cours.title}
//     </h1>
//     <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
//      <button
//       onClick={toggleDarkMode}
//       className="p-2 rounded-full bg-blue-600 dark:bg-gray-700 text-white hover:bg-blue-700 dark:hover:bg-gray-600 transition"
//       aria-label="Toggle dark mode"
//      >
//       {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
//      </button>
//      <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
//       <select
//        value={filter.category}
//        onChange={(e) => setFilter({ ...filter, category: e.target.value })}
//        className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
//       >
//        <option value="">Toutes Catégories</option>
//        <option value="Frontend">Frontend</option>
//        <option value="Backend">Backend</option>
//        <option value="Database">Database</option>
//        <option value="Tools">Tools</option>
//       </select>
//       <select
//        value={filter.level}
//        onChange={(e) => setFilter({ ...filter, level: e.target.value })}
//        className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
//       >
//        <option value="">Tous Niveaux</option>
//        <option value="Débutant">Débutant</option>
//        <option value="Intermédiaire">Intermédiaire</option>
//        <option value="Avancé">Avancé</option>
//       </select>
//      </div>
//     </div>
//    </header>

//    <div className="py-6 px-4 sm:px-6 lg:px-8 flex-1">
//     <div className="max-w-7xl mx-auto">
//      {filteredLessons.length === 0 ? (
//       <p className="text-center text-lg text-blue-700 dark:text-blue-300 font-medium animate-fadeIn">
//        Aucune leçon disponible pour ce cours. Créez-en pour explorer !
//       </p>
//      ) : (
//        <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//         <AnimatePresence>
//          {filteredLessons.map((lesson) => (
//           <motion.div
//           key={lesson.id}
//            initial={{ opacity: 0, y: 20 }}
//            animate={{ opacity: 1, y: 0 }}
//            exit={{ opacity: 0, y: 20 }}
//            transition={{ duration: 0.3 }}
//            className="bg-white/90 dark:bg-gray-800/90 p-5 sm:p-6 rounded-3xl shadow-lg border border-blue-100 dark:border-gray-700 backdrop-blur-sm transition-all hover:shadow-xl hover:scale-105 duration-300"
//           >
//            {/* Lesson Header */}
//            <div className="flex justify-between items-center mb-3 sm:mb-4">
//             <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-900 dark:text-blue-300 border-b border-blue-200 dark:border-gray-600 pb-2">
//              {lesson.title}
//             </h3>
//             <button
//              onClick={() => toggleFavorite(lesson.id)}
//              className="text-yellow-500 hover:text-yellow-600 transition"
//              aria-label={favorites.includes(lesson.id) ? "Retirer des favoris" : "Ajouter aux favoris"}
//             >
//              {favorites.includes(lesson.id) ? <FaHeart size={18} /> : <FaStar size={18} />}
//             </button>
//            </div>

//            {/* Progress Indicator */}
//            <div className="mb-3 sm:mb-4">
//             <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
//              <FaChartBar />
//              <span>Progrès : {lesson.progress}%</span>
//             </div>
//             <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 sm:h-2 mt-1 sm:mt-2">
//              <div
//               className="bg-blue-600 h-1.5 sm:h-2 rounded-full"
//               style={{ width: `${lesson.progress}%` }}
//              ></div>
//             </div>
//            </div>

//            {/* Video */}
//            {lesson.video_path ? (
//             <video
//              controls
//              className="w-full rounded-xl shadow-md border border-gray-200 dark:border-gray-600 mb-4 sm:mb-6 max-h-[200px] sm:max-h-[250px] md:max-h-[300px] object-cover"
//              src={`/storage/${lesson.video_path}`}
//             >
//              Votre navigateur ne prend pas en charge la vidéo.
//             </video>
//            ) : (
//             <p className="text-gray-500 dark:text-gray-400 italic mb-4 sm:mb-6 text-sm sm:text-base">🎥 Aucune vidéo disponible</p>
//            )}

//            {/* Content */}
//            <p className="text-gray-700 dark:text-gray-200 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
//             {lesson.content || lesson.cours?.description || "Aucune description disponible."}
//            </p>

//            {/* Course Info and Resources */}
//            <div className="mb-4 sm:mb-6">
//             <p className="text-xs sm:text-sm text-blue-700 dark:text-blue-300 font-medium mb-1 sm:mb-2">
//              📖 Cours : <span className="font-semibold">{lesson.cours?.title || "Sans titre"}</span>
//             </p>
//             <div className="flex flex-wrap gap-2">
//              <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 px-2 sm:px-3 py-1 bg-blue-100 dark:bg-gray-700 rounded-full">
//               Catégorie : {lesson.cours?.category || "N/A"}
//              </span>
//              <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 px-2 sm:px-3 py-1 bg-blue-100 dark:bg-gray-700 rounded-full">
//               Niveau : {lesson.cours?.level || "N/A"}
//              </span>
//             </div>
//             {(lesson.pdf || lesson.externalLink) && (
//              <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row gap-3 sm:gap-4">
//               {lesson.pdf && (
//                <a
//                 href={lesson.pdf}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-600 text-white font-semibold rounded-xl shadow hover:bg-blue-700 transition text-xs sm:text-sm"
//                >
//                 <FaFilePdf className="mr-1 sm:mr-2" /> PDF
//                </a>
//               )}
//               {lesson.externalLink && (
//                <a
//                 href={lesson.externalLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-green-600 text-white font-semibold rounded-xl shadow hover:bg-green-700 transition text-xs sm:text-sm"
//                >
//                 <FaLink className="mr-1 sm:mr-2" /> Doc
//                </a>
//               )}
//              </div>
//             )}
//            </div>

//            {/* Comments Section */}
//            <div>
//             <h4 className="font-bold text-blue-900 dark:text-blue-300 text-base sm:text-lg mb-3 sm:mb-4 flex items-center gap-2">
//              <FaComment /> Commentaires
//             </h4>

//             {auth.user && (
//              <motion.button
//               onClick={() =>
//                setActiveCommentForm(
//                 activeCommentForm === `main-${lesson.id}` ? null : `main-${lesson.id}`
//                )
//               }
//               className="mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-lg shadow hover:from-blue-700 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 text-xs sm:text-sm"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//              >
//               {activeCommentForm === `main-${lesson.id}` ? "Annuler" : "➕ Commenter"}
//              </motion.button>
//             )}

//             {activeCommentForm === `main-${lesson.id}` && auth.user && (
//              <motion.form
//               onSubmit={(e) => {
//                e.preventDefault();
//                handleCommentSubmit(lesson.id);
//               }}
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: "auto" }}
//               exit={{ opacity: 0, height: 0 }}
//               className="mb-4 sm:mb-6 flex flex-col gap-3"
//              >
//               <textarea
//                value={commentContent}
//                onChange={(e) => setCommentContent(e.target.value)}
//                placeholder="Votre commentaire..."
//                className="rounded-lg border border-gray-300 dark:border-gray-600 px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none h-20 sm:h-24 shadow-inner bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
//                disabled={isSubmitting}
//                aria-label="Commentaire"
//               />
//               <button
//                type="submit"
//                disabled={isSubmitting || !commentContent.trim()}
//                className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-lg shadow transition-all duration-300 transform hover:scale-105 text-xs sm:text-sm ${isSubmitting || !commentContent.trim()
//                 ? "bg-gray-400 cursor-not-allowed"
//                 : "bg-blue-600 text-white hover:bg-blue-700"
//                 }`}
//               >
//                {isSubmitting ? "Envoi..." : "Envoyer"}
//               </button>
//              </motion.form>
//             )}

//             {(lesson.comments ?? []).length === 0 ? (
//              <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm italic">Aucun commentaire pour l’instant.</p>
//             ) : (
//               (lesson.comments ?? []).map((comment) => (
//                <div
//                 key={comment.id}
//                 className="border rounded-xl p-3 sm:p-4 mb-3 sm:mb-4 bg-white/60 dark:bg-gray-800/60 shadow-sm"
//                >
//                 <p className="text-xs sm:text-sm text-gray-800 dark:text-gray-200">
//                  <span className="font-semibold text-blue-900 dark:text-blue-300">{comment.user?.name}</span>: {comment.content}
//                 </p>

//                 {/* Comment Actions */}
//                 <div className="flex gap-4 sm:gap-6 mt-2 sm:mt-3 text-xs text-gray-600 dark:text-gray-300">
//                  <button
//                   onClick={() => handleLike(comment.id)}
//                   className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1"
//                   aria-label="Liker le commentaire"
//                  >
//                   <FaThumbsUp /> {comment.likes_count || 0}
//                  </button>

//                  {auth.user && (
//                   <button
//                    onClick={() =>
//                     setActiveCommentForm(
//                      activeCommentForm === comment.id ? null : comment.id
//                     )
//                    }
//                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1"
//                    aria-label="Répondre au commentaire"
//                   >
//                    <FaReply /> Répondre
//                   </button>
//                  )}
//                 </div>

//                 {/* Replies */}
//                 {(comment.replies ?? []).map((reply) => (
//                  <div
//                   key={reply.id}
//                   className="ml-4 sm:ml-6 mt-2 sm:mt-3 border-l-2 border-blue-200 dark:border-gray-600 pl-3 sm:pl-4 text-xs sm:text-sm text-gray-700 dark:text-gray-200"
//                  >
//                   <span className="font-semibold text-blue-900 dark:text-blue-300">{reply.user?.name}</span>: {reply.content}
//                  </div>
//                 ))}

//                 {/* Reply Form */}
//                 {activeCommentForm === comment.id && auth.user && (
//                  <motion.form
//                   onSubmit={(e) => {
//                    e.preventDefault();
//                    handleCommentSubmit(lesson.id, comment.id);
//                   }}
//                   initial={{ opacity: 0, height: 0 }}
//                   animate={{ opacity: 1, height: "auto" }}
//                   exit={{ opacity: 0, height: 0 }}
//                   className="ml-4 sm:ml-6 mt-2 sm:mt-3 flex flex-col gap-3"
//                  >
//                   <textarea
//                    value={commentContent}
//                    onChange={(e) => setCommentContent(e.target.value)}
//                    placeholder="Votre réponse..."
//                    className="rounded-lg border border-gray-300 dark:border-gray-600 px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none h-16 sm:h-20 shadow-inner bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
//                    disabled={isSubmitting}
//                    aria-label="Réponse au commentaire"
//                   />
//                   <button
//                    type="submit"
//                    disabled={isSubmitting || !commentContent.trim()}
//                    className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-lg shadow transition-all duration-300 transform hover:scale-105 text-xs sm:text-sm ${isSubmitting || !commentContent.trim()
//                     ? "bg-gray-400 cursor-not-allowed"
//                     : "bg-blue-600 text-white hover:bg-blue-700"
//                     }`}
//                   >
//                    {isSubmitting ? "Envoi..." : "Envoyer"}
//                   </button>
//                  </motion.form>
//                 )}
//                </div>
//               ))
//             )}
//            </div>
//           </motion.div>
//          ))}
//         </AnimatePresence>
//        </div>
//      )}

//      {visibleLessonsCount < lessons.length && (
//       <motion.button
//        onClick={loadMoreLessons}
//        className="mt-6 sm:mt-8 w-full sm:w-auto sm:max-w-xs mx-auto py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-xl shadow hover:from-blue-600 hover:to-blue-800 transition flex items-center justify-center gap-2 text-sm sm:text-base"
//        whileHover={{ scale: 1.05 }}
//        whileTap={{ scale: 0.95 }}
//       >
//        Charger plus <FaChevronDown />
//       </motion.button>
//      )}
//     </div>
//    </div>
//   </div>
//  );
// };

// export default Show;



import React, { useState, useEffect } from "react";
import { usePage, router } from "@inertiajs/react";
import { motion, AnimatePresence } from "framer-motion";
import {
 FaBook,
 FaVideo,
 FaComment,
 FaThumbsUp,
 FaReply,
 FaMoon,
 FaSun,
 FaCheckCircle,
 FaTimesCircle,
 FaChevronDown,
 FaFilter,
 FaHeart,
 FaFilePdf,
 FaLink,
 FaChartBar,
 FaClock,
} from "react-icons/fa";
import Navbar from "@/components/NavBar";

// Mock data pour simuler une BD (inspirée de tes composants précédents)
const mockCours = {
 id: 1,
 title: "Développement Web Full Stack",
 description:
  "Maîtrisez le développement web complet, du frontend (HTML, CSS, React) au backend (PHP, Laravel, Node.js). Ce cours vous guide à travers la création d'applications modernes et dynamiques.",
 category: "Full Stack",
 level: "Tous niveaux",
 pdf: "/docs/full-stack.pdf",
 externalLink: "https://developer.mozilla.org/en-US/docs/Web",
 progress: 65,
};

const mockLessons = [
 {
  id: 1,
  cours_id: 1,
  title: "Introduction à HTML",
  content: "Apprenez les bases de la structure web avec HTML : balises, structure sémantique et formulaires.",
  video_path: "videos/html-intro.mp4",
  cours: mockCours,
  comments: [
   {
    id: 1,
    lesson_id: 1,
    user: { id: 1, name: "Alice" },
    content: "Super clair pour débuter !",
    parent_id: null,
    likes_count: 5,
    replies: [
     { id: 2, user: { id: 2, name: "Bob" }, content: "Oui, j’ai adoré !", parent_id: 1, likes_count: 2 },
    ],
   },
  ],
  pdf: "/docs/html-intro.pdf",
  externalLink: "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction",
  progress: 80,
  duration: "30 min",
 },
 {
  id: 2,
  cours_id: 1,
  title: "Stylisation avec CSS",
  content: "Découvrez comment styliser vos pages avec CSS : flexbox, grid et animations.",
  video_path: "videos/css-basics.mp4",
  cours: mockCours,
  comments: [],
  pdf: "/docs/css-basics.pdf",
  externalLink: "https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps",
  progress: 50,
  duration: "45 min",
 },
 {
  id: 3,
  cours_id: 1,
  title: "JavaScript Interactivité",
  content: "Ajoutez des fonctionnalités dynamiques avec JavaScript : DOM et événements.",
  video_path: "videos/js-interactivity.mp4",
  cours: mockCours,
  comments: [
   {
    id: 3,
    lesson_id: 3,
    user: { id: 3, name: "Charlie" },
    content: "Les exemples sont top !",
    parent_id: null,
    likes_count: 8,
    replies: [],
   },
  ],
  pdf: "/docs/js-interactivity.pdf",
  externalLink: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps",
  progress: 30,
  duration: "40 min",
 },
 {
  id: 4,
  cours_id: 1,
  title: "Backend avec PHP",
  content: "Créez des applications serveur avec PHP : formulaires et sessions.",
  video_path: "videos/php-server.mp4",
  cours: mockCours,
  comments: [],
  pdf: "/docs/php-server.pdf",
  externalLink: "https://www.php.net/manual/en/",
  progress: 90,
  duration: "50 min",
 },
];

interface Cours {
 id: number;
 title: string;
 description: string;
 category: string;
 level: string;
 pdf?: string;
 externalLink?: string;
 progress?: number;
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
 pdf?: string;
 externalLink?: string;
 progress?: number;
 duration?: string;
}

interface Props {
 lessons?: Lesson[];
 cours?: Cours;
 auth: { user: User | null };
}

const Show: React.FC = () => {
 const pageProps = usePage<Props>().props;
 const cours = pageProps.cours || mockCours;
 const initialLessons = pageProps.lessons?.length ? pageProps.lessons : mockLessons;
 const auth = pageProps.auth;

 const [lessons, setLessons] = useState<Lesson[]>(initialLessons); // État pour gérer les leçons et commentaires localement
 const [activeCommentForm, setActiveCommentForm] = useState<number | `main-${number}` | null>(null);
 const [commentContent, setCommentContent] = useState("");
 const [isSubmitting, setIsSubmitting] = useState(false);
 const [isDarkMode, setIsDarkMode] = useState(false);
 const [modal, setModal] = useState({ show: false, isSuccess: false, message: "" });
 const [filter, setFilter] = useState({ category: "", level: "" });
 const [visibleLessonsCount, setVisibleLessonsCount] = useState(4);
 const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(lessons[0] || null);
 const [isFavorite, setIsFavorite] = useState(false);

 // Toggle dark mode
 const toggleDarkMode = () => {
  setIsDarkMode(!isDarkMode);
  document.documentElement.classList.toggle("dark");
 };

 // Toggle favorite
 const toggleFavorite = () => {
  setIsFavorite(!isFavorite);
  setModal({
   show: true,
   isSuccess: true,
   message: isFavorite ? "Retiré des favoris !" : "Ajouté aux favoris ! ❤️",
  });
  setTimeout(() => setModal({ show: false, isSuccess: false, message: "" }), 3000);
 };

 // Filter lessons
 const filteredLessons = lessons
  .filter(
   (lesson) =>
    (!filter.category || lesson.cours?.category === filter.category) &&
    (!filter.level || lesson.cours?.level === filter.level)
  )
  .slice(0, visibleLessonsCount);

 // Load more lessons
 const loadMoreLessons = () => {
  setVisibleLessonsCount((prev) => Math.min(prev + 4, lessons.length));
 };



 const handleCommentSubmit = (lessonId: number, parentId: number | null = null) => {
  if (!commentContent.trim() || !auth.user) return;

  const tempId = Date.now(); // ID temporaire pour le commentaire optimiste
  const newComment: Comment = {
   id: tempId,
   lesson_id: lessonId,
   user: auth.user,
   content: commentContent,
   parent_id: parentId,
   likes_count: 0,
   replies: [],
  };

  // Mise à jour optimiste de l'état local
  setLessons((prevLessons) =>
   prevLessons.map((lesson) => {
    if (lesson.id === lessonId) {
     const updatedComments = parentId
      ? (lesson.comments ?? []).map((comment) => {
       if (comment.id === parentId) {
        return {
         ...comment,
         replies: [...(comment.replies ?? []), newComment],
        };
       }
       return comment;
      })
      : [...(lesson.comments ?? []), newComment];
     return { ...lesson, comments: updatedComments };
    }
    return lesson;
   })
  );

  setCommentContent("");
  setActiveCommentForm(null);
  setIsSubmitting(true);

  // Envoi réel au serveur
  router.post(
   route("comments.store", lessonId),
   { content: commentContent, parent_id: parentId },
   {
    onSuccess: (page) => {
     setIsSubmitting(false);
     setModal({
      show: true,
      isSuccess: true,
      message: "Commentaire envoyé avec succès ! 🎉",
     });
     setTimeout(() => setModal({ show: false, isSuccess: false, message: "" }), 3000);
    },
    onError: () => {
     // Rollback en cas d'erreur
     setLessons((prevLessons) =>
      prevLessons.map((lesson) => {
       if (lesson.id === lessonId) {
        const updatedComments = parentId
         ? (lesson.comments ?? []).map((comment) => {
          if (comment.id === parentId) {
           return {
            ...comment,
            replies: (comment.replies ?? []).filter((reply) => reply.id !== tempId),
           };
          }
          return comment;
         })
         : (lesson.comments ?? []).filter((comment) => comment.id !== tempId);
        return { ...lesson, comments: updatedComments };
       }
       return lesson;
      })
     );
     setIsSubmitting(false);
     setModal({
      show: true,
      isSuccess: false,
      message: "Erreur lors de l'envoi du commentaire. Réessayez. 😅",
     });
     setTimeout(() => setModal({ show: false, isSuccess: false, message: "" }), 3000);
    },
   }
  );
 };

 // Handle like with optimistic UI
 const handleLike = (commentId: number) => {
  // Mise à jour optimiste
  setLessons((prevLessons) =>
   prevLessons.map((lesson) => {
    const updateLikes = (comments: Comment[]): Comment[] => {
     return comments.map((comment) => {
      if (comment.id === commentId) {
       return { ...comment, likes_count: comment.likes_count + 1 };
      }
      if (comment.replies) {
       return { ...comment, replies: updateLikes(comment.replies) };
      }
      return comment;
     });
    };

    return {
     ...lesson,
     comments: lesson.comments ? updateLikes(lesson.comments) : lesson.comments,
    };
   })
  );

  router.post(route("comments.like", commentId), {}, {
   onSuccess: () => {
    setModal({
     show: true,
     isSuccess: true,
     message: "Like ajouté ! 👍",
    });
    setTimeout(() => setModal({ show: false, isSuccess: false, message: "" }), 3000);
   },
   onError: () => {
    // Rollback en cas d'erreur
    setLessons((prevLessons) =>
     prevLessons.map((lesson) => {
      const updateLikesRollback = (comments: Comment[]): Comment[] => {
       return comments.map((comment) => {
        if (comment.id === commentId) {
         return { ...comment, likes_count: comment.likes_count - 1 };
        }
        if (comment.replies) {
         return { ...comment, replies: updateLikesRollback(comment.replies) };
        }
        return comment;
       });
      };

      return {
       ...lesson,
       comments: lesson.comments ? updateLikesRollback(lesson.comments) : lesson.comments,
      };
     })
    );
    setModal({
     show: true,
     isSuccess: false,
     message: "Erreur lors de l'ajout du like. 😅",
    });
    setTimeout(() => setModal({ show: false, isSuccess: false, message: "" }), 3000);
   },
  });
 };

 // Mock progress if not provided
 useEffect(() => {
  setLessons((prev) =>
   prev.map((lesson) => ({
    ...lesson,
    progress: lesson.progress ?? Math.floor(Math.random() * 100),
   }))
  );
 }, []);

 useEffect(() => {
  if (selectedLesson) {
   const updatedLesson = lessons.find((l) => l.id === selectedLesson.id);
   if (updatedLesson) {
    setSelectedLesson(updatedLesson);
   }
  }
 }, [lessons]);

 return (
  <>
   <Navbar />
   <div className={`min-h-screen flex flex-col ${isDarkMode ? "dark bg-gray-900" : "bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200"} transition-colors duration-500`}>
    {/* Modal for Feedback */}
    <AnimatePresence>
     {modal.show && (
      <motion.div
       initial={{ opacity: 0, y: -50 }}
       animate={{ opacity: 1, y: 0 }}
       exit={{ opacity: 0, y: -50 }}
       className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 p-4 rounded-xl shadow-lg flex items-center gap-3 max-w-md w-[90%] sm:w-full"
       style={{ backgroundColor: modal.isSuccess ? "#10B981" : "#EF4444" }}
      >
       {modal.isSuccess ? (
        <FaCheckCircle className="text-white text-xl sm:text-2xl" />
       ) : (
        <FaTimesCircle className="text-white text-xl sm:text-2xl" />
       )}
       <p className="text-white font-semibold text-sm sm:text-base">{modal.message}</p>
      </motion.div>
     )}
    </AnimatePresence>

    <header className="bg-white dark:bg-gray-800 shadow-md p-4 flex flex-col sm:flex-row justify-between items-center gap-4">
     <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-800 dark:text-blue-300 text-center sm:text-left">
      <FaBook className="inline mr-2" /> {cours.title}
     </h1>
     <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
      <button
       onClick={toggleDarkMode}
       className="p-2 rounded-full bg-blue-600 dark:bg-gray-700 text-white hover:bg-blue-700 dark:hover:bg-gray-600 transition"
       aria-label="Toggle dark mode"
      >
       {isDarkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
      </button>
      <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
       <select
        value={filter.category}
        onChange={(e) => setFilter({ ...filter, category: e.target.value })}
        className="px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs sm:text-sm w-full"
       >
        <option value="">Toutes Catégories</option>
        <option value="Frontend">Frontend</option>
        <option value="Backend">Backend</option>
        <option value="Database">Database</option>
        <option value="Tools">Tools</option>
       </select>
       <select
        value={filter.level}
        onChange={(e) => setFilter({ ...filter, level: e.target.value })}
        className="px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs sm:text-sm w-full"
       >
        <option value="">Tous Niveaux</option>
        <option value="Débutant">Débutant</option>
        <option value="Intermédiaire">Intermédiaire</option>
        <option value="Avancé">Avancé</option>
       </select>
      </div>
     </div>
    </header>

    <div className="flex-1 flex flex-col lg:flex-row gap-6 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full">
     {/* Left: Course Details */}
     <motion.aside
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full lg:w-1/3 bg-white/95 dark:bg-gray-800/95 p-5 sm:p-6 rounded-3xl shadow-xl border border-blue-100/50 dark:border-gray-700/50 backdrop-blur-md"
     >
      <div className="flex items-center justify-between mb-4">
       <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-900 dark:text-blue-300">
        {cours.title}
       </h2>
       <button
        onClick={toggleFavorite}
        className="text-red-500 hover:text-red-600 transition"
        aria-label={isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}
       >
        <FaHeart size={20} className={isFavorite ? "fill-current" : "opacity-50"} />
       </button>
      </div>
      <p className="text-gray-700 dark:text-gray-200 text-sm sm:text-base leading-relaxed mb-6">
       {cours.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-6">
       <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 px-3 py-1 bg-blue-100/80 dark:bg-gray-700/80 rounded-full font-medium">
        Catégorie : {cours.category}
       </span>
       <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 px-3 py-1 bg-blue-100/80 dark:bg-gray-700/80 rounded-full font-medium">
        Niveau : {cours.level}
       </span>
      </div>
      <div className="mb-6">
       <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 mb-2">
        <FaChartBar className="text-blue-600 dark:text-blue-400" />
        <span>Progrès : {cours.progress}%</span>
       </div>
       <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
        <motion.div
         initial={{ width: 0 }}
         animate={{ width: `${cours.progress}%` }}
         transition={{ duration: 1, ease: "easeOut" }}
         className="bg-blue-600 h-2 rounded-full"
        ></motion.div>
       </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
       {cours.pdf && (
        <a
         href={cours.pdf}
         download
         className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition text-sm"
        >
         <FaFilePdf className="mr-2" /> Télécharger PDF du Cours
        </a>
       )}
       {cours.externalLink && (
        <a
         href={cours.externalLink}
         target="_blank"
         rel="noopener noreferrer"
         className="inline-flex items-center justify-center px-4 py-2 bg-green-600 text-white font-semibold rounded-xl shadow-md hover:bg-green-700 transition text-sm"
        >
         <FaLink className="mr-2" /> Documentation Externe
        </a>
       )}
      </div>
      <div className="p-4 bg-blue-50/80 dark:bg-gray-700/80 rounded-xl shadow-inner">
       <h3 className="text-base font-semibold text-blue-800 dark:text-blue-300 mb-3">
        Statistiques du Cours
       </h3>
       <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
        <li className="flex items-center gap-2">
         <FaBook className="text-blue-600 dark:text-blue-400" /> Leçons : {lessons.length}
        </li>
        <li className="flex items-center gap-2">
         <FaClock className="text-blue-600 dark:text-blue-400" /> Durée totale :{" "}
         {lessons.reduce((acc, lesson) => {
          const time = parseInt(lesson.duration?.split(" ")[0] || "0");
          return acc + time;
         }, 0)}{" "}
         min
        </li>
        <li className="flex items-center gap-2">
         <FaChartBar className="text-blue-600 dark:text-blue-400" /> Complétion Moyenne :{" "}
         {Math.round(
          lessons.reduce((acc, lesson) => acc + (lesson.progress || 0), 0) / lessons.length
         )}
         %
        </li>
       </ul>
      </div>
     </motion.aside>

     {/* Right: Lessons and Comments */}
     <main className="w-full lg:w-2/3 flex flex-col gap-6">
      {/* Lessons List */}
      <motion.section
       initial={{ opacity: 0, y: 20 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.5, delay: 0.2 }}
       className="bg-white/95 dark:bg-gray-800/95 p-5 sm:p-6 rounded-3xl shadow-xl border border-blue-100/50 dark:border-gray-700/50 backdrop-blur-md"
      >
       <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-900 dark:text-blue-300 mb-4 flex items-center gap-2">
        <FaBook /> Liste des Leçons
       </h2>
       {filteredLessons.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base">
         Aucune leçon correspondante aux filtres sélectionnés.
        </p>
       ) : (
         <div className="space-y-4">
         {filteredLessons.map((lesson) => (
          <motion.div
           key={lesson.id}
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.3 }}
           className={`p-4 rounded-xl shadow-md border border-gray-200/50 dark:border-gray-600/50 transition-all hover:bg-blue-50/50 dark:hover:bg-gray-700/50 cursor-pointer ${selectedLesson?.id === lesson.id ? "bg-blue-100/80 dark:bg-gray-700/80 border-blue-300 dark:border-blue-500" : ""
            }`}
           onClick={() => setSelectedLesson(lesson)}
          >
           <div className="flex justify-between items-center">
            <div>
             <h3 className="text-base font-semibold text-blue-900 dark:text-blue-300">
              {lesson.title}
             </h3>
             <p className="text-sm text-gray-600 dark:text-gray-300">
              Durée : {lesson.duration || "N/A"}
             </p>
            </div>
            <div className="flex items-center gap-2">
             <FaChartBar className="text-gray-500 dark:text-gray-400" />
             <span className="text-sm text-gray-600 dark:text-gray-300">
              {lesson.progress}%
             </span>
            </div>
           </div>
          </motion.div>
         ))}
          {visibleLessonsCount < lessons.length && (
           <motion.button
            onClick={loadMoreLessons}
            className="mt-4 w-full sm:w-auto py-2 px-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-xl shadow-md hover:from-blue-600 hover:to-blue-800 transition flex items-center justify-center gap-2 text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
           >
            Charger plus de leçons <FaChevronDown />
           </motion.button>
          )}
         </div>
       )}
      </motion.section>

      {/* Selected Lesson Details */}
      {selectedLesson && (
       <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-white/95 dark:bg-gray-800/95 p-5 sm:p-6 rounded-3xl shadow-xl border border-blue-100/50 dark:border-gray-700/50 backdrop-blur-md"
       >
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-900 dark:text-blue-300 mb-4">
         {selectedLesson.title}
        </h2>
        {selectedLesson.video_path ? (
         <video
          controls
          className="w-full rounded-xl shadow-md border border-gray-200/50 dark:border-gray-600/50 mb-6 max-h-[250px] sm:max-h-[400px] md:max-h-[500px] object-cover"
          src={`/storage/${selectedLesson.video_path}`}
         >
          Votre navigateur ne prend pas en charge la vidéo.
         </video>
        ) : (
          <p className="text-gray-500 dark:text-gray-400 italic mb-6 text-sm sm:text-base">
           🎥 Aucune vidéo disponible pour cette leçon.
          </p>
        )}
        <p className="text-gray-700 dark:text-gray-200 text-sm sm:text-base leading-relaxed mb-6">
         {selectedLesson.content || "Aucune description disponible pour cette leçon."}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
         {selectedLesson.pdf && (
          <a
           href={selectedLesson.pdf}
           download
           className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition text-sm"
          >
           <FaFilePdf className="mr-2" /> Télécharger PDF de la Leçon
          </a>
         )}
         {selectedLesson.externalLink && (
          <a
           href={selectedLesson.externalLink}
           target="_blank"
           rel="noopener noreferrer"
           className="inline-flex items-center justify-center px-4 py-2 bg-green-600 text-white font-semibold rounded-xl shadow-md hover:bg-green-700 transition text-sm"
          >
           <FaLink className="mr-2" /> Documentation Externe
          </a>
         )}
        </div>

        <div>
         <h3 className="font-bold text-blue-900 dark:text-blue-300 text-base sm:text-lg mb-4 flex items-center gap-2">
          <FaComment className="text-blue-600 dark:text-blue-400" /> Section Commentaires
         </h3>
         {auth.user && (
          <motion.button
           onClick={() =>
            setActiveCommentForm(
             activeCommentForm === `main-${selectedLesson.id}` ? null : `main-${selectedLesson.id}`
            )
           }
           className="mb-6 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-2 rounded-xl shadow-md hover:from-blue-700 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 text-sm"
           whileHover={{ scale: 1.05 }}
           whileTap={{ scale: 0.95 }}
          >
           {activeCommentForm === `main-${selectedLesson.id}` ? "Annuler le Commentaire" : "Ajouter un Commentaire"}
          </motion.button>
         )}
         {activeCommentForm === `main-${selectedLesson.id}` && auth.user && (
          <motion.form
           onSubmit={(e) => {
            e.preventDefault();
            handleCommentSubmit(selectedLesson.id);
           }}
           initial={{ opacity: 0, height: 0 }}
           animate={{ opacity: 1, height: "auto" }}
           exit={{ opacity: 0, height: 0 }}
           className="mb-6 flex flex-col gap-3"
          >
           <textarea
            value={commentContent}
            onChange={(e) => setCommentContent(e.target.value)}
            placeholder="Écrivez votre commentaire ici..."
            className="rounded-xl border border-gray-300 dark:border-gray-600 px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none h-24 shadow-sm bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            disabled={isSubmitting}
            aria-label="Commentaire"
           />
           <button
            type="submit"
            disabled={isSubmitting || !commentContent.trim()}
            className={`px-6 py-2 rounded-xl shadow-md transition-all duration-300 transform hover:scale-105 text-sm ${isSubmitting || !commentContent.trim()
             ? "bg-gray-400 cursor-not-allowed"
             : "bg-blue-600 text-white hover:bg-blue-700"
             }`}
           >
            {isSubmitting ? "Envoi en cours..." : "Publier le Commentaire"}
           </button>
          </motion.form>
         )}
         {(selectedLesson.comments ?? []).length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400 text-sm italic">
           Soyez le premier à commenter cette leçon !
          </p>
         ) : (
           (selectedLesson.comments ?? []).map((comment) => (
            <div
             key={comment.id}
            className="border rounded-xl p-4 mb-4 bg-white/60 dark:bg-gray-800/60 shadow-sm"
           >
            <p className="text-sm text-gray-800 dark:text-gray-200 mb-2">
             <span className="font-semibold text-blue-900 dark:text-blue-300">{comment.user?.name}</span>:{" "}
             {comment.content}
            </p>
            <div className="flex gap-6 text-sm text-gray-600 dark:text-gray-300">
             <button
              onClick={() => handleLike(comment.id)}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1"
              aria-label="Liker le commentaire"
             >
              <FaThumbsUp /> {comment.likes_count || 0}
             </button>
             {auth.user && (
              <button
               onClick={() =>
                setActiveCommentForm(
                 activeCommentForm === comment.id ? null : comment.id
                )
               }
               className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1"
               aria-label="Répondre au commentaire"
              >
               <FaReply /> Répondre
              </button>
             )}
            </div>
            {(comment.replies ?? []).map((reply) => (
             <div
              key={reply.id}
              className="ml-6 mt-3 border-l-4 border-blue-200 dark:border-gray-600 pl-4 text-sm text-gray-700 dark:text-gray-200"
             >
              <span className="font-semibold text-blue-900 dark:text-blue-300">{reply.user?.name}</span>:{" "}
              {reply.content}
             </div>
            ))}
            {activeCommentForm === comment.id && auth.user && (
             <motion.form
              onSubmit={(e) => {
               e.preventDefault();
               handleCommentSubmit(selectedLesson.id, comment.id);
              }}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="ml-6 mt-3 flex flex-col gap-3"
             >
              <textarea
               value={commentContent}
               onChange={(e) => setCommentContent(e.target.value)}
               placeholder="Écrivez votre réponse ici..."
               className="rounded-xl border border-gray-300 dark:border-gray-600 px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none h-20 shadow-sm bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
               disabled={isSubmitting}
               aria-label="Réponse au commentaire"
              />
              <button
               type="submit"
               disabled={isSubmitting || !commentContent.trim()}
               className={`px-6 py-2 rounded-xl shadow-md transition-all duration-300 transform hover:scale-105 text-sm ${isSubmitting || !commentContent.trim()
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
               {isSubmitting ? "Envoi en cours..." : "Publier la Réponse"}
              </button>
             </motion.form>
            )}
           </div>
          ))
         )}
        </div>
       </motion.section>
      )}
     </main>
    </div>
   </div>
  </>
 );
};

export default Show;