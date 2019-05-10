import { Injectable } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { CollegueAModifier } from '../models/CollegueAModifier';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, Subject, Subscription } from 'rxjs';
import { tap} from 'rxjs/operators';
import { ColleguePhoto } from '../models/colleguePhoto';
import { Note } from '../models/Note';
import { CollegueConnecte } from '../models/CollegueConnecte';
import { InfoAuth } from '../models/InfoAuth';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  private connecteCol = false;
  private colConnecte = new Subject<CollegueConnecte>();
  private subject = new Subject<Collegue>();
  tabResultat = []; 

  constructor(private _http: HttpClient) {
    this.recupCollegueConnecte().subscribe((col)=> {
      this.connecteCol = true;
      this.colConnecte.next(col);
    })
  }

   colConnecteObs() {
     return this.colConnecte.asObservable();
   }

  
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
    return this._http.get<string[]>(`${environment.urlRecupNom}?nom=${nom}`,{
      withCredentials : true
    });
  }
/* ancienne version de recupCollegueCourant
  recupererCollegueCourant(): Collegue {
    return collegueMock;
  }
  */

 publish(matricule: string): Observable<Collegue> {
  // publier dans le subject
  return this._http.get<Collegue>(`${environment.urlRecupNom}/${matricule}`,{
    withCredentials : true
  })
          .pipe(
            /*map(col => {
              this.subject.next(col);
              return col;
            }),*/
            tap (col => this.subject.next(col))
          );

}

recupPhoto(): Observable<ColleguePhoto>{
  return this._http.get<ColleguePhoto>(`${environment.urlRecupNom}/photos`,{
    withCredentials : true
  });
}


 recupererCollegueCourant(): Observable<Collegue>{
   return this.subject.asObservable();
 }

 envoyeCollegueModifier(collegueAModifier:CollegueAModifier,matricule:string): Observable<CollegueAModifier>{
   return this._http.patch<CollegueAModifier>(`${environment.urlRecupNom}/${matricule}`,collegueAModifier,{
    withCredentials : true
  });
 }

 envoyeCollegue(collegue:Collegue){
   return this._http.post(`${environment.urlRecupNom}`,collegue,{
    withCredentials : true
  });
 }

 evoyerNote(text:string, matricule:string){
   return this._http.post<Note>(`${environment.urlRecupNom}/${matricule}/notes`,text,{
    withCredentials : true
  });
 }

 recupNote(matricule:string): Observable<Note>{
   return this._http.get<Note>(`${environment.urlRecupNom}/${matricule}/notes`,{
    withCredentials : true
  });
 }


 recupCollegueConnecte(){
   return this._http.get<CollegueConnecte>(`${environment.urlServ}/me`,{
    withCredentials : true
  }).pipe(tap(colConnect => this.colConnecte.next(colConnect)))
 }



 envoyeInfoAuth(infoAuth:InfoAuth){
   return this._http.post<InfoAuth>(`${environment.urlServ}/auth`,infoAuth, {
     withCredentials : true
   }).pipe(
     tap(col => {
       //permet d'afficher le nom et le prenom du collegueConnecte a l'actualisation de l'authentification
      this.recupCollegueConnecte().subscribe((col)=> {
        this.connecteCol = true;
        this.colConnecte.next(col);
      })
     })
   )
 }

 logout(){
   return this._http.post(`${environment.urlServ}/logout`,null, {
    withCredentials : true
  })
 }
}