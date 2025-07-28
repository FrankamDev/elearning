<?php

use App\Http\Controllers\AiController;
use App\Http\Controllers\ConnexionController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\Settings\ProfileController;
use App\Models\Connexion;
use App\Models\Home;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/connexion', [ConnexionController::class, 'index'])->name('connexion');

Route::get('/courses', function () {
    return Inertia::render('courses/Index');
});
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
