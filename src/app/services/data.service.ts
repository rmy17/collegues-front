import { Injectable } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { CollegueAModifier } from '../models/CollegueAModifier';
import { collegueMock } from '../mock/collegues.mock';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, Subject, Subscription } from 'rxjs';
import {map, tap} from 'rxjs/operators';
import { ColleguePhoto } from '../models/colleguePhoto';
import { Note } from '../models/Note';


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
          );

}

recupPhoto(): Observable<ColleguePhoto>{
  return this._http.get<ColleguePhoto>(`${environment.urlRecupNom}/photos`);
}


 recupererCollegueCourant(): Observable<Collegue>{
   return this.subject.asObservable();
 }

 envoyeCollegueModifier(collegueAModifier:CollegueAModifier,matricule:string): Observable<CollegueAModifier>{
   return this._http.patch<CollegueAModifier>(`${environment.urlRecupNom}/${matricule}`,collegueAModifier);
 }

 envoyeCollegue(collegue:Collegue){
   return this._http.post(`${environment.urlRecupNom}`,collegue);
 }

 evoyerNote(text:string, matricule:string){
   return this._http.post<Note>(`${environment.urlRecupNom}/${matricule}/notes`,text);
 }

 recupNote(matricule:string): Observable<Note>{
   return this._http.get<Note>(`${environment.urlRecupNom}/${matricule}/notes`);
 }


}