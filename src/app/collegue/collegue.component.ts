import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { collegueMock } from "../mock/Collegues.mock"
import { Collegue } from '../models/Collegue';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  @Input() col: Collegue;
  
  constructor() {
   }

  ngOnInit() {
  }

  ajoutCollegue(){
    console.log(`Création d'un nouveau collègue`);
  }

  collegueModifier() {
    
      console.log(`Modification du collègue ${this.col.nom}`);
  }

}