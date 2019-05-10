import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { GallerieComponent } from './gallerie/gallerie.component';
import { PhotoCollegueComponent } from './photo-collegue/photo-collegue.component';
import { AuthentificationComponent } from './authentification/authentification.component';

export const ROUTES: Routes = [
    { path: 'Accueil' , component: AccueilComponent },
    { path: 'Gallerie' , component: GallerieComponent },
    { path: 'Gallerie/:matricule', component: PhotoCollegueComponent},
    { path: 'Auth', component: AuthentificationComponent},
    // redirection par défault vers /Acceuil
    { path: '', pathMatch: 'full', redirectTo: '/Auth' }
]