<?php
namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Cours;
use App\Models\Lesson;
use Illuminate\Http\Request;
use Inertia\Inertia;


class LessonAdminController extends Controller
{
    public function index()
    {
        $lessons = Lesson::with('cours')->orderBy('created_at', 'desc')->get();
        $cours = Cours::all();

        
        return Inertia::render('Admin/Lessons/LessonForm', [
            'lessons' => $lessons,
            'cours' => $cours,
            'categories' => Category::all(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Lessons/LessonForm', [
            'cours' => Cours::all(),
            // 'categories' => Category::all(),
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'cours_id' => 'required|exists:cours,id',
            'title' => 'required|string|max:255',
            'content' => 'nullable|string',
            'video_url' => 'nullable|url',
            'video_file' => 'nullable|file|mimes:mp4,mov,avi,wmv|max:200000',
        ]);

        if ($request->hasFile('video_file')) {
            $path = $request->file('video_file')->store('videos', 'public');
            $validated['video_path'] = $path;
        }

        Lesson::create($validated);

        return redirect()->route('admin.lessons.index')
            ->with('success', 'Leçon ajoutée avec succès !');
    }
}