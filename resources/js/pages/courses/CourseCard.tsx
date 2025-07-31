import { Link } from '@inertiajs/react';
import { IconType } from 'react-icons';

interface CourseCardProps {
    title: string;
    description: string;
    icon: IconType;
    href: string;
    color: string;
    textColor?: string;
}

const CourseCard = ({ title, description, icon: Icon, href, color, textColor = 'text-white' }: CourseCardProps) => {
    return (
        <div
            className={`relative flex flex-col justify-between overflow-hidden rounded-xl border border-gray-700 bg-[#0f172a] p-6 shadow-lg transition-transform duration-300 hover:scale-[1.015]`}
        >
            {/* Icon 3D style */}
            <div className="mb-6 flex justify-center">
                <div className={`rounded-full bg-[#1e293b] p-4 shadow-inner ring-2 ring-offset-2 ring-offset-[#0f172a] ${color}`}>
                    <Icon className={`text-4xl ${textColor} drop-shadow-sm`} />
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-center">
                <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
                <p className="text-sm leading-relaxed text-gray-400">{description}</p>
            </div>

            {/* Action */}
            <div className="mt-6 text-center">
                <Link href={href} className="inline-block text-sm font-semibold text-indigo-400 hover:text-indigo-300 hover:underline">
                    Voir le cours →
                </Link>
            </div>
        </div>
    );
};

export default CourseCard;
