
@extends('layouts.default')



@section('content')


    <div class="container">
        <div class="row">
            <h1>Articles Show</h1>
            <br/>

        </div>
        <div class="row">

            <div id="article-app-show" data-articleid="{{$article->id}}">

            </div>
        </div>
    </div>

@endsection
