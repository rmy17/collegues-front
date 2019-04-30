import { Component, OnInit } from '@angular/core';
import { collegueMock } from './mock/collegues.mock';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  template: `

  <div class="container-fluid">
  <div class="row justify-content-center">
  <h1>Admission collegue</h1>
  </div>
  </div>

  <div class="container-fluid">
  <div class="row justify-content-center">
  <div class="col-6">
  <app-recherche-collegue-par-nom></app-recherche-collegue-par-nom>
  </div>
  <div class="col-6">
  <app-collegue [col]="unObjetCollegueFourni"></app-collegue>
  </div>
</div>
</div>

    
  `,
  styles: []
})
export class AppComponent implements OnInit{
  title = 'collegues-front';
  unObjetCollegueFourni;

  constructor(private _srv : DataService){
  }

  ngOnInit() {
    this.unObjetCollegueFourni = this._srv.recupererCollegueCourant();
  }
}
