
import { useState, useEffect } from "react";
import axios from "axios";
import {
 CheckCircleIcon,
 XCircleIcon,
 Trash2Icon,
 Edit3Icon,
 SaveIcon,
 Loader2Icon,
 RefreshCcwIcon,
} from "lucide-react";

const roles = [
 { value: "user", label: "Utilisateur" },
 { value: "admin", label: "Administrateur" },
 { value: "superadmin", label: "Super Administrateur" },
];

export default function UserAdmin() {
 const [users, setUsers] = useState([]);
 const [selectedUserId, setSelectedUserId] = useState(null);
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
 const [loading, setLoading] = useState(false);
 const [message, setMessage] = useState("");
 const [errors, setErrors] = useState({});
 const [searchTerm, setSearchTerm] = useState("");

 // Charger la liste des utilisateurs
 const fetchUsers = async () => {
  setLoading(true);
  try {
   const res = await axios.get("/admin/users");
   setUsers(res.data.users);
  } catch (err) {
   console.error(err);
  } finally {
   setLoading(false);
  }
 };

 useEffect(() => {
  fetchUsers();
 }, []);

 // Sélectionner un utilisateur
 useEffect(() => {
  const u = users.find((u) => u.id === selectedUserId);
  setEditUser(u ? { ...u, password: "", password_confirmation: "" } : null);
  setIsEditing(false);
 }, [selectedUserId, users]);

 // Messages temporaires
 useEffect(() => {
  if (message) {
   const timer = setTimeout(() => setMessage(""), 3000);
   return () => clearTimeout(timer);
  }
 }, [message]);

 const filteredUsers = users.filter(
  (u) =>
   u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
   u.email.toLowerCase().includes(searchTerm.toLowerCase())
 );

 const handleChange = (field, value) => {
  setEditUser((prev) => ({ ...prev, [field]: value }));
 };

 // Ajouter un utilisateur
 const handleAddUser = async (e) => {
  e.preventDefault();
  setErrors({});
  setLoading(true);

  try {
   const res = await axios.post("/admin/users", newUser);
   setUsers(res.data.users);
   setMessage(res.data.message);
   setShowAddUserForm(false);
   setNewUser({
    name: "",
    email: "",
    role: "user",
    password: "",
    password_confirmation: "",
   });
  } catch (err) {
   if (err.response?.status === 422) {
    setErrors(err.response.data.errors);
   }
  } finally {
   setLoading(false);
  }
 };

 // Mettre à jour un utilisateur
 const handleSave = async () => {
  if (!editUser) return;
  setLoading(true);
  setErrors({});
  try {
   const res = await axios.put(`/admin/users/${editUser.id}`, editUser);
   setUsers(res.data.users);
   setMessage(res.data.message);
   setIsEditing(false);
  } catch (err) {
   if (err.response?.status === 422) {
    setErrors(err.response.data.errors);
   }
  } finally {
   setLoading(false);
  }
 };

 // Supprimer un utilisateur
 const handleDelete = async () => {
  if (!editUser) return;
  setLoading(true);
  try {
   const res = await axios.delete(`/admin/users/${editUser.id}`);
   setUsers(res.data.users);
   setMessage(res.data.message);
   setShowDeleteConfirm(false);
   setSelectedUserId(null);
  } catch (err) {
   console.error(err);
  } finally {
   setLoading(false);
  }
 };

 return (
  <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col">
   {message && (
    <div className="fixed top-4 right-4 bg-green-600 text-white px-4 py-2 rounded shadow-lg z-50">
     {message}
    </div>
   )}

   <header className="sticky top-0 bg-white dark:bg-gray-800 shadow-md flex items-center px-6 py-4 justify-between">
    <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
     Gestion des utilisateurs
    </h1>
    <button
     onClick={fetchUsers}
     className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
    >
     <RefreshCcwIcon className="w-5 h-5" />
     {loading ? "Chargement..." : "Rafraîchir"}
    </button>
   </header>

   <main className="flex-grow flex flex-col md:flex-row p-4 gap-4">
    {/* Liste des utilisateurs */}
    <section className="md:w-1/3 bg-white dark:bg-gray-800 rounded-2xl shadow-lg flex flex-col p-4">
     <div className="flex items-center gap-2 mb-3">
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
        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        className="w-full mb-2 rounded border px-3 py-2"
        required
       />
       <input
        type="email"
        placeholder="Email"
        value={newUser.email}
        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        className="w-full mb-2 rounded border px-3 py-2"
        required
       />
       <select
        value={newUser.role}
        onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
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
        onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
        className="w-full mb-2 rounded border px-3 py-2"
        required
       />
       <input
        type="password"
        placeholder="Confirmer mot de passe"
        value={newUser.password_confirmation}
        onChange={(e) =>
         setNewUser({ ...newUser, password_confirmation: e.target.value })
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
         className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        >
         {loading ? <Loader2Icon className="w-5 h-5 animate-spin" /> : "Ajouter"}
        </button>
       </div>
      </form>
     )}

     <div className="flex-grow overflow-y-auto">
      {filteredUsers.length === 0 ? (
       <p className="text-gray-500 dark:text-gray-400">Aucun utilisateur trouvé.</p>
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
           {/* Avatar */}
           <img
            src={
             u.avatar ||
             `https://ui-avatars.com/api/?name=${encodeURIComponent(u.name)}&background=random`
            }
            alt={u.name}
            className="w-10 h-10 rounded-full border-2 border-indigo-500"
           />
           <div className="flex-grow min-w-0">
            <p className="truncate">{u.name}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{u.email}</p>
           </div>
          </li>
         ))}
        </ul>

      )}
     </div>
    </section>

    {/* Détails de l'utilisateur */}
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
           {loading ? <Loader2Icon className="w-5 h-5 animate-spin" /> : <SaveIcon className="w-5 h-5" />}
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

        <div className="mt-6 flex justify-end">
         <button
          onClick={() => setShowDeleteConfirm(true)}
          className="flex items-center gap-2 px-6 py-2 rounded font-semibold shadow text-white bg-red-600 hover:bg-red-700 transition"
         >
          {loading ? <Loader2Icon className="w-5 h-5 animate-spin" /> : <Trash2Icon className="w-5 h-5" />}
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
