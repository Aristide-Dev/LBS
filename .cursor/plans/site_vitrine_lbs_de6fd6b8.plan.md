---
name: Site vitrine LBS
overview: Transformer le projet Laravel 12 existant en site vitrine SPA pour LBS, avec la page principale multi-sections, la page contact avec formulaire, et l'identite visuelle institutionnelle (violet, bleu, blanc).
todos:
  - id: backend-controllers
    content: Creer HomeController et ContactController avec ContactRequest
    status: completed
  - id: routes-config
    content: Configurer routes nommees dans web.php et regenerer Wayfinder
    status: completed
  - id: public-layout
    content: Creer public-layout.tsx avec header, navigation et footer
    status: completed
  - id: home-page
    content: Creer home.tsx avec les 5 sections SPA (Hero, About, Services, Why, CTA)
    status: completed
  - id: contact-page
    content: Creer contact.tsx avec formulaire fonctionnel
    status: completed
    dependencies:
      - backend-controllers
  - id: identity-styles
    content: Appliquer identite visuelle LBS (violet, bleu, blanc) dans app.css
    status: completed
---

# Plan - Site Web Vitrine SPA LBS

## Contexte

Le projet Laravel 12 + Inertia + React (TSX) existe avec Wayfinder et Tailwind CSS 4. La page welcome actuelle est la page par defaut Laravel. Le site vitrine LBS necessite une refonte complete du frontend public.

## Architecture cible

```mermaid
flowchart TD
    subgraph Backend [Backend Laravel]
        Routes[routes/web.php]
        HomeCtrl[HomeController]
        ContactCtrl[ContactController]
        ContactReq[ContactRequest]
    end
    
    subgraph Frontend [Frontend React/Inertia]
        PublicLayout[public-layout.tsx]
        HomePage[home.tsx]
        ContactPage[contact.tsx]
        Components[Composants UI]
    end
    
    subgraph Sections [Sections SPA]
        Hero[Accueil/Hero]
        About[A propos]
        Services[Services]
        WhyUs[Pourquoi LBS]
        CTA[Appel a action]
    end
    
    Routes --> HomeCtrl
    Routes --> ContactCtrl
    HomeCtrl --> HomePage
    ContactCtrl --> ContactPage
    HomePage --> PublicLayout
    ContactPage --> PublicLayout
    HomePage --> Sections
    ContactReq --> ContactCtrl
```



## Fichiers a modifier/creer

### 1. Backend Laravel

| Fichier | Action ||---------|--------|| [routes/web.php](routes/web.php) | Modifier les routes publiques || `app/Http/Controllers/HomeController.php` | Creer || `app/Http/Controllers/ContactController.php` | Creer || `app/Http/Requests/ContactRequest.php` | Creer |

### 2. Frontend React/TSX

| Fichier | Action ||---------|--------|| [resources/js/pages/welcome.tsx](resources/js/pages/welcome.tsx) | Supprimer ou remplacer par home.tsx || `resources/js/pages/home.tsx` | Creer - Page principale SPA || `resources/js/pages/contact.tsx` | Creer - Page contact || `resources/js/layouts/public-layout.tsx` | Creer - Layout public || `resources/js/components/public/` | Creer - Composants sections |

### 3. Styles et identite visuelle

| Fichier | Action ||---------|--------|| [resources/css/app.css](resources/css/app.css) | Ajouter palette LBS (violet, bleu, blanc) |

## Implementation detaillee

### Phase 1 : Configuration et routes

1. Creer `HomeController` avec methode `index()` retournant la page home
2. Creer `ContactController` avec methodes `index()` et `store()`
3. Creer `ContactRequest` pour validation du formulaire
4. Mettre a jour [routes/web.php](routes/web.php) avec routes nommees :

- `GET /` -> `home` 
- `GET /contact` -> `contact.index`
- `POST /contact` -> `contact.store`

### Phase 2 : Layout et navigation

1. Creer `public-layout.tsx` avec :

- Header fixe avec logo LBS et navigation
- Navigation par ancres (scroll fluide)
- Footer institutionnel

2. Implementer la navigation responsive (mobile menu)

### Phase 3 : Page principale (SPA)

Creer `home.tsx` avec sections :

1. **Hero/Accueil** : Banniere avec logo, message cle, CTA
2. **A propos** : Presentation, mission, vision, valeurs
3. **Services** : 3 services avec icones et descriptions
4. **Pourquoi LBS** : 4 avantages cles
5. **Appel a action** : Section finale avec CTA contact

### Phase 4 : Page Contact

Creer `contact.tsx` avec :

- Formulaire (nom, email, entreprise, message)
- Coordonnees officielles
- Message de confirmation apres soumission
- Validation frontend et backend

### Phase 5 : Identite visuelle

Mettre a jour `app.css` avec la palette LBS :

- **Primaire** : Violet (#6B21A8 ou similaire)
- **Secondaire** : Bleu (#1E40AF ou similaire)  
- **Neutre** : Blanc (#FFFFFF)
- Typographie moderne et lisible

## Contraintes techniques respectees

- Convention kebab-case pour fichiers TSX
- Routes nommees uniquement
- Wayfinder pour toutes les URLs