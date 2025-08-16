<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\CategoryAdminController;
use App\Http\Controllers\Admin\CourseAdminController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\DashboardUsers;
use App\Http\Controllers\Admin\LessonAdminController;
use App\Http\Controllers\Admin\UserAdminController;
use App\Http\Controllers\AiController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ConnexionController;
use App\Http\Controllers\CoursController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;




use Illuminate\Support\Facades\Auth;




Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/cours', [CoursController::class, 'index'])->name('cours.index');
Route::get('/cours/{slug}', [CoursController::class, 'show'])->name('cours.show');

Route::get('/categories', [CategoryController::class, 'index']);
Route::get('/category/{category}', [CategoryController::class, 'show'])->name('categories.show');

Route::get('/contact', fn() => Inertia::render('Contact'))->name('contact');
Route::get('/inscription', fn() => Inertia::render('Inscription'))->name('inscription');
Route::get('/connexion', fn() => Inertia::render('Connexion'))->name('connexion');

Route::post('/ask-ai', [AiController::class, 'ask']);

// --------------------------
// Authenticated User Routes
// --------------------------
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', [DashboardUsers::class, 'index'])->name('dashboard');
    Route::get('/user', fn() => Inertia::render('settings/profile'))->name('profile.edit');

    Route::resource('lessons', LessonAdminController::class)->except(['create', 'store']);
    Route::resource('category', CategoryController::class);
    Route::resource('cours', CourseAdminController::class);
});

// --------------------------
// Admin Routes
// --------------------------
Route::middleware(['auth', 'admin'])->prefix('admin')->name('admin.')->group(function () {

    // Dashboard
    Route::get('/', [DashboardController::class, 'index'])->name('dashboard');

    // Leçons
    Route::resource('lessons', LessonAdminController::class);
    Route::get('/lessons/create/{cours? }', [LessonAdminController::class, 'create'])->name('lessons.create');
    Route::post('/lessons/store', [LessonAdminController::class, 'store'])->name('lessons.store');

    // Catégories
    Route::resource('category', CategoryAdminController::class);

    // Cours
    Route::get("/cours", [CourseAdminController::class, "index"])->name('cours.index');
    Route::post("/cours", [CourseAdminController::class, "store"])->name('cours.store');
    Route::put("/cours/{cour}", [CourseAdminController::class, "update"])->name('cours.update');
    Route::delete("/cours/{cour}", [CourseAdminController::class, "destroy"])->name('cours.destroy');

    // Gestion des utilisateurs
    Route::get('/users', [UserAdminController::class, 'index'])->name('users.index');
    Route::post('/users', [UserAdminController::class, 'store'])->name('users.store');
    Route::put('/users/{id}', [UserAdminController::class, 'update'])->name('users.update');
    Route::delete('/users/{id}', [UserAdminController::class, 'destroy'])->name('users.destroy');
    Route::post('/users/{id}/role', [UserAdminController::class, 'updateRole'])->name('users.updateRole');

    // Ancien dashboard
    Route::get('/dashboard-old', [AdminController::class, 'index']);
});




Route::post('/toggle-role', function () {
    $user = Auth::user();

    if ($user->email !== 'frankam@gmail.com') {
        abort(403, 'Accès interdit');
    }

    // Ici, on bascule le rôle
    $user->role = $user->role === 'superadmin' ? 'user' : 'superadmin';
    $user->save();

    return redirect()->back();
})->middleware('auth');

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
