import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ab-contacts-add',
  templateUrl: './contacts-add.component.html',
  styleUrls: ['./contacts-add.component.scss']
})
export class ContactsAddComponent implements OnInit {

  public contact = {
    firstName: '',
    lastName: '',
  };

  constructor() { }

  ngOnInit() {
  }

  handleSubmit() {
    console.log(this.contact);
  }
}
