<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Cours;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CourseAdminController extends Controller
{
    public function index()
    {
        $courses = Cours::with('category')->get();
        return Inertia::render('Admin/Course/Index', compact('courses'));
    }

    public function create()
    {
        $categories = Category::all();
        return Inertia::render('Admin/Course/Create', compact('categories'));
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
            'description' => $request->description,
            'category_id' => $request->category_id,
            'video_url' => $request->video_url,
            'user_id' => auth()->id(),
        ]);

        return redirect()->route('admin.courses.index')->with('success', 'Cours créé avec succès.');
    }

    public function edit(Cours $course)
    {
        $categories = Category::all();
        return Inertia::render('Admin/Course/Edit', compact('course', 'categories'));
    }

    public function update(Request $request, Cours $course)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'category_id' => 'required|exists:categories,id',
            'video_url' => 'nullable|url',
        ]);

        $course->update($request->only(['title', 'description', 'category_id', 'video_url']));

        return redirect()->route('admin.courses.index')->with('success', 'Cours mis à jour.');
    }

    public function destroy(Cours $course)
    {
        $course->delete();

        return redirect()->route('admin.courses.index')->with('success', 'Cours supprimé.');
    }
}
