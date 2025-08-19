<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ParcoursController extends Controller
{
    public function index()
    {

        $parcours = [
            ['id' => 1, 'name' => 'Html'],
            ['id' => 2, 'name' => 'Parcours 2'],
        ];

        return Inertia::render('parcours/ParcoursIndex', [
            'parcours' => $parcours,
        ]);
    }
}
