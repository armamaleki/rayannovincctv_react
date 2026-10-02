<?php

namespace App\Http\Controllers\Manager;

use App\Http\Controllers\Controller;
use App\Models\ProductCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ProductCategoryController extends Controller
{
    public function index(Request $request): Response
    {
        $productCategories = ProductCategory::query()
            ->with('parent')
            ->withCount('products')
            ->when(
                $request->filled('q'),
                fn ($query) => $query->where(
                    'name',
                    'like',
                    '%'.$request->q.'%'
                )
            )
            ->paginate();

        return inertia('manager/product-categories/index', [
            'list_of_all_product_categories' => Inertia::scroll(
                fn () => $productCategories
            ),
        ]);
    }
}
