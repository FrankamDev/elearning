import { useForm } from '@inertiajs/react';
import { Link } from '@inertiajs/react';

export default function CategoryCreate() {
 const { data, setData, post, processing, errors } = useForm({
  name: '',
  image: null,
 });

 function handleSubmit(e) {
  e.preventDefault();

  post(route('category.store'), {
   forceFormData: true,
  });
 }
 const handleFileChange = (e) => {
  setData('image', e.target.files[0]);
 };

 return (
  <div className="p-6 max-w-md mx-auto">
   <h1 className="text-2xl font-bold mb-6">Ajouter une catégorie</h1>
   <form onSubmit={handleSubmit} className="space-y-4"
    encType="multipart/form-data"
   >
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

    <div>
     <label htmlFor="image" className="block font-semibold mb-1">Image</label>
     <input
      type="file"
      id="image"
      onChange={handleFileChange}
      className="w-full border rounded px-3 py-2"
     />
     {errors.image && <p className="text-red-600 mt-1">{errors.image}</p>}
    </div>

    <div className="flex space-x-4">
     <button
      type="submit"
      disabled={processing}
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
     >
      Ajouter
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
