<?php

namespace App\Http\Controllers;

use App\Models\Lesson;
use Inertia\Inertia;
use Illuminate\Http\Request;

class LessonController extends Controller
{
    public function index($cours_id)
    {
        $lessons = Lesson::with([
            'cours',
            'comments.user', // Pour avoir l'auteur de chaque commentaire
            'comments.replies.user' // Pour les réponses avec leurs auteurs
        ])
            ->where('cours_id', $cours_id)
            ->orderBy('created_at', 'desc')
            ->get();

        return Inertia::render('cours/Show', [
            'lessons' => $lessons
        ]);
    }
}