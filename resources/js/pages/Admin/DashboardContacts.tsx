import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DashboardContacts = () => {
 const [contacts, setContacts] = useState([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);

 useEffect(() => {
  axios.get('/admin/contacts') // Assure-toi que la route Laravel correspond exactement
   .then(res => {
    setContacts(res.data);
    setLoading(false);
   })
   .catch(err => {
    console.error(err);
    setError('Impossible de récupérer les messages.');
    setLoading(false);
   });
 }, []);

 if (loading) return <p className="text-white p-6">Chargement des messages...</p>;
 if (error) return <p className="text-red-500 p-6">{error}</p>;

 return (
  <div className="p-6 bg-gray-900 min-h-screen text-white">
   <h2 className="text-3xl font-bold mb-6 text-yellow-400">Messages Contact</h2>
   <div className="overflow-x-auto">
    <table className="min-w-full bg-gray-800 rounded-lg overflow-hidden">
     <thead className="bg-gray-700 text-left">
      <tr>
       <th className="px-4 py-2">Nom</th>
       <th className="px-4 py-2">Email</th>
       <th className="px-4 py-2">Téléphone</th>
       <th className="px-4 py-2">Sujet</th>
       <th className="px-4 py-2">Message</th>
       <th className="px-4 py-2">Date</th>
      </tr>
     </thead>
     <tbody>
      {contacts.map((c) => (
       <tr key={c.id} className="border-b border-gray-600 hover:bg-gray-700">
        <td className="px-4 py-2">{c.name}</td>
        <td className="px-4 py-2">{c.email}</td>
        <td className="px-4 py-2">{c.phone || '-'}</td>
        <td className="px-4 py-2">{c.subject}</td>
        <td className="px-4 py-2">{c.message}</td>
        <td className="px-4 py-2">{new Date(c.created_at).toLocaleString()}</td>
       </tr>
      ))}
     </tbody>
    </table>
   </div>
  </div>
 );
};

export default DashboardContacts;
