
import { Star } from "lucide-react";


const testimonials = [
 {
  name: "Frank kamgang",
  title: "Développeur logiciel",
  message:
   "Les tutoriels de JSM sont clairs, modernes et pratiques. Ils m'ont permis de construire des projets réels qui ont impressionné les employeurs. Si vous voulez apprendre le développement web correctement, c'est ici.",
  img: ""
 },
 {
  name: "Soh Loic",
  title: "Developpeur Back_end",
  message:
   "Grâce aux cours, j’ai pu créer mon propre portfolio professionnel et décrocher mes premiers contrats en freelance !",
  img: ""
 },
 {
  name: "Nguimfack jean Yannick",
  title: "Développeur Fullstack",
  message:
   "J’ai appris React, Tailwind et la gestion d’API en un mois. Aujourd’hui je travaille sur des projets concrets pour des startups.",
  img: ""
 },
 {
  name: "Jean Joseph",
  title: "Étudiante en informatique",
  message:
   "Les explications sont limpides, les projets bien choisis. C’est un excellent point de départ pour se lancer dans le dev web.",
  img: ""
 },
 {
  name: "Kengne Maiva",
  title: "Freelance Fullstack",
  message:
   "Les formations m'ont permis de structurer mes connaissances et trouver plus facilement des clients.",
  img: ""
 },
 {
  name: "Borice kamdem",
  title: "Développeuse mobile",
  message:
   "J’ai transformé ma passion en métier après avoir suivi tous les modules. Mention spéciale aux projets pratiques !",
  img: ""
 },
 {
  name: "Julien",
  title: "Ingénieur logiciel",
  message:
   "Très bon contenu, bien structuré. J’ai même recommandé les cours à mes collègues au travail.",
  img: ""
 },
 {
  name: "Julien",
  title: "Ingénieur logiciel",
  message:
   "Très bon contenu, bien structuré. J’ai même recommandé les cours à mes collègues au travail.",
  img: "./vraiLogo.svg"
 },
 {
  name: "Julien",
  title: "Ingénieur logiciel",
  message:
   "Très bon contenu, bien structuré. J’ai même recommandé les cours à mes collègues au travail.",
  img: ""
 },
 {
  name: "Jean Michel",
  title: "Apprenante autodidacte",
  message:
   "J'ai essayé beaucoup de plateformes, mais ici j’ai vraiment progressé. Les projets sont motivants et accessibles.",
  img: ""
 },
 {
  name: "Nicolas Fotso",
  title: "Formateur web",
  message:
   "Contenu à jour, bon équilibre entre théorie et pratique. Parfait pour les débutants et intermédiaires.",
  img: ""
 },
 {
  name: "Hingryd kamgang",
  title: "Étudiante en design",
  message:
   "J’ai appris à coder mes propres maquettes sans dépendre d’un développeur. Super pouvoir !",
  img: ""
 }
];

export default function Testimonials() {
 return (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto p-6">
   {testimonials.map((item, index) => (
    <div
     key={index}
     className="bg-[#0E1126] text-white rounded-lg p-6 border border-[#1d1f3a] shadow-md hover:shadow-lg transition-shadow"
    >
     <div className="flex items-center gap-4 mb-4">
      <img
       src={item.img}
       alt={item.name}
       className="w-12 h-12 rounded-full object-cover border border-white"
      />
      <div>
       <p className="font-bold leading-tight">{item.name}</p>
       <p className="text-blue-400 text-sm">{item.title}</p>
      </div>
     </div>
     <p className="mb-4 text-sm leading-relaxed">{item.message}</p>
     <div className="flex gap-1 text-blue-400">
      {Array.from({ length: 5 }).map((_, i) => (
       <Star key={i} size={16} fill="currentColor" stroke="none" />
      ))}
     </div>
    </div>
   ))}
  </div>
 );
}
