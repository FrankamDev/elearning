<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Cours;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        $this->call([
    UserSeeder::class,
    CategorySeeder::class,
    CoursSeeder::class,
]);
        User::factory()->create([
            'name' => 'Frankam',
            'email' => 'frankam@gmail.com',
            'password' => bcrypt('hacking48734'),
            'email_verified_at' => time(),
        ]);

        Cours::factory()
        ->count(30)
        ->create();
    }
}
