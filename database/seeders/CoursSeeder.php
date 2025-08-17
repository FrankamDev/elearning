<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Cours;

class CoursSeeder extends Seeder
{
    public function run()
    {
        // Crée 3 cours de test
        Cours::create([
            'title'       => 'HTML pour débutants',
            'description' => 'Apprenez les bases du HTML',
            'type'        => 'video',
            'content'     => 'Contenu HTML',
            'video_url'   => null,
            'duration'    => '1h',
            'is_free'     => true,
            'category_id' => 1,
            'user_id'     => 1,
        ]);

        Cours::create([
            'title'       => 'CSS avancé',
            'description' => 'Maîtrisez le CSS',
            'type'        => 'video',
            'content'     => 'Contenu CSS',
            'video_url'   => null,
            'duration'    => '2h',
            'is_free'     => false,
            'category_id' => 1,
            'user_id'     => 1,
        ]);

        Cours::create([
            'title'       => 'JavaScript Interactif',
            'description' => 'Apprendre JS étape par étape',
            'type'        => 'video',
            'content'     => 'Contenu JS',
            'video_url'   => null,
            'duration'    => '3h',
            'is_free'     => true,
            'category_id' => 2,
            'user_id'     => 1,
        ]);
    }
}
