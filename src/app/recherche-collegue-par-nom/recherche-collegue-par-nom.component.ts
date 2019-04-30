import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {

  tabResultat = [];
  constructor(private _srv : DataService) { }

  ngOnInit() {
  }

  @Output() change:EventEmitter<string> = new EventEmitter<string>()

  rechercheParNom(nomSaisie:string){
    this.tabResultat = this._srv.rechercheParNom(nomSaisie);
  }

}
