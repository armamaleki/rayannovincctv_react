<?php

namespace App\Http\Controllers\Manager;

use App\Http\Controllers\Controller;
use App\Models\Order;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrderController extends Controller
{
    public function index(Request $request)
    {
        $orders = Order::where('order_number', 'LIKE', '%'.$request->data.'%')
            ->paginate();
        return inertia('manager/orders', [
            'list_of_all_orders' => Inertia::scroll(
                fn () => $orders
            ),
        ]);
    }
}
