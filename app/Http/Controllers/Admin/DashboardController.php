<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Cours;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{


    //     public function index()
    //    {

    //     if (auth()->user()?->email === 'frankam@gmail.com') {

    //             $users = User::select('name', 'email')->get();
    //             $userCount = User::count();
    //             return Inertia::render('dashboard', [
    //                 'userCount' => $userCount,
    //                 'users' => $users,
    //                 'stats' => [
    //                     'totalCourses' => Cours::count(),
    //                     'totalcategories' => Category::count(),
    //                 ]
    //             ]);
    //         }
    //         return redirect()->route('admin.dashboard')->with('error', 'Accès réservé aux admins.');
    //     }
    //     public function showUser()
    //     {
    //         $users = User::select('name', 'email')->get();
    //         $userCount = User::count();
    //         return Inertia::render('Admin/User', [
    //             'user' => auth()->user(),
    //             'userCount' => $userCount,
    //             'userss' => $users,
    //             'stats' => [
    //                 'totalCourses' => Cours::count(),
    //                 'totalcategories' => Category::count(),
    //             ]
    //         ]);
    //     }
    // }

    public function showUser()
    {
        // Charge tous les utilisateurs avec les champs nécessaires
        // $users = User::select('id', 'name', 'email', 'avatar', 'role', 'active', 'created_at')->get();
        $users = User::select('id', 'name', 'email', 'created_at')->get();

        // Récupérer les stats par utilisateur, ici exemple statique ou relation (à adapter)
        // Exemple : tu peux faire une relation "stats" sur User (courses, certificates, points)
        // Ici, on simule pour chaque user un tableau de stats
        $users = $users->map(function ($user) {
            // Exemple : récupérer le nombre de cours, certificats et points d'un user
            // Remplace par ta logique réelle, ici statique pour démo
            $user->stats = [
                // 'courses' => Cours()->count() ?? 0,
                // 'certificates' => $user->certificates()->count() ?? 0,
                // 'points' => $user->points ?? 0,
            ];

            // Format date d'inscription lisible
            $user->joined = $user->created_at->format('d/m/Y');

            return $user;
        });

        return Inertia::render('Admin/User', [
            'usersData' => $users,
            'userCount' => $users->count(),
            'stats' => [
                'totalCourses' => Cours::count(),
                'totalCategories' => Category::count(),
            ]
        ]);
}
}