<?php

namespace App\Http\Controllers\Manager;

use App\Http\Controllers\Controller;
use App\Models\Article;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ArticleController extends Controller
{
    public function index(Request $request): Response
    {
        $articles = Article::query()
            ->when(
                $request->filled('q'),
                fn ($query) => $query->where(
                    'name',
                    'like',
                    '%'.$request->q.'%'
                )
            )
            ->paginate();

        return inertia('manager/articles/index', [
            'list_of_all_articles' => Inertia::scroll(
                fn () => $articles
            ),
        ]);
    }
}
