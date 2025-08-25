<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\CategoryAdminController;
use App\Http\Controllers\Admin\CourseAdminController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\DashboardUsers;
use App\Http\Controllers\Admin\LessonAdminController;
use App\Http\Controllers\LessonsController;
use App\Http\Controllers\Admin\UserAdminController;
use App\Http\Controllers\AiController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\CoursController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\InitiationController;
use App\Http\Controllers\LessonController;
use App\Http\Controllers\ParcoursController;
use App\Http\Controllers\Settings\ProfileController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::post('/lessons/{lesson}/comments', [CommentController::class, 'store'])
    ->middleware('auth')
    ->name('comments.store');

Route::post('/lessons/{lesson}/comments', [CommentController::class, 'store'])->middleware('auth')->name('comments.store');
Route::post('/comments/{comment}/like', [CommentController::class, 'like'])->middleware('auth')->name('comments.like');

Route::get('/parcours', [ParcoursController::class, 'index']);
Route::get('/initiation', function () {
    return Inertia::render('Initiation');
});



Route::middleware(['auth'])->group(function () {
    Route::post('/lessons/{lesson}/comments', [CommentController::class, 'store'])->name('comments.store');
    Route::put('/comments/{comment}', [CommentController::class, 'update'])->name('comments.update');
    Route::delete('/comments/{comment}', [CommentController::class, 'destroy'])->name('comments.destroy');
    Route::post('/comments/{comment}/like', [CommentController::class, 'like'])->name('comments.like');

    Route::post('/profile/update', [ProfileController::class, 'updatePhoto'])->name('profile.update')->middleware('auth');

    // Route::post('/user/profile-picture', [ProfileController::class, 'updatePhoto'])->name('profile.photo');
});


Route::get('/admin/lessons/{cours}', [LessonAdminController::class, 'index']);
// Route::get('/cours/{cours_id}/lessons', [LessonController::class, 'index']);
Route::get('/cours/{cours_id}', [LessonController::class, 'index'])->name('cours.show');
Route::get('/contact', fn() => Inertia::render('Contact'))->name('contact');
Route::post('/contact', [ContactController::class, 'store']);

Route::get('/admin/contacts', [ContactController::class, 'index']);

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/cours', [CoursController::class, 'index'])->name('cours.index');
Route::get('/cours/{slug}', [CoursController::class, 'show'])->name('cours.show');

Route::get('/categories', [CategoryController::class, 'index']);
Route::get('/category/{category}', [CategoryController::class, 'show'])->name('categories.show');

Route::get('/contact', fn() => Inertia::render('Contact'))->name('contact');
Route::get('/inscription', fn() => Inertia::render('Inscription'))->name('inscription');
Route::get('/connexion', fn() => Inertia::render('Connexion'))->name('connexion');

Route::post('/ask-ai', [AiController::class, 'ask']);
// Route::post('/contact', [ContactController::class, 'store']);
// --------------------------
// Authenticated User Routes
// --------------------------
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', [DashboardUsers::class, 'index'])->name('dashboard');
    Route::get('/user', fn() => Inertia::render('settings/profile'))->name('profile.edit');

    Route::resource('lessons', LessonAdminController::class);
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

    // Cours
    Route::resource('cours', CourseAdminController::class);

    // Catégories
    Route::resource('category', CategoryAdminController::class);

    // Utilisateurs
    Route::resource('users', UserAdminController::class);


    // Catégories
    Route::resource('category', CategoryAdminController::class);




    Route::get('/dashboard-old', [AdminController::class, 'index']);
});

Route::get('/dashboard-old', [AdminController::class, 'index']);

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
