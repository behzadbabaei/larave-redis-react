<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::group(['prefix' => 'v1', 'namespace' => 'Api\V1'],function (){
    Route::get('/users', 'UserController@index');
    Route::post('/users', 'UserController@store');
    Route::delete('/users/{id}', 'UserController@destroy');


    Route::get('/articles', 'ArticleController@index');
    Route::get('/articles/{id}', 'ArticleController@show');
    Route::post('/articles', 'ArticleController@store');
    Route::delete('/articles/{id}', 'ArticleController@destroy');

    Route::get('/comments/{articleId}', 'CommentController@index');
    Route::get('/comments/detail/{id}', 'CommentController@show');
    Route::post('/comments', 'CommentController@store');
    Route::delete('/comments/{id}', 'CommentController@destroy');

});