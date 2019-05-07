import { Component, OnInit, Input } from '@angular/core';
import { tableauMatricule } from '../mock/matricules.mock';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Collegue } from '../models/Collegue';

@Component({
  selector: 'app-photo-collegue',
  templateUrl: './photo-collegue.component.html',
  styleUrls: ['./photo-collegue.component.css']
})
export class PhotoCollegueComponent implements OnInit {

  matricule: string;
  col: Collegue;

  constructor(private _serv: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    const matricule = this.route.snapshot.paramMap.get("matricule");
    this._serv.publish(matricule).subscribe(col => { 
      this.col = col }, err => { });
  }
}
