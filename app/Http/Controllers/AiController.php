<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class AiController extends Controller
{
    public function ask(Request $request)
    {
        // Valider la requête
        $request->validate([
            'question' => 'required|string|max:1000',
        ]);

        $question = $request->input('question');

        // Appel à l'API de Grok
        $response = Http::withHeaders([
            'Authorization' => 'Bearer ' . env('GROK_API_KEY'),
        ])->post('https://api.x.ai/v1/chat/completions', [
            'model' => 'grok-3',
            'messages' => [
                [
                    'role' => 'user',
                    'content' => $question,
                ],
            ],
        ]);

        if ($response->successful()) {
            $answer = $response->json()['choices'][0]['message']['content'] ?? 'Aucune réponse reçue';
            return response()->json(['answer' => $answer]);
        }

        return response()->json(['error' => 'Erreur lors de la requête à l\'IA'], 500);
    }
}