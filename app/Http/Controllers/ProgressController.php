<?php

namespace App\Http\Controllers;

use App\Models\Progress;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProgressController extends Controller
{
    public function toggleLesson(Request $request)
    {
        $user = Auth::user();
        $lessonId = $request->lesson_id;

        $progress = Progress::where('user_id', $user->id)
            ->where('lesson_id', $lessonId)
            ->first();

        if ($progress) {
            // Inverse l'état
            $progress->is_completed = !$progress->is_completed;
            $progress->completed_at = $progress->is_completed ? now() : null;
            $progress->save();
        } else {
            $progress = Progress::create([
                'user_id' => $user->id,
                'lesson_id' => $lessonId,
                'is_completed' => true,
                'completed_at' => now(),
            ]);
        }

        return response()->json(['success' => true, 'is_completed' => $progress->is_completed]);
    }
}
