import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts/contacts.component';
import { ContactsModule } from './contacts/contacts.module';
import { ContactsShowComponent } from './contacts/contacts-show/contacts-show.component';
import { ContactsAddComponent } from './contacts/contacts-add/contacts-add.component';
import { HomeComponent } from './core/home/home.component';
import { NotFoundComponent } from './core/not-found/not-found.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  data: {
    title: 'Homepage',
  }
},
  {
  path: 'contacts',
  component: ContactsComponent,
  children: [{
    path: 'add',
    component: ContactsAddComponent,
  }, {
    path: ':id',
    component: ContactsShowComponent,
  }]
}, {
    path: '**',
    component: NotFoundComponent,
  }];

@NgModule({
  imports: [ContactsModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
