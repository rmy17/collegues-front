import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';
import { CollegueAModifier } from '../models/CollegueAModifier';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  message = "";
  ajoutClient = false;
  variable = false;
  booleanButton = false;
  col = new Collegue("","","","",undefined,"");
  collegueAModifier = new CollegueAModifier("","");
  
  constructor(private _serv : DataService) {
   }

  ngOnInit() {
    this._serv.recupererCollegueCourant().subscribe(collegue =>{
      this.col =  collegue;
    });
  }

  ajoutCollegue(){
    console.log(`Création d'un nouveau collègue`);
    this.ajoutClient=true;
  }

  collegueModifier() {
    
      console.log(`Modification du collègue ${this.col.nom}`);
  }

  submit(){
    this.collegueAModifier.email = this.col.email;
    this.collegueAModifier.photoUrl = this.col.photoUrl;
    this._serv.envoyeCollegueModifier(this.collegueAModifier, this.col.matricule).subscribe(colAModif => {}, error => {
      this.message =`Oops ${error.error}`;
      console.log(error)
    });
    this.variable = false;
  }
}
