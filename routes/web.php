<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::get('/courses', function () {
    return Inertia::render('Courses');
});

Route::get('/courses/{slug}', function ($slug) {
    return Inertia::render('CourseDetail', ['slug' => $slug]);
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
