<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    // Liste tous les contacts (pour le dashboard)
    public function index()
    {
        $contacts = Contact::orderBy('created_at', 'desc')->get();

        return response()->json($contacts);
    }

    // Enregistrer un contact depuis le formulaire
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email',
            'phone' => 'nullable|string|max:20',
            'subject' => 'required|string|max:255',
            'message' => 'required|string',
        ]);

        Contact::create($validated);

        return response()->json([
            'success' => true,
            'message' => 'Message envoyé avec succès !',
        ]);
    }
}
