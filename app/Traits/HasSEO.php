<?php

namespace App\Traits;

use Artesaos\SEOTools\Facades\SEOMeta;
use Artesaos\SEOTools\Facades\OpenGraph;
use Artesaos\SEOTools\Facades\TwitterCard;
use Artesaos\SEOTools\Facades\JsonLd;

trait HasSEO
{
    /**
     * Configure le SEO de base pour l'organisation LBS
     */
    protected function setupBaseSEO(): void
    {
        $baseUrl = config('app.url', url('/'));
        $logoUrl = $baseUrl . '/logo.svg';
        $imageUrl = $baseUrl . '/web-app-manifest-512x512.png';

        // Configuration Open Graph de base
        OpenGraph::setSiteName('LOURA BUNKER SERVICES')
            ->addImage($imageUrl);

        // Configuration Twitter Card de base
        TwitterCard::setSite('@lbsguinee')
            ->setImage($imageUrl);

        // Configuration JSON-LD de base pour l'organisation
        JsonLd::setType('Organization')
            ->setTitle('LOURA BUNKER SERVICES')
            ->setDescription('Votre partenaire de confiance pour le soutage maritime et les services pétroliers en Guinée et Afrique de l\'Ouest. Fiabilité, sécurité, conformité aux normes internationales.')
            ->setUrl($baseUrl)
            ->addImage($logoUrl)
            ->addValue('alternateName', 'LBS')
            ->addValue('address', [
                '@type' => 'PostalAddress',
                'streetAddress' => 'Camayenne, Commune de Dixinn',
                'addressLocality' => 'Conakry',
                'addressCountry' => 'GN',
            ])
            ->addValue('contactPoint', [
                '@type' => 'ContactPoint',
                'telephone' => '+224-621-41-85-56',
                'contactType' => 'customer service',
                'email' => 'dg@lbsguinee.com',
                'availableLanguage' => ['fr'],
            ])
            ->addValue('areaServed', [
                '@type' => 'Country',
                'name' => 'Guinée',
            ]);
    }

    /**
     * Configure le SEO spécifique à une page
     *
     * @param string $title
     * @param string $description
     * @param string|null $url
     * @param string|null $image
     */
    protected function setupPageSEO(string $title, string $description, ?string $url = null, ?string $image = null): void
    {
        $baseUrl = config('app.url', url('/'));
        $pageUrl = $url ?? url()->current();
        $pageImage = $image ?? $baseUrl . '/web-app-manifest-512x512.png';

        // Meta tags
        SEOMeta::setTitle($title)
            ->setDescription($description)
            ->setCanonical($pageUrl);

        // Open Graph
        OpenGraph::setTitle($title)
            ->setDescription($description)
            ->setUrl($pageUrl)
            ->addImage($pageImage);

        // Twitter Card
        TwitterCard::setTitle($title)
            ->setDescription($description)
            ->setImage($pageImage);

        // JSON-LD pour la page
        JsonLd::setType('WebPage')
            ->setTitle($title)
            ->setDescription($description)
            ->setUrl($pageUrl)
            ->addImage($pageImage);
    }
}

