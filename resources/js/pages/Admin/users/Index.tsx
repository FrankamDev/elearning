import { UserIcon, MailIcon, CalendarIcon, MapPinIcon } from "lucide-react";

export default function UserProfileCard({ user }) {
 return (
  <div className="max-w-md mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-800">
   {/* En-tête */}
   <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 text-white">
    <div className="flex items-center gap-4">
     <img
      src={user.avatar || `https://ui-avatars.com/api/?name=${user.name}&background=random`}
      alt={user.name}
      className="w-16 h-16 rounded-full border-2 border-white shadow-md"
     />
     <div>
      <h2 className="text-2xl font-bold">{user.name}</h2>
      <p className="text-sm opacity-90">{user.role || "Utilisateur"}</p>
     </div>
    </div>
   </div>

   {/* Infos */}
   <div className="p-6 space-y-4">
    <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
     <MailIcon className="w-5 h-5 text-indigo-500" />
     <span>{user.email}</span>
    </div>

    {user.location && (
     <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
      <MapPinIcon className="w-5 h-5 text-indigo-500" />
      <span>{user.location}</span>
     </div>
    )}

    {user.joined && (
     <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
      <CalendarIcon className="w-5 h-5 text-indigo-500" />
      <span>Membre depuis le {user.joined}</span>
     </div>
    )}
   </div>

   {/* Stats */}
   {user.stats && (
    <div className="grid grid-cols-3 border-t border-gray-200 dark:border-gray-800">
     <div className="p-4 text-center">
      <p className="text-lg font-bold">{user.stats.courses || 0}</p>
      <p className="text-xs text-gray-500">Cours</p>
     </div>
     <div className="p-4 text-center">
      <p className="text-lg font-bold">{user.stats.certificates || 0}</p>
      <p className="text-xs text-gray-500">Certificats</p>
     </div>
     <div className="p-4 text-center">
      <p className="text-lg font-bold">{user.stats.points || 0}</p>
      <p className="text-xs text-gray-500">Points</p>
     </div>
    </div>
   )}
  </div>
 );
}
