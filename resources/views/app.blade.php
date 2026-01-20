<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        {{-- SEO Meta Tags générés par SEOTools --}}
        @php
            $seoMeta = app('seotools.metatags');
            $seoOpenGraph = app('seotools.opengraph');
            $seoTwitter = app('seotools.twitter');
            $seoJsonLd = app('seotools.json-ld');
        @endphp
        {!! $seoMeta->generate() !!}
        {!! $seoOpenGraph->generate() !!}
        {!! $seoTwitter->generate() !!}
        {!! $seoJsonLd->generate() !!}

        {{-- Schéma JSON-LD Organization (séparé du WebPage pour éviter les avertissements) --}}
        @if(isset($organizationSchema))
        <script type="application/ld+json">
            {!! json_encode($organizationSchema, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT) !!}
        </script>
        @endif

        {{-- Balises hreflang pour le SEO multilingue --}}
        @if(isset($hreflangLinks) && is_array($hreflangLinks))
            @foreach($hreflangLinks as $locale => $url)
                <link rel="alternate" hreflang="{{ $locale }}" href="{{ $url }}">
            @endforeach
            {{-- Balise x-default pour la langue par défaut (français) --}}
            @if(isset($hreflangLinks['fr']))
                <link rel="alternate" hreflang="x-default" href="{{ $hreflangLinks['fr'] }}">
            @endif
        @endif

        {{-- Meta Tags supplémentaires non gérés par SEOTools --}}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
        <meta name="googlebot" content="index, follow">
        <meta name="language" content="{{ app()->getLocale() }}">
        <meta name="author" content="LOURA BUNKER SERVICES">
        <meta name="geo.region" content="GN">
        <meta name="geo.placename" content="Conakry, Guinée">
        <meta name="geo.position" content="9.5092;-13.7122">
        <meta name="ICBM" content="9.5092, -13.7122">
        <meta property="og:locale" content="{{ app()->getLocale() === 'fr' ? 'fr_FR' : 'en_US' }}">

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
