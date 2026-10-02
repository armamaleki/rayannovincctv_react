<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends Factory<Product>
 */
class ProductFactory extends Factory
{
    protected $model = Product::class;

    public function definition(): array
    {
        $name = fake()->unique()->sentence(3);

        return [
            'name' => $name,
            'slug' => Str::slug($name),

            'price' => fake()->boolean(70)
                ? fake()->numberBetween(500_000, 50_000_000)
                : null,

            'status' => fake()->randomElement([
                'deactivate',
                'active',
                'check',
            ]),
        ];
    }
}