<?php

namespace App\Http\Controllers;

use Illuminate\Http\Response;

class SitemapController extends Controller
{
    public function index(): Response
    {
        $baseUrl = config('app.url');
        $availableLocales = config('app.available_locales', ['fr', 'en']);
        $defaultLocale = config('app.locale', 'fr');

        // Définir les routes et leurs priorités
        $routes = [
            [
                'name' => 'home',
                'changefreq' => 'weekly',
                'priority' => '1.0',
            ],
            [
                'name' => 'contact.index',
                'changefreq' => 'monthly',
                'priority' => '0.8',
            ],
        ];

        $xml = '<?xml version="1.0" encoding="UTF-8"?>' . "\n";
        $xml .= '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">' . "\n";

        foreach ($routes as $route) {
            $lastmod = now()->toAtomString();

            // Générer une entrée pour chaque locale
            foreach ($availableLocales as $locale) {
                try {
                    $url = route($route['name'], ['locale' => $locale], false);
                    $fullUrl = url($url);

                    $xml .= "  <url>\n";
                    $xml .= "    <loc>" . htmlspecialchars($fullUrl) . "</loc>\n";
                    $xml .= "    <lastmod>" . $lastmod . "</lastmod>\n";
                    $xml .= "    <changefreq>" . $route['changefreq'] . "</changefreq>\n";
                    $xml .= "    <priority>" . $route['priority'] . "</priority>\n";

                    // Ajouter les balises hreflang pour toutes les langues
                    foreach ($availableLocales as $altLocale) {
                        try {
                            $altUrl = route($route['name'], ['locale' => $altLocale], false);
                            $altFullUrl = url($altUrl);
                            $xml .= "    <xhtml:link rel=\"alternate\" hreflang=\"" . htmlspecialchars($altLocale) . "\" href=\"" . htmlspecialchars($altFullUrl) . "\" />\n";
                        } catch (\Exception $e) {
                            // Ignorer si la route n'existe pas pour cette locale
                            continue;
                        }
                    }

                    // Ajouter x-default pour la langue par défaut
                    if ($locale === $defaultLocale) {
                        try {
                            $defaultUrl = route($route['name'], ['locale' => $defaultLocale], false);
                            $defaultFullUrl = url($defaultUrl);
                            $xml .= "    <xhtml:link rel=\"alternate\" hreflang=\"x-default\" href=\"" . htmlspecialchars($defaultFullUrl) . "\" />\n";
                        } catch (\Exception $e) {
                            // Ignorer si la route n'existe pas
                        }
                    }

                    $xml .= "  </url>\n";
                } catch (\Exception $e) {
                    // Ignorer si la route n'existe pas pour cette locale
                    continue;
                }
            }
        }

        $xml .= '</urlset>';

        return response($xml, 200)
            ->header('Content-Type', 'application/xml; charset=utf-8');
    }
}

