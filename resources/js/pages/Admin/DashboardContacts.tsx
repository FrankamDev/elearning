import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '@/components/NavBar';
import Footer from './Footer';
import { motion } from 'framer-motion';

interface Contact {
 id: number;
 name: string;
 email: string;
 phone: string | null;
 subject: string;
 message: string;
 created_at: string;
}

const ContactTable = () => {
 const [contacts, setContacts] = useState<Contact[]>([]);
 const [loading, setLoading] = useState(true);

 useEffect(() => {
  const fetchContacts = async () => {
   try {
    const response = await axios.get('/admin/contacts');
    setContacts(response.data);
   } catch (err) {
    console.error('Erreur lors du chargement des contacts', err);
   } finally {
    setLoading(false);
   }
  };
  fetchContacts();
 }, []);

 return (
  <>

   <div className="bg-gradient-to-br  min-h-screen py-16 px-4">
    <div className="max-w-7xl mx-auto">
     <motion.h2
      className="text-5xl md:text-6xl font-bold text-center text-white mb-12 animate-pulse"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
     >
      Tableau de Contacts
     </motion.h2>

     {loading ? (
      <p className="text-center text-blue-100 text-lg">Chargement des contacts...</p>
     ) : contacts.length === 0 ? (
      <p className="text-center text-blue-100 text-lg">Aucun contact trouvé.</p>
     ) : (
      <motion.div
       className="overflow-x-auto rounded-2xl shadow-xl bg-white"
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       transition={{ duration: 0.8 }}
      >
       <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-blue-800">
         <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold text-white uppercase tracking-wider">Nom</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-white uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-white uppercase tracking-wider">Téléphone</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-white uppercase tracking-wider">Sujet</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-white uppercase tracking-wider">Message</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-white uppercase tracking-wider">Date</th>
           </tr>
          </thead>
          <tbody className="bg-gray-50 divide-y divide-gray-200">
           {contacts.map((contact) => (
            <motion.tr
             key={contact.id}
             className="hover:bg-blue-50 transition-colors cursor-pointer"
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.3 }}
            >
             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{contact.name}</td>
             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{contact.email}</td>
             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{contact.phone ?? '-'}</td>
             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{contact.subject}</td>
             <td className="px-6 py-4 text-sm text-gray-900 max-w-xs truncate">{contact.message}</td>
             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{new Date(contact.created_at).toLocaleString()}</td>
            </motion.tr>
           ))}
          </tbody>
         </table>
      </motion.div>
     )}

     {/* Footer cards / Contact info */}
     <motion.div
      className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
     >
      <div className="bg-blue-800 text-white rounded-2xl p-6 shadow-lg hover:scale-105 transform transition-all duration-300">
       <h3 className="text-xl font-bold mb-2">Support Email</h3>
       <p className="text-blue-100">support@votresite.com</p>
      </div>
      <div className="bg-blue-800 text-white rounded-2xl p-6 shadow-lg hover:scale-105 transform transition-all duration-300">
       <h3 className="text-xl font-bold mb-2">Téléphone</h3>
       <p className="text-blue-100">+237 6XXXXXXXX</p>
      </div>
      <div className="bg-blue-800 text-white rounded-2xl p-6 shadow-lg hover:scale-105 transform transition-all duration-300">
       <h3 className="text-xl font-bold mb-2">Adresse</h3>
       <p className="text-blue-100">Votre ville, Pays</p>
      </div>
     </motion.div>
    </div>
   </div>

  </>
 );
};

export default ContactTable;
