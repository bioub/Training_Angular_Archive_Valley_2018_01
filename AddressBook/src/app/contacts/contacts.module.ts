import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsAddComponent } from './contacts-add/contacts-add.component';
import { ContactsShowComponent } from './contacts-show/contacts-show.component';
import { RouterModule } from '@angular/router';
import { ContactService } from './contact.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  providers: [
    // {provide: ContactService, useClass: ContactService}
    // or shorthand
    ContactService,
  ],
  declarations: [ContactsComponent, ContactsListComponent, ContactsAddComponent, ContactsShowComponent]
})
export class ContactsModule { }
