import { Link } from '@inertiajs/react';

export default function AnotherQuestion() {
    return (
        <div className="flex flex-col items-center bg-[#020014] py-8 text-white">
            <h2 className="text-2xl font-bold text-white">
                Devenez le developpeur que vous vouez devenir
            </h2>
            <div className="flex items-center justify-center">
                <Link href="/contact" className="mt-4 text-[15px] rounded bg-[#3FAFFF] p-2 text-center font-[serif] text-black">
                    Poser une autre question <span className="text-[10px]">👉</span>
                </Link>
            </div>
        </div>
    );
}
