<?php

namespace App\Http\Controllers\Manager;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Spatie\Permission\Models\Role;

class RoleController extends Controller
{
    public function index(Request $request): Response
    {
        $roles = Role::query()
            ->where('name', 'like', "%{$request->q}%")
            ->latest('id')
            ->paginate(15);

        return inertia('manager/roles/index', [
            'list_of_all_roles' => Inertia::scroll(
                fn () => $roles
            ),
        ]);
    }
}
