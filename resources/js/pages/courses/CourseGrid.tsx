import { FaDatabase, FaHtml5, FaJsSquare, FaPhp, FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import CourseCard from './CourseCard';
const courses = [
    {
        title: 'HTML & CSS',
        description: 'Construis des interfaces modernes et responsives.',
        icon: FaHtml5,
        iconColor: 'bg-orange-600',
        link: '#',
    },
    {
        title: 'JavaScript Complet',
        description: 'Apprends les bases, les fonctions, et le DOM.',
        icon: FaJsSquare,
        iconColor: 'bg-yellow-400 text-black',
        link: '#',
    },
    {
        title: 'PHP Moderne',
        description: 'Développe des applications dynamiques avec PHP.',
        icon: FaPhp,
        iconColor: 'bg-indigo-700',
        link: '#',
    },
    {
        title: 'React JS',
        description: 'Crée des applications SPA performantes avec React.',
        icon: FaReact,
        iconColor: 'bg-cyan-500',
        link: '#',
    },
    {
        title: 'Tailwind CSS',
        description: 'Crée des designs beaux et rapides sans quitter ton HTML.',
        icon: SiTailwindcss,
        iconColor: 'bg-sky-500',
        link: '#',
    },
    {
        title: 'Base de Données MySQL',
        description: 'Structure, relation et requêtes de bases de données.',
        icon: FaDatabase,
        iconColor: 'bg-blue-700',
        link: '#',
    },
];

const CourseGrid = () => {
    return (
        <section className="bg-[#0b0e1e] px-4 py-16">
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {courses.map((course, index) => (
                    <CourseCard key={index} {...course} />
                ))}
            </div>
        </section>
    );
};

export default CourseGrid;
