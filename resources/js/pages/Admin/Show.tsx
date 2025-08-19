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

     <div className="border rounded-lg p-3 mb-3">
      <p className="text-sm">
       <span className="font-semibold">{comment.user?.name}</span> : {comment.content}
      </p>

      {/* Boutons Like + Répondre */}
      <div className="flex gap-4 mt-2 text-xs text-gray-600">
       <button
        onClick={() => Inertia.post(route("comments.like", comment.id))}
        className="hover:text-blue-600"
       >
        👍 {comment.likes_count || 0}
       </button>
       <button
        onClick={() => setReplyingTo(comment.id)}
        className="hover:text-blue-600"
       >
        ↩️ Répondre
       </button>
      </div>

      {/* Réponses */}
      {comment.replies?.map((reply: any) => (
       <div key={reply.id} className="ml-6 mt-2 border-l pl-3 text-sm text-gray-700">
        <span className="font-semibold">{reply.user?.name}</span> : {reply.content}
       </div>
      ))}

      {/* Formulaire de réponse */}
      {replyingTo === comment.id && (
       <form
        onSubmit={(e) => {
         e.preventDefault();
         Inertia.post(route("comments.store", lesson.id), {
          content: replyContent,
          parent_id: comment.id,
         });
        }}
        className="ml-6 mt-2 flex gap-2"
       >
        <input
         type="text"
         value={replyContent}
         onChange={(e) => setReplyContent(e.target.value)}
         placeholder="Votre réponse..."
         className="flex-grow rounded-lg border px-2 py-1 text-sm"
        />
        <button type="submit" className="bg-blue-600 text-white px-3 py-1 rounded">
         Envoyer
        </button>
       </form>
      )}
     </div>



   </div>
    {/* <Footer /> */}
   </div>
  </>
 );
};

export default Show;
