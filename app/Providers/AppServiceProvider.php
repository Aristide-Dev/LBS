<?php

namespace App\Providers;

use Artesaos\SEOTools\Facades\SEOMeta;
use Artesaos\SEOTools\Facades\OpenGraph;
use Artesaos\SEOTools\Facades\TwitterCard;
use Artesaos\SEOTools\Facades\JsonLd;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Partager les tags SEO générés par SEOTools avec Inertia
        Inertia::share([
            'seo' => [
                'meta' => SEOMeta::generate(),
                'opengraph' => OpenGraph::generate(),
                'twitter' => TwitterCard::generate(),
                'jsonld' => JsonLd::generate(),
            ],
        ]);
    }
}
