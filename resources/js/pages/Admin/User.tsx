// import { useState, useEffect } from "react";
// import {
//  UserIcon,
//  MailIcon,
//  CalendarIcon,
//  MapPinIcon,
//  CheckCircleIcon,
//  XCircleIcon,
//  Trash2Icon,
//  Edit3Icon,
//  SaveIcon,
//  SearchIcon,
// } from "lucide-react";
// import { usePage } from "@inertiajs/react";

// const roles = ["Utilisateur", "Administrateur", "Super Administrateur"];

// export default function User({ usersData, onSaveUser, onDeleteUser }) {
//  const [users, setUsers] = useState(usersData || []);
//  const { userss } = usePage().props;
//  const [selectedUserId, setSelectedUserId] = useState(users[0]?.id || null);
//  const [searchTerm, setSearchTerm] = useState("");
//  const [editUser, setEditUser] = useState(null);
//  const [isEditing, setIsEditing] = useState(false);
//  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);


//  useEffect(() => {
//   const u = users.find((u) => u.id === selectedUserId);
//   setEditUser(u ? { ...u } : null);
//   setIsEditing(false);
//  }, [selectedUserId, users]);

//  // Filtrer la liste selon la recherche
//  const filteredUsers = users.filter((u) =>
//   u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//   u.email.toLowerCase().includes(searchTerm.toLowerCase())
//  );

//  const handleChange = (field, value) => {
//   setEditUser((prev) => ({ ...prev, [field]: value }));
//  };

//  const handleSave = () => {
//   if (!editUser) return;
//   // Mise à jour côté UI localement
//   setUsers((prev) =>
//    prev.map((u) => (u.id === editUser.id ? { ...editUser } : u))
//   );
//   setIsEditing(false);
//   if (onSaveUser) onSaveUser(editUser);
//  };

//  const toggleActive = () => {
//   if (!editUser) return;
//   const newStatus = !editUser.active;
//   const updatedUser = { ...editUser, active: newStatus };
//   setEditUser(updatedUser);
//   setUsers((prev) =>
//    prev.map((u) => (u.id === editUser.id ? updatedUser : u))
//   );
//   if (onSaveUser) onSaveUser(updatedUser);
//  };

//  const handleDelete = () => {
//   if (!editUser) return;
//   setUsers((prev) => prev.filter((u) => u.id !== editUser.id));
//   setShowDeleteConfirm(false);
//   if (onDeleteUser) onDeleteUser(editUser.id);
//   setSelectedUserId(users[0]?.id || null);
//  };

//  return (
//   <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col">
//    {/* Header */}
//    <header className="sticky top-0 bg-white dark:bg-gray-800 shadow-md flex items-center px-6 py-4 z-10">
//     <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
//      Je gère les utilisateurs
//     </h1>
//    </header>

//    {/* Main Content */}
//    <main className="flex-grow grid grid-cols-12 gap-6 p-6 overflow-hidden">
//     {/* Left panel: Liste utilisateurs */}
//     <section className="col-span-4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg flex flex-col">
//      {/* Recherche */}
//      <div className="p-4 border-b border-gray-300 dark:border-gray-700 flex items-center space-x-3">
//       <SearchIcon className="w-5 h-5 text-gray-400" />
//       <input
//        type="text"
//        placeholder="Rechercher par nom ou email..."
//        value={searchTerm}
//        onChange={(e) => setSearchTerm(e.target.value)}
//        className="w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//       />
//      </div>

//      {/* Liste utilisateurs */}
//      <div className="flex-grow overflow-y-auto">
//       {filteredUsers.length === 0 && (
//        <p className="p-6 text-gray-500 dark:text-gray-400">
//         Aucun utilisateur trouvé.
//        </p>
//       )}
//       <ul>
//        {filteredUsers.map((u) => (
//         <li
//          key={u.id}
//          onClick={() => setSelectedUserId(u.id)}
//          className={`cursor-pointer flex items-center gap-4 px-4 py-3 border-b border-gray-200 dark:border-gray-700 hover:bg-indigo-100 dark:hover:bg-indigo-700 transition ${u.id === selectedUserId
//           ? "bg-indigo-200 dark:bg-indigo-900 font-semibold"
//           : "font-normal"
//           }`}
//         >
//          <img
//           src={
//            u.avatar ||
//            `https://ui-avatars.com/api/?name=${encodeURIComponent(
//             u.name
//            )}&background=random`
//           }
//           alt={u.name}
//           className="w-10 h-10 rounded-full border-2 border-indigo-500"
//          />
//          <div className="flex-grow min-w-0">
//           <p className="truncate">{u.name}</p>
//           <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
//            {u.email}
//           </p>
//          </div>
//          {u.active ? (
//           <CheckCircleIcon className="w-5 h-5 text-green-500" />
//          ) : (
//           <XCircleIcon className="w-5 h-5 text-red-500" />
//          )}
//         </li>
//        ))}
//       </ul>
//      </div>
//     </section>

//     {/* Right panel: Détails utilisateur */}
//     <section className="col-span-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 flex flex-col">
//      {!editUser ? (
//       <p className="text-gray-600 dark:text-gray-400 text-center mt-20">
//        Sélectionnez un utilisateur à gauche pour voir les détails.
//       </p>
//      ) : (
//       <>
//        <div className="flex items-center justify-between mb-8">
//         <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
//          Détails utilisateur : {editUser.name}
//         </h3>
//         {isEditing ? (
//          <button
//           onClick={handleSave}
//           className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded shadow transition"
//          >
//           <SaveIcon className="w-5 h-5" />
//           <span>Sauvegarder</span>
//          </button>
//         ) : (
//          <button
//           onClick={() => setIsEditing(true)}
//           className="flex items-center space-x-2 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded shadow transition"
//          >
//           <Edit3Icon className="w-5 h-5" />
//           <span>Modifier</span>
//          </button>
//         )}
//        </div>

//        {/* Infos utilisateur + avatar */}
//        <div className="flex gap-8 flex-wrap">
//         <div className="flex flex-col items-center space-y-4 flex-shrink-0">
//          <img
//           src={
//            editUser.avatar ||
//            `https://ui-avatars.com/api/?name=${encodeURIComponent(
//             editUser.name
//            )}&background=random`
//           }
//           alt={editUser.name}
//           className="w-36 h-36 rounded-full border-4 border-indigo-500 shadow-md transition-transform hover:scale-105"
//          />
//          <div className="flex items-center space-x-2">
//           {editUser.active ? (
//            <>
//             <CheckCircleIcon className="w-6 h-6 text-green-500 animate-pulse" />
//             <span className="text-green-600 font-semibold">Actif</span>
//            </>
//           ) : (
//            <>
//             <XCircleIcon className="w-6 h-6 text-red-500 animate-pulse" />
//             <span className="text-red-600 font-semibold">Désactivé</span>
//            </>
//           )}
//          </div>
//          <button
//           onClick={() => {
//            toggleActive();
//            if (onSaveUser) onSaveUser({ ...editUser, active: !editUser.active });
//           }}
//           className={`mt-3 px-5 py-2 rounded font-semibold shadow text-white transition ${editUser.active
//            ? "bg-red-600 hover:bg-red-700"
//            : "bg-green-600 hover:bg-green-700"
//            }`}
//          >
//           {editUser.active ? "Désactiver" : "Réactiver"}
//          </button>
//         </div>

//         {/* Formulaire détail */}
//         <form
//          onSubmit={(e) => {
//           e.preventDefault();
//           handleSave();
//          }}
//          className="flex-grow space-y-6 min-w-[280px]"
//         >
//          <div>
//           <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
//            Nom complet
//           </label>
//           <input
//            type="text"
//            disabled={!isEditing}
//            value={editUser.name}
//            onChange={(e) => handleChange("name", e.target.value)}
//            className={`w-full rounded border px-4 py-2 focus:outline-none focus:ring-2 ${isEditing
//             ? "border-indigo-400 focus:ring-indigo-500"
//             : "border-gray-300 bg-gray-100 cursor-not-allowed"
//             } dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
//           />
//          </div>

//          <div>
//           <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
//            Email
//           </label>
//           <input
//            type="email"
//            disabled={!isEditing}
//            value={editUser.email}
//            onChange={(e) => handleChange("email", e.target.value)}
//            className={`w-full rounded border px-4 py-2 focus:outline-none focus:ring-2 ${isEditing
//             ? "border-indigo-400 focus:ring-indigo-500"
//             : "border-gray-300 bg-gray-100 cursor-not-allowed"
//             } dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
//           />
//          </div>

//          <div>
//           <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
//            Rôle
//           </label>
//           <select
//            disabled={!isEditing}
//            value={editUser.role}
//            onChange={(e) => handleChange("role", e.target.value)}
//            className={`w-full rounded border px-4 py-2 focus:outline-none focus:ring-2 ${isEditing
//             ? "border-indigo-400 focus:ring-indigo-500"
//             : "border-gray-300 bg-gray-100 cursor-not-allowed"
//             } dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
//           >
//            {roles.map((r) => (
//             <option key={r} value={r}>
//              {r}
//             </option>
//            ))}
//           </select>
//          </div>

//          <div>
//           <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
//            Localisation
//           </label>
//           <input
//            type="text"
//            disabled={!isEditing}
//            value={editUser.location || ""}
//            onChange={(e) => handleChange("location", e.target.value)}
//            className={`w-full rounded border px-4 py-2 focus:outline-none focus:ring-2 ${isEditing
//             ? "border-indigo-400 focus:ring-indigo-500"
//             : "border-gray-300 bg-gray-100 cursor-not-allowed"
//             } dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
//           />
//          </div>

//          <div>
//           <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
//            Date d'inscription
//           </label>
//           <input
//            type="text"
//            disabled={true}
//            value={editUser.joined}
//            className="w-full rounded border border-gray-300 bg-gray-100 px-4 py-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white cursor-not-allowed"
//           />
//          </div>
//         </form>
//        </div>

//        {/* Stats */}
//        {editUser.stats && (
//         <div className="grid grid-cols-3 border-t border-gray-300 dark:border-gray-700 mt-8 pt-6 gap-6 text-center">
//          <div>
//           <p className="text-3xl font-bold text-indigo-600">
//            {editUser.stats.courses || 0}
//           </p>
//           <p className="text-gray-600 dark:text-gray-400">Cours suivis</p>
//          </div>
//          <div>
//           <p className="text-3xl font-bold text-indigo-600">
//            {editUser.stats.certificates || 0}
//           </p>
//           <p className="text-gray-600 dark:text-gray-400">Certificats</p>
//          </div>
//          <div>
//           <p className="text-3xl font-bold text-indigo-600">
//            {editUser.stats.points || 0}
//           </p>
//           <p className="text-gray-600 dark:text-gray-400">Points</p>
//          </div>
//         </div>
//        )}

//        {/* Actions */}
//        <div className="mt-10 flex justify-end space-x-4">
//         <button
//          onClick={() => setShowDeleteConfirm(true)}
//          className="flex items-center space-x-2 px-6 py-3 rounded font-semibold shadow text-white bg-red-600 hover:bg-red-700 transition"
//         >
//          <Trash2Icon className="w-6 h-6" />
//          <span>Supprimer l'utilisateur</span>
//         </button>
//        </div>
//       </>
//      )}
//     </section>
//    </main>

//    {/* Modal suppression */}
//    {showDeleteConfirm && (
//     <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 animate-fadeIn">
//      <div className="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-md w-full shadow-lg space-y-6 animate-slideInUp">
//       <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
//        Confirmation de suppression
//       </h2>
//       <p className="text-gray-700 dark:text-gray-300">
//        Êtes-vous sûr de vouloir supprimer l’utilisateur <b>{editUser.name}</b> ? Cette action est
//        irréversible.
//       </p>
//       <div className="flex justify-end space-x-4">
//        <button
//         onClick={() => setShowDeleteConfirm(false)}
//         className="px-4 py-2 rounded border border-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
//        >
//         Annuler
//        </button>
//        <button
//         onClick={handleDelete}
//         className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700 transition"
//        >
//         Supprimer
//        </button>
//       </div>
//      </div>
//     </div>
//    )}

//    {/* Animations keyframes */}
//    <style>{`
//         @keyframes fadeIn {
//           from {opacity: 0;}
//           to {opacity: 1;}
//         }
//         @keyframes slideInUp {
//           from {transform: translateY(50px); opacity: 0;}
//           to {transform: translateY(0); opacity: 1;}
//         }
//         .animate-fadeIn {
//           animation: fadeIn 0.3s ease forwards;
//         }
//         .animate-slideInUp {
//           animation: slideInUp 0.4s ease forwards;
//         }
//       `}</style>
//   </div>
//  );
// }






















// import { useState, useEffect } from "react";
// import { Inertia } from '@inertiajs/inertia'

// import {
//  UserIcon,
//  MailIcon,
//  CalendarIcon,
//  MapPinIcon,
//  CheckCircleIcon,
//  XCircleIcon,
//  Trash2Icon,
//  Edit3Icon,
//  SaveIcon,
//  SearchIcon,
// } from "lucide-react";

// const roles = ["user", "admin", "superadmin"];

// export default function User({ usersData }) {
//  const [users, setUsers] = useState(usersData || []);
//  const [selectedUserId, setSelectedUserId] = useState(users[0]?.id || null);
//  const [searchTerm, setSearchTerm] = useState("");
//  const [editUser, setEditUser] = useState(null);
//  const [isEditing, setIsEditing] = useState(false);
//  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
//  const [password, setPassword] = useState("");
//  const [passwordConfirm, setPasswordConfirm] = useState("");

//  useEffect(() => {
//   const u = users.find((u) => u.id === selectedUserId);
//   setEditUser(u ? { ...u } : null);
//   setIsEditing(false);
//   setPassword("");
//   setPasswordConfirm("");
//  }, [selectedUserId, users]);

//  const filteredUsers = users.filter(
//   (u) =>
//    u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//    u.email.toLowerCase().includes(searchTerm.toLowerCase())
//  );

//  const handleChange = (field, value) => {
//   setEditUser((prev) => ({ ...prev, [field]: value }));
//  };

//  const handleSave = () => {
//   if (!editUser) return;

//   const dataToSend = {
//    name: editUser.name,
//    email: editUser.email,
//    role: editUser.role,
//    location: editUser.location || "",
//    // Pour Laravel, il faut password_confirmation pour la validation 'confirmed'
//    ...(password ? { password: password, password_confirmation: passwordConfirm } : {}),
//   };

//   Inertia.put(`/admin/users/${editUser.id}`, dataToSend, {
//    onSuccess: () => {
//     setUsers((prev) =>
//      prev.map((u) => (u.id === editUser.id ? { ...u, ...dataToSend } : u))
//     );
//     setIsEditing(false);
//     setPassword("");
//     setPasswordConfirm("");
//    },
//    onError: (errors) => {
//     console.error(errors);
//     alert("Erreur lors de la sauvegarde");
//    },
//   });
//  };

//  const handleDelete = () => {
//   if (!editUser) return;

//   Inertia.delete(`/admin/users/${editUser.id}`, {
//    onSuccess: () => {
//     setUsers((prev) => prev.filter((u) => u.id !== editUser.id));
//     setShowDeleteConfirm(false);
//     setSelectedUserId(users[0]?.id || null);
//    },
//    onError: (errors) => {
//     console.error(errors);
//     alert("Erreur lors de la suppression");
//    },
//   });
//  };

//  return (
//   <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col">
//    {/* Header */}
//    <header className="sticky top-0 bg-white dark:bg-gray-800 shadow-md flex items-center px-6 py-4 z-10">
//     <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
//      Je gère les utilisateurs
//     </h1>
//    </header>

//    {/* Main Content */}
//    <main className="flex-grow grid grid-cols-12 gap-6 p-6 overflow-hidden">
//     {/* Left panel: liste utilisateurs */}
//     <section className="col-span-4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg flex flex-col">
//      <div className="p-4 border-b border-gray-300 dark:border-gray-700 flex items-center space-x-3">
//       <SearchIcon className="w-5 h-5 text-gray-400" />
//       <input
//        type="text"
//        placeholder="Rechercher par nom ou email..."
//        value={searchTerm}
//        onChange={(e) => setSearchTerm(e.target.value)}
//        className="w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//       />
//      </div>
//      <div className="flex-grow overflow-y-auto">
//       {filteredUsers.length === 0 ? (
//        <p className="p-6 text-gray-500 dark:text-gray-400">Aucun utilisateur trouvé.</p>
//       ) : (
//        <ul>
//         {filteredUsers.map((u) => (
//          <li
//           key={u.id}
//           onClick={() => setSelectedUserId(u.id)}
//           className={`cursor-pointer flex items-center gap-4 px-4 py-3 border-b border-gray-200 dark:border-gray-700 hover:bg-indigo-100 dark:hover:bg-indigo-700 transition ${u.id === selectedUserId ? "bg-indigo-200 dark:bg-indigo-900 font-semibold" : "font-normal"
//            }`}
//          >
//           <img
//            src={
//             u.avatar ||
//             `https://ui-avatars.com/api/?name=${encodeURIComponent(u.name)}&background=random`
//            }
//            alt={u.name}
//            className="w-10 h-10 rounded-full border-2 border-indigo-500"
//           />
//           <div className="flex-grow min-w-0">
//            <p className="truncate">{u.name}</p>
//            <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{u.email}</p>
//           </div>
//           {u.active ? (
//            <CheckCircleIcon className="w-5 h-5 text-green-500" />
//           ) : (
//            <XCircleIcon className="w-5 h-5 text-red-500" />
//           )}
//          </li>
//         ))}
//         </ul>
//       )}
//      </div>
//     </section>

//     {/* Right panel: détails utilisateur */}
//     <section className="col-span-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 flex flex-col">
//      {!editUser ? (
//       <p className="text-gray-600 dark:text-gray-400 text-center mt-20">
//        Sélectionnez un utilisateur à gauche pour voir les détails.
//       </p>
//      ) : (
//       <>
//        <div className="flex items-center justify-between mb-8">
//         <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
//          Détails utilisateur : {editUser.name}
//         </h3>
//         {isEditing ? (
//          <button
//           onClick={handleSave}
//           className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded shadow transition"
//          >
//           <SaveIcon className="w-5 h-5" />
//           <span>Sauvegarder</span>
//          </button>
//         ) : (
//          <button
//           onClick={() => setIsEditing(true)}
//           className="flex items-center space-x-2 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded shadow transition"
//          >
//           <Edit3Icon className="w-5 h-5" />
//           <span>Modifier</span>
//          </button>
//         )}
//        </div>

//         <form
//          onSubmit={(e) => {
//           e.preventDefault();
//           handleSave();
//          }}
//          className="flex-grow space-y-6 min-w-[280px]"
//         >
//          {/* Nom */}
//          <div>
//           <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Nom complet</label>
//           <input
//            type="text"
//            disabled={!isEditing}
//            value={editUser.name}
//            onChange={(e) => handleChange("name", e.target.value)}
//            className={`w-full rounded border px-4 py-2 focus:outline-none focus:ring-2 ${isEditing ? "border-indigo-400 focus:ring-indigo-500" : "border-gray-300 bg-gray-100 cursor-not-allowed"
//             } dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
//           />
//          </div>

//          {/* Email */}
//          <div>
//           <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Email</label>
//           <input
//            type="email"
//            disabled={!isEditing}
//            value={editUser.email}
//            onChange={(e) => handleChange("email", e.target.value)}
//            className={`w-full rounded border px-4 py-2 focus:outline-none focus:ring-2 ${isEditing ? "border-indigo-400 focus:ring-indigo-500" : "border-gray-300 bg-gray-100 cursor-not-allowed"
//             } dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
//           />
//          </div>

//          {/* Rôle */}
//          <div>
//           <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Rôle</label>
//           <select
//            disabled={!isEditing}
//            value={editUser.role}
//            onChange={(e) => handleChange("role", e.target.value)}
//            className={`w-full rounded border px-4 py-2 focus:outline-none focus:ring-2 ${isEditing ? "border-indigo-400 focus:ring-indigo-500" : "border-gray-300 bg-gray-100 cursor-not-allowed"
//             } dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
//           >
//            {roles.map((r) => (
//             <option key={r} value={r}>
//              {r}
//             </option>
//            ))}
//           </select>
//          </div>

//          {/* Localisation */}
//          <div>
//           <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Localisation</label>
//           <input
//            type="text"
//            disabled={!isEditing}
//            value={editUser.location || ""}
//            onChange={(e) => handleChange("location", e.target.value)}
//            className={`w-full rounded border px-4 py-2 focus:outline-none focus:ring-2 ${isEditing ? "border-indigo-400 focus:ring-indigo-500" : "border-gray-300 bg-gray-100 cursor-not-allowed"
//             } dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
//           />
//          </div>

//          {/* Mot de passe */}
//          <div>
//           <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
//            Mot de passe (laisser vide pour ne pas changer)
//           </label>
//           <input
//            type="password"
//            disabled={!isEditing}
//            value={password}
//            onChange={(e) => setPassword(e.target.value)}
//            className={`w-full rounded border px-4 py-2 focus:outline-none focus:ring-2 ${isEditing ? "border-indigo-400 focus:ring-indigo-500" : "border-gray-300 bg-gray-100 cursor-not-allowed"
//             } dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
//            placeholder="••••••••"
//           />
//          </div>

//          {/* Confirmation mot de passe */}
//          <div>
//           <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
//            Confirmation mot de passe
//           </label>
//           <input
//            type="password"
//            disabled={!isEditing}
//            value={passwordConfirm}
//            onChange={(e) => setPasswordConfirm(e.target.value)}
//            className={`w-full rounded border px-4 py-2 focus:outline-none focus:ring-2 ${isEditing ? "border-indigo-400 focus:ring-indigo-500" : "border-gray-300 bg-gray-100 cursor-not-allowed"
//             } dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
//            placeholder="••••••••"
//           />
//          </div>
//         </form>

//         {/* Actions suppression */}
//        <div className="mt-10 flex justify-end space-x-4">
//         <button
//          onClick={() => setShowDeleteConfirm(true)}
//          className="flex items-center space-x-2 px-6 py-3 rounded font-semibold shadow text-white bg-red-600 hover:bg-red-700 transition"
//         >
//          <Trash2Icon className="w-6 h-6" />
//          <span>Supprimer l'utilisateur</span>
//         </button>
//        </div>
//       </>
//      )}
//     </section>
//    </main>

//    {/* Modal suppression */}
//    {showDeleteConfirm && (
//     <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 animate-fadeIn">
//      <div className="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-md w-full shadow-lg space-y-6 animate-slideInUp">
//       <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
//        Confirmation de suppression
//       </h2>
//       <p className="text-gray-700 dark:text-gray-300">
//        Êtes-vous sûr de vouloir supprimer l’utilisateur <b>{editUser.name}</b> ? Cette action est
//        irréversible.
//       </p>
//       <div className="flex justify-end space-x-4">
//        <button
//         onClick={() => setShowDeleteConfirm(false)}
//         className="px-4 py-2 rounded border border-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
//        >
//         Annuler
//        </button>
//        <button
//         onClick={handleDelete}
//         className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700 transition"
//        >
//         Supprimer
//        </button>
//       </div>
//      </div>
//     </div>
//    )}


//    <style>{`
//         @keyframes fadeIn {
//           from {opacity: 0;}
//           to {opacity: 1;}
//         }
//         @keyframes slideInUp {
//           from {transform: translateY(50px); opacity: 0;}
//           to {transform: translateY(0); opacity: 1;}
//         }
//         .animate-fadeIn {
//           animation: fadeIn 0.3s ease forwards;
//         }
//         .animate-slideInUp {
//           animation: slideInUp 0.4s ease forwards;
//         }
//       `}</style>
//   </div>
//  );
// }




import { useState, useEffect } from "react";
import {
 UserIcon,
 MailIcon,
 CalendarIcon,
 MapPinIcon,
 CheckCircleIcon,
 XCircleIcon,
 Trash2Icon,
 Edit3Icon,
 SaveIcon,
 SearchIcon,
} from "lucide-react";
import { usePage } from "@inertiajs/react";

const roles = ["Utilisateur", "Administrateur", "Super Administrateur"];

export default function User({ usersData, onSaveUser, onDeleteUser }) {
 const [users, setUsers] = useState(usersData || []);
 const { userss } = usePage().props;

 // === AJOUT : si userss est fourni par Inertia, on l'utilise pour afficher la liste complète ===
 useEffect(() => {
  if (userss && Array.isArray(userss) && userss.length) {
   setUsers(userss);
  }
 }, [userss]);

 const [selectedUserId, setSelectedUserId] = useState(users[0]?.id || null);
 const [searchTerm, setSearchTerm] = useState("");
 const [editUser, setEditUser] = useState(null);
 const [isEditing, setIsEditing] = useState(false);
 const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);



 const [newUser, setNewUser] = useState({
  name: '',
  email: '',
  role: 'Utilisateur',
  password: '',
  password_confirmation: '',
 });
 const [showAddUserForm, setShowAddUserForm] = useState(false);
 const [errors, setErrors] = useState({});
 const roles = ["Utilisateur", "Administrateur", "Super Administrateur"];


 const { csrf_token } = usePage().props;
 useEffect(() => {
  const u = users.find((u) => u.id === selectedUserId);
  // === AJOUT : initialise aussi password / password_confirmation pour éviter undefined ===
  setEditUser(u ? { ...u, password: "", password_confirmation: "" } : null);
  setIsEditing(false);
 }, [selectedUserId, users]);

 // Filtrer la liste selon la recherche
 const filteredUsers = users.filter((u) =>
  u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  u.email.toLowerCase().includes(searchTerm.toLowerCase())
 );

 const handleChange = (field, value) => {
  setEditUser((prev) => ({ ...prev, [field]: value }));
 };

 const handleSave = () => {
  if (!editUser) return;
  // Mise à jour côté UI localement
  setUsers((prev) =>
   prev.map((u) => (u.id === editUser.id ? { ...editUser } : u))
  );


  setIsEditing(false);
  if (onSaveUser) onSaveUser(editUser);
 };

 const toggleActive = () => {
  if (!editUser) return;
  const newStatus = !editUser.active;
  const updatedUser = { ...editUser, active: newStatus };
  setEditUser(updatedUser);
  setUsers((prev) =>
   prev.map((u) => (u.id === editUser.id ? updatedUser : u))
  );
  if (onSaveUser) onSaveUser(updatedUser);
 };

 const handleDelete = async () => {
  if (!editUser) return;

  // Récupérer le token CSRF depuis la meta si elle existe
  const csrfToken =
   document.querySelector('meta[name="csrf-token"]')?.getAttribute("content") || "";

  try {
   const response = await fetch(`/admin/users/${editUser.id}`, {
    method: "DELETE",
    headers: {
     "Content-Type": "application/json",
     "X-CSRF-TOKEN": csrfToken,
    },
   });

   if (!response.ok) {
    const err = await response.json();
    alert("Erreur lors de la suppression : " + (err.message || response.statusText));
    return;
   }

   setUsers((prev) => prev.filter((u) => u.id !== editUser.id));
   setShowDeleteConfirm(false);
   if (onDeleteUser) onDeleteUser(editUser.id);
   setSelectedUserId(users[0]?.id || null);
  } catch (error) {
   alert("Erreur lors de la suppression : " + error.message);
  }
 };



 return (
  <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col">
   {/* Header */}
   <header className="sticky top-0 bg-white dark:bg-gray-800 shadow-md flex items-center px-6 py-4 z-10">
    <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
     Je gère les utilisateurs
    </h1>
   </header>

   {/* Main Content */}
   <main className="flex-grow grid grid-cols-12 gap-6 p-6 overflow-hidden">
    {/* Left panel: Liste utilisateurs */}
    <section className="col-span-4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg flex flex-col">
     {/* Recherche */}
     <div className="p-4 border-b border-gray-300 dark:border-gray-700 flex items-center space-x-3">
      <SearchIcon className="w-5 h-5 text-gray-400" />
      <input
       type="text"
       placeholder="Rechercher par nom ou email..."
       value={searchTerm}
       onChange={(e) => setSearchTerm(e.target.value)}
       className="w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
     </div>
     <button
      onClick={() => setShowAddUserForm(true)}
      className="mb-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
     >
      Ajouter un utilisateur
     </button>



     {showAddUserForm && (
      <form
       onSubmit={async (e) => {
        e.preventDefault();
        setErrors({});

        try {
         const payload = {
          name: newUser.name,
          email: newUser.email,
          role: newUser.role.toLowerCase(),
          password: newUser.password,
          password_confirmation: newUser.password_confirmation,
         };

         const response = await fetch('http://localhost:8000/api/admin/users', {
          method: 'POST',
          headers: {
           'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
         });

         if (!response.ok) {
          const data = await response.json();
          setErrors(data.errors || {});
          throw new Error('Erreur lors de la création');
         }

         const data = await response.json();
         alert('Utilisateur ajouté avec succès');

         // Mise à jour locale de la liste utilisateurs (ajout du nouvel user)
         setUsers((prev) => [...prev, data.user]);

         // Reset formulaire & cacher
         setNewUser({
          name: '',
          email: '',
          role: 'Utilisateur',
          password: '',
          password_confirmation: '',
         });
         setShowAddUserForm(false);
        } catch (err) {
         alert(err.message);
        }
       }}
       className="bg-white dark:bg-gray-800 rounded p-4 mb-4 shadow"
      >
       <input
        type="text"
        placeholder="Nom complet"
        value={newUser.name}
        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        required
        className="w-full mb-2 rounded border px-3 py-2"
       />
       <input
        type="email"
        placeholder="Email"
        value={newUser.email}
        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        required
        className="w-full mb-2 rounded border px-3 py-2"
       />
       <select
        value={newUser.role}
        onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
        className="w-full mb-2 rounded border px-3 py-2"
       >
        {roles.map((r) => (
         <option key={r} value={r}>
          {r}
         </option>
        ))}
       </select>
       <input
        type="password"
        placeholder="Mot de passe"
        value={newUser.password}
        onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
        required
        className="w-full mb-2 rounded border px-3 py-2"
       />
       <input
        type="password"
        placeholder="Confirmer mot de passe"
        value={newUser.password_confirmation}
        onChange={(e) =>
         setNewUser({ ...newUser, password_confirmation: e.target.value })
        }
        required
        className="w-full mb-2 rounded border px-3 py-2"
       />
       <div className="flex space-x-2 justify-end">
        <button
         type="button"
         onClick={() => setShowAddUserForm(false)}
         className="px-4 py-2 rounded border hover:bg-gray-100"
        >
         Annuler
        </button>
        <button
         type="submit"
         className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        >
         Ajouter
        </button>
       </div>
      </form>
     )}






     <div className="flex-grow overflow-y-auto">
      {filteredUsers.length === 0 && (
       <p className="p-6 text-gray-500 dark:text-gray-400">
        Aucun utilisateur trouvé.
       </p>
      )}
      <ul>
       {filteredUsers.map((u) => (
        <li
         key={u.id}
         onClick={() => setSelectedUserId(u.id)}
         className={`cursor-pointer flex items-center gap-4 px-4 py-3 border-b border-gray-200 dark:border-gray-700 hover:bg-indigo-100 dark:hover:bg-indigo-700 transition ${u.id === selectedUserId
          ? "bg-indigo-200 dark:bg-indigo-900 font-semibold"
          : "font-normal"
          }`}
        >
         <img
          src={
           u.avatar ||
           `https://ui-avatars.com/api/?name=${encodeURIComponent(
            u.name
           )}&background=random`
          }
          alt={u.name}
          className="w-10 h-10 rounded-full border-2 border-indigo-500"
         />
         <div className="flex-grow min-w-0">
          <p className="truncate">{u.name}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
           {u.email}
          </p>
         </div>
         {u.active ? (
          <CheckCircleIcon className="w-5 h-5 text-green-500" />
         ) : (
          <XCircleIcon className="w-5 h-5 text-red-500" />
         )}
        </li>
       ))}
      </ul>
     </div>
    </section>

    {/* Right panel: Détails utilisateur */}
    <section className="col-span-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 flex flex-col">
     {!editUser ? (
      <p className="text-gray-600 dark:text-gray-400 text-center mt-20">
       Sélectionnez un utilisateur à gauche pour voir les détails.
      </p>
     ) : (
      <>
       <div className="flex items-center justify-between mb-8">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
         Détails utilisateur : {editUser.name}
        </h3>
        {isEditing ? (
         <button
          onClick={handleSave}
          className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded shadow transition"
         >
          <SaveIcon className="w-5 h-5" />
          <span>Sauvegarder</span>
         </button>
        ) : (
         <button
          onClick={() => setIsEditing(true)}
          className="flex items-center space-x-2 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded shadow transition"
         >
          <Edit3Icon className="w-5 h-5" />
          <span>Modifier</span>
         </button>
        )}
       </div>

       {/* Infos utilisateur + avatar */}
       <div className="flex gap-8 flex-wrap">
        <div className="flex flex-col items-center space-y-4 flex-shrink-0">
         <img
          src={
           editUser.avatar ||
           `https://ui-avatars.com/api/?name=${encodeURIComponent(
            editUser.name
           )}&background=random`
          }
          alt={editUser.name}
          className="w-36 h-36 rounded-full border-4 border-indigo-500 shadow-md transition-transform hover:scale-105"
         />
         <div className="flex items-center space-x-2">
          {editUser.active ? (
           <>
            <CheckCircleIcon className="w-6 h-6 text-green-500 animate-pulse" />
            <span className="text-green-600 font-semibold">Actif</span>
           </>
          ) : (
           <>
            <XCircleIcon className="w-6 h-6 text-red-500 animate-pulse" />
            <span className="text-red-600 font-semibold">Désactivé</span>
           </>
          )}
         </div>
         <button
          onClick={() => {
           toggleActive();
           if (onSaveUser) onSaveUser({ ...editUser, active: !editUser.active });
          }}
          className={`mt-3 px-5 py-2 rounded font-semibold shadow text-white transition ${editUser.active
           ? "bg-red-600 hover:bg-red-700"
           : "bg-green-600 hover:bg-green-700"
           }`}
         >
          {editUser.active ? "Désactiver" : "Réactiver"}
         </button>
        </div>

        {/* Formulaire détail */}
        <form
         onSubmit={(e) => {
          e.preventDefault();
          handleSave();
         }}
         className="flex-grow space-y-6 min-w-[280px]"
        >
         <div>
          <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
           Nom complet
          </label>
          <input
           type="text"
           disabled={!isEditing}
           value={editUser.name}
           onChange={(e) => handleChange("name", e.target.value)}
           className={`w-full rounded border px-4 py-2 focus:outline-none focus:ring-2 ${isEditing
            ? "border-indigo-400 focus:ring-indigo-500"
            : "border-gray-300 bg-gray-100 cursor-not-allowed"
            } dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
          />
         </div>

         <div>
          <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
           Email
          </label>
          <input
           type="email"
           disabled={!isEditing}
           value={editUser.email}
           onChange={(e) => handleChange("email", e.target.value)}
           className={`w-full rounded border px-4 py-2 focus:outline-none focus:ring-2 ${isEditing
            ? "border-indigo-400 focus:ring-indigo-500"
            : "border-gray-300 bg-gray-100 cursor-not-allowed"
            } dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
          />
         </div>

         <div>
          <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
           Rôle
          </label>
          <select
           disabled={!isEditing}
           value={editUser.role}
           onChange={(e) => handleChange("role", e.target.value)}
           className={`w-full rounded border px-4 py-2 focus:outline-none focus:ring-2 ${isEditing
            ? "border-indigo-400 focus:ring-indigo-500"
            : "border-gray-300 bg-gray-100 cursor-not-allowed"
            } dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
          >
           {roles.map((r) => (
            <option key={r} value={r}>
             {r}
            </option>
           ))}
          </select>
         </div>

         <div>
          <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
           Localisation
          </label>
          <input
           type="text"
           disabled={!isEditing}
           value={editUser.location || ""}
           onChange={(e) => handleChange("location", e.target.value)}
           className={`w-full rounded border px-4 py-2 focus:outline-none focus:ring-2 ${isEditing
            ? "border-indigo-400 focus:ring-indigo-500"
            : "border-gray-300 bg-gray-100 cursor-not-allowed"
            } dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
          />
         </div>

         <div>
          <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
           Date d'inscription
          </label>
          <input
           type="text"
           disabled={true}
           value={editUser.joined}
           className="w-full rounded border border-gray-300 bg-gray-100 px-4 py-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white cursor-not-allowed"
          />
         </div>

          {/* === AJOUT : champs mot de passe (ne touchent pas la logique existante) === */}
          <div>
           <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
            Nouveau mot de passe
           </label>
           <input
            type="password"
            disabled={!isEditing}
            value={editUser.password || ""}
            onChange={(e) => handleChange("password", e.target.value)}
            className={`w-full rounded border px-4 py-2 focus:outline-none focus:ring-2 ${isEditing
             ? "border-indigo-400 focus:ring-indigo-500"
             : "border-gray-300 bg-gray-100 cursor-not-allowed"
             } dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
           />
          </div>

          <div>
           <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
            Confirmer mot de passe
           </label>
           <input
            type="password"
            disabled={!isEditing}
            value={editUser.password_confirmation || ""}
            onChange={(e) => handleChange("password_confirmation", e.target.value)}
            className={`w-full rounded border px-4 py-2 focus:outline-none focus:ring-2 ${isEditing
             ? "border-indigo-400 focus:ring-indigo-500"
             : "border-gray-300 bg-gray-100 cursor-not-allowed"
             } dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
           />
          </div>
        </form>
       </div>

       {/* Stats */}
       {editUser.stats && (
        <div className="grid grid-cols-3 border-t border-gray-300 dark:border-gray-700 mt-8 pt-6 gap-6 text-center">
         <div>
          <p className="text-3xl font-bold text-indigo-600">
           {editUser.stats.courses || 0}
          </p>
          <p className="text-gray-600 dark:text-gray-400">Cours suivis</p>
         </div>
         <div>
          <p className="text-3xl font-bold text-indigo-600">
           {editUser.stats.certificates || 0}
          </p>
          <p className="text-gray-600 dark:text-gray-400">Certificats</p>
         </div>
         <div>
          <p className="text-3xl font-bold text-indigo-600">
           {editUser.stats.points || 0}
          </p>
          <p className="text-gray-600 dark:text-gray-400">Points</p>
         </div>
        </div>
       )}

       {/* Actions */}
       <div className="mt-10 flex justify-end space-x-4">
        <button
         onClick={() => setShowDeleteConfirm(true)}
         className="flex items-center space-x-2 px-6 py-3 rounded font-semibold shadow text-white bg-red-600 hover:bg-red-700 transition"
        >
         <Trash2Icon className="w-6 h-6" />
         <span>Supprimer l'utilisateur</span>
        </button>
       </div>
      </>
     )}
    </section>
   </main>

   {/* Modal suppression */}
   {showDeleteConfirm && (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 animate-fadeIn">
     <div className="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-md w-full shadow-lg space-y-6 animate-slideInUp">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
       Confirmation de suppression
      </h2>
      <p className="text-gray-700 dark:text-gray-300">
       Êtes-vous sûr de vouloir supprimer l’utilisateur <b>{editUser.name}</b> ? Cette action est
       irréversible.
      </p>
      <div className="flex justify-end space-x-4">
       <button
        onClick={() => setShowDeleteConfirm(false)}
        className="px-4 py-2 rounded border border-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
       >
        Annuler
       </button>
       <button
        onClick={handleDelete}
        className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700 transition"
       >
        Supprimer
       </button>
      </div>
     </div>
    </div>
   )}

   {/* Animations keyframes */}
   <style>{`
        @keyframes fadeIn {
          from {opacity: 0;}
          to {opacity: 1;}
        }
        @keyframes slideInUp {
          from {transform: translateY(50px); opacity: 0;}
          to {transform: translateY(0); opacity: 1;}
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease forwards;
        }
        .animate-slideInUp {
          animation: slideInUp 0.4s ease forwards;
        }
      `}</style>
  </div>
 );
}
