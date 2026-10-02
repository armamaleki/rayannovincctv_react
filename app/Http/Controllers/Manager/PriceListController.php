<?php

namespace App\Http\Controllers\Manager;

use App\Http\Controllers\Controller;
use App\Models\PriceList;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class PriceListController extends Controller
{
    public function index(Request $request): Response
    {
        $priceLists = PriceList::query()
            ->with('user')
            ->withCount('tags')
            ->when(
                $request->filled('q'),
                fn ($query) => $query->where(
                    'name',
                    'like',
                    '%'.$request->q.'%'
                )
            )
            ->paginate();

        return inertia('manager/price-list/index', [
            'list_of_all_price_lists' => Inertia::scroll(
                fn () => $priceLists
            ),
        ]);
    }
}
