import { Component, OnInit } from '@angular/core';
import { ColleguePhoto } from '../models/colleguePhoto';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-gallerie',
  templateUrl: './gallerie.component.html',
  styleUrls: ['./gallerie.component.css']
})
export class GallerieComponent implements OnInit {

  colleguePhoto = new ColleguePhoto("","");
  tabcolleguesPhoto;

  constructor(private _serv : DataService) { }

  ngOnInit() {
    this._serv.recupPhoto().subscribe(colPhoto => {this.tabcolleguesPhoto=colPhoto;},err => {});
  }

  
}

