<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ Session::token() }}">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <script src="https://kit.fontawesome.com/8dbf0b871f.js" crossorigin="anonymous" defer></script>
    <link
        href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,100;0,200;0,700;1,800&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href=" {{ mix('css/app.css') }}">
    <script src="{{ mix('js/app.js') }}" defer></script>
    <title>Greybuilt Homes</title>
</head>

<body class="h-screen text-gray-800">
    <div id="app" class="h-full">
        <router-view></router-view>


    </div>

</body>

</html>
