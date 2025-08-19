<?php

namespace App\Http\Controllers;

use App\Models\Lesson;
use Inertia\Inertia;
use Illuminate\Http\Request;

class LessonController extends Controller
{
    public function index($cours_id)
    {
        $lessons = Lesson::with('cours')->where('cours_id', $cours_id)->orderBy('created_at', 'desc')->get();
        return Inertia::render('cours/Show', ['lessons' => $lessons]);
    }
}
