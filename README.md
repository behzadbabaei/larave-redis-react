# larave-redis-react
This project demonstrate how to use redis in laravel 5.6 as a broadcast  server and using react in frontend
## 1.first Install  predis package by using "composer require predis/predis"
## 2.uncomment following line of code in config/app  " App\Providers\BroadcastServiceProvider::class,"
## 3.set the broadcast driver to redis in .env file like "BROADCAST_DRIVER=redis"
## 4.install redis server in os.you can install redis by following this article https://github.com/ServiceStack/redis-windows
## 5.install required js package by opening your terminal and typing "npm install" and hit enter
## 6.activate react by typing "php artisan preset react" in your terminal in your project folder(laravel project)
The code in project is descriptive enough to get up and running with redis 
if you had question please ask it
