<?php

use App\Http\Controllers\ProgressController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->post('/progress/toggle', [ProgressController::class, 'toggleLesson']);
