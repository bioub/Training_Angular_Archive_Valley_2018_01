import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'ab-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss'],
  exportAs: 'sample'
})
export class ContactsListComponent implements OnInit {

  // public contacts$: Observable<any>;
  public contacts = [];

  constructor(
    private contactService: ContactService,
  ) { }

  ngOnInit() {
    // this.contacts$ = this.contactService.getList();
    this.contactService.getList().subscribe((contacts) => {
      this.contacts = contacts;
    });
  }

}
