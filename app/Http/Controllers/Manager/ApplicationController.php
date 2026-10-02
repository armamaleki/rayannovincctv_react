<?php

namespace App\Http\Controllers\Manager;

use App\Http\Controllers\Controller;
use App\Models\Application;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ApplicationController extends Controller
{
    public function index(Request $request): Response
    {
        $applications = Application::query()
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

        return inertia('manager/applications/index', [
            'list_of_all_applications' => Inertia::scroll(
                fn () => $applications
            ),
        ]);
    }
}
