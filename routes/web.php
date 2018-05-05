<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


Route::get('users', ['as' => 'users.index', 'uses' => 'UserController@index']);
Route::get('users/create', ['as' => 'users.create', 'uses' => 'UserController@create']);

Route::get('articles', 'ArticleController@index');
Route::get('articles/{id}', 'ArticleController@show');


Route::get('publish',function (){
//    \Illuminate\Support\Facades\Redis::publish('mychanel',json_encode(['firstname'=>'behzad']));
    event(new \App\Events\NewPrivateEvent());

});
