import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'ab-contacts-show',
  templateUrl: './contacts-show.component.html',
  styleUrls: ['./contacts-show.component.scss']
})
export class ContactsShowComponent implements OnInit {

  public contact = { name: '' };

  constructor(
    private contactService: ContactService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    // console.log(this.activatedRoute.snapshot.params.id);

    // Don't write this (the first callback can be called in second)
    // this.activatedRoute.params.subscribe((params) => {
    //   this.contactService.getById(params.id).subscribe((contact) => {
    //     this.contact = contact;
    //   });
    // });

    this.activatedRoute.params.pipe(
      map((params) => params.id),
      switchMap((id) => this.contactService.getById(id))
    ).subscribe((contact) => {
      this.contact = contact;
    });
  }

}
