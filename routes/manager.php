<?php

use App\Http\Controllers\Manager\ApplicationController;
use App\Http\Controllers\Manager\ArticleController;
use App\Http\Controllers\Manager\AttributeController;
use App\Http\Controllers\Manager\GraniteController;
use App\Http\Controllers\Manager\OrderController;
use App\Http\Controllers\Manager\PriceListController;
use App\Http\Controllers\Manager\ProductCategoryController;
use App\Http\Controllers\Manager\ProductController;
use App\Http\Controllers\Manager\RoleController;
use App\Http\Controllers\Manager\TagController;
use App\Http\Controllers\Manager\UserController;
use App\Http\Controllers\Manager\ValueController;
use App\Models\Form;
use Carbon\Carbon;
use Illuminate\Support\Facades\Route;

Route::get('', function () {
    $forms = Form::latest()->paginate(15);

    return inertia('manager/index');
})->name('index');

Route::prefix('/users')->name('users.')->group(function () {
    Route::get('/', [UserController::class, 'index'])->name('index');
    Route::get('/{user}', [UserController::class, 'show'])->name('show');
    Route::get('/{user}/edit', [UserController::class, 'edit'])->name('edit');
    Route::put('/{user}/update', [UserController::class, 'update'])->name('update');
});

Route::prefix('role')->name('role.')->group(function () {
    Route::get('/', [RoleController::class, 'index'])->name('index');
    Route::get('/create', [RoleController::class, 'create'])->name('create');
    Route::post('/store', [RoleController::class, 'store'])->name('store');
    Route::get('/edit/{role}', [RoleController::class, 'edit'])->name('edit');
    Route::put('/update/{role}', [RoleController::class, 'update'])->name('update');
});

Route::prefix('article')->name('article.')->group(function () {
    Route::get('/', [ArticleController::class, 'index'])->name('index');
    Route::get('/create', [ArticleController::class, 'create'])->name('create');
    Route::post('/store', [ArticleController::class, 'store'])->name('store');
    Route::get('/edit/{article}', [ArticleController::class, 'edit'])->name('edit');
    Route::put('/update/{article}', [ArticleController::class, 'update'])->name('update');
    Route::post('/article/avatar/', [ArticleController::class, 'avatar'])->name('avatar');

});

Route::prefix('value')->name('value.')->group(function () {
    Route::get('/', [ValueController::class, 'index'])->name('index');
    Route::get('/create', [ValueController::class, 'create'])->name('create');
    Route::post('/store', [ValueController::class, 'store'])->name('store');
    Route::get('/edit/{value}', [ValueController::class, 'edit'])->name('edit');
    Route::put('/update/{value}', [ValueController::class, 'update'])->name('update');
});

Route::prefix('attribute')->name('attribute.')->group(function () {
    Route::get('/', [AttributeController::class, 'index'])->name('index');
    Route::get('/create', [AttributeController::class, 'create'])->name('create');
    Route::post('/store', [AttributeController::class, 'store'])->name('store');
    Route::get('/edit/{attribute}', [AttributeController::class, 'edit'])->name('edit');
    Route::put('/update/{attribute}', [AttributeController::class, 'update'])->name('update');

    Route::post('/values', [AttributeController::class, 'getValues'])->name('value');
});

Route::prefix('product')->name('product.')->group(function () {
    Route::get('/', [ProductController::class, 'index'])->name('index');
    Route::get('/create', [ProductController::class, 'create'])->name('create');
    Route::post('/store', [ProductController::class, 'store'])->name('store');
    Route::get('/edit/{product}', [ProductController::class, 'edit'])->name('edit');
    Route::put('/update/{product}', [ProductController::class, 'update'])->name('update');
    Route::post('/product/avatar/', [ProductController::class, 'avatar'])->name('avatar');
    Route::post('/product/gallery/', [ProductController::class, 'gallery'])->name('gallery');
    Route::delete('/product/media/{media}', [ProductController::class, 'deleteAvatar'])->name('delete-avatar');
    Route::delete('/product/gallery/{media}', [ProductController::class, 'deleteGallery'])->name('delete-gallery');
    Route::post('/{product}/data-sheet', [ProductController::class, 'dataSheet'])->name('data-sheet');
});

Route::prefix('product-categories')->name('product-categories.')->group(function () {
    Route::get('/', [ProductCategoryController::class, 'index'])->name('index');
    Route::get('/create', [ProductCategoryController::class, 'create'])->name('create');
    Route::post('/store', [ProductCategoryController::class, 'store'])->name('store');
    Route::get('/edit/{productCategory}', [ProductCategoryController::class, 'edit'])->name('edit');
    Route::put('/update/{productCategory}', [ProductCategoryController::class, 'update'])->name('update');
    Route::post('/product/avatar/', [ProductCategoryController::class, 'avatar'])->name('avatar');
});

Route::prefix('granite')->name('granite.')->group(function () {
    Route::get('/', [GraniteController::class, 'index'])->name('index');
    Route::get('/create', [GraniteController::class, 'create'])->name('create');
    Route::post('/store', [GraniteController::class, 'store'])->name('store');
    Route::get('/edit/{granite}', [GraniteController::class, 'edit'])->name('edit');
    Route::put('/update/{granite}', [GraniteController::class, 'update'])->name('update');
});

Route::prefix('application')->name('application.')->group(function () {
    Route::get('/', [ApplicationController::class, 'index'])->name('index');
    Route::get('/create', [ApplicationController::class, 'create'])->name('create');
    Route::post('/store', [ApplicationController::class, 'store'])->name('store');
    Route::get('/edit/{application}', [ApplicationController::class, 'edit'])->name('edit');
    Route::put('/update/{application}', [ApplicationController::class, 'update'])->name('update');
    Route::post('/avatar', [ApplicationController::class, 'avatar'])->name('avatar');

});

Route::prefix('price-list')->name('price-list.')->group(function () {
    Route::get('/', [PriceListController::class, 'index'])->name('index');
    Route::get('/create', [PriceListController::class, 'create'])->name('create');
    Route::post('/store', [PriceListController::class, 'store'])->name('store');
    Route::get('/edit/{priceList}', [PriceListController::class, 'edit'])->name('edit');
    Route::put('/update/{priceList}', [PriceListController::class, 'update'])->name('update');
    Route::post('/{priceList}/price_list', [PriceListController::class, 'price_list'])->name('price_list');
    Route::post('/avatar', [PriceListController::class, 'avatar'])->name('avatar');

});

Route::prefix('tags')->name('tags.')->group(function () {
    Route::get('/', [TagController::class, 'index'])->name('index');
    Route::get('/create', [TagController::class, 'create'])->name('create');
    Route::post('/store', [TagController::class, 'store'])->name('store');
    Route::get('/edit/{tag}', [TagController::class, 'edit'])->name('edit');
    Route::put('/update/{tag}', [TagController::class, 'update'])->name('update');
});

Route::get('/orders', [OrderController::class, 'index'])->name('orders.index');

Route::post('/image-uploader', function (Request $request) {
    $request->validate([
        'upload' => 'required|image|mimes:jpg,jpeg,png,bmp,gif,svg,webp|max:2048',
    ]);
    $name = $request->upload->getClientOriginalName();
    $now = Carbon::now()->format('Y-m-d');
    $path = $request->file('upload')->store('images/'.$now, 'public');

    return response()->json(['fileName' => $name, 'uploaded' => 1, 'url' => '/storage/'.$path]);
})->name('imageUploader');
