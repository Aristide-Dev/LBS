---
name: Multilingue SEO LBS
overview: Ajouter le support multilingue (français/anglais) avec gestion des routes localisées, traductions backend/frontend, et optimisation SEO complète (hreflang, URLs localisées, métadonnées par langue).
todos:
  - id: "1"
    content: Configurer les locales dans config/app.php et créer le middleware SetLocale
    status: completed
  - id: "2"
    content: Modifier les routes pour supporter les préfixes de langue (/fr/, /en/)
    status: completed
  - id: "3"
    content: Créer les fichiers de traduction Laravel (lang/fr/ et lang/en/) pour SEO et contenus
    status: completed
  - id: "4"
    content: Adapter le trait HasSEO pour gérer les traductions SEO et générer les balises hreflang
    status: completed
  - id: "5"
    content: Modifier les contrôleurs pour utiliser les traductions SEO et passer la locale à Inertia
    status: completed
  - id: "6"
    content: Créer le système i18n React (hook useTranslation) et les fichiers de traduction frontend
    status: completed
  - id: "7"
    content: Créer le composant language-switcher et l'intégrer dans le layout public
    status: completed
  - id: "8"
    content: Adapter les pages React (home.tsx, contact.tsx) pour utiliser les traductions
    status: completed
  - id: "9"
    content: Ajouter les balises hreflang dans app.blade.php et adapter les métadonnées SEO
    status: completed
  - id: "10"
    content: Mettre à jour le SitemapController pour générer un sitemap multilingue
    status: completed
---

# Plan d'implémentation multilingue avec SEO

## Vue d'ensemble

Ajout du support bilingue (français/anglais) avec:

- Routes localisées (`/fr/`, `/en/`)
- Système de traduction Laravel + React
- SEO optimisé (hreflang, URLs localisées, métadonnées par langue)
- Sélecteur de langue dans l'interface

## Architecture

### Backend (Laravel)

#### 1. Configuration des locales

- **Fichier**: `config/app.php`
  - Définir `available_locales` => `['fr', 'en']`
  - Configurer `locale` et `fallback_locale`

#### 2. Middleware de locale

- **Créer**: `app/Http/Middleware/SetLocale.php`
  - Détecter la locale depuis l'URL (`/fr/`, `/en/`)
  - Définir `app()->setLocale()`
  - Stocker en session/cookie pour persistance

#### 3. Routes localisées

- **Modifier**: `routes/web.php`
  - Grouper les routes publiques avec préfixe `{locale}`
  - Ajouter contrainte: `where('locale', 'fr|en')`
  - Redirection de `/` vers `/fr/` (locale par défaut)
  - Routes nommées avec locale: `route('home', ['locale' => 'fr'])`

#### 4. Fichiers de traduction Laravel

- **Créer**: `lang/fr/` et `lang/en/`
  - `seo.php` - Métadonnées SEO (titles, descriptions)
  - `common.php` - Textes communs (navigation, footer)
  - `home.php` - Contenu page d'accueil
  - `contact.php` - Contenu page contact
  - `validation.php` - Messages de validation

#### 5. Trait HasSEO multilingue

- **Modifier**: `app/Traits/HasSEO.php`
  - Méthode `setupPageSEO()` accepte une clé de traduction
  - Charger titres/descriptions depuis `lang/{locale}/seo.php`
  - Générer URLs canoniques avec locale
  - Ajouter méthode `setupHreflang()` pour générer les balises hreflang

#### 6. Contrôleurs

- **Modifier**: `app/Http/Controllers/HomeController.php`
- **Modifier**: `app/Http/Controllers/ContactController.php`
  - Passer la locale actuelle à Inertia
  - Utiliser traductions pour SEO

#### 7. Middleware Inertia

- **Modifier**: `app/Http/Middleware/HandleInertiaRequests.php`
  - Partager `locale` et `translations` avec Inertia
  - Partager `available_locales` pour le sélecteur

#### 8. Sitemap multilingue

- **Modifier**: `app/Http/Controllers/SitemapController.php`
  - Générer URLs pour chaque locale (`/fr/`, `/en/`)
  - Utiliser `<xhtml:link>` pour hreflang dans le sitemap

### Frontend (React/TypeScript)

#### 9. Système i18n React

- **Créer**: `resources/js/lib/i18n.ts`
  - Hook `useTranslation()` pour accéder aux traductions
  - Fonction `t(key)` pour traduire les clés
  - Gestion du changement de langue

#### 10. Fichiers de traduction React

- **Créer**: `resources/js/locales/fr/` et `resources/js/locales/en/`
  - `common.ts` - Navigation, footer, boutons
  - `home.ts` - Contenu page d'accueil
  - `contact.ts` - Contenu page contact
  - Structure JSON/TypeScript exportable

#### 11. Composant sélecteur de langue

- **Créer**: `resources/js/components/language-switcher.tsx`
  - Dropdown avec drapeaux/icônes FR/EN
  - Changement de langue avec redirection vers la même page dans l'autre langue
  - Intégration dans le header

#### 12. Layout public

- **Modifier**: `resources/js/layouts/public-layout.tsx`
  - Intégrer le sélecteur de langue dans le header
  - Utiliser traductions pour navigation et footer
  - Gérer les URLs avec locale

#### 13. Pages React

- **Modifier**: `resources/js/pages/home.tsx`
- **Modifier**: `resources/js/pages/contact.tsx`
  - Remplacer tous les textes hardcodés par `t('key')`
  - Utiliser les traductions depuis les fichiers de locale

### SEO

#### 14. Balises hreflang

- **Modifier**: `resources/views/app.blade.php`
  - Générer `<link rel="alternate" hreflang="fr" href="...">` pour chaque langue
  - Ajouter `hreflang="x-default"` pour la langue par défaut
  - Utiliser `setupHreflang()` du trait HasSEO

#### 15. Métadonnées localisées

- **Modifier**: `resources/views/app.blade.php`
  - `<html lang="{locale}">` dynamique
  - `<meta property="og:locale">` selon la locale
  - `<meta name="language">` selon la locale

#### 16. Configuration SEO par langue

- **Modifier**: `config/seotools.php`
  - Définir defaults par langue (ou utiliser traductions)
  - Mots-clés SEO adaptés par langue

#### 17. Sitemap XML

- **Modifier**: `app/Http/Controllers/SitemapController.php`
  - Générer entrées pour `/fr/` et `/en/`
  - Ajouter `<xhtml:link>` pour chaque URL avec hreflang

### Détails techniques

#### Routes

```php
// Redirection racine vers /fr/
Route::get('/', fn() => redirect('/fr/'));

// Routes localisées
Route::prefix('{locale}')->where(['locale' => 'fr|en'])->group(function () {
    Route::get('/', [HomeController::class, 'index'])->name('home');
    Route::get('/contact', [ContactController::class, 'index'])->name('contact.index');
    // ...
});
```

#### Structure traductions

```php
// lang/fr/seo.php
return [
    'home' => [
        'title' => 'LOURA BUNKER SERVICES - Soutage Maritime...',
        'description' => 'Votre partenaire de confiance...',
    ],
    // ...
];
```

#### Hook React i18n

```typescript
// resources/js/lib/i18n.ts
export function useTranslation() {
    const { locale, translations } = usePage().props;
    return {
        t: (key: string) => translations[key] || key,
        locale,
    };
}
```

## Fichiers à créer/modifier

### Nouveaux fichiers

- `app/Http/Middleware/SetLocale.php`
- `lang/fr/seo.php`, `lang/fr/common.php`, `lang/fr/home.php`, `lang/fr/contact.php`
- `lang/en/seo.php`, `lang/en/common.php`, `lang/en/home.php`, `lang/en/contact.php`
- `resources/js/lib/i18n.ts`
- `resources/js/components/language-switcher.tsx`
- `resources/js/locales/fr/common.ts`, `resources/js/locales/fr/home.ts`, `resources/js/locales/fr/contact.ts`
- `resources/js/locales/en/common.ts`, `resources/js/locales/en/home.ts`, `resources/js/locales/en/contact.ts`

### Fichiers à modifier

- `config/app.php` - Ajouter available_locales
- `routes/web.php` - Routes localisées
- `app/Traits/HasSEO.php` - Support multilingue SEO
- `app/Http/Controllers/HomeController.php` - Traductions SEO
- `app/Http/Controllers/ContactController.php` - Traductions SEO
- `app/Http/Controllers/SitemapController.php` - Sitemap multilingue
- `app/Http/Middleware/HandleInertiaRequests.php` - Partager locale/translations
- `resources/views/app.blade.php` - Balises hreflang et lang dynamique
- `resources/js/layouts/public-layout.tsx` - Sélecteur langue + traductions
- `resources/js/pages/home.tsx` - Utiliser traductions
- `resources/js/pages/contact.tsx` - Utiliser traductions
- `config/seotools.php` - Configuration par langue (optionnel)

## Points d'attention SEO

1. **Hreflang**: Chaque page doit avoir des balises hreflang pointant vers les versions FR/EN
2. **URLs canoniques**: Doivent inclure la locale (`/fr/`, `/en/`)
3. **Sitemap**: Doit inclure toutes les URLs localisées avec hreflang
4. **Métadonnées**: Titres, descriptions, Open Graph doivent être traduits
5. **Détection automatique**: Rediriger selon Accept-Language header (optionnel)

## Tests à effectuer

1. Navigation entre les langues fonctionne
2. URLs localisées correctes (`/fr/`, `/en/`)
3. Balises hreflang présentes dans le HTML
4. Sitemap contient toutes les URLs localisées
5. Métadonnées SEO traduites correctement
6. Textes de l'interface traduits
7. Persistance de la langue choisie (session/cookie)
