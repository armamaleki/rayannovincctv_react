<?php

namespace Database\Factories;

use App\Models\Attribute;
use App\Models\AttributeValue;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<AttributeValue>
 */
class AttributeValueFactory extends Factory
{
    protected $model = AttributeValue::class;

    public function definition(): array
    {
        return [
            'value' => fake()->unique()->words(
                fake()->numberBetween(1, 3),
                true
            ),

            'sort_order' => fake()->numberBetween(0, 100),

            'attribute_id' => Attribute::query()
                    ->inRandomOrder()
                    ->value('id')
                ?? Attribute::factory(),
        ];
    }
}