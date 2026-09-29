<?php

use App\Models\Form;
use Illuminate\Support\Facades\Route;

Route::prefix('manager')->name('manager.')->group(function () {
    Route::get('', function () {
        $forms = Form::latest()->paginate(15);
        return inertia('manager/index');
    })->name('index');
});
