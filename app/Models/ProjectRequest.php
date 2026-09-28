<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProjectRequest extends Model
{
    protected $fillable = [
        'name',
        'phone',
        'description',
    ];

}
