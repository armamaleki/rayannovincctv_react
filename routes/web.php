<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Client\ArticleController;
use App\Http\Controllers\Client\ProductCategoryController;
use App\Http\Controllers\Client\StoreController;
use App\Http\Controllers\Client\WarrantyRegistrationController;
use App\Models\Application;
use App\Models\PriceList;
use App\Models\Tag;
use Illuminate\Support\Facades\Route;

Route::prefix('/')->name('client.')->group(function () {
    Route::prefix('/')->name('store.')->group(function () {
        Route::get('/store', [StoreController::class, 'index'])->name('index');
        Route::get('/store/{product}', [StoreController::class, 'show'])->name('show');
    });
    Route::prefix('/product-categories')->name('product-categories.')->group(function () {
        Route::get('/', [ProductCategoryController::class, 'index'])->name('index');
        Route::get('/{slug}', [ProductCategoryController::class, 'show'])->name('show');
    });

    Route::prefix('/articles')->name('articles.')->group(function () {
        Route::get('/', [ArticleController::class, 'index'])->name('index');
        Route::get('/{article}', [ArticleController::class, 'show'])->name('show');
    });

    Route::get('cctv-camera-image-quality', function () {
        return inertia('client/cctv-camera-image-quality');
    })->name('cctv-camera-image-quality');

    Route::get('/nasb-doorbin-madarbaste', function () {
        return inertia('client/nasb-doorbin-madarbaste');
    })->name('nasb-doorbin-madarbaste');

    Route::get('/disk-calculator', function () {
        return inertia('client/calculator');
    })->name('calculator');

    Route::prefix('/warranty-registration')->name('warranty-registration.')->group(function () {
        Route::get('/', [WarrantyRegistrationController::class, 'index'])->name('index');
        Route::post('/store', [WarrantyRegistrationController::class, 'store'])->name('store');
    });

    Route::get('/applications', function () {
        $applications = Application::where('status', 'active')->latestUpdated()->get();
        $tags = Tag::all();

        return inertia('client/applications');
    })->name('applications');

    Route::get('/price-list', function () {
        $price_lists = PriceList::where('status', 'active')->latestUpdated()->get();
        $tags = Tag::all();

        return inertia('client/price-list');
    })->name('price-list');
});

Route::inertia('/', 'welcome')->name('home');

Route::prefix('/dashboard')->middleware(['auth', 'verified'])->group(function () {
//    Route::get('/', DashboardController::class)->name('index');
});

Route::get('/login', [AuthController::class, 'index'])->name('login')->middleware('guest');
Route::post('/login', [AuthController::class, 'store'])->name('login.store');
Route::post('/login/verify', [AuthController::class, 'verify'])->name('login.verify');

Route::middleware('auth')->group(function () {
    Route::post('logout', [AuthController::class, 'destroy'])->name('logout');
});

require __DIR__.'/settings.php';
