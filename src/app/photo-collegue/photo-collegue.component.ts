import { Component, OnInit, Input } from '@angular/core';
import { tableauMatricule } from '../mock/matricules.mock';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Collegue } from '../models/Collegue';
import { Note } from '../models/Note';

@Component({
  selector: 'app-photo-collegue',
  templateUrl: './photo-collegue.component.html',
  styleUrls: ['./photo-collegue.component.css']
})
export class PhotoCollegueComponent implements OnInit {

  matricule: string;
  col = new Collegue("","","","",undefined,"");
  texte : string;
  note : Note;
  tabNote: Note;

  constructor(private _serv: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.matricule = this.route.snapshot.paramMap.get("matricule");
    console.log(this.matricule)
    this._serv.publish(this.matricule).subscribe(col => { 
      this.col = col }, err => { });
      this._serv.recupNote(this.matricule).subscribe(note => {this.tabNote=note;},err => {});
  }

  pressEnter(event:any){
    if(event.keyCode == 13){
      this._serv.evoyerNote(this.texte,this.matricule).subscribe(note=>{},err => {});
      alert("Note sauvergardé")
    }
  }
}
