<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>


    @include('include.head')

</head>
<body>
@include('include.header')


@yield('content')




@include('include.scripts')

</body>
</html>
