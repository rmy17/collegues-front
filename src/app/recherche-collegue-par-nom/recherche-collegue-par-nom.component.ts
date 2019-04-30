import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { tableauMatricule } from '../mock/matricules.mock';
import { ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {

  tabResultat = [];
  modal = "";
  constructor() { }

  ngOnInit() {
  }

  @Output() change:EventEmitter<string> = new EventEmitter<string>()

  rechercheParNom(nomSaisie:string){
    for (let col of tableauMatricule){
      
      if (col.nom === (nomSaisie.toUpperCase)){
        this.tabResultat.push(col);
      }
    }
    if (this.tabResultat.length === 0){
      this.modal;
    }
  }

}
