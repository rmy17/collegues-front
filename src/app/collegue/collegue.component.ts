import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  variable = false;
  @Input() col: Collegue;
  
  constructor(private _serv : DataService) {
   }

  ngOnInit() {
    this._serv.recupererCollegueCourant().subscribe(collegue =>{
      this.col =  collegue;
    });
  }

  ajoutCollegue(){
    console.log(`Création d'un nouveau collègue`);
  }

  collegueModifier() {
    
      console.log(`Modification du collègue ${this.col.nom}`);
  }

 

}
