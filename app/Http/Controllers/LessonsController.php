<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Cours;
use App\Models\Lesson;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LessonAdminController extends Controller
{
    // Page Inertia avec toutes les leçons
    public function index(Request $request)
    {
        $coursId = $request->query('cours_id');
        $categoryId = $request->query('category_id');

        // Récupère toutes les leçons avec leur cours
        $query = Lesson::with('cours')->orderBy('created_at', 'desc');

        if ($coursId) {
            $query->where('cours_id', $coursId);
        }


        if ($categoryId) {
            // Filtrer les leçons dont le cours appartient à la catégorie
            $query->whereHas('cours', function ($q) use ($categoryId) {
                $q->where('category_id', $categoryId);
            });
        }

        $lessons = $query->get();
        $cours = Cours::all();
        $categories = Category::all();

        return Inertia::render('cours/Show', [
            'lessons' => $lessons,
            'cours' => $cours,
            'categories' => $categories,
        ]);
    }

    // Créer une nouvelle leçon
    public function store(Request $request)
    {
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
        $lesson->load('cours');

        return redirect()->back()->with('success', 'Leçon ajoutée avec succès !');
    }
}
