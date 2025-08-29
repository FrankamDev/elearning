<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProfileController extends Controller
{
    public function updatePhoto(Request $request)
    {
        $request->validate([
            'photo' => 'nullable|image|max:2048'
        ]);

        $user = $request->user();

        if ($request->hasFile('photo')) {
            if ($user->photo && Storage::disk('public')->exists($user->photo)) {
                Storage::disk('public')->delete($user->photo);
            }

            $path = $request->file('photo')->store('profiles', 'public');
            $user->photo = $path;
        }

        $user->save();
return response()->json([
    'id' => $user->id,
    'name' => $user->name,
    'email' => $user->email,
    'photo' => $user->photo ? asset('storage/' .$user->photo) : null,
    'role' => $user->role,
]);
        // return back()->with('status', 'Profil mis  a jour');
    }
}
