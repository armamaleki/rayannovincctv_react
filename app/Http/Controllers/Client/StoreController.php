<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class StoreController extends Controller
{
    public function index(Request $request)
    {

        $products = Product::latestUpdated()
            ->where('status', 'active')
            ->where('name', 'LIKE', '%'.$request->q.'%')
            ->orderByRaw('CASE WHEN price IS NULL OR price = 0 THEN 1 ELSE 0 END')
            ->paginate(16);

        return inertia('client/store/index');
    }
}
