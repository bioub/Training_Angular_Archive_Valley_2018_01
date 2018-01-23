import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  template: `
    <p *ngFor="let elt of elements" (click)="selected.emit(elt)">
      {{elt}}
    </p>
  `,
  styles: [`
    p {
        border: 1px solid black;
        cursor: pointer;
    }
  `]
})
export class DropdownComponent implements OnInit {

  @Input()
  public elements = [];

  @Output()
  public selected = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

}
