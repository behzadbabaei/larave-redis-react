
@extends('layouts.default')



@section('content')

    <div class="container">
        <div class="row">
            <h1>User List</h1>
            <br/>
            <a href="{{route('users.create')}}" class="btn btn-primary">Add new user</a>
        </div>
        <div class="row">

            <div id="user-app-list">

            </div>
        </div>
    </div>

@endsection
