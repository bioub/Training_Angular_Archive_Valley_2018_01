import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  @Input() public elements: string[] = [];
  @Output() public selectionChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

}
