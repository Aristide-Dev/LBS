# PRD – Product Requirements Document
## Projet : Site Web Vitrine (SPA) – LBS

---

## 1. Présentation générale

### 1.1 Contexte
LBS est une entreprise spécialisée dans le **soutage de pétrole et l’approvisionnement en carburant** pour les secteurs **maritime et industriel**. Dans un environnement B2B fortement réglementé et concurrentiel, l’entreprise souhaite disposer d’un **site web vitrine institutionnel** afin de renforcer sa présence digitale, d’améliorer sa crédibilité auprès des partenaires et de servir de point de contact officiel.

### 1.2 Objectifs du produit
- Présenter officiellement LBS
- Valoriser les activités et services de soutage pétrolier
- Renforcer l’image de marque et la crédibilité institutionnelle
- Faciliter la prise de contact commerciale
- Servir de support institutionnel et professionnel

### 1.3 Public cible
- Entreprises maritimes
- Industries consommatrices de carburant
- Partenaires logistiques et techniques
- Institutions et autorités portuaires
- Clients professionnels (B2B)

---

## 2. Périmètre du produit

### 2.1 Type de site
- Site web vitrine institutionnel
- **Single Page Application (SPA)**
- Responsive (desktop, tablette, mobile)
- Langue : Français (anglais en extension optionnelle)

### 2.2 Hors périmètre
- E-commerce
- Paiement en ligne
- Espace client
- Authentification utilisateur

---

## 3. Arborescence & fonctionnalités

### 3.1 Pages principales

#### Page principale (SPA)
La page principale est une **page unique** structurée en sections accessibles via une navigation fluide.

- **Accueil**
  - Bannière institutionnelle avec logo LBS
  - Message clé : expertise en soutage pétrolier
  - Boutons d’action : Contact / Demande d’information

- **À propos**
  - Présentation de LBS
  - Domaine d’intervention
  - Mission, vision et valeurs

- **Services**
  - **Soutage pétrolier maritime**
  - **Approvisionnement en carburant industriel**
  - **Logistique et assistance opérationnelle**
  - Description détaillée de chaque service

- **Pourquoi choisir LBS**
  - Fiabilité des opérations
  - Respect des normes de sécurité
  - Expertise technique
  - Disponibilité et réactivité

- **Appel à l’action**
  - Invitation à contacter l’entreprise

#### Page Contact
- Formulaire de contact institutionnel
- Coordonnées officielles
- Localisation (Google Maps – optionnel)

---

## 4. Exigences fonctionnelles

- Navigation fluide entre les sections de la SPA
- Scroll fluide et navigation par ancres
- Formulaire de contact fonctionnel avec notification email
- Message de confirmation après soumission
- Compatibilité navigateurs modernes (Chrome, Edge, Firefox)
- Responsive design

---

## 5. Exigences non fonctionnelles

### 5.1 Performance
- Temps de chargement < 3 secondes
- Assets et images optimisés

### 5.2 Sécurité
- HTTPS obligatoire
- Validation backend des données du formulaire
- Protection basique contre le spam

### 5.3 SEO
- Balises méta (title, description)
- Structure HTML sémantique
- Optimisation mobile

---

## 6. Identité visuelle

- Utilisation du logo officiel LBS
- Palette de couleurs inspirée du logo (violet, bleu, blanc)
- Design sobre, industriel et institutionnel
- Typographie moderne et lisible

---

## 7. Stack technique & contraintes techniques

### 7.1 Backend
- **Framework : Laravel 12**
- Respect strict des **nouvelles nomenclatures Laravel 12** (structure des dossiers, conventions, providers, configs)
- Utilisation des **routes nommées** uniquement
- Séparation claire des responsabilités (Controllers, Services, Requests)

### 7.2 Frontend
- **Inertia.js + React**
- Composants écrits en **TSX (TypeScript)**
- Aucune URL codée en dur côté frontend
- Utilisation obligatoire de **Wayfinder** pour la génération et la consommation des routes Laravel côté React :
  - Accès aux routes via `route('nom.de.route')`
  - Alignement strict avec les routes backend

### 7.3 Routing & navigation (Wayfinder)

- Utilisation **obligatoire de Laravel Wayfinder** pour exposer les routes Laravel côté frontend
- Les routes et actions sont **générées automatiquement** par Wayfinder dans des fichiers TypeScript
- Aucune utilisation de `route('nom.de.route')` ou d’URL statique côté React

#### Consommation des routes
- Les routes doivent être **importées depuis les fichiers générés par Wayfinder** (dossier `routes`)
- Exemple d’utilisation dans un composant TSX :

```tsx
import { index } from "@/routes/services";

<Link href={index()}>Nos services</Link>;
```

#### Consommation des actions (POST / PUT / DELETE)
- Les actions doivent être importées depuis les fichiers générés par Wayfinder (dossier `actions`)
- Exemple avec Inertia `useForm` :

```tsx
import { useForm } from "@inertiajs/react";
import { store } from "@/actions/App/Http/Controllers/ContactController";

const form = useForm({ name: "", email: "" });
form.submit(store());
```

#### Contraintes strictes
- Toutes les routes Laravel doivent être **nommées**
- Toute navigation ou soumission doit passer par Wayfinder
- Interdiction d’URLs codées en dur dans le code TSX
- Alignement automatique et garanti entre backend et frontend

### 7.4 Architecture Inertia

- Pages Inertia organisées par domaine fonctionnel
- **Convention de nommage des fichiers TSX** :
  - ❌ Pas de PascalCase / Majuscules (`PublicLayout.tsx`, `AppLayout.tsx` interdits)
  - ✅ Nommage en **kebab-case ou camelCase en minuscules uniquement**
    - Exemples autorisés : `public-layout.tsx`, `app-layout.tsx`, `contact-page.tsx`
- Les composants React suivent la même convention de nommage fichier
- Les noms de composants exportés peuvent rester en PascalCase (convention React)
- Layouts partagés clairement identifiés (ex : `public-layout.tsx`)
- Props Inertia typées et documentées


- Code compatible avec les mises à jour mineures de Laravel 12
- Dépendances maintenues
- Respect des bonnes pratiques Laravel & Inertia

---

## 8. Livrables attendus

- Code source complet
- Site déployé (production ou staging)
- Documentation technique minimale

---

## 9. Planning estimatif

- Conception & validation du contenu : 3 à 5 jours
- Développement : 1 à 2 semaines
- Tests & mise en ligne : 3 à 5 jours

---

## 10. Critères de validation

- Respect du périmètre SPA
- Conformité au design validé
- Fonctionnement du formulaire de contact
- Responsive et performance validées
- Validation finale par le client

---

Document destiné à l’équipe de développement pour la réalisation du site web vitrine (SPA) de LBS.

