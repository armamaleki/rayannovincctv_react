<?php

namespace Database\Factories;

use App\Models\Article;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends Factory<Article>
 */
class ArticleFactory extends Factory
{
    protected $model = Article::class;

    public function definition(): array
    {
        $title = fake()->sentence(fake()->numberBetween(5, 10));

        return [
            'name' => $title,

            'slug' => Str::slug($title) . '-' . fake()->unique()->numberBetween(1000, 99999),

            'status' => fake()->randomElement([
                'deactivate',
                'active',
                'check',
            ]),

            'meta_title' => Str::limit(
                $title . ' | رایان نوین',
                60
            ),

            'meta_description' => fake()->realTextBetween(
                120,
                160
            ),

            'description' => fake()->paragraphs(
                fake()->numberBetween(3, 6),
                true
            ),

            'short_description' => fake()->realTextBetween(
                80,
                150
            ),

            'user_id' => User::factory(),
        ];
    }
}