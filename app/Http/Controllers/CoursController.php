<?php

namespace App\Http\Controllers;

use App\Models\Cours;
// use Illuminate\Container\Attributes\Auth;
use Illuminate\Support\Facades\Auth;

use Illuminate\Http\Request;
use Inertia\Inertia;

class CoursController extends Controller
{


public function list()
{
    $cours = Cours::with('category')->latest()->get();

    return Inertia::render('cours/List', [
        'cours' => $cours
    ]);
}




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
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Cours $cours)
    {
         $cours->load('lessons');

    $user = Auth::user();

    $progress = [];

    if ($user) {
        $progress = $user->progress()
            ->whereIn('lesson_id', $cours->lessons->pluck('id'))
            ->pluck('is_completed', 'lesson_id')
            ->toArray();
    }

    return Inertia::render('cours/Show', [
        'cours' => $cours,
        'userProgress' => $progress,
    ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
