import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  template: `
    <p bind-textContent="now | date:'HH:mm:ss'"></p>
    <input bind-value="now | date:'HH:mm:ss'">
    <p [textContent]="now | date:'HH:mm:ss'"></p>
    <input [value]="now | date:'HH:mm:ss'">
    <p [innerHTML]="now | date:'HH:mm:ss'"></p>
    {{now | date:'HH:mm:ss'}}
  `,
  styles: []
})
export class ClockComponent implements OnInit {

  public now = new Date();

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.now = new Date();
    }, 1000);
  }

}
