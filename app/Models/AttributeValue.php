<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AttributeValue extends Model
{
    /** @use HasFactory<\Database\Factories\AttributeValueFactory> */
    use HasFactory;

    protected $fillable = [
        'value',
        'sort_order',
        'attribute_id',
    ];

    public function attribute()
    {
        return $this->belongsTo(Attribute::class);
    }
    public function scopeLatestUpdated($query)
    {
        return $query->orderBy('updated_at', 'desc');
    }
}
