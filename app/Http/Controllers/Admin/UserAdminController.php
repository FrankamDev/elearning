<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserAdminController extends Controller
{
    // Liste des utilisateurs
    public function index()
    {
        $users = User::select('id', 'name', 'email', 'role', 'created_at')->get();

        return response()->json([
            'users' => $users,
        ]);
    }

    // Ajouter un utilisateur
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'role' => 'required|in:user,admin,superadmin',
            'password' => 'required|string|min:8|confirmed',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'role' => $request->role,
            'password' => Hash::make($request->password),
        ]);

        $users = User::select('id', 'name', 'email', 'role', 'created_at')->get();

        return response()->json([
            'message' => 'Utilisateur ajouté avec succès.',
            'users' => $users,
        ]);
    }

    // Mettre à jour un utilisateur
    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);

        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => "required|email|unique:users,email,$id",
            'role' => 'required|in:user,admin,superadmin',
            'password' => 'nullable|string|min:8|confirmed',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $user->name = $request->name;
        $user->email = $request->email;
        $user->role = $request->role;

        if ($request->filled('password')) {
            $user->password = Hash::make($request->password);
        }

        $user->save();

        $users = User::select('id', 'name', 'email', 'role', 'created_at')->get();

        return response()->json([
            'message' => 'Utilisateur mis à jour avec succès.',
            'users' => $users,
        ]);
    }

    // Supprimer un utilisateur
    public function destroy($id)
    {
        $user = User::findOrFail($id);

        if (auth()->id() === $user->id) {
            return response()->json([
                'error' => 'Vous ne pouvez pas supprimer votre propre compte.',
            ], 403);
        }

        $user->delete();

        $users = User::select('id', 'name', 'email', 'role', 'created_at')->get();

        return response()->json([
            'message' => 'Utilisateur supprimé avec succès.',
            'users' => $users,
        ]);
    }
}
