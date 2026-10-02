<?php

namespace Database\Factories;

use App\Models\Application;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends Factory<Application>
 */
class ApplicationFactory extends Factory
{
    protected $model = Application::class;

    public function definition(): array
    {
        $name = 'نرم‌افزار ' . fake()->unique()->numberBetween(1000, 999999);

        return [
            'name' => $name,

            'link' => 'https://example.com/download/' . Str::slug($name),

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