<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProgressController;

Route::middleware('auth:sanctum')->post('/progress/toggle', [ProgressController::class, 'toggleLesson']);
