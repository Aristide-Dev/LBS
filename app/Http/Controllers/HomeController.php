<?php

namespace App\Http\Controllers;

use App\Traits\HasSEO;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    use HasSEO;

    /**
     * Affiche la page d'accueil du site vitrine LBS.
     */
    public function index(): Response
    {
        // Configuration SEO de base
        $this->setupBaseSEO();

        // Configuration SEO spécifique à la page d'accueil (utilise les traductions)
        $this->setupPageSEO(
            translationKey: 'home',
            url: url()->current(),
            image: url('/web-app-manifest-512x512.png')
        );

        return Inertia::render('home');
    }
}

