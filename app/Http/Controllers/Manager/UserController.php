<?php

namespace App\Http\Controllers\Manager;

use App\Http\Controllers\Controller;

class UserController extends Controller
{
    public function index()
    {
        return inertia('manager/users/index');
    }
}
