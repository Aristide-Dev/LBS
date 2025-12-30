<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    /**
     * Affiche la page d'accueil du site vitrine LBS.
     */
    public function index(): Response
    {
        return Inertia::render('home');
    }
}

