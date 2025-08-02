<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use App\Models\Cours;
use App\Models\Category;
use App\Models\User;

class CoursSeeder extends Seeder
{
    public function run(): void
    {
        // Récupérer le premier utilisateur existant
        $user = User::first();
        if (!$user) {
            $this->command->error('Aucun utilisateur trouvé. Veuillez exécuter UserSeeder avant.');
            return;
        }

        // Récupérer toutes les catégories indexées par slug
        $categories = Category::all()->keyBy('slug');
        if ($categories->isEmpty()) {
            $this->command->error('Aucune catégorie trouvée. Veuillez exécuter CategorySeeder avant.');
            return;
        }

        $cours = [
            [
                'title' => 'Introduction à HTML',
                'description' => 'Apprends les bases du HTML.',
                'category_slug' => 'html',
            ],
            [
                'title' => 'Introduction à CSS',
                'description' => 'Apprends à styliser tes pages.',
                'category_slug' => 'css',
            ],
            [
                'title' => 'Bases de JavaScript',
                'description' => 'Ajoute de l\'interactivité.',
                'category_slug' => 'javascript',
            ],
            [
                'title' => 'Programmation avec PHP',
                'description' => 'Développement backend.',
                'category_slug' => 'php',
            ],
        ];

        foreach ($cours as $item) {
            // Récupérer l'id de la catégorie depuis le slug
            $category = $categories->get($item['category_slug']);

            if (!$category) {
                $this->command->warn("Catégorie non trouvée pour slug '{$item['category_slug']}', cours '{$item['title']}' ignoré.");
                continue;
            }

            // Générer un slug propre pour le cours
            $slug = Str::slug($item['title']);

            // Vérifier que le cours n'existe pas déjà (par slug)
            if (Cours::where('slug', $slug)->exists()) {
                $this->command->info("Le cours '{$item['title']}' existe déjà, création ignorée.");
                continue;
            }


            Cours::create([
                'title' => $item['title'],
                'slug' => $slug,
                'description' => $item['description'],
                'category_id' => $category->id,
                'user_id' => $user->id,
            ]);

            $this->command->info("Cours '{$item['title']}' créé avec succès.");
        }
    }
}
