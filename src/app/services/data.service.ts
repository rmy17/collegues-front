import { Injectable } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { collegueMock } from '../mock/collegues.mock';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, Subject, Subscription } from 'rxjs';
import {map, tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private subject = new Subject<Collegue>();
  tabResultat = []; 
  constructor(private _http: HttpClient) { }

  //Ancienne version de la fonction rechercheParNom
/*
  rechercheParNom(nom: string): string[] {
    tableauMatricule.filter(c => c.nom === nom.toUpperCase()).forEach(col => {
      this.tabResultat.push(col);
      return this.tabResultat;
      
    });
    return this.tabResultat;
  }
*/
  rechercheParNom(nom:string): Observable<string[]> {
    return this._http.get<string[]>(`${environment.urlRecupNom}?nom=${nom}`);
  }
/* ancienne version de recupCollegueCourant
  recupererCollegueCourant(): Collegue {
    return collegueMock;
  }
  */

 publish(matricule: string): Observable<Collegue> {
  // publier dans le subject
  return this._http.get<Collegue>(`${environment.urlRecupNom}/${matricule}`)
          .pipe(
            /*map(col => {
              this.subject.next(col);
              return col;
            }),*/
            tap (col => this.subject.next(col))
          )

}
 recupererCollegueCourant(): Observable<Collegue>{
   return this.subject.asObservable();
 }
}