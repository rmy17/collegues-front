import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { CollegueComponent } from './collegue/collegue.component';
import { RechercheCollegueParNomComponent } from './recherche-collegue-par-nom/recherche-collegue-par-nom.component';
import { HttpClientModule } from '@angular/common/http';
import { AjoutCollegueComponent } from './ajout-collegue/ajout-collegue.component';
import { EmailValidatorDirective } from './validators/email-validator.directive';
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { GallerieComponent } from './gallerie/gallerie.component';
import { MenuComponent } from './menu/menu.component';
import { PhotoCollegueComponent } from './photo-collegue/photo-collegue.component';

@NgModule({
  declarations: [
    AppComponent,
    CollegueComponent,
    RechercheCollegueParNomComponent,
    AjoutCollegueComponent,
    EmailValidatorDirective,
    AccueilComponent,
    GallerieComponent,
    MenuComponent,
    PhotoCollegueComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
