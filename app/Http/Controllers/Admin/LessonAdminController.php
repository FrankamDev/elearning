<?php

// namespace App\Http\Controllers\Admin;

// use App\Http\Controllers\Controller;
// use App\Models\Cours;
// use App\Models\Lesson;
// use App\Models\Category;
// use Illuminate\Http\Request;
// use Inertia\Inertia;

// class LessonAdminController extends Controller
// {
//     // Page Inertia avec toutes les leçons
//     public function index(Request $request)
//     {
//         $coursId = $request->query('cours_id');
//         $categoryId = $request->query('category_id');

//         // Récupère toutes les leçons avec leur cours
//         $query = Lesson::with('cours')->orderBy('created_at', 'desc');

//         if ($coursId) {
//             $query->where('cours_id', $coursId);
//         }


//         if ($categoryId) {
//             // Filtrer les leçons dont le cours appartient à la catégorie
//             $query->whereHas('cours', function ($q) use ($categoryId) {
//                 $q->where('category_id', $categoryId);
//             });
//         }

//         $lessons = $query->get();
//         $cours = Cours::all();
//         $categories = Category::all();

//         return Inertia::render('cours/Show', [
//             'lessons' => $lessons,
//             'cours' => $cours,
//             'categories' => $categories,
//         ]);
//     }

//     // Créer une nouvelle leçon
//     public function store(Request $request)
//     {
//         $validated = $request->validate([
//             'cours_id' => 'required|exists:cours,id',
//             'title' => 'required|string|max:255',
//             'content' => 'nullable|string',
//             // 'video_file' => 'nullable|file|mimes:mp4,mov,avi|max:20480',
//             'video_file' => 'nullable|file|mimes:mp4,mov,avi,video/mp4,video/x-msvideo,video/quicktime|max:20480',
//         ]);

//         if ($request->hasFile('video_file')) {
//             $path = $request->file('video_file')->store('videos', 'public');
//             $validated['video_path'] = $path;
//         }

//         $lesson = Lesson::create($validated);
//         $lesson->load('cours');

//         return redirect()->back()->with('success', 'Leçon ajoutée avec succès !');
//     }
// }




namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Cours;
use App\Models\Lesson;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;

class LessonAdminController extends Controller
{
    // Afficher toutes les leçons avec filtres
    public function index(Request $request)
    {
        try {
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
        } catch (\Exception $e) {
            Log::error('Erreur lors de la récupération des leçons : ' . $e->getMessage());
            return redirect()->back()->with('error', 'Une erreur est survenue lors du chargement des leçons.');
        }
    }

    // Créer une nouvelle leçon
    public function store(Request $request)
    {
        try {
            $validated = $request->validate([
                'cours_id' => 'required|exists:cours,id',
                'title' => 'required|string|max:255',
                'content' => 'nullable|string',
                'video_file' => 'nullable|file|mimes:mp4,mov,avi|max:204800',
            ]);

            if ($request->hasFile('video_file') && $request->file('video_file')->isValid()) {
                $path = $request->file('video_file')->store('videos', 'public');
                $validated['video_path'] = $path;
            }

            $lesson = Lesson::create($validated);
            $lesson->load('cours');

            // ✅ Retour JSON au lieu de redirect
            return response()->json([
                'message' => 'Leçon ajoutée avec succès !',
                'lesson' => $lesson
            ], 201);
        } catch (\Exception $e) {
            \Log::error('Erreur lors de l\'ajout de la leçon : ' . $e->getMessage());

            return response()->json([
                'error' => 'Une erreur est survenue lors de l\'ajout de la leçon.',
                'details' => $e->getMessage()
            ], 500);
        }
    }


    // Mettre à jour une leçon existante
    public function update(Request $request, Lesson $lesson)
    {
        try {
            $validated = $request->validate([
                'cours_id' => 'required|exists:cours,id',
                'title' => 'required|string|max:255',
                'content' => 'nullable|string',
                'video_file' => 'nullable|file|mimes:mp4,mov,avi,video/mp4,video/x-msvideo,video/quicktime|max:20480',
            ]);

            if ($request->hasFile('video_file') && $request->file('video_file')->isValid()) {
                // Supprimer l'ancienne vidéo si elle existe
                if ($lesson->video_path && Storage::disk('public')->exists($lesson->video_path)) {
                    Storage::disk('public')->delete($lesson->video_path);
                }
                $path = $request->file('video_file')->store('videos', 'public');
                $validated['video_path'] = $path;
            }

            $lesson->update($validated);
            $lesson->load('cours');

            return redirect()->back()->with('success', 'Leçon mise à jour avec succès !');
        } catch (\Exception $e) {
            Log::error('Erreur lors de la mise à jour de la leçon : ' . $e->getMessage());
            return redirect()->back()->with('error', 'Une erreur est survenue lors de la mise à jour de la leçon.');
        }
    }

    // Supprimer une leçon
    public function destroy(Lesson $lesson)
    {
        try {
            if ($lesson->video_path && Storage::disk('public')->exists($lesson->video_path)) {
                Storage::disk('public')->delete($lesson->video_path);
            }
            $lesson->delete();

            return redirect()->back()->with('success', 'Leçon supprimée avec succès !');
        } catch (\Exception $e) {
            Log::error('Erreur lors de la suppression de la leçon : ' . $e->getMessage());
            return redirect()->back()->with('error', 'Une erreur est survenue lors de la suppression de la leçon.');
        }
    }
}