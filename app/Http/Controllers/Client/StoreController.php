<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Granite;
use App\Models\Product;
use App\Models\ProductCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class StoreController extends Controller
{
    public function index(Request $request): Response
    {
        /*
        |--------------------------------------------------------------------------
        | Product Query
        |--------------------------------------------------------------------------
        */

        $productQuery = Product::query()
            ->where('status', 'active')
            ->with([
                'categories',
                'grantie',
            ])
            ->when(
                $request->filled('q'),
                fn ($query) => $query->where(
                    'name',
                    'like',
                    '%' . $request->string('q') . '%'
                )
            );

        /*
        |--------------------------------------------------------------------------
        | Category Filter
        |--------------------------------------------------------------------------
        */

        $productQuery->when(
            $request->filled('category'),
            fn ($query) => $query->whereHas(
                'categories',
                fn ($categoryQuery) => $categoryQuery->where(
                    'product_categories.id',
                    $request->category
                )
            )
        );

        /*
        |--------------------------------------------------------------------------
        | Warranty Filter
        |--------------------------------------------------------------------------
        */

        $productQuery->when(
            $request->filled('grantie'),
            fn ($query) => $query->where(
                'grantie_id',
                $request->grantie
            )
        );

        /*
        |--------------------------------------------------------------------------
        | Minimum Price
        |--------------------------------------------------------------------------
        */

        $productQuery->when(
            $request->filled('min_price'),
            fn ($query) => $query->where(
                'price',
                '>=',
                $request->min_price
            )
        );

        /*
        |--------------------------------------------------------------------------
        | Maximum Price
        |--------------------------------------------------------------------------
        */

        $productQuery->when(
            $request->filled('max_price'),
            fn ($query) => $query->where(
                'price',
                '<=',
                $request->max_price
            )
        );

        /*
        |--------------------------------------------------------------------------
        | Sorting
        |--------------------------------------------------------------------------
        */

        $productQuery
            ->when(
                $request->input('sort') === 'cheap',
                fn ($query) => $query
                    ->whereNotNull('price')
                    ->where('price', '>', 0)
                    ->orderBy('price')
            )
            ->when(
                $request->input('sort') === 'expensive',
                fn ($query) => $query
                    ->whereNotNull('price')
                    ->where('price', '>', 0)
                    ->orderByDesc('price')
            )
            ->when(
                !in_array(
                    $request->input('sort'),
                    ['cheap', 'expensive'],
                    true
                ),
                fn ($query) => $query
                    ->orderByRaw(
                        'CASE WHEN price IS NULL OR price = 0 THEN 1 ELSE 0 END'
                    )
                    ->latest('id')
            );

        /*
        |--------------------------------------------------------------------------
        | Products
        |--------------------------------------------------------------------------
        */

        $products = $productQuery
            ->paginate(16)
            ->withQueryString();

        /*
        |--------------------------------------------------------------------------
        | Filter Base Query
        |--------------------------------------------------------------------------
        |
        | فیلترها فقط بر اساس محصولات فعال ساخته می‌شوند.
        |
        */

        $activeProducts = Product::query()
            ->where('status', 'active');

        /*
        |--------------------------------------------------------------------------
        | Categories
        |--------------------------------------------------------------------------
        */

        $categories = ProductCategory::query()
            ->whereHas(
                'products',
                function ($query) {
                    $query->where('products.status', 'active');
                }
            )
            ->withCount([
                'products' => function ($query) {
                    $query->where('products.status', 'active');
                },
            ])
            ->orderBy('name')
            ->get();

        /*
        |--------------------------------------------------------------------------
        | Warranties
        |--------------------------------------------------------------------------
        */

        $granites = Granite::query()
            ->whereHas(
                'products',
                function ($query) {
                    $query->where('products.status', 'active');
                }
            )
            ->withCount([
                'products' => function ($query) {
                    $query->where('products.status', 'active');
                },
            ])
            ->orderBy('name')
            ->get();

        /*
        |--------------------------------------------------------------------------
        | Price Range
        |--------------------------------------------------------------------------
        */

        $priceRange = (clone $activeProducts)
            ->whereNotNull('price')
            ->where('price', '>', 0)
            ->selectRaw('MIN(price) as min_price, MAX(price) as max_price')
            ->first();

        /*
        |--------------------------------------------------------------------------
        | Response
        |--------------------------------------------------------------------------
        */

        return inertia('client/store/index', [
            'products' => Inertia::scroll(
                fn () => $products
            ),

            'filters' => [
                'categories' => $categories,
                'granites' => $granites,

                'price' => [
                    'min' => $priceRange?->min_price,
                    'max' => $priceRange?->max_price,
                ],
            ],

            'query' => [
                'q' => $request->input('q'),
                'category' => $request->input('category'),
                'grantie' => $request->input('grantie'),
                'min_price' => $request->input('min_price'),
                'max_price' => $request->input('max_price'),
                'sort' => $request->input('sort', 'latest'),
            ],
        ]);
    }

    public function show(Product $product): Response
    {
        abort_unless(
            $product->status === 'active',
            404
        );

        $product->load([
            'categories',
            'grantie',
        ]);

        return inertia('client/store/show', [
            'product' => $product,
        ]);
    }
}