// resources/js/Components/Background.jsx

export default function Background() {
  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
      {/* Dégradé violet flou */}
      <div className="absolute w-[600px] h-[600px] bg-purple-500 rounded-full blur-[200px] opacity-30 top-[-100px] left-[-200px] animate-pulse" />

      {/* Dégradé bleu flou */}
      <div className="absolute w-[500px] h-[500px] bg-blue-500 rounded-full blur-[200px] opacity-25 bottom-[-100px] right-[-100px] animate-pulse" />
    </div>
  );
}
