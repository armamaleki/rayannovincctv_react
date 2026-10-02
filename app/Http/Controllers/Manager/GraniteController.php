<?php

namespace App\Http\Controllers\Manager;

use App\Http\Controllers\Controller;
use App\Models\Granite;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class GraniteController extends Controller
{
    public function index(Request $request): Response
    {
        $granites = Granite::query()
            ->withCount('products')
            ->when(
                $request->filled('q'),
                fn ($query) => $query->where(
                    'name',
                    'like',
                    '%' . $request->q . '%'
                )
            )
            ->paginate();

        return inertia('manager/granites/index', [
            'list_of_all_granites' => Inertia::scroll(
                fn () => $granites
            ),
        ]);
    }
}