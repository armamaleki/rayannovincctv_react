<?php

namespace App\Http\Controllers\Manager;

use App\Http\Controllers\Controller;
use App\Models\Attribute;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class AttributeController extends Controller
{
    public function index(Request $request): Response
    {
        $attributes = Attribute::query()
            ->withCount('values')
            ->when(
                $request->filled('q'),
                fn ($query) => $query->where(
                    'name',
                    'like',
                    '%' . $request->q . '%'
                )
            )
            ->paginate();

        return inertia('manager/attributes/index', [
            'list_of_all_attributes' => Inertia::scroll(
                fn () => $attributes
            ),
        ]);
    }
}
