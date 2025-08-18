<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Cours;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class CourseAdminController extends Controller
{
    public function index()
    {
        $cours = Cours::with('category')->get();
        $categories = Category::all();

        return response()->json([
            'cours' => $cours,
            'categories' => $categories,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255|unique:cours,title',
            'category_id' => 'required|exists:categories,id',
            'description' => 'nullable|string',
        ]);

        $slug = Str::slug($request->title);
        $originalSlug = $slug;
        $counter = 1;
        while (Cours::where('slug', $slug)->exists()) {
            $slug = $originalSlug . '-' . $counter++;
        }

        $cours = Cours::create([
            'title' => $request->title,
            'category_id' => $request->category_id,
            'description' => $request->description ?? '',
            'slug' => $slug,
            'user_id' => Auth::id(),
        ]);

        $cours->load('category');

        return response()->json(['cours' => $cours]);
    }

    public function update(Request $request, Cours $cour)
    {
        $request->validate([
            'title' => 'required|string|max:255|unique:cours,title,' . $cour->id,
            'category_id' => 'required|exists:categories,id',
            'description' => 'nullable|string',
        ]);

        $slug = Str::slug($request->title);
        if ($slug !== $cour->slug) {
            $originalSlug = $slug;
            $counter = 1;
            while (Cours::where('slug', $slug)->where('id', '!=', $cour->id)->exists()) {
                $slug = $originalSlug . '-' . $counter++;
            }
        }

        $cour->update([
            'title' => $request->title,
            'category_id' => $request->category_id,
            'description' => $request->description ?? '',
            'slug' => $slug,
        ]);

        $cour->load('category');

        return response()->json(['cours' => $cour]);
    }

    public function destroy(Cours $cour)
    {
        $cour->delete();

        return response()->json(['id' => $cour->id]);
    }
}
