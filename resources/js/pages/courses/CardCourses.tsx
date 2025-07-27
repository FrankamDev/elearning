// import { Link } from '@inertiajs/react';
// import { FaBootstrap, FaCss3Alt, FaHtml5, FaLaravel, FaPhp, FaReact } from 'react-icons/fa';
// import { SiJavascript, SiTailwindcss } from 'react-icons/si';

// const courses = [
//     {
//         name: 'HTML5',
//         icon: <FaHtml5 className="text-orange-500 transition-transform duration-300 group-hover:scale-110" size={50} />,
//         description: 'Apprends les bases du HTML5 avec des projets concrets.',
//         href: '/cours/html',
//     },
//     {
//         name: 'CSS3',
//         icon: <FaCss3Alt className="text-blue-500 transition-transform duration-300 group-hover:scale-110" size={50} />,
//         description: 'Maîtrise la mise en page moderne avec CSS.',
//         href: '/cours/css',
//     },
//     {
//         name: 'Tailwind CSS',
//         icon: <SiTailwindcss className="text-cyan-400 transition-transform duration-300 group-hover:scale-110" size={50} />,
//         description: 'Crée des interfaces stylées rapidement avec Tailwind.',
//         href: '/cours/tailwind',
//     },
//     {
//         name: 'JavaScript',
//         icon: <SiJavascript className="text-yellow-400 transition-transform duration-300 group-hover:scale-110" size={50} />,
//         description: 'Donne de l’interactivité à tes sites web.',
//         href: '/cours/javascript',
//     },
//     {
//         name: 'ReactJS',
//         icon: <FaReact className="animate-spin-slow text-blue-300 transition-transform duration-300 group-hover:scale-110" size={50} />,
//         description: 'Construis des interfaces dynamiques et modernes.',
//         href: '/cours/react',
//     },
//     {
//         name: 'Bootstrap',
//         icon: <FaBootstrap className="text-purple-500 transition-transform duration-300 group-hover:scale-110" size={50} />,
//         description: 'Utilise des composants pré-faits avec Bootstrap.',
//         href: '/cours/bootstrap',
//     },
//     {
//         name: 'PHP',
//         icon: <FaPhp className="text-indigo-500 transition-transform duration-300 group-hover:scale-110" size={50} />,
//         description: 'Développe des backends robustes avec PHP.',
//         href: '/cours/php',
//     },
//     {
//         name: 'Laravel',
//         icon: <FaLaravel className="text-red-500 transition-transform duration-300 group-hover:scale-110" size={50} />,
//         description: 'Framework moderne et rapide pour les applis web.',
//         href: '/cours/laravel',
//     },
// ];

// export default function CardCourses() {
//     return (
//         <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//             {courses.map((course, index) => (
//                 <Link
//                     key={index}
//                     href={course.href}
//                     className="group transform cursor-pointer rounded-2xl border border-gray-700 bg-[#0f172a] p-6 text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:border-indigo-500 hover:shadow-indigo-500/50"
//                 >
//                     <div className="flex items-center gap-4">
//                         <div className="rounded-full bg-[#1e293b] p-4 shadow-inner">{course.icon}</div>
//                         <h2 className="text-lg font-semibold">{course.name}</h2>
//                     </div>
//                     <p className="mt-4 text-sm text-gray-400">{course.description}</p>
//                     <span className="mt-4 inline-block text-sm font-semibold text-indigo-400 hover:underline">Voir le cours →</span>
//                 </Link>
//             ))}
//         </div>
//     );
// }


import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaPhp, FaLaravel } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript } from 'react-icons/si';
import { Link } from '@inertiajs/react';

const courses = [
    {
        name: 'HTML5',
        icon: <FaHtml5 className="text-orange-500 transition-transform duration-300 group-hover:scale-110" size={50} />,
        description: 'Apprends les bases du HTML5 avec des projets concrets.',
        href: '/cours/html',
    },
    {
        name: 'CSS3',
        icon: <FaCss3Alt className="text-blue-500 transition-transform duration-300 group-hover:scale-110" size={50} />,
        description: 'Maîtrise la mise en page moderne avec CSS.',
        href: '/cours/css',
    },
    {
        name: 'Tailwind CSS',
        icon: <SiTailwindcss className="text-cyan-400 transition-transform duration-300 group-hover:scale-110" size={50} />,
        description: 'Crée des interfaces stylées rapidement avec Tailwind.',
        href: '/cours/tailwind',
    },
    {
        name: 'JavaScript',
        icon: <SiJavascript className="text-yellow-400 transition-transform duration-300 group-hover:scale-110" size={50} />,
        description: 'Donne de l’interactivité à tes sites web.',
        href: '/cours/javascript',
    },
    {
        name: 'ReactJS',
        icon: <FaReact className="animate-spin-slow text-blue-300 transition-transform duration-300 group-hover:scale-110" size={50} />,
        description: 'Construis des interfaces dynamiques et modernes.',
        href: '/cours/react',
    },
    {
        name: 'Bootstrap',
        icon: <FaBootstrap className="text-purple-500 transition-transform duration-300 group-hover:scale-110" size={50} />,
        description: 'Utilise des composants pré-faits avec Bootstrap.',
        href: '/cours/bootstrap',
    },
    {
        name: 'PHP',
        icon: <FaPhp className="text-indigo-500 transition-transform duration-300 group-hover:scale-110" size={50} />,
        description: 'Développe des backends robustes avec PHP.',
        href: '/cours/php',
    },
    {
        name: 'Laravel',
        icon: <FaLaravel className="text-red-500 transition-transform duration-300 group-hover:scale-110" size={50} />,
        description: 'Framework moderne et rapide pour les applis web.',
        href: '/cours/laravel',
    },
];

export default function CardCourses() {
    return (
        <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {courses.map((course, index) => (
                <Link
                    key={index}
                    href={course.href}
                    className="group transform cursor-pointer rounded-2xl border border-gray-700 bg-[#0f172a] p-6 text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:border-indigo-500 hover:shadow-indigo-500/50"
                >
                    <div className="flex items-center gap-4">
                        <div className="rounded-full bg-[#1e293b] p-4 shadow-inner">{course.icon}</div>
                        <h2 className="text-lg font-semibold">{course.name}</h2>
                    </div>
                    <p className="mt-4 text-sm text-gray-400">{course.description}</p>
                    <span className="mt-4 inline-block text-sm font-semibold text-indigo-400 hover:underline">Voir le cours →</span>
                </Link>
            ))}
        </div>
    );
}
