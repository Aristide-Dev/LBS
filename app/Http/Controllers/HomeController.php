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

        // Configuration SEO spécifique à la page d'accueil
        $this->setupPageSEO(
            title: 'LOURA BUNKER SERVICES - Soutage Maritime & Services Pétroliers en Guinée',
            description: 'LOURA BUNKER SERVICES - Votre partenaire de confiance pour le soutage maritime et les services pétroliers en Guinée et Afrique de l\'Ouest. Fiabilité, sécurité, conformité. Disponible 24h/24, 7j/7.',
            url: url('/'),
            image: url('/web-app-manifest-512x512.png')
        );

        return Inertia::render('home');
    }
}

