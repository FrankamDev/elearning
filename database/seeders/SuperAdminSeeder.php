<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class SuperAdminSeeder extends Seeder
{
    public function run(): void
    {
        User::firstOrCreate(
            ['email' => 'frankam@gmail.com'], // clé unique
            [
                'name' => 'Super Admin',
                'password' => Hash::make('hacking48734'), // ⚠️ change ce mot de passe
                'role' => 'superadmin', // ta colonne "role"
                'status' => 'active',   // si tu as une colonne "status"
            ]
        );
    }
}
