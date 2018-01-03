import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ClockComponent } from './clock.component';
import { HelloComponent } from './hello.component';
import { ClockCustomComponent } from './clock-custom.component';
import { HelloCustomComponent } from './hello-custom.component';
import { DropdownComponent } from './dropdown.component';


@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    HelloComponent,
    ClockCustomComponent,
    HelloCustomComponent,
    DropdownComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
