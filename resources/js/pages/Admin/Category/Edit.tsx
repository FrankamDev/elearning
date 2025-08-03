import { useForm } from '@inertiajs/react';
import { Link } from '@inertiajs/react';

export default function CategoryEdit({ category }) {
 const { data, setData, put, processing, errors } = useForm({
  name: category.name || '',
 });

 function handleSubmit(e) {
  e.preventDefault();
  put(`/admin/category/${category.id}`);
 }

 return (
  <div className="p-6 max-w-md mx-auto">
   <h1 className="text-2xl font-bold mb-6">Modifier la catégorie</h1>
   <form onSubmit={handleSubmit} className="space-y-4">
    <div>
     <label htmlFor="name" className="block font-semibold mb-1">Nom</label>
     <input
      type="text"
      id="name"
      value={data.name}
      onChange={e => setData('name', e.target.value)}
      className="w-full border rounded px-3 py-2"
     />
     {errors.name && <p className="text-red-600 mt-1">{errors.name}</p>}
    </div>

    <div className="flex space-x-4">
     <button
      type="submit"
      disabled={processing}
      className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
     >
      Enregistrer
     </button>
     <Link
      href="/admin/category"
      className="text-gray-600 px-4 py-2 rounded hover:underline"
     >
      Annuler
     </Link>
    </div>
   </form>
  </div>
 );
}
