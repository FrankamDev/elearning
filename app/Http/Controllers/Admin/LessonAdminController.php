<?php
namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Lesson;
use App\Models\Cours;
use Illuminate\Http\Request;

class LessonAdminController extends Controller
{
    public function index()
    {
        $lessons = Lesson::with('cours')->get();
        $cours = Cours::all();

        return response()->json([
            'lessons' => $lessons,
            'cours' => $cours,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'cours_id' => 'required|exists:cours,id',
            'title' => 'required|string|max:255',
            'content' => 'nullable|string',
            'video_file' => 'nullable|file|mimes:mp4,mov,mkv,avi,wmv|max:102400',
        ]);

        if ($request->hasFile('video_file')) {
            $validated['video_path'] = $request->file('video_file')->store('videos', 'public');
        }

        Lesson::create($validated);

        return redirect()->back()->with('success', 'Leçon ajoutée avec succès !');
    }
}