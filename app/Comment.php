<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $table='comments';
    protected $fillable = ['body'];

    public function article()
    {
        return $this->belongsTo(Article::class,'article_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
