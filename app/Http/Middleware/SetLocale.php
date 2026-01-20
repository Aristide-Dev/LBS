<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class SetLocale
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $locale = $request->route('locale');

        // Valider que la locale est supportée
        if ($locale && in_array($locale, config('app.available_locales', ['fr', 'en']))) {
            app()->setLocale($locale);

            // Stocker la locale en session pour persistance
            session(['locale' => $locale]);
        } else {
            // Si pas de locale dans l'URL, utiliser celle de la session ou la locale par défaut
            $sessionLocale = session('locale', config('app.locale', 'fr'));
            app()->setLocale($sessionLocale);
        }

        return $next($request);
    }
}
