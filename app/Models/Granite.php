<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Granite extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'duration',
    ];

    protected static function booted(): void
    {
        static::addGlobalScope('latest', function ($query) {
            $query->latest('id');
        });
    }

    public function products()
    {
        return $this->hasMany(Product::class);
    }
}