<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\CategoryAdminController;
use App\Http\Controllers\Admin\CourseAdminController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\DashboardUsers;
use App\Http\Controllers\Admin\LessonAdminController;
use App\Http\Controllers\AiController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ConnexionController;
use App\Http\Controllers\CoursController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



Route::get('/', [HomeController::class, 'index'])->name('home');


Route::get('/categories', [CategoryController::class, 'index']);


Route::get('/category/{category}', [CategoryController::class, 'show'])->name('categories.show');


Route::get('/cours', [CoursController::class, 'index'])->name('cours.index');


Route::get('/cours/{slug}', [CoursController::class, 'show'])->name('cours.show');


Route::get('/contact', fn() => Inertia::render('Contact'))->name('contact');


Route::get('/inscription', fn() => Inertia::render('Inscription'))->name('inscription');
Route::get('/connexion', fn() => Inertia::render('Connexion'))->name('connexion');

Route::post('/ask-ai', [AiController::class, 'ask']);



//user Admin
// Route::middleware(['auth', 'verified'])->get('/dashboard', function () {
//     return Inertia::render('dashboard');
// })->name('dashboard');
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', [DashboardUsers::class, 'index'])->name('dashboard');
    Route::get('/user', fn () => Inertia::render('settings/profile'))->name('profile.edit');
    Route::resource('lessons', LessonAdminController::class);
    Route::resource('category', CategoryController::class);
    Route::resource('cours', CourseAdminController::class);
});




//super admin
Route::middleware(['auth', 'admin'])->prefix('admin')->name('admin.')->group(function () {

    Route::get('/', [DashboardController::class, 'index'])->name('admin.dashboard');
        Route::resource('lessons', LessonAdminController::class);
    Route::resource('category', CategoryAdminController::class);
    Route::resource('cours', CourseAdminController::class);


    Route::resource('/cours', CourseAdminController::class);
    Route::get('/dashboard-old', [AdminController::class, 'index']);
});


require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
