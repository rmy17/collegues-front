import { Component } from '@angular/core';
import { collegueMock } from './mock/collegues.mock';

@Component({
  selector: 'app-root',
  template: `

    <app-collegue [col]="unObjetCollegueFourni"></app-collegue>
  `,
  styles: []
})
export class AppComponent {
  title = 'collegues-front';
  unObjetCollegueFourni  = collegueMock;
}
