<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{
   public function index()
   {

    if (auth()->user()?->email === 'frankam@gmail.com') {
        $users = User::select('name', 'email')->get();
            return Inertia::render('Admin/Dashboard', [
                'userCount' => User::count(),
                'users' => $users,
            ]);
    }
    return redirect()->route('/Admin/Dashboard')->with('error', 'Accès réservé aux admins.');

}
}
