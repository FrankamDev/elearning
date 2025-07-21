import { Head, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@radix-ui/react-dropdown-menu';
import { Button } from '@/components/ui/button';
import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';

export default function Login({ status, canResetPassword }) {
 const { data, setData, post, processing, errors, reset } = useForm({
  email: '',
  password: '',
  remember: false,
 });

 const submit: FormEventHandler = (e) => {
  e.preventDefault();
  post(route('login'), { onFinish: () => reset('password') });
 };

 return (
  <div className="bg-[#020013] text-white flex flex-col items-center justify-center h-screen px-6">
   <h2 className="text-2xl font-bold text-center mb-10 max-w-lg">
    Generons votre chemin d'apprentissage <br />
    <span className="block mt-2 text-[#3AABFF]">personnalisé</span>
   </h2>

   <form onSubmit={submit} className="w-full max-w-md space-y-6">
    <div>
     <Label htmlFor="email" className="block mb-2 font-semibold">Adresse Email</Label>
     <Input
      id="email"
      type="email"
      required
      autoFocus
      placeholder="email@example.com"
      value={data.email}
      onChange={e => setData('email', e.target.value)}
      className="bg-[#0A0A23] border border-gray-600 text-white rounded-md px-4 py-2"
     />
     <InputError message={errors.email} />
    </div>

    <div>
     <div className="flex justify-between items-center mb-2">
      <Label htmlFor="password" className="font-semibold">Mot de passe</Label>
      {canResetPassword && (
       <TextLink href={route('password.request')} className="text-sm text-[#3AABFF] hover:underline">
        Mot de passe oublié ?
       </TextLink>
      )}
     </div>
     <Input
      id="password"
      type="password"
      required
      placeholder="Entre ton Mot de passe"
      value={data.password}
      onChange={e => setData('password', e.target.value)}
      className="bg-[#0A0A23] border border-gray-600 text-white rounded-md px-4 py-2"
     />
     <InputError message={errors.password} />
    </div>

    <div className="flex items-center space-x-3">
     <input
      id="remember"
      type="checkbox"
      checked={data.remember}
      onChange={() => setData('remember', !data.remember)}
      className="accent-[#3AABFF] w-5 h-5"
     />
     <Label htmlFor="remember" className="text-white select-none">Se souvenir de moi</Label>
    </div>

    <Button
     type="submit"
     disabled={processing}
     className="w-full bg-[#3AABFF] hover:bg-[#3298ff] cursor-pointer text-black transition-colors font-bold py-3 rounded-md"
    >
     {processing ? 'Patientez...' : 'Connexion'}
    </Button>

    <p className="text-center text-gray-400 text-sm">
     Tu n'as pas de compte ?{' '}
     <TextLink href={route('register')} className="text-[#3AABFF] font-semibold hover:underline">
      Inscription
     </TextLink>
    </p>
   </form>

   {status && (
    <div className="mt-6 text-center text-green-500 font-semibold">
     {status}
    </div>
   )}
  </div>
 );
}
