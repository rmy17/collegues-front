import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { tableauMatricule } from '../mock/matricules.mock';


@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {

  tabResultat = [];
  constructor() { }

  ngOnInit() {
  }

  @Output() change:EventEmitter<string> = new EventEmitter<string>()

  rechercheParNom(nomSaisie:string){
    console.log(nomSaisie);
    tableauMatricule.filter(c => c.nom === nomSaisie.toUpperCase()).forEach(col => {
      this.tabResultat.push(col);
    });
  }

}
