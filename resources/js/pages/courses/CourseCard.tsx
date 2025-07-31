import { Link } from '@inertiajs/react';
import { IconType } from 'react-icons';

interface CourseCardProps {
    title: string;
    description: string;
    icon: IconType;
    href: string;
    colorClass?: string;
}

const CourseCard = ({ title, description, icon: Icon, href, colorClass = 'text-white' }: CourseCardProps) => {
    return (
        <div className="group rounded-2xl border border-[#1f2937] bg-gradient-to-b from-[#0f172a] to-[#0b1120] p-6 shadow-xl transition-transform duration-300 hover:-translate-y-1 hover:shadow-indigo-500/30">
            <div className="mb-4 flex justify-center">
                <div className="relative transform-gpu rounded-full bg-[#1e293b] p-4 shadow-inner transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[8deg] group-hover:shadow-lg group-hover:shadow-blue-500/30">
                    <Icon className={`text-5xl ${colorClass} drop-shadow-[0_1px_6px_rgba(0,0,0,0.6)]`} />
                </div>
            </div>
            <h2 className="mb-2 text-center text-xl font-bold text-white">{title}</h2>
            <p className="mb-4 text-center text-sm text-gray-400">{description}</p>
            <div className="text-center">
                <Link href={href} className="inline-block text-sm font-semibold text-indigo-400 hover:text-indigo-300 hover:underline">
                    Voir le cours →
                </Link>
            </div>
        </div>
    );
};

export default CourseCard;
