import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Définir les types pour les données
interface Category {
 id: number;
 name: string;
}

interface Cours {
 id: number;
 category_id: number;
 title: string;
 description: string;
}

interface Lesson {
 id: number;
 cours_id: number;
 title: string;
 content: string | null;
 video_path: string | null;
 cours: Cours;
}

interface ApiResponse {
 lessons: Lesson[];
 cours: Cours[];
 categories: Category[];
}

const Show: React.FC = () => {
 // États typés
 const [categories, setCategories] = useState<Category[]>([]);
 const [cours, setCours] = useState<Cours[]>([]);
 const [lessons, setLessons] = useState<Lesson[]>([]);
 const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
 const [selectedCours, setSelectedCours] = useState<number | null>(null);
 const [loading, setLoading] = useState<boolean>(false);
 const [error, setError] = useState<string | null>(null);

 // Récupérer les données depuis l'API
 useEffect(() => {
  const fetchData = async () => {
   setLoading(true);
   try {
    const response = await axios.get<ApiResponse>('http://votre-domaine.com/api/lessons', {
     params: {
      category_id: selectedCategory || undefined,
      cours_id: selectedCours || undefined,
     },
    });
    setCategories(response.data.categories);
    setCours(response.data.cours);
    setLessons(response.data.lessons);
   } catch (err) {
    setError('Impossible de charger les leçons');
    console.error(err);
   } finally {
    setLoading(false);
   }
  };

  fetchData();
 }, [selectedCategory, selectedCours]);

 // Filtrer les cours en fonction de la catégorie sélectionnée
 const filteredCours = selectedCategory
  ? cours.filter((c) => c.category_id === selectedCategory)
  : cours;

 return (
  <div className="container mx-auto p-6">
   <h1 className="text-3xl font-bold mb-6 text-center">Nos Leçons</h1>

   {/* Filtres */}
   <div className="flex flex-col md:flex-row gap-4 mb-8">
    <div className="flex-1">
     <label htmlFor="category" className="block text-lg font-medium mb-2">
      Catégorie
     </label>
     <select
      id="category"
      className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      value={selectedCategory || ''}
      onChange={(e) => {
       setSelectedCategory(e.target.value ? Number(e.target.value) : null);
       setSelectedCours(null); // Réinitialiser le cours sélectionné
      }}
     >
      <option value="">Toutes les catégories</option>
      {categories.map((category) => (
       <option key={category.id} value={category.id}>
        {category.name}
       </option>
      ))}
     </select>
    </div>

    <div className="flex-1">
     <label htmlFor="cours" className="block text-lg font-medium mb-2">
      Cours
     </label>
     <select
      id="cours"
      className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      value={selectedCours || ''}
      onChange={(e) => setSelectedCours(e.target.value ? Number(e.target.value) : null)}
      disabled={!selectedCategory}
     >
      <option value="">Sélectionnez un cours</option>
      {filteredCours.map((cours) => (
       <option key={cours.id} value={cours.id}>
        {cours.title}
       </option>
      ))}
     </select>
    </div>
   </div>

   {/* Affichage des leçons */}
   <div>
    {loading && <p className="text-center text-gray-500">Chargement...</p>}
    {error && <p className="text-center text-red-500">{error}</p>}
    {!loading && lessons.length === 0 && (
     <p className="text-center text-gray-500">Aucune leçon disponible pour ces critères</p>
    )}
    {!loading && lessons.length > 0 && (
     <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {lessons.map((lesson) => (
       <div
        key={lesson.id}
        className="p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow"
       >
        <h3 className="text-xl font-semibold mb-2">{lesson.title}</h3>
        <p className="text-gray-600 mb-4">{lesson.content || 'Aucun contenu'}</p>
        {lesson.video_path && (
         <a
          href={lesson.video_path}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
         >
          Regarder la vidéo
         </a>
        )}
        <p className="text-sm text-gray-500 mt-4">
         Cours : {lesson.cours.title}
        </p>
        <p className="text-sm text-gray-500">
         Catégorie : {categories.find((cat) => cat.id === lesson.cours.category_id)?.name}
        </p>
       </div>
      ))}
     </div>
    )}
   </div>
  </div>
 );
};

export default Show