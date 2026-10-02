<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Str;
use Spatie\Image\Enums\Fit;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class ProductCategory extends Model implements HasMedia
{
    use HasFactory;
    use InteractsWithMedia;

    protected $fillable = [
        'name',
        'slug',
        'status',
        'parent_id',
        'meta_title',
        'meta_description',
        'description',
        'short_description',
        'user_id',
        'menu',
    ];

    protected static function booted(): void
    {
        static::addGlobalScope('latest', function ($query) {
            $query->orderByDesc('product_categories.created_at');
        });

        static::creating(function ($productCategory) {
            if (auth()->check()) {
                $productCategory->user_id = auth()->id();
            }

            if (!empty($productCategory->slug)) {
                $productCategory->slug = Str::slug(
                    $productCategory->slug,
                    '-',
                    ''
                );
            }
        });

        static::updating(function ($productCategory) {
            if (auth()->check()) {
                $productCategory->user_id = auth()->id();
            }

            if (!empty($productCategory->slug)) {
                $productCategory->slug = Str::slug(
                    $productCategory->slug,
                    '-',
                    ''
                );
            }
        });
    }

    public function registerMediaConversions(?Media $media = null): void
    {
        $this
            ->addMediaConversion('thumb')
            ->fit(Fit::Contain, 150, 150)
            ->nonQueued();

        $this
            ->addMediaConversion('watermark')
            ->watermark(
                public_path('assets/images/logo.png')
            )
            ->nonQueued();
    }

    public function getRouteKeyName(): string
    {
        return 'slug';
    }

    public function products(): BelongsToMany
    {
        return $this->belongsToMany(
            Product::class,
            'product_category',
            'product_category_id',
            'product_id'
        );
    }

    public function parent(): BelongsTo
    {
        return $this->belongsTo(
            self::class,
            'parent_id'
        );
    }

    public function children(): HasMany
    {
        return $this->hasMany(
            self::class,
            'parent_id'
        );
    }

    public function childrenRecursive(): HasMany
    {
        return $this->children()
            ->with('childrenRecursive');
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}