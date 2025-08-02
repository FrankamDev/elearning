import { PageProps } from '@/types';
import { Head, usePage } from '@inertiajs/react';

interface Course {
 title: string;
 description: string;
 content: string;
 color: string;
 icon: string; // URL ou nom de l'icône
}

interface Props extends PageProps {
 cours: Course;
}

export default function CourseDetail({ cours }: Props) {
 const { slug } = usePage().props;
 return (
  <>
   <Head title={cours.title} />
   <section
    className="min-h-screen px-6 py-16 text-white"
    style={{ backgroundColor: cours.color }}
   >
    <div className="max-w-4xl mx-auto bg-[#0f172a] p-8 rounded-2xl shadow-xl">
     <div className="mb-6 flex items-center gap-4">
      {cours.icon && (
       <img
        src={cours.icon}
        alt={cours.title}
        className="h-16 w-16 object-contain drop-shadow-2xl"
       />
      )}
      <h1 className="text-3xl font-bold">{cours.title}</h1>
     </div>

     <p className="text-lg text-gray-300 mb-6">{cours.description}</p>

     <div className="prose prose-invert max-w-none">
      {/* Contenu détaillé du cours ici */}
      <div dangerouslySetInnerHTML={{ __html: cours.content }} />
     </div>
    </div>
   </section>
  </>
 );
}
