<?php

namespace App\Http\Controllers\Api\v1;

use App\Article;
use App\Comment;
use App\Events\NewComment;
use App\Events\NewCommentEvent;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CommentController extends Controller
{
    public function index($articleId)
    {

        $article=Article::findOrFail($articleId);

        $comments = $article->comments;
//        dd($comments);
        return response()->json($comments);
    }

    public function show(Article $article)
    {

        return response()->json($article);
    }

    public function store(Request $request)
    {
        $comment=new Comment();
        $comment->body=$request->get('body');
        $comment->article_id=$request->get('article_id');
        $comment->save();

        broadcast(new NewCommentEvent($comment));
        return $comment->toJson();


    }


    public function destroy($id)
    {
        $user = Article::find($id);
        $user->delete();

    }

}
