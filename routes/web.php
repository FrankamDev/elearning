<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
Route::get('/connexion', function () {
    return Inertia::render('Connexion');
});
Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');
Route::get('/courses', function () {
    return Inertia::render('Courses');
})->name('courses');
Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');
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

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
