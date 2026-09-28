<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class WarrantyRegistration extends Model
{
    protected $fillable = [
        'name',
        'code',
        'privacy',
        'expired_at',
    ];

    protected $casts = [
        'privacy' => 'boolean',
    ];
}
