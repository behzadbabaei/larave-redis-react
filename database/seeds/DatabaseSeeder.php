<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);

        factory(\App\User::class,5)->create();
        factory(\App\Article::class,5)->create()->each(function($article){
            factory(\App\Comment::class,rand(1,5))->create(['article_id'=>$article->id]);
        });

    }
}
