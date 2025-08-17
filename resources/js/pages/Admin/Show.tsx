import Navbar from "@/components/NavBar";
import Footer from "@/pages/Footer";

const Show = ({ lessons }) => {
 return (
  <>
   <Navbar />
  <div className="p-6 max-w-lg mx-auto">
    <h1 className="text-2xl font-bold mb-6">Voir le cours : {lessons.title}</h1>
   <div className="flex flex-col gap-4">
    <div className="flex flex-col gap-2">
      <h2 className="text-xl h-5 bg-cyan-700 font-bold">Description</h2>
      <p className="text-gray-600">{lessons.content}</p>
    </div>
    <div className="flex flex-col gap-2">
     <h2 className="text-xl font-bold">Video</h2>
     <iframe
       src={lessons.video_url}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
       className="w-full h-64 rounded"
     />
    </div>
   </div>
    {/* <Footer /> */}
   </div>
  </>
 );
};

export default Show;
