<?php

namespace App\Http\Controllers\Admin;


use Illuminate\Support\Str;

use App\Http\Controllers\Controller;
use App\Models\Cours;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CourseAdminController extends Controller
{
    public function index()
    {
        $categories = Category::with('cours.lessons')->get();
        // $cours = Cours::with('category')->get();
        return Inertia::render('Admin/cours/Index', [
            'categories' => $categories
        ]);
    }

    public function create()
    {
        $categories = Category::all();
        return Inertia::render('Admin/cours/Create', [
            'cours' => Cours::all(),
            'categories' => Category::all(),
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'category_id' => 'required|exists:categories,id',
            'video_url' => 'nullable|url',
        ]);

        Cours::create([
            'title' => $request->title,
            'slug' => Str::slug($request->title),
            'description' => $request->description,
            'category_id' => $request->category_id,
            'video_url' => $request->video_url,
            'user_id' => auth()->id(),
        ]);

        return redirect()->route('admin.cours.index')->with('success', 'Cours créé avec succès.');
    }

    public function edit(Cours $cours)
    {
        $categories = Category::all();
        return Inertia::render('Admin/cours/Edit', compact('cours', 'categories'));
    }

    public function update(Request $request, Cours $cours)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'category_id' => 'required|exists:categories,id',
            'video_url' => 'nullable|url',
        ]);

        $cours->update($request->only(['title', 'description', 'category_id', 'video_url']));

        return redirect()->route('admin.cours.index')->with('success', 'Cours mis à jour.');
    }
public function show(Cours $cours)
{
    $categories = Category::all();
        return Inertia::render('Admin/cours/Edit', compact('cours', 'categories'));
}

    public function destroy(Cours $cours)
    {
        $cours->delete();

        return redirect()->route('admin.cours.index')->with('success', 'Cours supprimé.');
    }
}
