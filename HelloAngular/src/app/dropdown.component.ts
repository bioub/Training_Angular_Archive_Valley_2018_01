import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  template: `
    <p *ngFor="let elt of elements">
      {{elt}}
    </p>
  `,
  styles: []
})
export class DropdownComponent implements OnInit {

  public elements = ['Elt 1', 'Elt 2', 'Elt 3'];

  constructor() { }

  ngOnInit() {
  }

}
