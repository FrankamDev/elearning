<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Cours;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    /**
     * Affiche les utilisateurs pour le dashboard admin
     */
    public function showUser()
    {
        // Récupérer tous les utilisateurs
        $users = User::select('id', 'name', 'email', 'role', 'active', 'created_at')->get();

        // Ajouter des infos calculées côté front
        $users = $users->map(function ($user) {

            $user->stats = [
                'courses' => $user->courses()->count() ?? 0, // si relation courses existe
                'certificates' => $user->certificates()->count() ?? 0, // si relation certificates existe
                'points' => $user->points ?? 0,
            ];

            // Format date d'inscription
            $user->joined = $user->created_at->format('d/m/Y');

            return $user;
        });

        return Inertia::render('Admin/User', [
            'userss' => $users,
            'userCount' => $users->count(),
            'stats' => [
                'totalCourses' => Cours::count(),
                'totalCategories' => Category::count(),
            ],
        ]);
    }
}
