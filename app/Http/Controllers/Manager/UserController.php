<?php

namespace App\Http\Controllers\Manager;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class UserController extends Controller
{
    public function index(Request $request): Response
    {
        $users = User::query()
            ->where('name', 'like', "%{$request->q}%")
            ->latest('id')
            ->paginate();

        return inertia('manager/users/index', [
            'list_of_all_users' => Inertia::scroll(
                fn () => $users
            ),
        ]);
    }
}
