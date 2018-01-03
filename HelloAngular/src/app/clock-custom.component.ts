import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock-custom',
  template: `
    <p>{{now | date:format}}</p>
  `,
  styles: []
})
export class ClockCustomComponent implements OnInit {

  public now = new Date();

  @Input()
  public format = 'HH:mm';

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.now = new Date();
    }, 1000);
  }

}
