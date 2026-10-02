<?php

namespace Database\Factories;

use App\Models\Attribute;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Attribute>
 */
class AttributeFactory extends Factory
{
    protected $model = Attribute::class;

    public function definition(): array
    {
        $names = [
            'رنگ',
            'برند',
            'مدل',
            'رزولوشن',
            'نوع لنز',
            'نوع دوربین',
            'دید در شب',
            'میزان زوم',
            'نوع اتصال',
            'حافظه',
            'جنس بدنه',
            'مقاومت در برابر آب',
            'زاویه دید',
            'نوع سنسور',
            'کیفیت تصویر',
        ];

        return [
            'name' => fake()->randomElement($names)
                . ' ' . fake()->unique()->numberBetween(1000, 999999),

            'icon' => null,

            'user_id' => User::query()
                    ->inRandomOrder()
                    ->value('id')
                ?? User::factory(),
        ];
    }
}
