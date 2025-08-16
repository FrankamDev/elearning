<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Cours;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Inertia\Inertia;

class CourseAdminController extends Controller
{
    // Liste tous les cours
    public function index()
    {
        $cours = Cours::with('category')->get(); // récupère tous les cours avec leur catégorie

        return Inertia::render('Admin/Course/Index', [
            'cours' => $cours,
            'flash' => session()->all(), // pour les messages de succès
        ]);
    }

    // Créer un nouveau cours
    public function store(Request $request)
    {
        $request->validate([
            'title'       => 'required|string|max:255|unique:cours,title',
            'description' => 'nullable|string',
            'category_id' => 'required|exists:categories,id',
            'video_url'   => 'nullable|url',
        ]);

        $cours = Cours::create([
            'title'       => $request->title,
            'description' => $request->description,
            'category_id' => $request->category_id,
            'video_url'   => $request->video_url,
            'user_id'     => Auth::id(),
            'slug'        => Str::slug($request->title),
        ]);

        return redirect()->route('cours.index')->with('success', 'Cours ajouté avec succès !');
    }

    // Mettre à jour un cours
    public function update(Request $request, Cours $cour)
    {
        $request->validate([
            'title'       => 'required|string|max:255|unique:cours,title,' . $cour->id,
            'description' => 'nullable|string',
            'category_id' => 'required|exists:categories,id',
            'video_url'   => 'nullable|url',
        ]);

        $cour->update([
            'title'       => $request->title,
            'description' => $request->description,
            'category_id' => $request->category_id,
            'video_url'   => $request->video_url,
            'slug'        => Str::slug($request->title),
        ]);

        return Inertia::render('Admin/Course/Index', [
            'cours' => Cours::with('category')->get(),
            'flash' => ['success' => 'Cours mis à jour avec succès !'],
        ]);
    }

    // Supprimer un cours
    public function destroy(Cours $cour)
    {
        $cour->delete();

        return Inertia::render('Admin/Course/Index', [
            'cours' => Cours::with('category')->get(),
            'flash' => ['success' => 'Cours supprimé avec succès !'],
        ]);
    }

    // Afficher un cours (optionnel)
    public function show(Cours $cour)
    {
        return Inertia::render('Admin/Course/Show', [
            'course' => $cour->load('category', 'lessons'),
        ]);
    }
}
