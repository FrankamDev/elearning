<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Lesson;
use App\Models\Cours;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LessonAdminController extends Controller
{
    public function index()
    {
        $lessons = Lesson::with('cours')->get();
        return Inertia::render('Admin/Lessons/Index', [
            'lessons' => $lessons
        ]);
    }
    public function create()
    {
        $cours = Cours::all();
        $categories = Category::all();

        return Inertia::render('Admin/Lessons/Create', [
            'cours' => $cours,
            'categories' => $categories
        ]);
    }


    public function store(Request $request)
    {
        $validated = $request->validate([
            'cours_id' => 'required|exists:cours,id',
            'title' => 'required|string|max:255',
            'video_file' => 'required|file|mimes:mp4,mov,mkv,avi,wmv',
            'content' => 'nullable|string',

        ]);
        if ($request->hasFile('video_file')) {
            $path = $request->file('video_file')->store('videos', 'public'); // stocke dans storage/app/public/videos
            $validated['video_path'] = $path;
        }

        Lesson::create([
            'cours_id' => $request->cours_id,
            'title' => $request->title,
            'content' => $request->content,
            'video_path' => $path ?? null,
        ]);
        // Lesson::create($validated);

        // return redirect()->route('admin.cours.index')->with('success', 'Leçon créée avec succès.');
        return redirect()->route('admin.lessons.index')->with('success', 'Leçon créée avec succès.');
    }
    public function show(Lesson $lesson)
    {
        return Inertia::render('Admin/Lessons/Show', [
            'lesson' => $lesson,
        ]);
    }

    public function edit(Lesson $lesson)
    {
        $courses = Cours::all();
        return Inertia::render('Admin/Lessons/Edit', [
            'lesson' => $lesson,
            'courses' => $courses
        ]);
    }

    public function update(Request $request, Lesson $lesson)
    {
        $validated = $request->validate([
            'cours_id' => 'required|exists:cours,id',
            'title' => 'required|string|max:255',
            'video_file' => 'nullable|file|mimes:mp4,mov,mkv,avi,wmv',
            'content' => 'nullable|string',
        ]);

        if ($request->hasFile('video_file')) {
            $path = $request->file('video_file')->store('videos', 'public');
            $validated['video_path'] = $path;
        }

        $lesson->update($validated);

        return redirect()->route('admin.lessons.index')->with('success', 'Leçon mise à jour.');
    }


    public function destroy(Lesson $lesson)
    {
        $lesson->delete();
        return redirect()->route('admin.lessons.index')->with('success', 'Leçon supprimée.');
    }
}