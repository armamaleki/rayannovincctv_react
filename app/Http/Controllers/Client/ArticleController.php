<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Article;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    public function index(Request $request)
    {
        $articles = Article::where('status', 'active')->latest()->paginate(12);
        return inertia('client/articles/index', []);
    }

    public function show(Article $article)
    {
        if ($article->status !== 'active') {
            abort(404);
        }
        return view('client.articles.show', compact('article'));
    }
}
