import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { InfoAuth } from '../models/InfoAuth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {
  
  message:string;
  
  infoAuth = new InfoAuth("","");

  constructor(private _serv : DataService, private router: Router) { }

  ngOnInit() {
  }

  infoAuthentification(){
    this._serv.envoyeInfoAuth(this.infoAuth).subscribe(inf => {
      this.router.navigate(["/Accueil"])
  },err => {this.message = "Erreur d'authentifiaction ! "});
  }
}
