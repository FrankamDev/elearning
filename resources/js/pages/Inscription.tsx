
import { useState } from "react";

export default function Inscription() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Envoie avec Inertia (si configuré) sinon console
        console.log(form);
    };

    return (
        <div className="min-h-screen bg-[#0F0F0F] flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-[#1A1A1A] p-8 rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold text-white mb-6 text-center">Créer un compte</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-gray-300 mb-1">Nom</label>
                        <input
                            type="text"
                            name="name"
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-[#2A2A2A] text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-300 mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-[#2A2A2A] text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-300 mb-1">Mot de passe</label>
                        <input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-[#2A2A2A] text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-300 mb-1">Confirmation mot de passe</label>
                        <input
                            type="password"
                            name="password_confirmation"
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-[#2A2A2A] text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition"
                    >
                        S'inscrire
                    </button>
                </form>
            </div>
        </div>
    );
}
