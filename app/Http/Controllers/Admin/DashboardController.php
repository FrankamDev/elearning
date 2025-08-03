<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{
   public function index()
{
    if (!auth()->user()?->is_admin) {
        return redirect()->route('dashboard')->with('error', 'Accès réservé aux admins.');
    }

    return Inertia::render('Admin/Dashboard');
}
}
