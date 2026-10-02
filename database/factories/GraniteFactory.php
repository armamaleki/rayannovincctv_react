<?php

namespace Database\Factories;

use App\Models\Granite;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Granite>
 */
class GraniteFactory extends Factory
{
    protected $model = Granite::class;

    public function definition(): array
    {
        return [
            'name' => 'گارانتی ' . fake()->unique()->numberBetween(1000, 999999),

            'duration' => fake()->randomElement([
                '6 ماه',
                '12 ماه',
                '18 ماه',
                '24 ماه',
                '36 ماه',
            ]),
        ];
    }
}