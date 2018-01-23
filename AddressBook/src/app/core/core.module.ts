import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BaseUrlInterceptor } from './base-url.interceptor';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: BaseUrlInterceptor,
    multi: true,
  }],
  declarations: [NavbarComponent, HomeComponent, NotFoundComponent],
  exports: [NavbarComponent],
})
export class CoreModule { }
