<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Category;

class CategorySeeder extends Seeder
{
    public function run(): void
    {
        $categories = [
            ['name' => 'HTML', 'slug' => 'html'],
            ['name' => 'CSS', 'slug' => 'css'],
            ['name' => 'JavaScript', 'slug' => 'javascript'],
            ['name' => 'PHP', 'slug' => 'php'],
            ['name' => 'React', 'slug' => 'react'],
            ['name' => 'Tailwind', 'slug' => 'tailwind'],
            ['name' => 'Base de données', 'slug' => 'database'],
        ];

        foreach ($categories as $cat) {
            Category::firstOrCreate(['slug' => $cat['slug']], $cat);
        }
    }
}
