<?php

namespace App\Http\Controllers\Manager;

use App\Http\Controllers\Controller;
use App\Models\AttributeValue;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ValueController extends Controller
{
    public function index(Request $request): Response
    {
        $attributeValues = AttributeValue::query()
            ->with('attribute')
            ->when(
                $request->filled('q'),
                fn ($query) => $query->where(
                    'value',
                    'like',
                    '%' . $request->q . '%'
                )
            )
            ->paginate();

        return inertia('manager/attribute-values/index', [
            'list_of_all_attribute_values' => Inertia::scroll(
                fn () => $attributeValues
            ),
        ]);
    }
}
