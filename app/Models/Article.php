<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Image\Enums\Fit;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class Article extends Model implements HasMedia
{

    use HasFactory, SoftDeletes, InteractsWithMedia;

    public function registerMediaConversions(?Media $media = null): void
    {
        $this
            ->addMediaConversion('thumb')
            ->fit(Fit::Contain, 150, 150)
            ->nonQueued();
        $this->addMediaConversion('watermark')
            ->watermark(public_path('assets/images/watermark.png'))
            ->nonQueued();
    }

    public function getRouteKeyName()
    {
        return 'slug';
    }

    protected $fillable = [
        'name',
        'slug',
        'status',
        'meta_title',
        'meta_description',
        'description',
        'short_description',
        'user_id',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function scopeLatestUpdated($query)
    {
        return $query->orderBy('updated_at', 'desc');
    }
}
