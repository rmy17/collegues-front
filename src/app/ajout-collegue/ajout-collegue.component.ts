import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';
import { CollegueAModifier } from '../models/CollegueAModifier';

@Component({
  selector: 'app-ajout-collegue',
  templateUrl: './ajout-collegue.component.html',
  styleUrls: ['./ajout-collegue.component.css']
})
export class AjoutCollegueComponent implements OnInit {

  message="";
  @Output() retourAfficheCollegue = new EventEmitter<boolean>();
  @Output() messageErreur = new EventEmitter<string>();
  @Output() annul = new EventEmitter<boolean>();

  col = new Collegue("","","","",new Date(),"");
  collegueAModifier = new CollegueAModifier("","");

  constructor(private _serv : DataService) { }

  ngOnInit() {
    //this._serv.recupererCollegueCourant().subscribe(collegue => this.collegueAModifier = new CollegueAModifier (this.col.email, this.col.photoUrl));
  }

  annuler(){
    this.annul.emit(false);
  }

  submit(){
    this._serv.envoyeCollegue(this.col).subscribe( () => {}, err => {
      this.message = err.error;
      this.retourAfficheCollegue.emit(false);
      this.messageErreur.emit(this.message);
      
    });
  }

  retablirEmail(retablir:boolean){
    if(retablir===true){
      this.collegueAModifier.email = this.col.email;
    }
  } 

}
