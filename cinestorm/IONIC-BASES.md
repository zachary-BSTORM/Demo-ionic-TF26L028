# <center>Ionic</center>

#### Installation

- docs ionic
```bash
https://ionicframework.com/docs/
```

- version de npm (npm 10 bug sur les projets récents)
```bash
npm install -g npm@11
```

- installation de ionic
```bash
npm install -g @ionic/cli
```

- vérifier la version de ionic
```bash
ionic --version
```

## Création de projet Ionic-Angular

```bash
ionic start cinestorm blank --type=angular
```
- cinestorm : nom du projet
- blank : template de base
- --type=angular : framework à utiliser
- si la question est posée : choisir **Standalone** (pas NgModules)

### Lancer l'application

```bash
ionic serve
```
- port 8100, recompile à chaque sauvegarde
- ⚠️ toujours lancer depuis la **racine du projet** (là où est `package.json`), pas depuis `src/`
- penser au mode responsive des DevTools (F12) pour simuler un mobile

---

# Structure d'une page

Toute page = un en-tête + une zone de contenu défilante.
⚠️ Sans ce squelette, la page s'affiche **sans fond, par-dessus la précédente** (page « transparente »).

```html
<ion-header>
  <ion-toolbar color="primary">
    <ion-title>CinéStorm</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content class="ion-padding">
  Contenu de la page (scroll géré automatiquement)
</ion-content>
```

Côté TypeScript : une page est un simple composant Angular standalone.

```ts
import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent], // ⚠️ tout ce que le template utilise
})
export class HomePage {}
```

### Générer une page

```bash
ionic g page nom-de-la-page
```

---

# Navigation

### 1. Déclarer les routes — `src/app/app.routes.ts`

Chargement en lazy loading via `loadComponent` :

```ts
export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then(m => m.HomePage),
  },
  {
    path: 'movies/:id',   // route avec paramètre
    loadComponent: () => import('./details/details.page').then(m => m.DetailsPage),
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
```

### 2. Naviguer depuis le HTML — `routerLink`

```html
<ion-button routerLink="/movies">Voir les films</ion-button>

<ion-item [routerLink]="['/movies', m.id]" button detail>{{ m.title }}</ion-item>
```
- `button` : l'item devient cliquable / `detail` : chevron « > »
- ⚠️ imports nécessaires : `RouterLink` (@angular/router) **et** `IonRouterLink` (@ionic/angular)

### 3. Naviguer depuis le TS — `NavController`

```ts
private nav = inject(NavController);

this.nav.navigateForward(['/movies', id]);  // animation "avant"
this.nav.navigateBack('/movies');           // animation "retour"
this.nav.navigateRoot('/login');            // vide la pile (logout…)
```

### 4. Le bouton retour

⚠️ TOUJOURS dans `ion-buttons slot="start"` dans une `ion-toolbar` — sinon il est géant.
⚠️ TOUJOURS avec `defaultHref` — sinon il disparaît quand la pile est vide (F5, live reload, URL directe).

```html
<ion-header>
  <ion-toolbar color="primary">
    <ion-buttons slot="start">
      <ion-back-button defaultHref="/home"></ion-back-button>
    </ion-buttons>
    <ion-title>Détail</ion-title>
  </ion-toolbar>
</ion-header>
```

### 5. Lire un paramètre de route

```ts
private route = inject(ActivatedRoute);

ionViewWillEnter() {
  const id = +this.route.snapshot.params['id'];   // toujours une string => conversion
  this.movie.set(this.movieService.getById(id));
}
```

---

# Les trucs importants (pièges)

### Imports standalone
- Une **balise** oubliée dans `imports` → erreur `NG8001 not a known element` → quickfix `Ctrl+.`
- Une **directive attribut** oubliée (`routerLink`, `formControlName`…) → **inerte SANS erreur** : un routerLink qui « ne fait rien » = import manquant

### `ionViewWillEnter` vs `ngOnInit`
Ionic garde les pages en mémoire (pile de navigation) :
- `ngOnInit` → **une seule fois** à la création
- `ionViewWillEnter` → **à chaque affichage** → c'est là qu'on (re)charge les données

### Les icônes (Ionicons)
Chaque icône doit être enregistrée avant usage :

```ts
import { addIcons } from 'ionicons';
import { add, trash } from 'ionicons/icons';

constructor() {
  addIcons({ add, trash });
}
```
```html
<ion-icon name="trash" color="danger"></ion-icon>
```
Catalogue : https://ionic.io/ionicons

### Les signals (rappels)
- Un signal initialisé vide se type **toujours** : `signal<Movie[]>([])` (sinon `never[]`)
- Un `computed` avec accolades a besoin d'un **`return`**
- Un signal/computed se déclare **une seule fois** — jamais de `this.monComputed = ...` ensuite

### Espacement

```html
<ion-content class="ion-padding">      <!-- 16px sur les 4 côtés -->
```
- déclinaisons : `ion-padding-top`, `-horizontal`… / marges : `ion-margin`
- valeur globale : `--ion-padding: 20px;` dans `variables.scss`

### Styler un composant Ionic (Shadow DOM)
Le CSS classique ne traverse pas → passer par les variables CSS du composant :

```scss
ion-toolbar {
  --background: #16324f;
  --color: #ffffff;
}
```
(liste des variables : bas de la doc de chaque composant)
