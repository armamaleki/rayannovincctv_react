<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    protected $fillable = ['name'];

    public function taggables()
    {
        return $this->morphedByMany(Application::class, 'taggable');
    }
}
