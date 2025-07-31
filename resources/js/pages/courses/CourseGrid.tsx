import { FaCss3Alt, FaDatabase, FaHtml5, FaPhp, FaReact } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss } from 'react-icons/si';
import CourseCard from './CourseCard';
const courses = [
    {
        title: 'HTML5',
        description: 'Structure tes pages web avec les bonnes balises.',
        icon: FaHtml5,
        href: '/cours/html',
        bgColor: 'bg-gradient-to-b from-orange-500 to-orange-700',
        textColor: 'text-white',
    },
    {
        title: 'CSS3',
        description: 'Stylise tes pages pour un rendu moderne.',
        icon: FaCss3Alt,
        href: '/cours/css',
        bgColor: 'bg-gradient-to-b from-blue-500 to-blue-700',
        textColor: 'text-white',
    },
    {
        title: 'JavaScript',
        description: 'Ajoute de l’interactivité à ton site.',
        icon: SiJavascript,
        href: '/cours/javascript',
        bgColor: 'bg-gradient-to-b from-yellow-300 to-yellow-500',
        textColor: 'text-black',
    },
    {
        title: 'PHP',
        description: 'Développe côté serveur avec PHP.',
        icon: FaPhp,
        href: '/cours/php',
        bgColor: 'bg-gradient-to-b from-indigo-500 to-indigo-700',
        textColor: 'text-white',
    },
    {
        title: 'ReactJS',
        description: 'Construis des interfaces réactives et rapides.',
        icon: FaReact,
        href: '/cours/react',
        bgColor: 'bg-gradient-to-b from-cyan-400 to-cyan-600',
        textColor: 'text-white',
    },
    {
        title: 'Tailwind CSS',
        description: 'Crée des designs rapides et responsives.',
        icon: SiTailwindcss,
        href: '/cours/tailwind',
        bgColor: 'bg-gradient-to-b from-sky-400 to-sky-600',
        textColor: 'text-white',
    },
    {
        title: 'Base de données',
        description: 'Structure et interroge des données efficacement.',
        icon: FaDatabase,
        href: '/cours/database',
        bgColor: 'bg-gradient-to-b from-blue-800 to-blue-900',
        textColor: 'text-white',
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
