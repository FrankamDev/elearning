<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryAdminController extends Controller
{
    // Liste toutes les catégories avec le nombre de cours
    public function index()
    {
        $categories = Category::withCount('cours')->get();
        return Inertia::render('Admin/category/Index', compact('categories'));
    }

    // Affiche le formulaire de création
    public function create()
    {
        return Inertia::render('Admin/category/Create');
    }

    // Enregistre une nouvelle catégorie
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255|unique:categories,name',
        ]);

        Category::create(['name' => $request->name]);

        return redirect()->route('admin.category.index')->with('success', 'Catégorie créée avec succès.');
    }

    // Affiche le formulaire d'édition
    public function edit(Category $category)
    {
        return Inertia::render('Admin/category/Edit', compact('category'));
    }

    // Met à jour la catégorie
    public function update(Request $request, Category $category)
    {
        $request->validate([
            'name' => 'required|string|max:255|unique:categories,name,'.$category->id,
        ]);

        $category->update(['name' => $request->name]);

        return redirect()->route('admin.category.index')->with('success', 'Catégorie mise à jour.');
    }

    // Supprime la catégorie
    public function destroy(Category $category)
    {
        $category->delete();

        return redirect()->route('admin.category.index')->with('success', 'Catégorie supprimée.');
    }
}
