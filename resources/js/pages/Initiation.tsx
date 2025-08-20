import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
 FaHtml5,
 FaCss3Alt,
 FaReact,
 FaPhp,
 FaLaravel,
 FaJsSquare,
 FaNodeJs,
 FaVuejs,
 FaDatabase,
 FaAngular,
 FaPython,
 FaGitAlt,
 FaSearch,
 FaMoon,
 FaSun,
 FaStar,
 FaHeart,
 FaCode,
 FaVideo,
 FaQuestionCircle,
 FaChartBar,
 FaChevronDown,
 FaCheckCircle,
 FaTimesCircle,
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiBootstrap, SiSass, SiTypescript } from "react-icons/si";
import Navbar from "@/components/NavBar";

const allCourses = [
 {
  id: "html",
  title: "HTML",
  description: "HTML (HyperText Markup Language) est le langage de base du web. Il permet de structurer les pages grâce aux balises (titres, paragraphes, images, liens...).",
  logo: <FaHtml5 className="text-orange-600 text-7xl" />,
  pdf: "/docs/html.pdf",
  category: "Frontend",
  level: "Débutant",
  prerequisites: [],
  externalLink: "https://developer.mozilla.org/fr/docs/Web/HTML",
  codeExample: "<!DOCTYPE html>\n<html>\n<head>\n<title>Titre de page</title>\n</head>\n<body>\n<h1>Ceci est un titre</h1>\n<p>Ceci est un paragraphe.</p>\n</body>\n</html>",
  videoUrl: "https://www.youtube.com/embed/pQN-pnXPaVg",
  quiz: [
   { question: "Que signifie HTML ?", options: ["HyperText Markup Language", "HyperText Machine Language"], answer: 0 },
  ],
 },
 {
  id: "css",
  title: "CSS",
  description: "CSS (Cascading Style Sheets) est le langage de mise en forme du web. Il permet de styliser les pages : couleurs, polices, disposition et animations.",
  logo: <FaCss3Alt className="text-blue-600 text-7xl" />,
  pdf: "/docs/css.pdf",
  category: "Frontend",
  level: "Débutant",
  prerequisites: ["html"],
  externalLink: "https://developer.mozilla.org/fr/docs/Web/CSS",
  codeExample: "body {\n  background-color: lightblue;\n}\nh1 {\n  color: navy;\n  margin-left: 20px;\n}",
  videoUrl: "https://www.youtube.com/embed/yfoY53QXEnI",
  quiz: [
   { question: "Que signifie CSS ?", options: ["Cascading Style Sheets", "Computer Style Sheets"], answer: 0 },
  ],
 },
 {
  id: "tailwind",
  title: "Tailwind CSS",
  description: "TailwindCSS est un framework CSS utilitaire qui permet de concevoir rapidement des interfaces modernes avec une syntaxe simple et réutilisable.",
  logo: <SiTailwindcss className="text-cyan-500 text-7xl" />,
  pdf: "/docs/tailwind.pdf",
  category: "Frontend",
  level: "Intermédiaire",
  prerequisites: ["css"],
  externalLink: "https://tailwindcss.com/docs",
  codeExample: "<div class=\"bg-blue-500 text-white p-4 rounded\">Bonjour Tailwind!</div>",
  videoUrl: "https://www.youtube.com/embed/mr15Xzb1JB8",
  quiz: [
   { question: "Tailwind est un framework ... ?", options: ["Utility-first CSS", "Basé sur les composants"], answer: 0 },
  ],
 },
 {
  id: "js",
  title: "JavaScript",
  description: "JavaScript est le langage de programmation du web. Il permet d'ajouter de l'interactivité et de la logique dans les pages web.",
  logo: <FaJsSquare className="text-yellow-500 text-7xl" />,
  pdf: "/docs/js.pdf",
  category: "Frontend",
  level: "Intermédiaire",
  prerequisites: ["html", "css"],
  externalLink: "https://developer.mozilla.org/fr/docs/Web/JavaScript",
  codeExample: "console.log('Bonjour, Monde!');\nlet x = 5;\nlet y = 10;\nconsole.log(x + y);",
  videoUrl: "https://www.youtube.com/embed/hdI2bqOjy3c",
  quiz: [
   { question: "JavaScript est utilisé pour ?", options: ["Interactivité", "Mise en forme"], answer: 0 },
  ],
 },
 {
  id: "php",
  title: "PHP",
  description: "PHP est un langage de script côté serveur utilisé pour créer des sites dynamiques et interagir avec des bases de données.",
  logo: <FaPhp className="text-indigo-500 text-7xl" />,
  pdf: "/docs/php.pdf",
  category: "Backend",
  level: "Intermédiaire",
  prerequisites: ["html"],
  externalLink: "https://www.php.net/manual/fr/",
  codeExample: "<?php\necho 'Bonjour, Monde!';\n?>",
  videoUrl: "https://www.youtube.com/embed/OK_JCtrrv-c",
  quiz: [
   { question: "PHP est un langage ... ?", options: ["Côté serveur", "Côté client"], answer: 0 },
  ],
 },
 {
  id: "react",
  title: "React",
  description: "React est une bibliothèque JavaScript créée par Facebook. Elle permet de construire des interfaces dynamiques et réactives avec des composants.",
  logo: <FaReact className="text-cyan-400 text-7xl" />,
  pdf: "/docs/react.pdf",
  category: "Frontend",
  level: "Avancé",
  prerequisites: ["js"],
  externalLink: "https://fr.react.dev/learn",
  codeExample: "import React from 'react';\nfunction App() {\n  return <h1>Bonjour, React!</h1>;\n}\nexport default App;",
  videoUrl: "https://www.youtube.com/embed/Tn6-PIqc4UM",
  quiz: [
   { question: "React est maintenu par ?", options: ["Facebook", "Google"], answer: 0 },
  ],
 },
 {
  id: "laravel",
  title: "Laravel",
  description: "Laravel est un framework PHP moderne qui facilite le développement web avec une structure claire, une sécurité avancée et des outils puissants.",
  logo: <FaLaravel className="text-red-600 text-7xl" />,
  pdf: "/docs/laravel.pdf",
  category: "Backend",
  level: "Avancé",
  prerequisites: ["php"],
  externalLink: "https://laravel.com/docs",
  codeExample: "<?php\nRoute::get('/', function () {\n    return view('bienvenue');\n});",
  videoUrl: "https://www.youtube.com/embed/ImtZ5yENzgE",
  quiz: [
   { question: "Laravel est un framework ... ?", options: ["PHP", "JavaScript"], answer: 0 },
  ],
 },
 {
  id: "nodejs",
  title: "Node.js",
  description: "Node.js est un environnement d'exécution JavaScript côté serveur qui permet de construire des applications scalables et performantes.",
  logo: <FaNodeJs className="text-green-600 text-7xl" />,
  pdf: "/docs/nodejs.pdf",
  category: "Backend",
  level: "Intermédiaire",
  prerequisites: ["js"],
  externalLink: "https://nodejs.org/fr/docs/",
  codeExample: "const http = require('http');\nhttp.createServer((req, res) => {\n  res.write('Bonjour Node!');\n  res.end();\n}).listen(8080);",
  videoUrl: "https://www.youtube.com/embed/fBNz5xF-Kx4",
  quiz: [
   { question: "Node.js fonctionne avec ?", options: ["Moteur V8", "JVM"], answer: 0 },
  ],
 },
 {
  id: "express",
  title: "Express.js",
  description: "Express est un framework web minimaliste pour Node.js qui simplifie la création d'API et d'applications web.",
  logo: <SiExpress className="text-gray-800 text-7xl" />,
  pdf: "/docs/express.pdf",
  category: "Backend",
  level: "Intermédiaire",
  prerequisites: ["nodejs"],
  externalLink: "https://expressjs.com/fr/",
  codeExample: "const express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n  res.send('Bonjour Express!');\n});\napp.listen(3000);",
  videoUrl: "https://www.youtube.com/embed/SccSCuHhOw0",
  quiz: [
   { question: "Express sert à ?", options: ["Node.js", "React"], answer: 0 },
  ],
 },
 {
  id: "mongodb",
  title: "MongoDB",
  description: "MongoDB est une base de données NoSQL orientée documents, flexible et scalable pour les applications modernes.",
  logo: <SiMongodb className="text-green-500 text-7xl" />,
  pdf: "/docs/mongodb.pdf",
  category: "Database",
  level: "Intermédiaire",
  prerequisites: [],
  externalLink: "https://www.mongodb.com/docs/",
  codeExample: "db.collection('users').insertOne({ name: 'Jean' });",
  videoUrl: "https://www.youtube.com/embed/-56x56UppqQ",
  quiz: [
   { question: "MongoDB est ?", options: ["NoSQL", "SQL"], answer: 0 },
  ],
 },
 {
  id: "vue",
  title: "Vue.js",
  description: "Vue.js est un framework JavaScript progressif pour construire des interfaces utilisateur interactives.",
  logo: <FaVuejs className="text-green-400 text-7xl" />,
  pdf: "/docs/vue.pdf",
  category: "Frontend",
  level: "Avancé",
  prerequisites: ["js"],
  externalLink: "https://vuejs.org/guide/introduction.html",
  codeExample: "<template>\n  <div>{{ message }}</div>\n</template>\n<script>\nexport default {\n  data() {\n    return { message: 'Bonjour Vue!' };\n  }\n};\n</script>",
  videoUrl: "https://www.youtube.com/embed/YrxBCBibU0g",
  quiz: [
   { question: "Vue.js est ?", options: ["Framework progressif", "Bibliothèque statique"], answer: 0 },
  ],
 },
 {
  id: "angular",
  title: "Angular",
  description: "Angular est un framework JavaScript complet pour construire des applications web dynamiques.",
  logo: <FaAngular className="text-red-500 text-7xl" />,
  pdf: "/docs/angular.pdf",
  category: "Frontend",
  level: "Avancé",
  prerequisites: ["js"],
  externalLink: "https://angular.io/docs",
  codeExample: "@Component({\n  selector: 'app-root',\n  template: '<h1>Bonjour Angular!</h1>'\n})\nexport class AppComponent {}",
  videoUrl: "https://www.youtube.com/embed/3qBXWUpoPHo",
  quiz: [
   { question: "Angular est développé par ?", options: ["Google", "Microsoft"], answer: 0 },
  ],
 },
 {
  id: "python",
  title: "Python",
  description: "Python est un langage de programmation polyvalent, utilisé pour le web, les données, l'IA et plus.",
  logo: <FaPython className="text-blue-400 text-7xl" />,
  pdf: "/docs/python.pdf",
  category: "General",
  level: "Débutant",
  prerequisites: [],
  externalLink: "https://docs.python.org/fr/3/",
  codeExample: "print('Bonjour, Python!')\n",
  videoUrl: "https://www.youtube.com/embed/_uQrJ0TkZlc",
  quiz: [
   { question: "Python est reconnu pour ?", options: ["Lisibilité", "Complexité"], answer: 0 },
  ],
 },
 {
  id: "git",
  title: "Git",
  description: "Git est un système de contrôle de version distribué pour suivre les changements dans le code source.",
  logo: <FaGitAlt className="text-orange-500 text-7xl" />,
  pdf: "/docs/git.pdf",
  category: "Tools",
  level: "Intermédiaire",
  prerequisites: [],
  externalLink: "https://git-scm.com/doc",
  codeExample: "git init\ngit add .\ngit commit -m 'Premier commit'",
  videoUrl: "https://www.youtube.com/embed/RGOj5yH7evk",
  quiz: [
   { question: "Git sert à ?", options: ["Contrôle de version", "Base de données"], answer: 0 },
  ],
 },
 {
  id: "bootstrap",
  title: "Bootstrap",
  description: "Bootstrap est un framework CSS pour développer des sites responsives et mobile-first.",
  logo: <SiBootstrap className="text-purple-600 text-7xl" />,
  pdf: "/docs/bootstrap.pdf",
  category: "Frontend",
  level: "Intermédiaire",
  prerequisites: ["css"],
  externalLink: "https://getbootstrap.com/docs/5.3/getting-started/introduction/",
  codeExample: "<div class=\"container\">\n  <button class=\"btn btn-primary\">Bouton</button>\n</div>",
  videoUrl: "https://www.youtube.com/embed/JnLUSo18ARw",
  quiz: [
   { question: "Bootstrap se concentre sur ?", options: ["Design réactif", "Backend"], answer: 0 },
  ],
 },
 {
  id: "sass",
  title: "SASS",
  description: "SASS est un préprocesseur CSS qui ajoute des fonctionnalités comme les variables, les nested rules et les mixins.",
  logo: <SiSass className="text-pink-500 text-7xl" />,
  pdf: "/docs/sass.pdf",
  category: "Frontend",
  level: "Intermédiaire",
  prerequisites: ["css"],
  externalLink: "https://sass-lang.com/documentation/",
  codeExample: "$primary-color: #333;\nbody {\n  color: $primary-color;\n}",
  videoUrl: "https://www.youtube.com/embed/_a5j7KoflTs",
  quiz: [
   { question: "SASS c'est quoi ?", options: ["Préprocesseur CSS", "Bibliothèque JS"], answer: 0 },
  ],
 },
 {
  id: "typescript",
  title: "TypeScript",
  description: "TypeScript est un superset de JavaScript qui ajoute des types statiques pour un code plus robuste.",
  logo: <SiTypescript className="text-blue-600 text-7xl" />,
  pdf: "/docs/typescript.pdf",
  category: "Frontend",
  level: "Avancé",
  prerequisites: ["js"],
  externalLink: "https://www.typescriptlang.org/docs/",
  codeExample: "let message: string = 'Bonjour TypeScript';\nconsole.log(message);",
  videoUrl: "https://www.youtube.com/embed/d56mG7DezGs",
  quiz: [
   { question: "TypeScript ajoute ?", options: ["Typage statique", "Mise en forme dynamique"], answer: 0 },
  ],
 },
];


export default function Initiation() {
 const [selectedCourse, setSelectedCourse] = useState(allCourses[0]);
 const [searchQuery, setSearchQuery] = useState("");
 const [isDarkMode, setIsDarkMode] = useState(false);
 const [favorites, setFavorites] = useState([]);
 const [progress, setProgress] = useState({});
 const [visibleCoursesCount, setVisibleCoursesCount] = useState(7);
 const [quizAnswers, setQuizAnswers] = useState({});
 const [showCode, setShowCode] = useState(false);
 const [showVideo, setShowVideo] = useState(false);
 const [showQuiz, setShowQuiz] = useState(false);
 const [modal, setModal] = useState({ show: false, isCorrect: false, message: "" });


 const toggleDarkMode = () => {
  setIsDarkMode(!isDarkMode);
  document.documentElement.classList.toggle("dark");
 };


 const filteredCourses = allCourses
  .filter(
   (course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.description.toLowerCase().includes(searchQuery.toLowerCase())
  )
  .slice(0, visibleCoursesCount);


 const loadMoreCourses = () => {
  setVisibleCoursesCount((prev) => Math.min(prev + 5, allCourses.length));
 };


 const toggleFavorite = (id) => {
  setFavorites((prev) =>
   prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
  );
 };


 useEffect(() => {
  const initialProgress = {};
  allCourses.forEach((course) => {
   initialProgress[course.id] = Math.floor(Math.random() * 100);
  });
  setProgress(initialProgress);
 }, []);


 const handleQuizAnswer = (questionIndex, answerIndex) => {
  const isCorrect = answerIndex === selectedCourse.quiz[questionIndex].answer;
  setQuizAnswers((prev) => ({ ...prev, [questionIndex]: answerIndex }));
  setModal({
   show: true,
   isCorrect,
   message: isCorrect
    ? "Félicitations ! Bonne réponse ! 🎉"
    : "Oups, mauvaise réponse. Essayez encore ! 😅",
  });

  setTimeout(() => setModal({ show: false, isCorrect: false, message: "" }), 3000);
 };

 return (
  <>
   <Navbar />
   <div className={`min-h-screen flex flex-col ${isDarkMode ? "dark bg-gray-900" : "bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200"} transition-colors duration-500`}>

    <AnimatePresence>
     {modal.show && (
      <motion.div
       initial={{ opacity: 0, y: -50 }}
       animate={{ opacity: 1, y: 0 }}
       exit={{ opacity: 0, y: -50 }}
       className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 p-4 rounded-xl shadow-lg flex items-center gap-3 max-w-md w-full"
       style={{ backgroundColor: modal.isCorrect ? "#10B981" : "#EF4444" }}
      >
       {modal.isCorrect ? (
        <FaCheckCircle className="text-white text-2xl" />
       ) : (
        <FaTimesCircle className="text-white text-2xl" />
       )}
       <p className="text-white font-semibold">{modal.message}</p>
      </motion.div>
     )}
    </AnimatePresence>


    <header className="bg-white dark:bg-gray-800 shadow-md p-4 flex flex-wrap justify-between items-center gap-4">
     <h1 className="text-2xl font-bold text-blue-800 dark:text-blue-300">Initiation aux Technologies Web</h1>
     <div className="flex items-center gap-4">
      <button
       onClick={toggleDarkMode}
       className="p-2 rounded-full bg-blue-600 dark:bg-gray-700 text-white hover:bg-blue-700 dark:hover:bg-gray-600 transition"
      >
       {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
      </button>
      <div className="relative">
       <FaSearch className="absolute left-3 top-3 text-gray-500" />
       <input
        type="text"
        placeholder="Rechercher un cours..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full min-w-[200px] pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
       />
      </div>
     </div>
    </header>

    <div className="flex flex-col md:flex-row flex-1">

     <aside className="w-full md:w-1/4 bg-white dark:bg-gray-800 shadow-lg p-6 rounded-b-2xl md:rounded-r-2xl border-b md:border-r border-blue-200 dark:border-gray-700 overflow-y-auto max-h-[calc(100vh-80px)]">
      <h2 className="text-2xl font-bold text-blue-800 dark:text-blue-300 mb-4">📚 Cours</h2>
      <ul className="space-y-3">
       <AnimatePresence>
        {filteredCourses.map((course) => (
         <motion.li
          key={course.id}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
         >
          <button
           onClick={() => setSelectedCourse(course)}
           className={`w-full flex items-center justify-between gap-3 p-3 rounded-xl text-left transition-all duration-300 ${selectedCourse.id === course.id
            ? "bg-blue-600 text-white shadow-md"
            : "bg-blue-50 dark:bg-gray-700 hover:bg-blue-200 dark:hover:bg-gray-600 text-blue-800 dark:text-gray-200"
            }`}
          >
           <div className="flex items-center gap-3">
            {course.logo}
            <div>
             <span className="font-semibold text-lg">{course.title}</span>
             <p className="text-sm text-gray-500 dark:text-gray-400">{course.category} - {course.level}</p>
            </div>
           </div>
           <div className="flex items-center gap-2">
            <FaChartBar className="text-green-500" />
            <span className="text-sm">{progress[course.id]}%</span>
            <button onClick={(e) => { e.stopPropagation(); toggleFavorite(course.id); }}>
             {favorites.includes(course.id) ? <FaHeart className="text-red-500" /> : <FaStar className="text-yellow-500" />}
            </button>
           </div>
          </button>
         </motion.li>
        ))}
       </AnimatePresence>
       {filteredCourses.length === 0 && (
        <p className="text-gray-500 dark:text-gray-400 text-center">Aucun cours trouvé.</p>
       )}
      </ul>
      {visibleCoursesCount < allCourses.length && (
       <motion.button
        onClick={loadMoreCourses}
        className="mt-4 w-full py-3 bg-gradient-to-r from-blue-200 to-blue-700 text-white font-semibold rounded-xl shadow hover:from-blue-600 hover:to-blue-800 transition flex items-center justify-center gap-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
       >
        Voir plus <FaChevronDown />
       </motion.button>
      )}
     </aside>


     <main className="flex-1 p-4 md:p-10 flex flex-col justify-center items-center overflow-y-auto">
      <motion.div
       key={selectedCourse.id}
       initial={{ opacity: 0, scale: 0.95 }}
       animate={{ opacity: 1, scale: 1 }}
       transition={{ duration: 0.5 }}
       className="bg-white dark:bg-gray-800 shadow-xl rounded-3xl p-6 md:p-10 w-full max-w-4xl border border-blue-300 dark:border-gray-700 relative overflow-hidden"
      >
       <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 text-center md:text-left">
         <div className="mb-6 flex justify-center md:justify-start">{selectedCourse.logo}</div>
         <h1 className="text-3xl md:text-4xl font-extrabold text-blue-700 dark:text-blue-300 mb-4">
          {selectedCourse.title}
         </h1>
         <p className="text-gray-700 dark:text-gray-200 text-base md:text-lg leading-relaxed mb-6">
          {selectedCourse.description}
         </p>
         <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400 px-3 py-1 bg-blue-100 dark:bg-gray-700 rounded-full">
           Catégorie : {selectedCourse.category}
          </span>
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400 px-3 py-1 bg-blue-100 dark:bg-gray-700 rounded-full">
           Niveau : {selectedCourse.level}
          </span>
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400 px-3 py-1 bg-blue-100 dark:bg-gray-700 rounded-full">
           Progrès : {progress[selectedCourse.id]}%
          </span>
         </div>
         {selectedCourse.prerequisites.length > 0 && (
          <div className="mb-6">
           <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-2">Prérequis :</h3>
           <ul className="list-disc pl-6 text-gray-700 dark:text-gray-200">
            {selectedCourse.prerequisites.map((prereq) => (
             <li key={prereq}>{allCourses.find(c => c.id === prereq)?.title}</li>
            ))}
           </ul>
          </div>
         )}
         <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
          {selectedCourse.pdf && (
           <a
            href={selectedCourse.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-xl shadow hover:bg-blue-700 dark:hover:bg-blue-500 transition"
           >
            📖 Consulter le PDF
           </a>
          )}
          <a
           href={selectedCourse.externalLink}
           target="_blank"
           rel="noopener noreferrer"
           className="inline-flex items-center px-4 py-2 bg-green-600 text-white font-semibold rounded-xl shadow hover:bg-green-700 transition"
          >
           🌐 Documentation Officielle
          </a>
          <button
           onClick={() => toggleFavorite(selectedCourse.id)}
           className="inline-flex items-center px-4 py-2 bg-yellow-500 text-white font-semibold rounded-xl shadow hover:bg-yellow-600 transition"
          >
           {favorites.includes(selectedCourse.id) ? <FaHeart className="mr-2" /> : <FaStar className="mr-2" />}
           {favorites.includes(selectedCourse.id) ? "Retirer des Favoris" : "Ajouter aux Favoris"}
          </button>
         </div>
        </div>
        <div className="flex-1">

         <div className="space-y-4">
          <motion.button
           onClick={() => setShowCode(!showCode)}
           className="w-full flex items-center justify-between p-4 bg-blue-100 dark:bg-gray-700 rounded-xl text-blue-800 dark:text-blue-300 font-semibold hover:bg-blue-200 dark:hover:bg-gray-600 transition"
           whileHover={{ scale: 1.02 }}
          >
           <div className="flex items-center gap-2">
            <FaCode /> Exemple de Code
           </div>
           <FaChevronDown className={`transition-transform ${showCode ? "rotate-180" : ""}`} />
          </motion.button>
          {showCode && (
           <motion.pre
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-gray-100 dark:bg-gray-900 p-4 rounded-xl overflow-x-auto text-sm"
           >
            <code>{selectedCourse.codeExample}</code>
           </motion.pre>
          )}

          <motion.button
           onClick={() => setShowVideo(!showVideo)}
           className="w-full flex items-center justify-between p-4 bg-blue-100 dark:bg-gray-700 rounded-xl text-blue-800 dark:text-blue-300 font-semibold hover:bg-blue-200 dark:hover:bg-gray-600 transition"
           whileHover={{ scale: 1.02 }}
          >
           <div className="flex items-center gap-2">
            <FaVideo /> Vidéo Tutoriel
           </div>
           <FaChevronDown className={`transition-transform ${showVideo ? "rotate-180" : ""}`} />
          </motion.button>
          {showVideo && (
           <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="aspect-video"
           >
            <iframe
             width="100%"
             height="100%"
             src={selectedCourse.videoUrl}
             title="YouTube video player"
             frameBorder="0"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
             allowFullScreen
            ></iframe>
           </motion.div>
          )}

          <motion.button
           onClick={() => setShowQuiz(!showQuiz)}
           className="w-full flex items-center justify-between p-4 bg-blue-100 dark:bg-gray-700 rounded-xl text-blue-800 dark:text-blue-300 font-semibold hover:bg-blue-200 dark:hover:bg-gray-600 transition"
           whileHover={{ scale: 1.02 }}
          >
           <div className="flex items-center gap-2">
            <FaQuestionCircle /> Quiz Rapide
           </div>
           <FaChevronDown className={`transition-transform ${showQuiz ? "rotate-180" : ""}`} />
          </motion.button>
          {showQuiz && (
           <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="space-y-4"
           >
            {selectedCourse.quiz.map((q, idx) => (
             <div key={idx} className="p-4 bg-gray-100 dark:bg-gray-900 rounded-xl">
              <p className="font-semibold mb-2">{q.question}</p>
              {q.options.map((opt, oidx) => (
               <button
                key={oidx}
                onClick={() => handleQuizAnswer(idx, oidx)}
                disabled={quizAnswers[idx] !== undefined}
                className={`w-full mb-2 p-2 rounded-lg ${quizAnswers[idx] === oidx
                 ? oidx === q.answer
                  ? "bg-green-500 text-white"
                  : "bg-red-500 text-white"
                 : "bg-blue-50 dark:bg-gray-700 hover:bg-blue-200 dark:hover:bg-gray-600"
                 } disabled:opacity-50 disabled:cursor-not-allowed`}
               >
                {opt}
               </button>
              ))}
             </div>
            ))}
           </motion.div>
          )}

          <div className="mt-6 p-4 bg-blue-50 dark:bg-gray-700 rounded-lg">
           <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300">Pourquoi apprendre {selectedCourse.title} ?</h3>
           <p className="text-gray-600 dark:text-gray-300 text-sm">
            Apprendre {selectedCourse.title} vous permettra de maîtriser une technologie essentielle pour le développement web. Que vous soyez débutant ou expérimenté, ce cours vous offre des bases solides pour progresser.
           </p>
          </div>
         </div>
        </div>
       </div>


       <div className="absolute -top-6 -left-6 w-12 h-12 bg-pink-400 rounded-full animate-bounce opacity-50"></div>
       <div className="absolute -bottom-6 -right-6 w-14 h-14 bg-yellow-300 rounded-full animate-pulse opacity-50"></div>
       <div className="absolute top-10 -right-8 w-8 h-8 bg-green-400 rounded-full opacity-50"></div>
      </motion.div>
     </main>
    </div>
   </div>
  </>
 );
}