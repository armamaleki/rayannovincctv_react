<?php

use App\Models\Form;
use Illuminate\Support\Facades\Route;

Route::get('', function () {
    $forms = Form::latest()->paginate(15);
    return inertia('manager/index');
})->name('index');

Route::prefix('/users')->name('users.')->group(function () {
   Route::get('/' , [\App\Http\Controllers\Manager\UserController::class , 'index'])->name('index');
});
