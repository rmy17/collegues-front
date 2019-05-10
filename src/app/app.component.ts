import { Component, OnInit } from '@angular/core';

import { DataService } from './services/data.service';
import { Router } from '@angular/router';
import { CollegueConnecte } from './models/CollegueConnecte';

@Component({
  selector: 'app-root',
  template: `
  <div class="container-fluid">
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
  <div class="row justify-content-center">
    <h1 class="display-4">Admission collegue</h1>
  </div>
  </div>
  <p> vous etes : {{collegueConnecte.nom}} {{collegueConnecte.prenom}}</p>
  </div>
  </div>

  <app-menu></app-menu>

  <router-outlet></router-outlet>
  <div class="container">
  <button type="button" (click)=deconnexion() class="btn btn-primary justify-content-right" data-toggle="button" aria-pressed="false" autocomplete="off">
  Logout
</button>
</div>
  `,
  styles: []
})
export class AppComponent implements OnInit {

  connecte:boolean = false;
  collegueConnecte = new CollegueConnecte("","","","");

  constructor(private _serv : DataService, private router: Router) {
  }

  ngOnInit() {
    this._serv.colConnecteObs().subscribe(col => { 
      this.collegueConnecte = col }, err => { });
  }

  deconnexion(){
    this._serv.logout().subscribe(rep => {
      this.router.navigate(['/Auth'])
    },err => {
      console.log(err)
    })
  }
  
}
