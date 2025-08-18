<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Cours;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class CategoryAdminController extends Controller
{
    /**
     * Liste des catégories
     */
    public function index()
    {
        $categories = Category::withCount('cours')->get();

        return Inertia::render('Admin/CategoryIndex', [
            'categories' => $categories,
            'cours' => Cours::all(),
        ]);
    }

    /**
     * Ajouter une catégorie
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255|unique:categories,name',
            'image' => 'required|image|mimes:jpg,jpeg,png|max:2048',
        ]);

        $imagePath = $request->file('image')->store('categories', 'public');

        $category = Category::create([
            'name' => $validated['name'],
            'image' => $imagePath,
        ]);

        $category->loadCount('cours');

        // Si c'est une requête AJAX → JSON
        if ($request->expectsJson()) {
            return response()->json($category, 201);
        }

        // Sinon → redirection Inertia
        return redirect()->back()->with('success', 'Catégorie ajoutée avec succès.');
    }

    /**
     * Mettre à jour une catégorie
     */
    public function update(Request $request, Category $category)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255|unique:categories,name,' . $category->id,
            'image' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
        ]);

        $data = ['name' => $validated['name']];

        // Si nouvelle image → remplacer
        if ($request->hasFile('image')) {
            if ($category->image && Storage::disk('public')->exists($category->image)) {
                Storage::disk('public')->delete($category->image);
            }
            $data['image'] = $request->file('image')->store('categories', 'public');
        }

        $category->update($data);
        $category->loadCount('cours');

        if ($request->expectsJson()) {
            return response()->json($category);
        }

        return redirect()->back()->with('success', 'Catégorie mise à jour avec succès.');
    }

    /**
     * Supprimer une catégorie
     */
    public function destroy(Request $request, Category $category)
    {
        if ($category->image && Storage::disk('public')->exists($category->image)) {
            Storage::disk('public')->delete($category->image);
        }

        $category->delete();

        if ($request->expectsJson()) {
            return response()->json(['id' => $category->id]);
        }

        return redirect()->back()->with('success', 'Catégorie supprimée avec succès.');
    }
}
