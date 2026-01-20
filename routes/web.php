<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\SitemapController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Routes publiques - Site vitrine LBS
|--------------------------------------------------------------------------
*/

// Redirection de la racine vers la locale par défaut (français)
Route::get('/', function () {
    return redirect('/fr/');
});

// Routes localisées
Route::prefix('{locale}')->where(['locale' => 'fr|en'])->group(function () {
    Route::get('/', [HomeController::class, 'index'])->name('home');

    Route::controller(ContactController::class)->prefix('contact')->name('contact.')->group(function () {
        Route::get('/', 'index')->name('index');
        Route::post('/', 'store')->name('store');
    });
});

// Sitemap pour SEO (sans locale)
Route::get('/sitemap.xml', [SitemapController::class, 'index'])->name('sitemap');

/*
|--------------------------------------------------------------------------
| Routes authentifiées (conservées pour administration future)
|--------------------------------------------------------------------------
*/

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return \Inertia\Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
