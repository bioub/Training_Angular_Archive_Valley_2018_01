import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hello-custom',
  template: `
    <p>FirstName : <input (input)="updateFirstName($event.target.value)"></p>
  `,
  styles: []
})
export class HelloCustomComponent implements OnInit {

  @Output()
  public firstNameUpdated = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  public updateFirstName(firstName) {
    this.firstNameUpdated.emit(firstName);
  }


}
