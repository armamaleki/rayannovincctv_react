<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\ProductCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
class ProductCategoryController extends Controller
{
    public function index(Request $request): Response
    {
        /*
        |--------------------------------------------------------------------------
        | Active Product Count
        |--------------------------------------------------------------------------
        */

        $activeProductsCount = Product::query()
            ->where('status', 'active')
            ->count();

        /*
        |--------------------------------------------------------------------------
        | Main Categories Count
        |--------------------------------------------------------------------------
        */

        $mainCategoriesCount = ProductCategory::query()
            ->whereNull('parent_id')
            ->where('status', 'active')
            ->whereHas('products', function ($query) {
                $query->where('products.status', 'active');
            })
            ->count();

        /*
        |--------------------------------------------------------------------------
        | Subcategories Count
        |--------------------------------------------------------------------------
        */

        $subcategoriesCount = ProductCategory::query()
            ->whereNotNull('parent_id')
            ->where('status', 'active')
            ->whereHas('products', function ($query) {
                $query->where('products.status', 'active');
            })
            ->count();

        /*
        |--------------------------------------------------------------------------
        | Categories Query
        |--------------------------------------------------------------------------
        */

        $categories = ProductCategory::query()
            ->whereNull('parent_id')
            ->where('status', 'active')
            ->whereHas('products', function ($query) {
                $query->where('products.status', 'active');
            })
            ->with([
                'children' => function ($query) {
                    $query
                        ->where('status', 'active')
                        ->whereHas('products', function ($productQuery) {
                            $productQuery->where(
                                'products.status',
                                'active'
                            );
                        })
                        ->withCount([
                            'products' => function ($productQuery) {
                                $productQuery->where(
                                    'products.status',
                                    'active'
                                );
                            },
                        ]);
                },
            ])
            ->withCount([
                'products' => function ($query) {
                    $query->where('products.status', 'active');
                },
            ])
            ->when(
                $request->filled('q'),
                function ($query) use ($request) {
                    $search = trim($request->string('q')->toString());

                    $query->where(function ($query) use ($search) {
                        $query
                            ->where('name', 'like', "%{$search}%")
                            ->orWhereHas('children', function ($childQuery) use ($search) {
                                $childQuery
                                    ->where('status', 'active')
                                    ->where('name', 'like', "%{$search}%");
                            });
                    });
                }
            )
            ->orderBy('name')
            ->paginate(12)
            ->withQueryString();

        /*
        |--------------------------------------------------------------------------
        | Category Images
        |--------------------------------------------------------------------------
        */

        $categories->getCollection()->transform(
            function (ProductCategory $category) {
                $category->setAttribute(
                    'image_url',
                    $category->getFirstMediaUrl()
                );

                $category->children->transform(
                    function (ProductCategory $child) {
                        $child->setAttribute(
                            'image_url',
                            $child->getFirstMediaUrl()
                        );

                        return $child;
                    }
                );

                return $category;
            }
        );
        /*
        |--------------------------------------------------------------------------
        | Response
        |--------------------------------------------------------------------------
        */

        return inertia('client/product-categories/index', [
            'categories' => Inertia::scroll(
                fn () => $categories
            ),

            'stats' => [
                'products_count' => $activeProductsCount,
                'categories_count' => $mainCategoriesCount,
                'subcategories_count' => $subcategoriesCount,
            ],

            'query' => [
                'q' => $request->input('q', ''),
            ],
        ]);
    }
    public function show(ProductCategory $productCategory)
    {
        $products = $productCategory->products()
            ->latest()
            ->paginate(12)
            ->withQueryString();
        //        return view('client.product-categories.show', compact('productCategory', 'products'));
    }
}
