<?php

namespace App\Http\Controllers\Manager;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ProductController extends Controller
{
    public function index(Request $request): Response
    {
        $products = Product::query()
            ->when(
                $request->filled('q'),
                fn ($query) => $query->where(
                    'name',
                    'like',
                    '%'.$request->q.'%'
                )
            )
            ->paginate();

        return inertia('manager/products/index', [
            'list_of_all_products' => Inertia::scroll(
                fn () => $products
            ),
        ]);
    }
}
