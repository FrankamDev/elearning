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
        $cours = Cours::with('category')->get();
        return Inertia::render('Admin/cours/Index', [
            'categories' => $categories,
            'cours' => $cours
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
        $slug = Str::slug($request->title);
        $originalSlug = $slug;
        $count = 1;

        while (Cours::where('slug', $slug)->exists()) {
            $slug = $originalSlug . '-' . $count;
            $count++;
        }

        Cours::create([
            'title' => $request->title,
            'slug' => $slug,
            // 'slug' => Str::slug($request->title),
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
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'category_id' => 'required|exists:categories,id',
            'video_url' => 'nullable|url',
        ]);

        // $cour->update($request->only(['title', 'description', 'category_id', 'video_url']));
        $cours->update($validated);
        return redirect()->route('admin.cours.index')->with('success', 'Cours mis à jour.');
    }
public function show(Cours $cours)
{
        $cours->load('lessons');
        $user = auth()->user();
        $progress = $user
            ? $user->lessonProgress()->pluck('is_completed', 'lesson_id')->toArray()
            : [];

        // $categories = Category::all();
        // return Inertia::render('Admin/cours/Edit', compact('cours', 'categories'));
        return Inertia::render('cours/Show', [
            'cours' => $cours,
            'userProgress' => $progress,
        ]);
    }

    public function destroy(Cours $cour)
    {
        $cour->delete();

        return redirect()->route('admin.cours.index')->with('success', 'Cours supprimé.');
    }
}
