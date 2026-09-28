<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Granite extends Model
{
    protected $fillable = [
        'name',
        'duration',
    ];

    public function products()
    {
        return $this->hasMany(Product::class);
    }

    public function scopeLatestUpdated($query)
    {
        return $query->orderBy('updated_at', 'desc');
    }


}
