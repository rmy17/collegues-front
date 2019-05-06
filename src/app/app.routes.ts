import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { GallerieComponent } from './gallerie/gallerie.component';

export const ROUTES: Routes = [
    { path: 'Accueil' , component: AccueilComponent },
    { path: 'Gallerie' , component: GallerieComponent },

    // redirection par défault vers /Acceuil
    { path: '', pathMatch: 'full', redirectTo: '/Accueil' }
]