<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    public function run()
    {
        Category::create(['name' => 'Développement Web']);
        Category::create(['name' => 'JavaScript']);
        Category::create(['name' => 'Design']);
    }
}
