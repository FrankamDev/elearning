const Show = ({ lesson }) => {
 return (
  <div className="p-6 max-w-lg mx-auto">
   <h1 className="text-2xl font-bold mb-6">Voir le cours : {lesson.title}</h1>
   <div className="flex flex-col gap-4">
    <div className="flex flex-col gap-2">
     <h2 className="text-xl font-bold">Description</h2>
     <p className="text-gray-600">{lesson.content}</p>
    </div>
    <div className="flex flex-col gap-2">
     <h2 className="text-xl font-bold">Video</h2>
     <iframe
      src={lesson.video_url}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="w-full h-full"
     />
    </div>
   </div>
  </div>
 );
};

export default Show;