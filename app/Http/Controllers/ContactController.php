<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class ContactController extends Controller
{
    // Liste tous les contacts (pour le dashboard)
    public function index()
    {
        try {
            $contacts = Contact::orderBy('created_at', 'desc')->get();
            return response()->json($contacts);
        } catch (\Exception $e) {
            Log::error('Erreur lors de la récupération des contacts : ' . $e->getMessage());
            return response()->json(['error' => 'Erreur serveur lors de la récupération des contacts'], 500);
        }
    }

    // Enregistrer un contact depuis le formulaire
    public function store(Request $request)
    {
        try {
            $validated = $request->validate([
                'name' => 'required|string|max:255',
                'email' => 'required|email|max:255',
                'phone' => 'nullable|string|max:20',
                'subject' => 'required|string|max:255',
                'message' => 'required|string',
            ]);

            Contact::create($validated);

            return response()->json([
                'success' => true,
                'message' => 'Message envoyé avec succès !',
            ], 201);
        } catch (\Illuminate\Validation\ValidationException $e) {
            Log::error('Erreur de validation : ' . $e->getMessage());
            return response()->json(['error' => $e->errors()], 422);
        } catch (\Exception $e) {
            Log::error('Erreur lors de l\'enregistrement du contact : ' . $e->getMessage());
            return response()->json(['error' => 'Erreur serveur lors de l\'enregistrement'], 500);
        }
    }
}
