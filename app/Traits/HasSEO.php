<?php

namespace App\Traits;

use Artesaos\SEOTools\Facades\SEOMeta;
use Artesaos\SEOTools\Facades\OpenGraph;
use Artesaos\SEOTools\Facades\TwitterCard;
use Artesaos\SEOTools\Facades\JsonLd;
use Illuminate\Support\Facades\View;

trait HasSEO
{
    /**
     * Configure le SEO de base pour l'organisation LBS
     * Note: Le schéma Organization est ajouté séparément dans app.blade.php
     */
    protected function setupBaseSEO(): void
    {
        $baseUrl = config('app.url', url('/'));
        $imageUrl = $baseUrl . '/web-app-manifest-512x512.png';
        $locale = app()->getLocale();

        // Configuration Open Graph de base
        OpenGraph::setSiteName('LOURA BUNKER SERVICES')
            ->addImage($imageUrl)
            ->addProperty('locale', $locale === 'fr' ? 'fr_FR' : 'en_US');

        // Configuration Twitter Card de base
        TwitterCard::setSite('@lbsguinee')
            ->setImage($imageUrl);

        // Partager les données Organization pour le schéma JSON-LD dans Blade
        View::share('organizationSchema', $this->getOrganizationSchema());

        // Générer et partager les balises hreflang
        View::share('hreflangLinks', $this->generateHreflangLinks());
    }

    /**
     * Retourne le schéma JSON-LD Organization complet
     */
    protected function getOrganizationSchema(): array
    {
        $baseUrl = config('app.url', url('/'));
        $locale = app()->getLocale();
        $seoTranslations = trans('seo.default', [], $locale);

        return [
            '@context' => 'https://schema.org',
            '@type' => 'Organization',
            'name' => 'LOURA BUNKER SERVICES',
            'alternateName' => 'LBS',
            'description' => $seoTranslations['description'] ?? 'Votre partenaire de confiance pour le soutage maritime et les services pétroliers en Guinée et Afrique de l\'Ouest. Fiabilité, sécurité, conformité aux normes internationales.',
            'url' => $baseUrl,
            'logo' => $baseUrl . '/logo.svg',
            'image' => $baseUrl . '/web-app-manifest-512x512.png',
            'address' => [
                '@type' => 'PostalAddress',
                'streetAddress' => 'Camayenne, Commune de Dixinn',
                'addressLocality' => 'Conakry',
                'addressCountry' => 'GN',
            ],
            'contactPoint' => [
                '@type' => 'ContactPoint',
                'telephone' => '+224-621-41-85-56',
                'contactType' => 'customer service',
                'email' => 'dg@lbsguinee.com',
                'availableLanguage' => ['fr', 'en'],
            ],
            'areaServed' => [
                '@type' => 'Country',
                'name' => $locale === 'fr' ? 'Guinée' : 'Guinea',
            ],
        ];
    }

    /**
     * Configure le SEO spécifique à une page avec support multilingue
     *
     * @param string $translationKey Clé de traduction dans lang/{locale}/seo.php (ex: 'home', 'contact')
     * @param string|null $url URL personnalisée (optionnel)
     * @param string|null $image Image personnalisée (optionnel)
     */
    protected function setupPageSEO(string $translationKey, ?string $url = null, ?string $image = null): void
    {
        $locale = app()->getLocale();
        $baseUrl = config('app.url', url('/'));

        // Charger les traductions SEO
        $seoData = trans("seo.{$translationKey}", [], $locale);

        // Fallback sur les traductions par défaut si la clé n'existe pas
        if (!is_array($seoData) || !isset($seoData['title'])) {
            $seoData = trans('seo.default', [], $locale);
        }

        $title = $seoData['title'] ?? 'LOURA BUNKER SERVICES';
        $description = $seoData['description'] ?? '';

        // Générer l'URL avec la locale
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
            ->addProperty('locale', $locale === 'fr' ? 'fr_FR' : 'en_US')
            ->addImage($pageImage);

        // Twitter Card
        TwitterCard::setTitle($title)
            ->setDescription($description)
            ->setImage($pageImage);

        // JSON-LD pour la page (WebPage uniquement, sans propriétés Organization)
        JsonLd::setType('WebPage')
            ->setTitle($title)
            ->setDescription($description)
            ->setUrl($pageUrl)
            ->addImage($pageImage);
    }

    /**
     * Génère les balises hreflang pour toutes les langues disponibles
     *
     * @return array Tableau de liens hreflang ['locale' => 'url']
     */
    protected function generateHreflangLinks(): array
    {
        $availableLocales = config('app.available_locales', ['fr', 'en']);
        $currentRoute = request()->route();
        $hreflangLinks = [];

        if (!$currentRoute) {
            return $hreflangLinks;
        }

        $routeName = $currentRoute->getName();
        $routeParams = $currentRoute->parameters();

        foreach ($availableLocales as $locale) {
            // Remplacer la locale dans les paramètres
            $routeParams['locale'] = $locale;

            try {
                $url = route($routeName, $routeParams, false);
                $hreflangLinks[$locale] = url($url);
            } catch (\Exception $e) {
                // Si la route n'existe pas pour cette locale, ignorer
                continue;
            }
        }

        return $hreflangLinks;
    }
}

