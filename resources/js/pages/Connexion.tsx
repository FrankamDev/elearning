
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";

const Connexion = () => {
 return (
  <div className="bg-[#020013] text-white flex flex-col items-center -my-12 justify-center h-screen">
   <h2 className="text-2xl text-center font-bold">Generons votre chemin d'apprentissage <br /> <span className="mx-52">personnalisé</span>.</h2>
   <div className="form my-10 w-full max-w-md">
    <form action="" method="post">
     <div className="form-control">
      <Label className="label">Nom</Label>
      <Input type="text" name="name" id="name" placeholder="Entre ton Nom" required />
     </div>
     <div className="mt-4">
      <Label className="label">Email</Label>
      <Input type="email" name="email" id="email" placeholder="Entre ton Email" required />
     </div>
     <div>
      <Input type="submit" className="bg-[#3AABFF] my-6 " name="submit" id="password" value="Creer un parcour d'apprentissage personnalisé" placeholder="Entre ton Mot de passe" required />
     </div>
    </form>
    <div className="flex items-center justify-center my-6">
     <div className="flex-grow h-px bg-gray-300"></div>
     <span className="px-4 text-sm text-gray-500">ou</span>
     <div className="flex-grow h-px bg-gray-300"></div>
    </div>
    <button className="w-full bg-red-600 text-white py-2 rounded mb-2">Connexion avec Google</button>
    <button className="w-full bg-gray-800 pointer text-white py-2 rounded">Connexion avec GitHub</button>
   </div>
  </div>
 );
};

export default Connexion;