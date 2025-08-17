<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Category;

class CategorySeeder extends Seeder
{
    public function run()
    {
        Category::create(['name' => 'Développement Web']);
        Category::create(['name' => 'JavaScript']);
        Category::create(['name' => 'Design']);
    }
}
