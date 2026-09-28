<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\ProductCategory;

class ProductCategoryController extends Controller
{
    public function index()
    {
        $categories = ProductCategory::paginate(20);
        return inertia('client/product-categories/index');
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
