<?php

namespace Database\Factories;

use App\Models\PriceList;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<PriceList>
 */
class PriceListFactory extends Factory
{
    protected $model = PriceList::class;

    public function definition(): array
    {
        $name = 'لیست قیمت ' . fake()->unique()->numberBetween(1000, 999999);

        return [
            'name' => $name,

            'status' => fake()->randomElement([
                'deactivate',
                'active',
                'check',
            ]),

            'description' => fake()->paragraph(),

            'user_id' => User::query()
                    ->inRandomOrder()
                    ->value('id')
                ?? User::factory(),
        ];
    }
}