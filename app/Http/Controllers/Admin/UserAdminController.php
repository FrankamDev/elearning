<?php

// namespace App\Http\Controllers\Admin;

// use App\Http\Controllers\Controller;
// use App\Models\User;
// use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Hash;
// use Inertia\Inertia;

// class UserAdminController extends Controller
// {
//     public function index()
//     {
//         Inertia::share('csrf_token', csrf_token());

//         $users = User::select('id', 'name', 'email', 'role', 'created_at')->get();

//         return Inertia::render('Admin/User', [
//             'users' => $users
//         ]);
//     }

//     public function store(Request $request)
//     {
//         $request->validate([
//             'name'     => 'required|string|max:255',
//             'email'    => 'required|email|unique:users,email',
//             'role'     => 'required|in:user,admin,superadmin',
//             'password' => 'required|string|min:8|confirmed',
//         ]);

//         User::create([
//             'name'     => $request->name,
//             'email'    => $request->email,
//             'role'     => $request->role,
//             'password' => Hash::make($request->password),

//         ]);

//         $users = User::select('id', 'name', 'email', 'role', 'created_at')->get();

//         return Inertia::render('Admin/User', [
//             'users' => $users,
//         ])->with('success', 'Utilisateur ajouté avec succès.');
//     }

//     public function updateRole(Request $request, $id)
//     {
//         $request->validate([
//             'role' => 'required|in:user,admin,superadmin',
//         ]);

//         $user = User::findOrFail($id);
//         $user->role = $request->role;
//         $user->save();

//         return redirect()
//             ->route('admin.users.index')
//             ->with('success', 'Rôle de l’utilisateur mis à jour avec succès.');
//     }

//     public function update(Request $request, $id)
//     {
//         $user = User::findOrFail($id);

//         $request->validate([
//             'name'     => 'required|string|max:255',
//             'email'    => "required|email|unique:users,email,$id",
//             'role'     => 'required|in:user,admin,superadmin',
//             'password' => 'nullable|string|min:8|confirmed',
//         ]);

//         $user->name  = $request->name;
//         $user->email = $request->email;
//         $user->role  = $request->role;

//         if ($request->filled('password')) {
//             $user->password = Hash::make($request->password);
//         }

//         $user->save();

//         return redirect()
//             ->route('admin.users.index')
//             ->with('success', 'Utilisateur mis à jour avec succès.');
//     }

//     public function destroy($id)
//     {
//         $user = User::findOrFail($id);

//         if (auth()->id() === $user->id) {
//             return redirect()
//                 ->route('admin.users.index')
//                 ->with('error', 'Vous ne pouvez pas supprimer votre propre compte.');
//         }

//         $user->delete();

//         return redirect()
//             ->route('admin.users.index')
//             ->with('success', 'Utilisateur supprimé avec succès.');
//     }
// }

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class UserAdminController extends Controller
{
    // Affichage de la liste
    public function index()
    {
        $users = User::select('id', 'name', 'email', 'role', 'created_at')->get();

        return Inertia::render('Admin/User', [
            'users' => $users,
            'flash' => [
                'success' => session('success'),
                'error'   => session('error'),
            ],
        ]);
    }

    // Création d'un utilisateur
    public function store(Request $request)
    {
        $request->validate([
            'name'     => 'required|string|max:255',
            'email'    => 'required|email|unique:users,email',
            'role'     => 'required|in:user,admin,superadmin',
            'password' => 'required|string|min:8|confirmed',
        ]);

        User::create([
            'name'     => $request->name,
            'email'    => $request->email,
            'role'     => $request->role,
            'password' => Hash::make($request->password),
        ]);

        // Retourner la liste mise à jour avec Inertia
        return redirect()->route('admin.users.index')
            ->with('success', 'Utilisateur ajouté avec succès.');
    }

    // Mise à jour d'un utilisateur
    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);

        $request->validate([
            'name'     => 'required|string|max:255',
            'email'    => "required|email|unique:users,email,$id",
            'role'     => 'required|in:user,admin,superadmin',
            'password' => 'nullable|string|min:8|confirmed',
        ]);

        $user->name  = $request->name;
        $user->email = $request->email;
        $user->role  = $request->role;

        if ($request->filled('password')) {
            $user->password = Hash::make($request->password);
        }

        $user->save();

        // Retourner la liste mise à jour via Inertia pour React
        return Inertia::render('Admin/User', [
            'users' => User::select('id', 'name', 'email', 'role', 'created_at')->get(),
            'flash' => [
                'success' => 'Utilisateur mis à jour avec succès.',
            ],
        ]);
    }

    // Suppression d'un utilisateur
    public function destroy($id)
    {
        $user = User::findOrFail($id);

        if (auth()->id() === $user->id) {
            return redirect()->back()->with('error', 'Vous ne pouvez pas supprimer votre propre compte.');
        }

        $user->delete();

        // Retourner la liste mise à jour via Inertia
        return Inertia::render('Admin/User', [
            'users' => User::select('id', 'name', 'email', 'role', 'created_at')->get(),
            'flash' => [
                'success' => 'Utilisateur supprimé avec succès.',
            ],
        ]);
    }
}
