<?php

namespace App\Http\Controllers;

use App\Article;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    public function index()
    {
        return view('articles.index');
    }

    public function show($id)
    {
//        dd($article);
        $article=Article::findOrFail($id);
        return view('articles.show',compact('article'));
    }
}
