<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Article;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ArticleController extends Controller
{
    public function index(Request $request)
    {
        $query = Article::query()
            ->where('status', 'active');

        if ($request->filled('search')) {
            $search = $request->string('search');

            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                    ->orWhere('short_description', 'like', "%{$search}%")
                    ->orWhere('description', 'like', "%{$search}%");
            });
        }

        $articles = $query
            ->latest()
            ->paginate()
            ->withQueryString();

        return inertia('client/articles/index', [
            'articles' => Inertia::scroll(
                fn () => $articles
            ),
            'filters' => [
                'search' => $request->search,
            ],
        ]);
    }
    public function show(Article $article)
    {
        if ($article->status !== 'active') {
            abort(404);
        }
        return view('client.articles.show', compact('article'));
    }
}
