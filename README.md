# Laravel Starter Kit (React + DaisyUI)

Un kit de démarrage moderne pour Laravel, utilisant React, Inertia.js, Tailwind CSS 4 et DaisyUI 5. Ce starter kit inclut une authentification complète avec Laravel Fortify et une interface utilisateur prête à l'emploi.

## 🚀 Fonctionnalités

- **Laravel 12** : La dernière version du framework PHP.
- **React 19 & Inertia.js** : Pour des applications monopages (SPA) fluides en utilisant le routage Laravel.
- **Tailwind CSS 4 & DaisyUI 5** : Une stack CSS ultra-performante avec des composants UI personnalisables.
- **Laravel Fortify** : Authentification backend complète (Login, Register, Password Reset, Email Verification, Two-Factor Authentication).
- **Laravel Wayfinder** : Intégration avancée du routage Laravel dans React.
- **Bun** : Gestionnaire de paquets JavaScript ultra-rapide utilisé par défaut.
- **Pest** : Framework de tests élégant pour PHP.
- **TypeScript** : Typage statique pour une meilleure expérience de développement.
- **Prêt pour le SSR** : Support du Server-Side Rendering inclus.

## 🛠️ Stack Technique

- **Backend** : [Laravel](https://laravel.com)
- **Frontend** : [React](https://react.dev), [Inertia.js](https://inertiajs.com)
- **Style** : [Tailwind CSS](https://tailwindcss.com), [DaisyUI](https://daisyui.com)
- **Authentification** : [Laravel Fortify](https://laravel.com/docs/fortify)
- **Outils** : Bun, Vite, Pest, ESLint, Prettier

## 📦 Installation

### Prérequis

- PHP 8.4+
- Composer
- [Bun](https://bun.sh) (recommandé) ou Node.js
- SQLite (ou un autre moteur de base de données)

### Étapes d'installation

#### Via l'installateur Laravel (Recommandé)

Si vous avez l'installateur Laravel installé globalement, vous pouvez créer un nouveau projet directement :

```bash
laravel new mon-projet --using=https://github.com/michelmb-dev/laravel-starter-kit-react-daisyui
```

#### Via Git (Alternative)

1. **Cloner le projet** :
   ```bash
   git clone https://github.com/michelmb-dev/laravel-starter-kit-react-daisyui.git
   cd laravel-starter-kit-react-daisyui
   ```

2. **Installation et configuration automatique** :
   Le projet inclut une commande de configuration rapide via Composer :
   ```bash
   composer run setup
   ```
   *Cette commande installe les dépendances PHP et JS, crée le fichier `.env`, génère la clé d'application, crée la base de données SQLite et lance les migrations.*

   **OU manuellement** :
   ```bash
   composer install
   cp .env.example .env
   php artisan key:generate
   touch database/database.sqlite
   php artisan migrate
   bun install
   ```

## 🖥️ Développement

Pour lancer le serveur de développement (PHP + Vite + Queue + Logs) simultanément :

```bash
composer run dev
```

Si vous utilisez le rendu côté serveur (SSR) :
```bash
composer run dev:ssr
```

## 🧪 Tests

Exécutez les tests avec Pest :
```bash
composer run test
```

## 📁 Structure du projet (JS)

- `resources/js/components/ui` : Composants de base basés sur DaisyUI.
- `resources/js/pages` : Pages de l'application (Auth, Dashboard, Settings).
- `resources/js/layouts` : Layouts réutilisables (App, Auth).
- `resources/js/hooks` : Hooks React personnalisés.
