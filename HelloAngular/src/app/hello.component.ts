import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `
    <p>FirstName : <input [value]="firstName" (input)="firstName = $event.target.value"></p>
    <p>FirstName : <input [(ngModel)]="firstName"></p>
    <p>
      Hello {{firstName}} !
    </p>
  `,
  styles: []
})
export class HelloComponent implements OnInit {

  public firstName = '';

  constructor() { }

  ngOnInit() {
  }

}
