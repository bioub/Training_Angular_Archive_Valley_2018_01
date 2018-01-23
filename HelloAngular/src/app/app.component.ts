import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-clock></app-clock>
    <hr>
    <app-hello></app-hello>
    <hr>
    <app-clock-custom format="HH:mm:ss"></app-clock-custom>
    <app-clock-custom [format]="myFormat"></app-clock-custom>
    <app-clock-custom></app-clock-custom>
    <hr>
    <app-hello-custom (firstNameUpdated)="firstNameUpdatedHandler($event)"></app-hello-custom>
    <hr>
    <app-dropdown [elements]="['Show', 'Delete']" (selected)="selectedHandler($event)">
    </app-dropdown>
  `,
  styles: []
})
export class AppComponent {
  public myFormat = 'HH';

  public firstNameUpdatedHandler(firstName) {
    console.log('FirstName', firstName);
  }

  public selectedHandler(element) {
    console.log('Selected', element);
  }
}
