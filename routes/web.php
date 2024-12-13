<?php

use App\Http\Controllers\ExamController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// landing page 
Route::get('/', function () {
    return Inertia::render('LandingPage');
});
Route::get('/siswa/dashboard', function () {
    return Inertia::render('Siswa/Dashboard');
});
Route::get('/exam', function () {
    return Inertia::render('ExamInterface');
});

Route::get('/ujian/utbk', function () {
    return Inertia::render('Ujian/Utbk');
});





Route::get('/s', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';


Route::get('/exam/{category}', [ExamController::class, 'detailPageExam'])->name('exam.detailPageExam');
