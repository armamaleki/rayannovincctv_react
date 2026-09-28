<?php

use App\Http\Controllers\Client\ProductCategoryController;
use App\Http\Controllers\Client\StoreController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\Teams\TeamInvitationController;
use App\Http\Middleware\EnsureTeamMembership;
use Illuminate\Support\Facades\Route;

Route::prefix('/')->name('client.')->group(function () {
    Route::prefix('/')->name('store.')->group(function () {
        Route::get('/store', [StoreController::class, 'index'])->name('index');
    });
    Route::prefix('/product-categories')->name('product-categories.')->group(function () {
        Route::get('/', [ProductCategoryController::class, 'index'])->name('index');
        Route::get('/{slug}', [ProductCategoryController::class, 'show'])->name('show');
    });
    Route::get('/applications', function () {
        $applications = \App\Models\Application::where('status' , 'active')->latestUpdated()->get();
        $tags = \App\Models\Tag::all();
        return inertia('client/applications');
    })->name('applications');

    Route::get('/price-list', function () {
        $price_lists = \App\Models\PriceList::where('status' , 'active')->latestUpdated()->get();
        $tags = \App\Models\Tag::all();
        return inertia('client/price-list');
    })->name('price-list');
});

Route::inertia('/', 'welcome')->name('home');

Route::prefix('{current_team}')
    ->middleware(['auth', 'verified', EnsureTeamMembership::class])
    ->group(function () {
        Route::get('dashboard', DashboardController::class)->name('dashboard');
    });

Route::middleware(['auth'])->group(function () {
    Route::post('invitations/{invitation}/accept', [TeamInvitationController::class, 'accept'])->name('invitations.accept');
    Route::delete('invitations/{invitation}', [TeamInvitationController::class, 'decline'])->name('invitations.decline');
});

require __DIR__.'/settings.php';
