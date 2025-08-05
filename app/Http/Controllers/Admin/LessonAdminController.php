<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
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
        $courses = Cours::all();
        return Inertia::render('Admin/Lessons/Create', [
            'courses' => $courses
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'cours_id' => 'required|exists:cours,id',
            'title' => 'required|string|max:255',
            'video_url' => 'required|url',
            'content' => 'nullable|string',
        ]);

        Lesson::create($request->all());

        return redirect()->route('admin.lessons.index')->with('success', 'Leçon créée avec succès.');
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
        $request->validate([
            'cours_id' => 'required|exists:cours,id',
            'title' => 'required|string|max:255',
            'video_url' => 'required|url',
            'content' => 'nullable|string',
        ]);

        $lesson->update($request->all());

        return redirect()->route('admin.lessons.index')->with('success', 'Leçon mise à jour.');
    }

    public function destroy(Lesson $lesson)
    {
        $lesson->delete();
        return redirect()->route('admin.lessons.index')->with('success', 'Leçon supprimée.');
    }
}