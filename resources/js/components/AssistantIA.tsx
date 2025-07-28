import { useState } from 'react';
import { FaPaperPlane, FaRobot } from 'react-icons/fa';

const API_KEY = 'xai-Txvr7rlM8nRfvMojHfNBYzIp3WsRj8wUD8zRiOMRk8sIAHxnqn4ASTGtDxHchKCT8SqW4hW4XZF9ttLq';

export default function AssistantIA() {
 const [message, setMessage] = useState('');
 const [reponses, setReponses] = useState<{ role: string; content: string }[]>([]);
 const [chargement, setChargement] = useState(false);

 const envoyerMessage = async () => {
  if (!message.trim()) return;

  const nouveauDialogue = [...reponses, { role: 'user', content: message }];
  setReponses(nouveauDialogue);
  setMessage('');
  setChargement(true);

  try {
   const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
     'Authorization': `Bearer ${API_KEY}`,
     'Content-Type': 'application/json',
     'HTTP-Referer': 'https://tonsite.com', // facultatif mais recommandé
    },
    body: JSON.stringify({
     model: 'openai/gpt-3.5-turbo',
     messages: nouveauDialogue,
    }),
   });

   const data = await res.json();
   const reply = data.choices?.[0]?.message?.content || 'Erreur de réponse';
   setReponses((prev) => [...prev, { role: 'assistant', content: reply }]);
  } catch (err) {
   setReponses((prev) => [...prev, { role: 'assistant', content: "❌ Une erreur est survenue." }]);
  } finally {
   setChargement(false);
  }
 };

 return (
  <div className="fixed bottom-5 right-5 w-[300px] sm:w-[350px] rounded-lg bg-[#1e293b] p-4 shadow-xl text-white z-50">
   <div className="flex items-center gap-2 mb-3">
    <FaRobot className="text-yellow-400" />
    <h2 className="text-lg font-semibold">Assistant IA</h2>
   </div>

   <div className="h-60 overflow-y-auto space-y-2 text-sm pr-1">
    {reponses.map((msg, i) => (
     <div key={i} className={`p-2 rounded ${msg.role === 'user' ? 'bg-blue-600 text-right' : 'bg-gray-700 text-left'}`}>
      {msg.content}
     </div>
    ))}
    {chargement && <div className="text-gray-400">⏳ L'IA réfléchit...</div>}
   </div>

   <div className="mt-3 flex gap-2">
    <input
     type="text"
     value={message}
     onChange={(e) => setMessage(e.target.value)}
     onKeyDown={(e) => e.key === 'Enter' && envoyerMessage()}
     placeholder="Pose ta question..."
     className="flex-1 rounded bg-gray-800 px-3 py-2 text-white outline-none"
    />
    <button
     onClick={envoyerMessage}
     className="bg-yellow-400 hover:bg-yellow-500 text-black px-3 py-2 rounded"
    >
     <FaPaperPlane />
    </button>
   </div>
  </div>
 );
}
