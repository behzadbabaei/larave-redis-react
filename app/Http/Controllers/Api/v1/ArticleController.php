<?php

namespace App\Http\Controllers\Api\v1;

use App\Article;
use Illuminate\Contracts\View\View;
use Illuminate\Filesystem\Cache;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

class ArticleController extends Controller
{
    public function index()
    {
        $articles=Article::all();
        return response()->json($articles);
    }

    public function show($id)
    {
        $article=Article::findOrFail($id);
        return response()->json($article);
    }



    public function destroy($id)
    {
        $user=Article::find($id);
        $user->delete();
        return response()->json("user has been deleted successfully");
    }


}
