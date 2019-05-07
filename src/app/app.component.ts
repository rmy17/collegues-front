import { Component, OnInit } from '@angular/core';

import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  template: `
  <div class="container-fluid">
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
  <div class="row justify-content-center">
    <h1 class="display-4">Admission collegue</h1>
  </div>
  </div>
  </div>
  </div>

  <app-menu></app-menu>

  <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }
  
}
