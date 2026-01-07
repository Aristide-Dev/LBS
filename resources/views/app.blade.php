<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        {{-- SEO Meta Tags --}}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
        <meta name="googlebot" content="index, follow">
        <meta name="language" content="fr">
        <meta name="author" content="LOURA BUNKER SERVICES">
        <meta name="geo.region" content="GN">
        <meta name="geo.placename" content="Conakry, Guinée">
        <meta name="geo.position" content="9.5092;-13.7122">
        <meta name="ICBM" content="9.5092, -13.7122">

        {{-- Open Graph / Facebook --}}
        <meta property="og:type" content="website">
        <meta property="og:site_name" content="LOURA BUNKER SERVICES">
        <meta property="og:locale" content="fr_FR">

        {{-- Twitter Card --}}
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:site" content="@lbsguinee">

        {{-- Canonical URL (sera défini par Inertia Head) --}}
        <link rel="canonical" href="{{ url()->current() }}">

        {{-- Schema.org JSON-LD - Organisation de base --}}
        @php
            $baseUrl = config('app.url', url('/'));
            $schema = [
                '@context' => 'https://schema.org',
                '@type' => 'Organization',
                'name' => 'LOURA BUNKER SERVICES',
                'alternateName' => 'LBS',
                'url' => $baseUrl,
                'logo' => $baseUrl . '/logo.svg',
                'description' => 'Votre partenaire de confiance pour le soutage maritime et les services pétroliers en Guinée et Afrique de l\'Ouest. Fiabilité, sécurité, conformité aux normes internationales.',
                'address' => [
                    '@type' => 'PostalAddress',
                    'streetAddress' => 'Camayenne, Commune de Dixinn',
                    'addressLocality' => 'Conakry',
                    'addressCountry' => 'GN'
                ],
                'contactPoint' => [
                    '@type' => 'ContactPoint',
                    'telephone' => '+224-621-41-85-56',
                    'contactType' => 'customer service',
                    'email' => 'dg@lbsguinee.com',
                    'availableLanguage' => ['fr']
                ],
                'areaServed' => [
                    '@type' => 'Country',
                    'name' => 'Guinée'
                ],
                'sameAs' => []
            ];
        @endphp
        <script type="application/ld+json">
        {!! json_encode($schema, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT) !!}
        </script>

        {{-- Inline script to detect system dark mode preference and apply it immediately --}}
        <script>
            (function() {
                const appearance = '{{ $appearance ?? "system" }}';

                if (appearance === 'system') {
                    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

                    if (prefersDark) {
                        document.documentElement.classList.add('dark');
                    }
                }
            })();
        </script>

        {{-- Inline style to set the HTML background color based on our theme in app.css --}}
        <style>
            html {
                background-color: oklch(1 0 0);
            }

            html.dark {
                background-color: oklch(0.145 0 0);
            }
        </style>

        <title inertia>{{ config('app.name', 'LOURA BUNKER SERVICES') }}</title>

        <link rel="icon" href="/favicon.ico" sizes="any">
        <link rel="icon" href="/favicon.svg" type="image/svg+xml">
        <link rel="apple-touch-icon" href="/apple-touch-icon.png">
        <link rel="manifest" href="/site.webmanifest">

        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />

        @viteReactRefresh
        @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
