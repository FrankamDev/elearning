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

        $users = User::select('id', 'name', 'email', 'created_at')->get();

        $users = $users->map(function ($user) {

            $user->stats = [
                // 'courses' => Cours()->count() ?? 0,
                // 'certificates' => $user->certificates()->count() ?? 0,
                // 'points' => $user->points ?? 0,
            ];


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