<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Cours;
use App\Models\Lesson;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class LessonAdminController extends Controller
{
    // Liste des leçons (JSON)
    public function index(Request $request)
    {
        $coursId = $request->query('cours_id');
        $query = Lesson::with('cours')->orderBy('created_at', 'desc');
        $cours = Cours::all();

        if ($coursId) {
            $query->where('cours_id', $coursId);
        }

        $lessons = $query->get();

        return response()->json([
            'success' => true,
            'lessons' => $lessons,
            'cours' => $cours,
        ]);
    }

    // Créer une leçon (JSON)
    public function store(Request $request)
    {
        try {
            $validated = $request->validate([
                'cours_id' => 'required|exists:cours,id',
                'title' => 'required|string|max:255',
                'content' => 'nullable|string',
                'video_file' => 'nullable|file|mimes:mp4,mov,avi|max:20480',
            ]);

            if ($request->hasFile('video_file')) {
                $path = $request->file('video_file')->store('videos', 'public');
                $validated['video_path'] = $path;
            }

            $lesson = Lesson::create($validated);

            // Charger la relation cours
            $lesson = Lesson::with('cours')->find($lesson->id);

            return response()->json([
                'success' => true,
                'message' => 'Leçon ajoutée avec succès !',
                'lesson'  => $lesson,
            ], 201);
        } catch (\Exception $e) {
            Log::error('Erreur lors de la création de la leçon : ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Erreur lors de l\'ajout de la leçon.',
            ], 500);
        }
    }
}
