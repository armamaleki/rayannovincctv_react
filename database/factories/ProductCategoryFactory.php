<?php

namespace Database\Factories;

use App\Models\ProductCategory;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends Factory<ProductCategory>
 */
class ProductCategoryFactory extends Factory
{
    protected $model = ProductCategory::class;

    public function definition(): array
    {
        $name = 'دسته‌بندی ' . fake()->unique()->numberBetween(1000, 999999);

        return [
            'name' => $name,

            'slug' => Str::slug($name),

            'status' => fake()->randomElement([
                'deactivate',
                'active',
                'check',
            ]),

            'parent_id' => null,

            'meta_title' => $name,

            'meta_description' => fake()->sentence(),

            'description' => fake()->paragraph(),

            'short_description' => fake()->sentence(),

            'user_id' => User::query()
                    ->inRandomOrder()
                    ->value('id')
                ?? User::factory(),
        ];
    }
}