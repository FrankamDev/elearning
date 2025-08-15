// import { useState, useEffect } from "react";
// import { Inertia } from "@inertiajs/inertia";
// import { usePage } from "@inertiajs/react";

// import {
//  CheckCircleIcon,
//  XCircleIcon,
//  Trash2Icon,
//  Edit3Icon,
//  SaveIcon,
//  SearchIcon,
// } from "lucide-react";

// const roles = [
//  { value: "user", label: "Utilisateur" },
//  { value: "admin", label: "Administrateur" },
//  { value: "superadmin", label: "Super Administrateur" },
// ];

// export default function User() {
//  const { users: usersFromBackend, flash } = usePage().props;

//  const [users, setUsers] = useState(usersFromBackend || []);
//  const [selectedUserId, setSelectedUserId] = useState(users[0]?.id || null);
//  const [searchTerm, setSearchTerm] = useState("");
//  const [editUser, setEditUser] = useState(null);
//  const [isEditing, setIsEditing] = useState(false);
//  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
//  const [showAddUserForm, setShowAddUserForm] = useState(false);
//  const [newUser, setNewUser] = useState({
//   name: "",
//   email: "",
//   role: "user",
//   password: "",
//   password_confirmation: "",
//  });
//  const [errors, setErrors] = useState({});

//  // Mettre à jour l'utilisateur sélectionné
//  useEffect(() => {
//   const u = users.find((u) => u.id === selectedUserId);
//   setEditUser(u ? { ...u, password: "", password_confirmation: "" } : null);
//   setIsEditing(false);
//  }, [selectedUserId, users]);

//  // Filtrer la liste
//  const filteredUsers = users.filter(
//   (u) =>
//    u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//    u.email.toLowerCase().includes(searchTerm.toLowerCase())
//  );

//  // Modifier un champ
//  const handleChange = (field, value) => {
//   setEditUser((prev) => ({ ...prev, [field]: value }));
//  };

//  // Sauvegarder utilisateur existant
//  const handleSave = () => {
//   if (!editUser) return;

//   Inertia.put(`/admin/users/${editUser.id}`, editUser, {
//    onSuccess: (page) => {
//     setUsers(page.props.users);
//     setIsEditing(false);
//      alert("Utilisateur mis à jour avec succès !");
//     },
//     onError: (errs) => setErrors(errs),
//    });
//  };

//  // Supprimer utilisateur
//  const handleDelete = () => {
//   if (!editUser) return;
//   Inertia.delete(`/admin/users/${editUser.id}`, {
//    onSuccess: (page) => {
//     setUsers(page.props.users);
//     setShowDeleteConfirm(false);
//     setSelectedUserId(page.props.users[0]?.id || null);
//     alert("Utilisateur supprimé avec succès !");
//    },
//   });
//  };

//  // Ajouter un utilisateur
//  const handleAddUser = (e) => {
//   e.preventDefault();
//   setErrors({});

//   Inertia.post("/admin/users", newUser, {
//    onSuccess: (page) => {
//     setUsers(page.props.users);
//     setShowAddUserForm(false);
//     setNewUser({
//      name: "",
//      email: "",
//      role: "user",
//      password: "",
//      password_confirmation: "",
//     });
//     alert("Utilisateur ajouté avec succès !");
//     },
//     onError: (errs) => setErrors(errs),
//    });
//  };

//  return (
//   <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col">
//    {/* Header */}

//    <header className="sticky top-0 bg-white dark:bg-gray-800 shadow-md flex items-center px-6 py-4 z-10">
//     <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
//      Gestion des utilisateurs
//     </h1>
//    </header>

//    {/* Main */}
//    <main className="flex-grow flex flex-col md:flex-row p-4 gap-4">
//     {/* Liste */}
//     <section className="md:w-1/3 bg-white dark:bg-gray-800 rounded-2xl shadow-lg flex flex-col p-4">
//      <div className="flex items-center gap-2 mb-3">
//       <SearchIcon className="w-5 h-5 text-gray-400" />
//       <input
//        type="text"
//        placeholder="Rechercher..."
//        value={searchTerm}
//        onChange={(e) => setSearchTerm(e.target.value)}
//        className="flex-grow bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//       />
//      </div>

//      <button
//       onClick={() => setShowAddUserForm(true)}
//       className="mb-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
//      >
//       Ajouter un utilisateur
//      </button>

//      {showAddUserForm && (
//       <form
//        onSubmit={handleAddUser}
//        className="bg-gray-50 dark:bg-gray-700 rounded p-4 mb-4 shadow"
//       >
//        <input
//         type="text"
//         placeholder="Nom complet"
//         value={newUser.name}
//         onChange={(e) =>
//          setNewUser({ ...newUser, name: e.target.value })
//         }
//         className="w-full mb-2 rounded border px-3 py-2"
//         required
//        />
//        <input
//         type="email"
//         placeholder="Email"
//         value={newUser.email}
//         onChange={(e) =>
//          setNewUser({ ...newUser, email: e.target.value })
//         }
//         className="w-full mb-2 rounded border px-3 py-2"
//         required
//        />
//        <select
//         value={newUser.role}
//         onChange={(e) =>
//          setNewUser({ ...newUser, role: e.target.value })
//         }
//         className="w-full mb-2 rounded border px-3 py-2"
//        >
//         {roles.map((r) => (
//           <option key={r.value} value={r.value}>
//            {r.label}
//           </option>
//          ))}
//        </select>
//        <input
//         type="password"
//         placeholder="Mot de passe"
//         value={newUser.password}
//         onChange={(e) =>
//          setNewUser({ ...newUser, password: e.target.value })
//         }
//         className="w-full mb-2 rounded border px-3 py-2"
//         required
//        />
//        <input
//         type="password"
//         placeholder="Confirmer mot de passe"
//         value={newUser.password_confirmation}
//         onChange={(e) =>
//           setNewUser({
//            ...newUser,
//            password_confirmation: e.target.value,
//           })
//          }
//         className="w-full mb-2 rounded border px-3 py-2"
//         required
//        />
//        <div className="flex justify-end space-x-2">
//         <button
//          type="button"
//          onClick={() => setShowAddUserForm(false)}
//          className="px-4 py-2 rounded border hover:bg-gray-100"
//         >
//          Annuler
//         </button>
//         <button
//          type="submit"
//          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
//         >
//          Ajouter
//         </button>
//        </div>
//       </form>
//      )}

//      <div className="flex-grow overflow-y-auto">
//       {filteredUsers.length === 0 ? (
//        <p className="text-gray-500 dark:text-gray-400">
//         Aucun utilisateur trouvé.
//        </p>
//       ) : (
//        <ul>
//         {filteredUsers.map((u) => (
//          <li
//           key={u.id}
//           onClick={() => setSelectedUserId(u.id)}
//           className={`cursor-pointer flex items-center gap-4 px-4 py-3 border-b border-gray-200 dark:border-gray-700 hover:bg-indigo-100 dark:hover:bg-indigo-700 transition ${u.id === selectedUserId
//            ? "bg-indigo-200 dark:bg-indigo-900 font-semibold"
//            : "font-normal"
//            }`}
//          >
//           <img
//            src={
//             u.avatar ||
//             `https://ui-avatars.com/api/?name=${encodeURIComponent(
//              u.name
//             )}&background=random`
//            }
//            alt={u.name}
//            className="w-10 h-10 rounded-full border-2 border-indigo-500"
//           />
//           <div className="flex-grow min-w-0">
//            <p className="truncate">{u.name}</p>
//            <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
//             {u.email}
//            </p>
//           </div>
//           {u.active ? (
//            <CheckCircleIcon className="w-5 h-5 text-green-500" />
//           ) : (
//            <XCircleIcon className="w-5 h-5 text-red-500" />
//           )}
//          </li>
//         ))}
//        </ul>
//       )}
//      </div>
//     </section>

//     {/* Détails */}
//     <section className="md:w-2/3 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col">
//      {!editUser ? (
//       <p className="text-gray-600 dark:text-gray-400 text-center mt-20">
//        Sélectionnez un utilisateur pour voir les détails.
//       </p>
//      ) : (
//       <>
//         <div className="flex items-center justify-between mb-6">
//          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
//           {editUser.name}
//          </h3>
//          {isEditing ? (
//           <button
//            onClick={handleSave}
//            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded shadow transition"
//           >
//            <SaveIcon className="w-5 h-5" />
//            Sauvegarder
//           </button>
//          ) : (
//           <button
//            onClick={() => setIsEditing(true)}
//             className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded shadow transition"
//            >
//             <Edit3Icon className="w-5 h-5" />
//             Modifier
//            </button>
//          )}
//         </div>

//         <form
//          onSubmit={(e) => {
//           e.preventDefault();
//           handleSave();
//          }}
//          className="flex-grow space-y-4"
//         >
//          <div>
//           <label>Nom complet</label>
//           <input
//            type="text"
//            disabled={!isEditing}
//            value={editUser.name}
//            onChange={(e) => handleChange("name", e.target.value)}
//            className="w-full rounded border px-3 py-2"
//           />
//          </div>
//          <div>
//           <label>Email</label>
//           <input
//            type="email"
//            disabled={!isEditing}
//            value={editUser.email}
//            onChange={(e) => handleChange("email", e.target.value)}
//            className="w-full rounded border px-3 py-2"
//           />
//          </div>
//          <div>
//           <label>Rôle</label>
//           <select
//            disabled={!isEditing}
//            value={editUser.role}
//            onChange={(e) => handleChange("role", e.target.value)}
//            className="w-full rounded border px-3 py-2"
//           >
//            {roles.map((r) => (
//              <option key={r.value} value={r.value}>
//               {r.label}
//             </option>
//            ))}
//           </select>
//           </div>
//         </form>

//         {/* Actions */}
//         <div className="mt-6 flex justify-end">
//          <button
//           onClick={() => setShowDeleteConfirm(true)}
//           className="flex items-center gap-2 px-6 py-2 rounded font-semibold shadow text-white bg-red-600 hover:bg-red-700 transition"
//          >
//          <Trash2Icon className="w-5 h-5" />
//          Supprimer
//         </button>
//        </div>
//       </>
//      )}
//     </section>
//    </main>

//    {/* Modal suppression */}
//    {showDeleteConfirm && (
//     <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
//      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full shadow-lg">
//       <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
//        Confirmation de suppression
//       </h2>
//       <p className="text-gray-700 dark:text-gray-300 mt-2">
//        Êtes-vous sûr de vouloir supprimer <b>{editUser.name}</b> ?
//       </p>
//       <div className="flex justify-end gap-4 mt-4">
//        <button
//         onClick={() => setShowDeleteConfirm(false)}
//         className="px-4 py-2 rounded border hover:bg-gray-100 dark:hover:bg-gray-700"
//        >
//         Annuler
//        </button>
//        <button
//         onClick={handleDelete}
//         className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700"
//        >
//         Supprimer
//        </button>
//       </div>
//      </div>
//     </div>
//    )}
//   </div>
//  );
// }

import { useState, useEffect } from "react";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/react";

import {
 CheckCircleIcon,
 XCircleIcon,
 Trash2Icon,
 Edit3Icon,
 SaveIcon,
 SearchIcon,
} from "lucide-react";

const roles = [
 { value: "user", label: "Utilisateur" },
 { value: "admin", label: "Administrateur" },
 { value: "superadmin", label: "Super Administrateur" },
];

export default function User() {
 const { users: usersFromBackend, flash } = usePage().props;

 const [users, setUsers] = useState(usersFromBackend || []);
 const [selectedUserId, setSelectedUserId] = useState(users[0]?.id || null);
 const [searchTerm, setSearchTerm] = useState("");
 const [editUser, setEditUser] = useState(null);
 const [isEditing, setIsEditing] = useState(false);
 const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
 const [showAddUserForm, setShowAddUserForm] = useState(false);
 const [newUser, setNewUser] = useState({
  name: "",
  email: "",
  role: "user",
  password: "",
  password_confirmation: "",
 });
 const [errors, setErrors] = useState({});
 const [message, setMessage] = useState(flash?.success || "");

 // Mettre à jour l'utilisateur sélectionné
 useEffect(() => {
  const u = users.find((u) => u.id === selectedUserId);
  setEditUser(u ? { ...u, password: "", password_confirmation: "" } : null);
  setIsEditing(false);
 }, [selectedUserId, users]);

 // Afficher les messages flash Laravel
 useEffect(() => {
  if (flash?.success) {
   setMessage(flash.success);
   const timer = setTimeout(() => setMessage(''), 100);
   return () => clearTimeout(timer);
  }
 }, [flash]);

 // Filtrer la liste
 const filteredUsers = users.filter(
  (u) =>
   u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
   u.email.toLowerCase().includes(searchTerm.toLowerCase())
 );

 // Modifier un champ
 const handleChange = (field, value) => {
  setEditUser((prev) => ({ ...prev, [field]: value }));
 };

 // Sauvegarder utilisateur existant
 const handleSave = () => {
  if (!editUser) return;

  Inertia.put(`/admin/users/${editUser.id}`, editUser, {
   onSuccess: (page) => {
    setUsers(page.props.users);
    setIsEditing(false);
    setMessage("Utilisateur mis à jour avec succès !");
    const timer = setTimeout(() => setMessage(""), 3000);
    return () => clearTimeout(timer);
   },
   onError: (errs) => setErrors(errs),
  });
 };

 // Supprimer utilisateur
 const handleDelete = () => {
  if (!editUser) return;

  Inertia.delete(`/admin/users/${editUser.id}`, {
   onSuccess: (page) => {
    setUsers(page.props.users);
    setShowDeleteConfirm(false);
    setSelectedUserId(page.props.users[0]?.id || null);
    setMessage("Utilisateur supprimé avec succès !");
    const timer = setTimeout(() => setMessage(""), 3000);
    return () => clearTimeout(timer);
   },
  });
 };

 // Ajouter un utilisateur
 const handleAddUser = (e) => {
  e.preventDefault();
  setErrors({});

  Inertia.post("/admin/users", newUser, {
   onSuccess: (page) => {
    setUsers(page.props.users);
    setShowAddUserForm(false);
    setNewUser({
     name: "",
     email: "",
     role: "user",
     password: "",
     password_confirmation: "",
    });
    setMessage("Utilisateur ajouté avec succès !");
    const timer = setTimeout(() => setMessage(""), 3000);
    return () => clearTimeout(timer);
   },
   onError: (errs) => setErrors(errs),
  });
 };

 return (
  <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col">
   {/* Message flash */}
   {message && (
    <div className="fixed top-4 right-4 bg-green-600 text-white px-4 py-2 rounded shadow-lg z-50">
     {message}
    </div>
   )}

   {/* Header */}
   <header className="sticky top-0 bg-white dark:bg-gray-800 shadow-md flex items-center px-6 py-4 z-10">
    <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
     Gestion des utilisateurs
    </h1>
   </header>

   {/* Main */}
   <main className="flex-grow flex flex-col md:flex-row p-4 gap-4">
    {/* Liste */}
    <section className="md:w-1/3 bg-white dark:bg-gray-800 rounded-2xl shadow-lg flex flex-col p-4">
     <div className="flex items-center gap-2 mb-3">
      <SearchIcon className="w-5 h-5 text-gray-400" />
      <input
       type="text"
       placeholder="Rechercher..."
       value={searchTerm}
       onChange={(e) => setSearchTerm(e.target.value)}
       className="flex-grow bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
       onSubmit={handleAddUser}
       className="bg-gray-50 dark:bg-gray-700 rounded p-4 mb-4 shadow"
      >
       <input
        type="text"
        placeholder="Nom complet"
        value={newUser.name}
        onChange={(e) =>
         setNewUser({ ...newUser, name: e.target.value })
        }
        className="w-full mb-2 rounded border px-3 py-2"
        required
       />
       <input
        type="email"
        placeholder="Email"
        value={newUser.email}
        onChange={(e) =>
         setNewUser({ ...newUser, email: e.target.value })
        }
        className="w-full mb-2 rounded border px-3 py-2"
        required
       />
       <select
        value={newUser.role}
        onChange={(e) =>
         setNewUser({ ...newUser, role: e.target.value })
        }
        className="w-full mb-2 rounded border px-3 py-2"
       >
        {roles.map((r) => (
         <option key={r.value} value={r.value}>
          {r.label}
         </option>
        ))}
       </select>
       <input
        type="password"
        placeholder="Mot de passe"
        value={newUser.password}
        onChange={(e) =>
         setNewUser({ ...newUser, password: e.target.value })
        }
        className="w-full mb-2 rounded border px-3 py-2"
        required
       />
       <input
        type="password"
        placeholder="Confirmer mot de passe"
        value={newUser.password_confirmation}
        onChange={(e) =>
         setNewUser({
          ...newUser,
          password_confirmation: e.target.value,
         })
        }
        className="w-full mb-2 rounded border px-3 py-2"
        required
       />
       <div className="flex justify-end space-x-2">
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
      {filteredUsers.length === 0 ? (
       <p className="text-gray-500 dark:text-gray-400">
        Aucun utilisateur trouvé.
       </p>
      ) : (
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
         </li>
        ))}
       </ul>
      )}
     </div>
    </section>

    {/* Détails */}
    <section className="md:w-2/3 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col">
     {!editUser ? (
      <p className="text-gray-600 dark:text-gray-400 text-center mt-20">
       Sélectionnez un utilisateur pour voir les détails.
      </p>
     ) : (
      <>
        <div className="flex items-center justify-between mb-6">
         <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          {editUser.name}
         </h3>
         {isEditing ? (
          <button
           onClick={handleSave}
           className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded shadow transition"
          >
           <SaveIcon className="w-5 h-5" />
           Sauvegarder
          </button>
         ) : (
          <button
           onClick={() => setIsEditing(true)}
            className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded shadow transition"
           >
            <Edit3Icon className="w-5 h-5" />
            Modifier
           </button>
         )}
        </div>

        <form
         onSubmit={(e) => {
          e.preventDefault();
          handleSave();
         }}
         className="flex-grow space-y-4"
        >
         <div>
          <label>Nom complet</label>
          <input
           type="text"
           disabled={!isEditing}
           value={editUser.name}
           onChange={(e) => handleChange("name", e.target.value)}
           className="w-full rounded border px-3 py-2"
          />
         </div>
         <div>
          <label>Email</label>
          <input
           type="email"
           disabled={!isEditing}
           value={editUser.email}
           onChange={(e) => handleChange("email", e.target.value)}
           className="w-full rounded border px-3 py-2"
          />
         </div>
         <div>
          <label>Rôle</label>
          <select
           disabled={!isEditing}
           value={editUser.role}
           onChange={(e) => handleChange("role", e.target.value)}
           className="w-full rounded border px-3 py-2"
          >
           {roles.map((r) => (
            <option key={r.value} value={r.value}>
             {r.label}
            </option>
           ))}
          </select>
         </div>
        </form>

        {/* Actions */}
        <div className="mt-6 flex justify-end">
         <button
          onClick={() => setShowDeleteConfirm(true)}
          className="flex items-center gap-2 px-6 py-2 rounded font-semibold shadow text-white bg-red-600 hover:bg-red-700 transition"
         >
         <Trash2Icon className="w-5 h-5" />
         Supprimer
        </button>
       </div>
      </>
     )}
    </section>
   </main>

   {/* Modal suppression */}
   {showDeleteConfirm && (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
     <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full shadow-lg">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
       Confirmation de suppression
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mt-2">
       Êtes-vous sûr de vouloir supprimer <b>{editUser.name}</b> ?
      </p>
      <div className="flex justify-end gap-4 mt-4">
       <button
        onClick={() => setShowDeleteConfirm(false)}
        className="px-4 py-2 rounded border hover:bg-gray-100 dark:hover:bg-gray-700"
       >
        Annuler
       </button>
       <button
        onClick={handleDelete}
        className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700"
       >
        Supprimer
       </button>
      </div>
     </div>
    </div>
   )}
  </div>
 );
}
