import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {

  tabResultat = [];
  message=""
  constructor(private _srv : DataService) { }

  ngOnInit() {
  }

  @Output() change:EventEmitter<string> = new EventEmitter<string>()

  rechercheParNom(nomSaisie:string){
    this._srv.rechercheParNom(nomSaisie).subscribe(
      (tableauMatricule:any) => {
        this.tabResultat = tableauMatricule;
      },
      (error:any) =>{
        this.message = "La recherche à échouer"
      }
    );
  }
  
  //Etape I : recupere matricule quand click 
  recupererCollegueCourant(matricule:string){
    this._srv.publish(matricule).subscribe(mat => {}, err => {
      this.message = "Le matricule n'a pu etre recuperé"
    });
  }
}
