
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";

const Connexion = () => {
    return (
        <div className="bg-deep-purple text-white flex flex-col items-center -my-12 justify-center h-screen">
      <h2 className="text-2xl text-center font-bold">Generons votre chemin d'apprentissage <br /> <span className="mx-52">personnalisé</span>.</h2>
      <div className="form my-10 w-full max-w-md">
       <form action="" method="post">
        <div className="form-control">
      <Label className="label">Nom</Label>
         <Input type="text" name="name" id="name" placeholder="Entre ton Nom" required />
        </div>
        <div className="mt-4">
         <Label htmlFor="email">Email</Label>
         <Input type="email" name="email" id="email" placeholder="Entre ton Email" required />
        </div>
       </form>
      </div>
        </div>
    );
};

export default Connexion;