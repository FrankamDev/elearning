<?php

namespace Database\Factories;

use App\Models\Cours;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Cours>
 */
class CoursFactory extends Factory
{
    // protected $model = Cours::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $title = $this->faker->unique()->words(2, true);

        return [
            'title' => fake()->sentence(),
            'slug' => fake()->slug(),
            // 'title' => $title = $this->faker->sentence(3),
            'slug' => Str::slug($title),
            'description' => fake()->realText(),

            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
