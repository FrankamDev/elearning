<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Lesson;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, Lesson $lesson)
    {
        $request->validate([
            'content' => 'required|string|max:1000',
            // 'user_id' => auth()->id(),
            'parent_id' => 'nullable|exists:comments,id',
        ]);

        $lesson->comments()->create([
            'content' => $request->content,
            'user_id' => auth()->id(),
            'parent_id' => $request->parent_id,
        ]);

        return back();
    }
    public function like(Comment $comment)
    {
        $userId = auth()->id();

        $like = $comment->likes()->where('user_id', $userId)->first();

        if ($like) {
            $like->delete();
        } else {
            $comment->likes()->create(['user_id' => $userId]);
        }

        return back();
    }



    /**
     * Display the specified resource.
     */
    public function show(Comment $comment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Comment $comment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Comment $comment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Comment $comment)
    {
        //
    }
}
