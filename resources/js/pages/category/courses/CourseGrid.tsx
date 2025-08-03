import { FC } from 'react';
import CourseCard from './CourseCard';
import { PageProps } from '@/types';

interface Course {
 title: string;
 description: string;
 slug: string;
 bgColor?: string; // si tu ajoutes plus tard dans la base
 textColor?: string;
}

interface Props extends PageProps {
 cours: Course[];
}

const CourseGrid: FC<Props> = ({ cours }) => {
 return (
  <section className="bg-[#0b0e1e] px-4 py-16">
   <div className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {cours.map((course, index) => (
     <CourseCard
      key={index}
      title={course.title}
      description={course.description}
      href={`/cours/${course.slug}`} // lien vers les détails
      // bgColor={course.bgColor || 'bg-gradient-to-b from-blue-500 to-blue-700'}
      textColor={course.textColor || 'text-white'}
     />
    ))}
   </div>
  </section>
 );
};

export default CourseGrid;
