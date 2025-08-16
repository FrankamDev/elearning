<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Cours;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Inertia\Inertia;

class CourseAdminController extends Controller
{
    /**
     * Afficher tous les cours avec leurs catégories.
     */
    public function index()
    {
        return Inertia::render('Admin/CourseManager', [
            'cours' => Cours::with('category')->get(),
            'categories' => Category::all(),
            'flash' => session()->get('success') ? ['success' => session('success')] : null,
        ]);
    }

    /**
     * Ajouter un nouveau cours.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255|unique:cours,title',
            'description' => 'nullable|string',
            'category_id' => 'required|exists:categories,id',
            'video_url' => 'nullable|url',
        ]);

        // ✅ Génération d'un slug unique
        $slug = Str::slug($request->title);
        $originalSlug = $slug;
        $counter = 1;
        while (Cours::where('slug', $slug)->exists()) {
            $slug = $originalSlug . '-' . $counter++;
        }

        $cours = Cours::create([
            'title' => $request->title,
            'description' => $request->description,
            'category_id' => $request->category_id,
            'video_url' => $request->video_url,
            'user_id' => Auth::id(),
            'slug' => $slug,
        ]);

        return redirect()->back()->with([
            'success' => 'Cours ajouté avec succès !',
            'cours' => $cours
        ]);
    }

    /**
     * Mettre à jour un cours existant.
     */
    public function update(Request $request, Cours $cour)
    {
        $request->validate([
            'title' => 'required|string|max:255|unique:cours,title,' . $cour->id,
            'description' => 'nullable|string',
            'category_id' => 'required|exists:categories,id',
            'video_url' => 'nullable|url',
        ]);


        $slug = Str::slug($request->title);
        if ($slug !== $cour->slug) {
            $originalSlug = $slug;
            $counter = 1;
            while (Cours::where('slug', $slug)->where('id', '!=', $cour->id)->exists()) {
                $slug = $originalSlug . '-' . $counter++;
            }
        }

        $cour->update([
            'title' => $request->title,
            'description' => $request->description,
            'category_id' => $request->category_id,
            'video_url' => $request->video_url,
            'slug' => $slug,
        ]);

        return redirect()->back()->with('success', 'Cours mis à jour !');
    }

    /**
     * Supprimer un cours.
     */
    public function destroy(Cours $cour)
    {
        $cour->delete();
        return redirect()->back()->with('success', 'Cours supprimé !');
    }
}
