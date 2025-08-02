<?php

use App\Http\Controllers\AiController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ConnexionController;
use App\Http\Controllers\CoursController;
use App\Http\Controllers\HomeController;

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/categories', [CategoryController::class, 'list']);
Route::get('/cours', [CoursController::class, 'list']);

Route::get('/categories', [CategoryController::class, 'index'])->name('categories.index');
Route::get('/cours/{cours}', [CoursController::class, 'show'])->name('cours.show');
Route::get('/courses', [CoursController::class, 'index'])->name('cours.index');
Route::get('/cours/{slug}', [CoursController::class, 'show'])->name('cours.show');
Route::get('/categories/{category}', [CategoryController::class, 'show']);
Route::get('/courses', [CoursController::class, 'index'])->name('cours.index');

Route::get('/courses/{slug}', [CoursController::class, 'show'])->name('cours.show');

Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::post('/ask-ai', [AiController::class, 'ask']);
Route::get('/inscription', function () {
    return Inertia::render('Inscription');
})->name('Inscription');
Route::get('/connexion', function () {
    return Inertia::render('Connexion');
})->name('connexion');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
