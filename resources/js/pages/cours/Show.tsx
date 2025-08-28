

// import React, { useState, useEffect } from "react";
// import { usePage, router } from "@inertiajs/react";
// import { motion, AnimatePresence } from "framer-motion";
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
//  FaHeart,
//  FaFilePdf,
//  FaLink,
//  FaChartBar,
//  FaClock,
//  FaEdit,
//  FaTrash,
//  FaSpinner,
// } from "react-icons/fa";
// import Navbar from "@/components/NavBar";

// // Mock data pour simuler une BD
// const mockCours = {
//  id: 1,
//  title: "Développement Web Full Stack",
//  description:
//   "Maîtrisez le développement web complet, du frontend (HTML, CSS, React) au backend (PHP, Laravel, Node.js). Ce cours vous guide à travers la création d'applications modernes et dynamiques.",
//  category: "Full Stack",
//  level: "Tous niveaux",
//  pdf: "/docs/full-stack.pdf",
//  externalLink: "https://developer.mozilla.org/en-US/docs/Web",
//  progress: 65,
// };

// const mockLessons = [
//  {
//   id: 1,
//   cours_id: 1,
//   title: "Introduction à HTML",
//   content: "Apprenez les bases de la structure web avec HTML : balises, structure sémantique et formulaires.",
//   video_path: "videos/html-intro.mp4",
//   cours: mockCours,
//   comments: [
//    {
//     id: 1,
//     lesson_id: 1,
//     user: { id: 1, name: "Alice" },
//     content: "Super clair pour débuter !",
//     parent_id: null,
//     likes_count: 5,
//     created_at: "2025-08-20T10:00:00Z",
//     replies: [
//      { id: 2, user: { id: 2, name: "Bob" }, content: "Oui, j’ai adoré !", parent_id: 1, likes_count: 2, created_at: "2025-08-20T10:30:00Z" },
//     ],
//    },
//   ],
//   pdf: "/docs/html-intro.pdf",
//   externalLink: "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction",
//   progress: 80,
//   duration: "30 min",
//  },
//  {
//   id: 2,
//   cours_id: 1,
//   title: "Stylisation avec CSS",
//   content: "Découvrez comment styliser vos pages avec CSS : flexbox, grid et animations.",
//   video_path: "videos/css-basics.mp4",
//   cours: mockCours,
//   comments: [],
//   pdf: "/docs/css-basics.pdf",
//   externalLink: "https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps",
//   progress: 50,
//   duration: "45 min",
//  },
//  {
//   id: 3,
//   cours_id: 1,
//   title: "JavaScript Interactivité",
//   content: "Ajoutez des fonctionnalités dynamiques avec JavaScript : DOM et événements.",
//   video_path: "videos/js-interactivity.mp4",
//   cours: mockCours,
//   comments: [
//    {
//     id: 3,
//     lesson_id: 3,
//     user: { id: 3, name: "Charlie" },
//     content: "Les exemples sont top !",
//     parent_id: null,
//     likes_count: 8,
//     created_at: "2025-08-21T09:00:00Z",
//     replies: [],
//    },
//   ],
//   pdf: "/docs/js-interactivity.pdf",
//   externalLink: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps",
//   progress: 30,
//   duration: "40 min",
//  },
//  {
//   id: 4,
//   cours_id: 1,
//   title: "Backend avec PHP",
//   content: "Créez des applications serveur avec PHP : formulaires et sessions.",
//   video_path: "videos/php-server.mp4",
//   cours: mockCours,
//   comments: [],
//   pdf: "/docs/php-server.pdf",
//   externalLink: "https://www.php.net/manual/en/",
//   progress: 90,
//   duration: "50 min",
//  },
// ];

// interface Cours {
//  id: number;
//  title: string;
//  description: string;
//  category: string;
//  level: string;
//  pdf?: string;
//  externalLink?: string;
//  progress?: number;
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
//  created_at: string;
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
//  duration?: string;
// }

// interface Props {
//  lessons?: Lesson[];
//  cours?: Cours;
//  auth: { user: User | null };
// }

// const Show: React.FC = () => {
//  const pageProps = usePage<Props>().props;
//  const cours = pageProps.cours || mockCours;
//  const initialLessons = pageProps.lessons?.length ? pageProps.lessons : mockLessons;
//  const auth = pageProps.auth;

//  const [lessons, setLessons] = useState<Lesson[]>(initialLessons);
//  const [activeCommentForm, setActiveCommentForm] = useState<number | `main-${number}` | null>(null);
//  const [editCommentId, setEditCommentId] = useState<number | null>(null);
//  const [commentContent, setCommentContent] = useState("");
//  const [isSubmitting, setIsSubmitting] = useState(false);
//  const [isDarkMode, setIsDarkMode] = useState(false);
//  const [modal, setModal] = useState({ show: false, isSuccess: false, message: "" });
//  const [filter, setFilter] = useState({ category: "", level: "" });
//  const [visibleLessonsCount, setVisibleLessonsCount] = useState(4);
//  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(lessons[0] || null);
//  const [isFavorite, setIsFavorite] = useState(false);
//  const [actionLoading, setActionLoading] = useState<{ [key: number]: "edit" | "delete" | null }>({});

//  // Toggle dark mode
//  const toggleDarkMode = () => {
//   setIsDarkMode(!isDarkMode);
//   document.documentElement.classList.toggle("dark");
//  };

//  // Toggle favorite
//  const toggleFavorite = () => {
//   setIsFavorite(!isFavorite);
//   setModal({
//    show: true,
//    isSuccess: true,
//    message: isFavorite ? "Retiré des favoris !" : "Ajouté aux favoris ! ❤️",
//   });
//   setTimeout(() => setModal({ show: false, isSuccess: false, message: "" }), 3000);
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

//  // Handle comment submission
//  const handleCommentSubmit = (lessonId: number, parentId: number | null = null) => {
//   if (!commentContent.trim() || !auth.user) return;

//   const tempId = Date.now();
//   const newComment: Comment = {
//    id: tempId,
//    lesson_id: lessonId,
//    user: auth.user,
//    content: commentContent,
//    parent_id: parentId,
//    likes_count: 0,
//    created_at: new Date().toISOString(),
//    replies: [],
//   };

//   setLessons((prevLessons) =>
//    prevLessons.map((lesson) => {
//     if (lesson.id === lessonId) {
//      const updatedComments = parentId
//       ? (lesson.comments ?? []).map((comment) => {
//        if (comment.id === parentId) {
//         return {
//          ...comment,
//          replies: [...(comment.replies ?? []), newComment],
//         };
//        }
//        return comment;
//       })
//       : [...(lesson.comments ?? []), newComment];
//      return { ...lesson, comments: updatedComments };
//     }
//     return lesson;
//    })
//   );

//   setCommentContent("");
//   setActiveCommentForm(null);
//   setIsSubmitting(true);

//   router.post(
//    route("comments.store", lessonId),
//    { content: commentContent, parent_id: parentId },
//    {
//     onSuccess: () => {
//      setIsSubmitting(false);
//      setModal({
//       show: true,
//       isSuccess: true,
//       message: "Commentaire envoyé avec succès ! 🎉",
//      });
//      setTimeout(() => setModal({ show: false, isSuccess: false, message: "" }), 3000);
//     },
//     onError: () => {
//      setLessons((prevLessons) =>
//       prevLessons.map((lesson) => {
//        if (lesson.id === lessonId) {
//         const updatedComments = parentId
//          ? (lesson.comments ?? []).map((comment) => {
//           if (comment.id === parentId) {
//            return {
//             ...comment,
//             replies: (comment.replies ?? []).filter((reply) => reply.id !== tempId),
//            };
//           }
//           return comment;
//          })
//          : (lesson.comments ?? []).filter((comment) => comment.id !== tempId);
//         return { ...lesson, comments: updatedComments };
//        }
//        return lesson;
//       })
//      );
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

//  // Handle comment edit
//  const handleCommentEdit = (commentId: number, lessonId: number, parentId: number | null = null) => {
//   if (!commentContent.trim() || !auth.user) return;

//   const originalComment = lessons
//    .find((lesson) => lesson.id === lessonId)
//    ?.comments?.find((c) => c.id === commentId || c.replies?.some((r) => r.id === commentId));

//   setActionLoading((prev) => ({ ...prev, [commentId]: "edit" }));
//   setLessons((prevLessons) =>
//    prevLessons.map((lesson) => {
//     if (lesson.id === lessonId) {
//      const updatedComments = parentId
//       ? (lesson.comments ?? []).map((comment) => {
//        if (comment.id === parentId) {
//         return {
//          ...comment,
//          replies: (comment.replies ?? []).map((reply) =>
//           reply.id === commentId ? { ...reply, content: commentContent } : reply
//          ),
//         };
//        }
//        return comment;
//       })
//       : (lesson.comments ?? []).map((comment) =>
//        comment.id === commentId ? { ...comment, content: commentContent } : comment
//       );
//      return { ...lesson, comments: updatedComments };
//     }
//     return lesson;
//    })
//   );

//   router.put(
//    route("comments.update", commentId),
//    { content: commentContent },
//    {
//     onSuccess: () => {
//      setActionLoading((prev) => ({ ...prev, [commentId]: null }));
//      setCommentContent("");
//      setEditCommentId(null);
//      setActiveCommentForm(null);
//      setIsSubmitting(false);
//      setModal({
//       show: true,
//       isSuccess: true,
//       message: "Commentaire modifié avec succès dans la base de données ! ✍️",
//      });
//      setTimeout(() => setModal({ show: false, isSuccess: false, message: "" }), 3000);
//     },
//     onError: () => {
//      setLessons((prevLessons) =>
//       prevLessons.map((lesson) => {
//        if (lesson.id === lessonId) {
//         const updatedComments = parentId
//          ? (lesson.comments ?? []).map((comment) => {
//           if (comment.id === parentId) {
//            return {
//             ...comment,
//             replies: (comment.replies ?? []).map((reply) =>
//              reply.id === commentId ? { ...reply, content: originalComment?.content || "" } : reply
//             ),
//            };
//           }
//           return comment;
//          })
//          : (lesson.comments ?? []).map((comment) =>
//           comment.id === commentId ? { ...comment, content: originalComment?.content || "" } : comment
//          );
//         return { ...lesson, comments: updatedComments };
//        }
//        return lesson;
//       })
//      );
//      setActionLoading((prev) => ({ ...prev, [commentId]: null }));
//      setCommentContent("");
//      setEditCommentId(null);
//      setIsSubmitting(false);
//      setModal({
//       show: true,
//       isSuccess: false,
//       message: "Erreur lors de la modification du commentaire. Vérifiez votre connexion. 😅",
//      });
//      setTimeout(() => setModal({ show: false, isSuccess: false, message: "" }), 3000);
//     },
//    }
//   );
//  };

//  // Handle comment delete
//  const handleCommentDelete = (commentId: number, lessonId: number, parentId: number | null = null) => {
//   const originalComments = lessons.find((lesson) => lesson.id === lessonId)?.comments;

//   setActionLoading((prev) => ({ ...prev, [commentId]: "delete" }));
//   setLessons((prevLessons) =>
//    prevLessons.map((lesson) => {
//     if (lesson.id === lessonId) {
//      const updatedComments = parentId
//       ? (lesson.comments ?? []).map((comment) => {
//        if (comment.id === parentId) {
//         return {
//          ...comment,
//          replies: (comment.replies ?? []).filter((reply) => reply.id !== commentId),
//         };
//        }
//        return comment;
//       })
//       : (lesson.comments ?? []).filter((comment) => comment.id !== commentId);
//      return { ...lesson, comments: updatedComments };
//     }
//     return lesson;
//    })
//   );

//   router.delete(route("comments.destroy", commentId), {
//    onSuccess: () => {
//     setActionLoading((prev) => ({ ...prev, [commentId]: null }));
//     setModal({
//      show: true,
//      isSuccess: true,
//      message: "Commentaire supprimé avec succès de la base de données ! 🗑️",
//     });
//     setTimeout(() => setModal({ show: false, isSuccess: false, message: "" }), 3000);
//    },
//    onError: () => {
//     setLessons((prevLessons) =>
//      prevLessons.map((lesson) => {
//       if (lesson.id === lessonId) {
//        return { ...lesson, comments: originalComments };
//       }
//       return lesson;
//      })
//     );
//     setActionLoading((prev) => ({ ...prev, [commentId]: null }));
//     setModal({
//      show: true,
//      isSuccess: false,
//      message: "Erreur lors de la suppression du commentaire. Vérifiez votre connexion. 😅",
//     });
//     setTimeout(() => setModal({ show: false, isSuccess: false, message: "" }), 3000);
//    },
//   });
//  };

//  // Handle like
//  const handleLike = (commentId: number) => {
//   setLessons((prevLessons) =>
//    prevLessons.map((lesson) => {
//     const updateLikes = (comments: Comment[]): Comment[] => {
//      return comments.map((comment) => {
//       if (comment.id === commentId) {
//        return { ...comment, likes_count: comment.likes_count + 1 };
//       }
//       if (comment.replies) {
//        return { ...comment, replies: updateLikes(comment.replies) };
//       }
//       return comment;
//      });
//     };
//     return {
//      ...lesson,
//      comments: lesson.comments ? updateLikes(lesson.comments) : lesson.comments,
//     };
//    })
//   );

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
//     setLessons((prevLessons) =>
//      prevLessons.map((lesson) => {
//       const updateLikesRollback = (comments: Comment[]): Comment[] => {
//        return comments.map((comment) => {
//         if (comment.id === commentId) {
//          return { ...comment, likes_count: comment.likes_count - 1 };
//         }
//         if (comment.replies) {
//          return { ...comment, replies: updateLikesRollback(comment.replies) };
//         }
//         return comment;
//        });
//       };
//       return {
//        ...lesson,
//        comments: lesson.comments ? updateLikesRollback(lesson.comments) : lesson.comments,
//       };
//      })
//     );
//     setModal({
//      show: true,
//      isSuccess: false,
//      message: "Erreur lors de l'ajout du like. 😅",
//     });
//     setTimeout(() => setModal({ show: false, isSuccess: false, message: "" }), 3000);
//    },
//   });
//  };

//  // Mock progress if not provided
//  useEffect(() => {
//   setLessons((prev) =>
//    prev.map((lesson) => ({
//     ...lesson,
//     progress: lesson.progress ?? Math.floor(Math.random() * 100),
//    }))
//   );
//  }, []);

//  // Update selectedLesson when lessons change
//  useEffect(() => {
//   if (selectedLesson) {
//    const updatedLesson = lessons.find((l) => l.id === selectedLesson.id);
//    if (updatedLesson) {
//     setSelectedLesson(updatedLesson);
//    }
//   }
//  }, [lessons]);

//  // Format date for display
//  const formatDate = (dateString: string) => {
//   const date = new Date(dateString);
//   return date.toLocaleString("fr-FR", {
//    year: "numeric",
//    month: "long",
//    day: "numeric",
//    hour: "2-digit",
//    minute: "2-digit",
//   });
//  };

//  return (
//   <>
//    <Navbar />
//    <div className={`min-h-screen flex flex-col ${isDarkMode ? "dark bg-gray-900" : "bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200"} transition-colors duration-500`}>
//     {/* Modal for Feedback */}
//     <AnimatePresence>
//      {modal.show && (
//       <motion.div
//        initial={{ opacity: 0, y: -50 }}
//        animate={{ opacity: 1, y: 0 }}
//        exit={{ opacity: 0, y: -50 }}
//        className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 p-4 rounded-xl shadow-lg flex items-center gap-3 max-w-md w-[90%] sm:w-full"
//        style={{ backgroundColor: modal.isSuccess ? "#10B981" : "#EF4444" }}
//       >
//        {modal.isSuccess ? (
//         <FaCheckCircle className="text-white text-xl sm:text-2xl" />
//        ) : (
//         <FaTimesCircle className="text-white text-xl sm:text-2xl" />
//        )}
//        <p className="text-white font-semibold text-sm sm:text-base">{modal.message}</p>
//       </motion.div>
//      )}
//     </AnimatePresence>

//     <header className="bg-white dark:bg-gray-800 shadow-md p-4 flex flex-col sm:flex-row justify-between items-center gap-4">
//      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-800 dark:text-blue-300 text-center sm:text-left">
//       <FaBook className="inline mr-2" /> {cours.title}
//      </h1>
//      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
//       <button
//        onClick={toggleDarkMode}
//        className="p-2 rounded-full bg-blue-600 dark:bg-gray-700 text-white hover:bg-blue-700 dark:hover:bg-gray-600 transition"
//        aria-label="Toggle dark mode"
//       >
//        {isDarkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
//       </button>
//       <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
//        <select
//         value={filter.category}
//         onChange={(e) => setFilter({ ...filter, category: e.target.value })}
//         className="px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs sm:text-sm w-full"
//        >
//         <option value="">Toutes Catégories</option>
//         <option value="Frontend">Frontend</option>
//         <option value="Backend">Backend</option>
//         <option value="Database">Database</option>
//         <option value="Tools">Tools</option>
//        </select>
//        <select
//         value={filter.level}
//         onChange={(e) => setFilter({ ...filter, level: e.target.value })}
//         className="px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs sm:text-sm w-full"
//        >
//         <option value="">Tous Niveaux</option>
//         <option value="Débutant">Débutant</option>
//         <option value="Intermédiaire">Intermédiaire</option>
//         <option value="Avancé">Avancé</option>
//        </select>
//       </div>
//      </div>
//     </header>

//     <div className="flex-1 flex flex-col lg:flex-row gap-6 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full">
//      {/* Left: Course Details */}
//      <motion.aside
//       initial={{ opacity: 0, x: -20 }}
//       animate={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.5 }}
//       className="w-full lg:w-1/3 bg-white/95 dark:bg-gray-800/95 p-5 sm:p-6 rounded-3xl shadow-xl border border-blue-100/50 dark:border-gray-700/50 backdrop-blur-md"
//      >
//       <div className="flex items-center justify-between mb-4">
//        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-900 dark:text-blue-300">
//         {cours.title}
//        </h2>
//        <button
//         onClick={toggleFavorite}
//         className="text-red-500 hover:text-red-600 transition"
//         aria-label={isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}
//        >
//         <FaHeart size={20} className={isFavorite ? "fill-current" : "opacity-50"} />
//        </button>
//       </div>
//       <p className="text-gray-700 dark:text-gray-200 text-sm sm:text-base leading-relaxed mb-6">
//        {cours.description}
//       </p>
//       <div className="flex flex-wrap gap-2 mb-6">
//        <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 px-3 py-1 bg-blue-100/80 dark:bg-gray-700/80 rounded-full font-medium">
//         Catégorie : {cours.category}
//        </span>
//        <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 px-3 py-1 bg-blue-100/80 dark:bg-gray-700/80 rounded-full font-medium">
//         Niveau : {cours.level}
//        </span>
//       </div>
//       <div className="mb-6">
//        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 mb-2">
//         <FaChartBar className="text-blue-600 dark:text-blue-400" />
//         <span>Progrès : {cours.progress}%</span>
//        </div>
//        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
//         <motion.div
//          initial={{ width: 0 }}
//          animate={{ width: `${cours.progress}%` }}
//          transition={{ duration: 1, ease: "easeOut" }}
//          className="bg-blue-600 h-2 rounded-full"
//         ></motion.div>
//        </div>
//       </div>
//       <div className="flex flex-col sm:flex-row gap-3 mb-6">
//        {cours.pdf && (
//         <a
//          href={cours.pdf}
//          download
//          className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition text-sm"
//         >
//          <FaFilePdf className="mr-2" /> Télécharger PDF du Cours
//         </a>
//        )}
//        {cours.externalLink && (
//         <a
//          href={cours.externalLink}
//          target="_blank"
//          rel="noopener noreferrer"
//          className="inline-flex items-center justify-center px-4 py-2 bg-green-600 text-white font-semibold rounded-xl shadow-md hover:bg-green-700 transition text-sm"
//         >
//          <FaLink className="mr-2" /> Documentation Externe
//         </a>
//        )}
//       </div>
//       <div className="p-4 bg-blue-50/80 dark:bg-gray-700/80 rounded-xl shadow-inner">
//        <h3 className="text-base font-semibold text-blue-800 dark:text-blue-300 mb-3">
//         Statistiques du Cours
//        </h3>
//        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
//         <li className="flex items-center gap-2">
//          <FaBook className="text-blue-600 dark:text-blue-400" /> Leçons : {lessons.length}
//         </li>
//         <li className="flex items-center gap-2">
//          <FaClock className="text-blue-600 dark:text-blue-400" /> Durée totale :{" "}
//          {lessons.reduce((acc, lesson) => {
//           const time = parseInt(lesson.duration?.split(" ")[0] || "0");
//           return acc + time;
//          }, 0)}{" "}
//          min
//         </li>
//         <li className="flex items-center gap-2">
//          <FaChartBar className="text-blue-600 dark:text-blue-400" /> Complétion Moyenne :{" "}
//          {Math.round(
//           lessons.reduce((acc, lesson) => acc + (lesson.progress || 0), 0) / lessons.length
//          )}
//          %
//         </li>
//        </ul>
//       </div>
//      </motion.aside>

//      {/* Right: Lessons and Comments */}
//      <main className="w-full lg:w-2/3 flex flex-col gap-6">
//       {/* Lessons List */}
//       <motion.section
//        initial={{ opacity: 0, y: 20 }}
//        animate={{ opacity: 1, y: 0 }}
//        transition={{ duration: 0.5, delay: 0.2 }}
//        className="bg-white/95 dark:bg-gray-800/95 p-5 sm:p-6 rounded-3xl shadow-xl border border-blue-100/50 dark:border-gray-700/50 backdrop-blur-md"
//       >
//        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-900 dark:text-blue-300 mb-4 flex items-center gap-2">
//         <FaBook /> Liste des Leçons
//        </h2>
//        {filteredLessons.length === 0 ? (
//         <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base">
//          Aucune leçon correspondante aux filtres sélectionnés.
//         </p>
//        ) : (
//          <div className="space-y-4">
//          {filteredLessons.map((lesson) => (
//           <motion.div
//            key={lesson.id}
//            initial={{ opacity: 0, y: 10 }}
//            animate={{ opacity: 1, y: 0 }}
//            transition={{ duration: 0.3 }}
//            className={`p-4 rounded-xl shadow-md border border-gray-200/50 dark:border-gray-600/50 transition-all hover:bg-blue-50/50 dark:hover:bg-gray-700/50 cursor-pointer ${selectedLesson?.id === lesson.id ? "bg-blue-100/80 dark:bg-gray-700/80 border-blue-300 dark:border-blue-500" : ""
//             }`}
//            onClick={() => setSelectedLesson(lesson)}
//           >
//            <div className="flex justify-between items-center">
//             <div>
//              <h3 className="text-base font-semibold text-blue-900 dark:text-blue-300">
//               {lesson.title}
//              </h3>
//              <p className="text-sm text-gray-600 dark:text-gray-300">
//               Durée : {lesson.duration || "N/A"}
//              </p>
//             </div>
//             <div className="flex items-center gap-2">
//              <FaChartBar className="text-gray-500 dark:text-gray-400" />
//              <span className="text-sm text-gray-600 dark:text-gray-300">
//               {lesson.progress}%
//              </span>
//             </div>
//            </div>
//           </motion.div>
//          ))}
//           {visibleLessonsCount < lessons.length && (
//            <motion.button
//             onClick={loadMoreLessons}
//             className="mt-4 w-full sm:w-auto py-2 px-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-xl shadow-md hover:from-blue-600 hover:to-blue-800 transition flex items-center justify-center gap-2 text-sm"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//            >
//             Charger plus de leçons <FaChevronDown />
//            </motion.button>
//           )}
//          </div>
//        )}
//       </motion.section>

//       {/* Selected Lesson Details */}
//       {selectedLesson && (
//        <motion.section
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.4 }}
//         className="bg-white/95 dark:bg-gray-800/95 p-5 sm:p-6 rounded-3xl shadow-xl border border-blue-100/50 dark:border-gray-700/50 backdrop-blur-md"
//        >
//         <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-900 dark:text-blue-300 mb-4">
//          {selectedLesson.title}
//         </h2>
//         {selectedLesson.video_path ? (
//          <video
//           controls
//           className="w-full rounded-xl shadow-md border border-gray-200/50 dark:border-gray-600/50 mb-6 max-h-[250px] sm:max-h-[400px] md:max-h-[500px] object-cover"
//           src={`/storage/${selectedLesson.video_path}`}
//          >
//           Votre navigateur ne prend pas en charge la vidéo.
//          </video>
//         ) : (
//           <p className="text-gray-500 dark:text-gray-400 italic mb-6 text-sm sm:text-base">
//            🎥 Aucune vidéo disponible pour cette leçon.
//           </p>
//         )}
//         <p className="text-gray-700 dark:text-gray-200 text-sm sm:text-base leading-relaxed mb-6">
//          {selectedLesson.content || "Aucune description disponible pour cette leçon."}
//         </p>
//         <div className="flex flex-col sm:flex-row gap-3 mb-6">
//          {selectedLesson.pdf && (
//           <a
//            href={selectedLesson.pdf}
//            download
//            className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition text-sm"
//           >
//            <FaFilePdf className="mr-2" /> Télécharger PDF de la Leçon
//           </a>
//          )}
//          {selectedLesson.externalLink && (
//           <a
//            href={selectedLesson.externalLink}
//            target="_blank"
//            rel="noopener noreferrer"
//            className="inline-flex items-center justify-center px-4 py-2 bg-green-600 text-white font-semibold rounded-xl shadow-md hover:bg-green-700 transition text-sm"
//           >
//            <FaLink className="mr-2" /> Documentation Externe
//           </a>
//          )}
//         </div>

//         <div>
//          <h3 className="font-bold text-blue-900 dark:text-blue-300 text-base sm:text-lg mb-4 flex items-center gap-2">
//           <FaComment className="text-blue-600 dark:text-blue-400" /> Section Commentaires
//          </h3>
//          {auth.user && (
//           <motion.button
//            onClick={() =>
//             setActiveCommentForm(
//              activeCommentForm === `main-${selectedLesson.id}` ? null : `main-${selectedLesson.id}`
//             )
//            }
//            className="mb-6 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-2 rounded-xl shadow-md hover:from-blue-700 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 text-sm"
//            whileHover={{ scale: 1.05 }}
//            whileTap={{ scale: 0.95 }}
//           >
//            {activeCommentForm === `main-${selectedLesson.id}` ? "Annuler le Commentaire" : "Ajouter un Commentaire"}
//           </motion.button>
//          )}
//          {activeCommentForm === `main-${selectedLesson.id}` && auth.user && (
//           <motion.form
//            onSubmit={(e) => {
//             e.preventDefault();
//             handleCommentSubmit(selectedLesson.id);
//            }}
//            initial={{ opacity: 0, height: 0 }}
//            animate={{ opacity: 1, height: "auto" }}
//            exit={{ opacity: 0, height: 0 }}
//            className="mb-6 flex flex-col gap-3"
//           >
//            <textarea
//             value={commentContent}
//             onChange={(e) => setCommentContent(e.target.value)}
//             placeholder="Écrivez votre commentaire ici..."
//             className="rounded-xl border border-gray-300 dark:border-gray-600 px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none h-24 shadow-sm bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
//             disabled={isSubmitting}
//             aria-label="Commentaire"
//            />
//            <button
//             type="submit"
//             disabled={isSubmitting || !commentContent.trim()}
//             className={`px-6 py-2 rounded-xl shadow-md transition-all duration-300 transform hover:scale-105 text-sm ${isSubmitting || !commentContent.trim()
//              ? "bg-gray-400 cursor-not-allowed"
//              : "bg-blue-600 text-white hover:bg-blue-700"
//              }`}
//            >
//             {isSubmitting ? (
//              <span className="flex items-center gap-2">
//               <FaSpinner className="animate-spin" /> Envoi en cours...
//              </span>
//             ) : (
//              "Publier le Commentaire"
//             )}
//            </button>
//           </motion.form>
//          )}
//          {(selectedLesson.comments ?? []).length === 0 ? (
//           <p className="text-gray-500 dark:text-gray-400 text-sm italic">
//            Soyez le premier à commenter cette leçon !
//           </p>
//          ) : (
//            (selectedLesson.comments ?? []).map((comment) => (
//             <motion.div
//              key={comment.id}
//              initial={{ opacity: 1 }}
//              exit={{ opacity: 0, height: 0 }}
//              transition={{ duration: 0.3 }}
//             className="border rounded-xl p-4 mb-4 bg-white/60 dark:bg-gray-800/60 shadow-sm"
//            >
//              <div className="flex justify-between items-start">
//               <div>
//                <p className="text-sm text-gray-800 dark:text-gray-200 mb-2">
//                 <span className="font-semibold text-blue-900 dark:text-blue-300">{comment.user?.name}</span>:{" "}
//                 {comment.content}
//                </p>
//                <p className="text-xs text-gray-500 dark:text-gray-400">
//                 Publié le {formatDate(comment.created_at)}
//                </p>
//               </div>
//               {auth.user?.id === comment.user.id && (
//                <div className="flex gap-2">
//                 <button
//                  onClick={() => {
//                   setEditCommentId(comment.id);
//                   setCommentContent(comment.content);
//                   setActiveCommentForm(null);
//                  }}
//                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
//                  aria-label="Modifier le commentaire"
//                  disabled={actionLoading[comment.id] === "edit" || actionLoading[comment.id] === "delete"}
//                 >
//                  {actionLoading[comment.id] === "edit" ? (
//                   <FaSpinner className="animate-spin" />
//                  ) : (
//                   <FaEdit />
//                  )}
//                 </button>
//                 <button
//                  onClick={() => handleCommentDelete(comment.id, selectedLesson.id)}
//                  className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 transition-colors"
//                  aria-label="Supprimer le commentaire"
//                  disabled={actionLoading[comment.id] === "edit" || actionLoading[comment.id] === "delete"}
//                 >
//                  {actionLoading[comment.id] === "delete" ? (
//                   <FaSpinner className="animate-spin" />
//                  ) : (
//                   <FaTrash />
//                  )}
//                 </button>
//                </div>
//               )}
//              </div>
//              <div className="flex gap-6 text-sm text-gray-600 dark:text-gray-300 mt-2">
//              <button
//               onClick={() => handleLike(comment.id)}
//               className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1"
//               aria-label="Liker le commentaire"
//              >
//               <FaThumbsUp /> {comment.likes_count || 0}
//              </button>
//              {auth.user && (
//               <button
//                onClick={() =>
//                 setActiveCommentForm(
//                  activeCommentForm === comment.id ? null : comment.id
//                 )
//                }
//                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1"
//                aria-label="Répondre au commentaire"
//               >
//                <FaReply /> Répondre
//               </button>
//              )}
//             </div>
//             {(comment.replies ?? []).map((reply) => (
//              <motion.div
//               key={reply.id}
//               initial={{ opacity: 1 }}
//               exit={{ opacity: 0, height: 0 }}
//               transition={{ duration: 0.3 }}
//               className="ml-6 mt-3 border-l-4 border-blue-200 dark:border-gray-600 pl-4 text-sm text-gray-700 dark:text-gray-200"
//              >
//               <div className="flex justify-between items-start">
//                <div>
//                 <p>
//                  <span className="font-semibold text-blue-900 dark:text-blue-300">{reply.user?.name}</span>:{" "}
//                  {reply.content}
//                 </p>
//                 <p className="text-xs text-gray-500 dark:text-gray-400">
//                  Publié le {formatDate(reply.created_at)}
//                 </p>
//                </div>
//                {auth.user?.id === reply.user.id && (
//                 <div className="flex gap-2">
//                  <button
//                   onClick={() => {
//                    setEditCommentId(reply.id);
//                    setCommentContent(reply.content);
//                    setActiveCommentForm(null);
//                   }}
//                   className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
//                   aria-label="Modifier la réponse"
//                   disabled={actionLoading[reply.id] === "edit" || actionLoading[reply.id] === "delete"}
//                  >
//                   {actionLoading[reply.id] === "edit" ? (
//                    <FaSpinner className="animate-spin" />
//                   ) : (
//                    <FaEdit />
//                   )}
//                  </button>
//                  <button
//                   onClick={() => handleCommentDelete(reply.id, selectedLesson.id, comment.id)}
//                   className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 transition-colors"
//                   aria-label="Supprimer la réponse"
//                   disabled={actionLoading[reply.id] === "edit" || actionLoading[reply.id] === "delete"}
//                  >
//                   {actionLoading[reply.id] === "delete" ? (
//                    <FaSpinner className="animate-spin" />
//                   ) : (
//                    <FaTrash />
//                   )}
//                  </button>
//                 </div>
//                )}
//               </div>
//              </motion.div>
//             ))}
//             {activeCommentForm === comment.id && auth.user && (
//              <motion.form
//               onSubmit={(e) => {
//                e.preventDefault();
//                handleCommentSubmit(selectedLesson.id, comment.id);
//               }}
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: "auto" }}
//               exit={{ opacity: 0, height: 0 }}
//               className="ml-6 mt-3 flex flex-col gap-3"
//              >
//               <textarea
//                value={commentContent}
//                onChange={(e) => setCommentContent(e.target.value)}
//                placeholder="Écrivez votre réponse ici..."
//                className="rounded-xl border border-gray-300 dark:border-gray-600 px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none h-20 shadow-sm bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
//                disabled={isSubmitting}
//                aria-label="Réponse au commentaire"
//               />
//               <button
//                type="submit"
//                disabled={isSubmitting || !commentContent.trim()}
//                className={`px-6 py-2 rounded-xl shadow-md transition-all duration-300 transform hover:scale-105 text-sm ${isSubmitting || !commentContent.trim()
//                 ? "bg-gray-400 cursor-not-allowed"
//                 : "bg-blue-600 text-white hover:bg-blue-700"
//                 }`}
//               >
//                 {isSubmitting ? (
//                  <span className="flex items-center gap-2">
//                   <FaSpinner className="animate-spin" /> Envoi en cours...
//                  </span>
//                 ) : (
//                  "Publier la Réponse"
//                 )}
//               </button>
//              </motion.form>
//             )}
//              {editCommentId === comment.id && auth.user && (
//               <motion.form
//                onSubmit={(e) => {
//                 e.preventDefault();
//                 handleCommentEdit(comment.id, selectedLesson.id);
//                }}
//                initial={{ opacity: 0, height: 0 }}
//                animate={{ opacity: 1, height: "auto" }}
//                exit={{ opacity: 0, height: 0 }}
//                className="mt-3 flex flex-col gap-3"
//               >
//                <textarea
//                 value={commentContent}
//                 onChange={(e) => setCommentContent(e.target.value)}
//                 placeholder="Modifiez votre commentaire ici..."
//                 className="rounded-xl border border-gray-300 dark:border-gray-600 px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none h-24 shadow-sm bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
//                 disabled={isSubmitting}
//                 aria-label="Modifier le commentaire"
//                />
//                <div className="flex gap-3">
//                 <button
//                  type="submit"
//                  disabled={isSubmitting || !commentContent.trim()}
//                  className={`px-6 py-2 rounded-xl shadow-md transition-all duration-300 transform hover:scale-105 text-sm ${isSubmitting || !commentContent.trim()
//                   ? "bg-gray-400 cursor-not-allowed"
//                   : "bg-blue-600 text-white hover:bg-blue-700"
//                   }`}
//                 >
//                  {isSubmitting ? (
//                   <span className="flex items-center gap-2">
//                    <FaSpinner className="animate-spin" /> Envoi en cours...
//                   </span>
//                  ) : (
//                   "Sauvegarder"
//                  )}
//                 </button>
//                 <button
//                  type="button"
//                  onClick={() => {
//                   setEditCommentId(null);
//                   setCommentContent("");
//                  }}
//                  className="px-6 py-2 rounded-xl shadow-md bg-gray-400 text-white hover:bg-gray-500 transition-all duration-300 transform hover:scale-105 text-sm"
//                 >
//                  Annuler
//                 </button>
//                </div>
//               </motion.form>
//              )}
//             </motion.div>
//           ))
//          )}
//          {editCommentId && (selectedLesson.comments ?? []).every((c) => c.id !== editCommentId) && auth.user && (
//           <motion.form
//            onSubmit={(e) => {
//             e.preventDefault();
//             const parentComment = (selectedLesson.comments ?? []).find((c) =>
//              (c.replies ?? []).some((r) => r.id === editCommentId)
//             );
//             handleCommentEdit(editCommentId, selectedLesson.id, parentComment?.id);
//            }}
//            initial={{ opacity: 0, height: 0 }}
//            animate={{ opacity: 1, height: "auto" }}
//            exit={{ opacity: 0, height: 0 }}
//            className="ml-6 mt-3 flex flex-col gap-3"
//           >
//            <textarea
//             value={commentContent}
//             onChange={(e) => setCommentContent(e.target.value)}
//             placeholder="Modifiez votre réponse ici..."
//             className="rounded-xl border border-gray-300 dark:border-gray-600 px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none h-20 shadow-sm bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
//             disabled={isSubmitting}
//             aria-label="Modifier la réponse"
//            />
//            <div className="flex gap-3">
//             <button
//              type="submit"
//              disabled={isSubmitting || !commentContent.trim()}
//              className={`px-6 py-2 rounded-xl shadow-md transition-all duration-300 transform hover:scale-105 text-sm ${isSubmitting || !commentContent.trim()
//               ? "bg-gray-400 cursor-not-allowed"
//               : "bg-blue-600 text-white hover:bg-blue-700"
//               }`}
//             >
//              {isSubmitting ? (
//               <span className="flex items-center gap-2">
//                <FaSpinner className="animate-spin" /> Envoi en cours...
//               </span>
//              ) : (
//               "Sauvegarder"
//              )}
//             </button>
//             <button
//              type="button"
//              onClick={() => {
//               setEditCommentId(null);
//               setCommentContent("");
//              }}
//              className="px-6 py-2 rounded-xl shadow-md bg-gray-400 text-white hover:bg-gray-500 transition-all duration-300 transform hover:scale-105 text-sm"
//             >
//              Annuler
//             </button>
//            </div>
//           </motion.form>
//          )}
//         </div>
//        </motion.section>
//       )}
//      </main>
//     </div>
//    </div>
//   </>
//  );
// };

// export default Show;


import React from "react";
import { usePage } from "@inertiajs/react";

export default function Show() {
 const { lessons } = usePage().props;

 return (
  <div className="p-6">
   <h1 className="text-2xl font-bold mb-4">Liste des Leçons</h1>

   {lessons.length === 0 ? (
    <p>Aucune leçon disponible pour ce cours.</p>
   ) : (
     lessons.map((lesson) => (
      <div
       key={lesson.id}
       className="border rounded-xl p-4 mb-4 shadow-sm"
      >
       <h2 className="text-xl font-semibold mb-2">{lesson.title}</h2>
       <p className="text-gray-600 mb-2">{lesson.description}</p>

       {/* Affichage des commentaires */}
       {lesson.comments && lesson.comments.length > 0 ? (
        <div className="mt-3">
         <h3 className="font-medium">Commentaires :</h3>
         {lesson.comments.map((comment) => (
          <div
           key={comment.id}
           className="mt-2 border-l-2 pl-3 border-gray-300"
          >
           <p className="text-sm">
            <span className="font-semibold">
             {comment.user?.name || "Anonyme"}
            </span>{" "}
            : {comment.content}
           </p>

           {/* Réponses */}
           {comment.replies && comment.replies.length > 0 && (
            <div className="ml-4 mt-1 text-gray-700">
             {comment.replies.map((reply) => (
              <p key={reply.id} className="text-sm">
               <span className="font-semibold">
                {reply.user?.name || "Anonyme"}
               </span>{" "}
               : {reply.content}
              </p>
            ))}
            </div>
           )}
          </div>
         ))}
        </div>
       ) : (
        <p className="text-sm text-gray-500">Pas encore de commentaires.</p>
       )}
      </div>
     ))
   )}
  </div>
 );
}
