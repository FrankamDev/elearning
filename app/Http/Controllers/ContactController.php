<?php

namespace App\Http\Controllers;

use App\Models\Contact;

class ContactController extends Controller
{
    // Récupérer tous les contacts
    public function index()
    {
        $contacts = Contact::orderBy('created_at', 'desc')->get();
        return response()->json($contacts);
    }
}
