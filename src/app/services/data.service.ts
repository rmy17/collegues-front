import { Injectable } from '@angular/core';
import { tableauMatricule } from '../mock/matricules.mock';
import { Collegue } from '../models/Collegue';
import { collegueMock } from '../mock/collegues.mock';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  tabResultat = []
  constructor() { }

  rechercheParNom(nom: string): string[] {
    tableauMatricule.filter(c => c.nom === nom.toUpperCase()).forEach(col => {
      this.tabResultat.push(col);
      return this.tabResultat;
      
    });
    return this.tabResultat;
  }

  recupererCollegueCourant(): Collegue {
    return collegueMock;
  }
}