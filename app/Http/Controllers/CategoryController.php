<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    public function list() {
        $categories = Category::withCount('cours')->get();

    return Inertia::render('Header', [
        'categories' => $categories
    ]);
    }
    public function index()
    {
          $categories = \App\Models\Category::withCount('cours')->get();


    return Inertia::render('category/Index', [
        'categories' => $categories,
    ]);
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
    $validated = $request->validate([
        'name' => 'required|string|max:255',
        'image' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
    ]);

    if ($request->hasFile('image')) {
        $validated['image'] = $request->file('image')->store('categories', 'public');
    }

    Category::create($validated);



        return redirect()->route('admin.category.index');
}

    // public function store(Request $request)
    // {
    //     $validated = $request->validate([
    //         'name' => 'required|string|max:255',
    //         'image' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
    //     ]);

    //     if ($request->hasFile('image')) {
    //         $validated['image'] = $request->file('image')->store('categories', 'public');
    //     }

    //     Category::create($validated);

    //     return redirect()->route('category.index');
    // }


    /**
     * Display the specified resource.
     */
    public function show(Category $category)
    {
        $category->load('cours');
        return Inertia::render('category/Show', [
            'category' => $category,

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
   public function update(Request $request, Category $category)
{
    $validated = $request->validate([
        'name' => 'required|string|max:255',
        'image' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
    ]);

    if ($request->hasFile('image')) {
        $validated['image'] = $request->file('image')->store('categories', 'public');
    }

    $category->update($validated);

    return redirect()->route('admin.category.index');
}


    /**
     * Remove the specified resource from storage.
     */
   public function destroy(Category $category)
{
    $category->delete();

    return redirect()->route('admin.category.index')->with('success', 'Catégorie supprimée');
}
}
