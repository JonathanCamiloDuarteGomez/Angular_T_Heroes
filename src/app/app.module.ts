import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Form } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CardComponent } from './card/card.component';
import {tablaComponent } from './tabla/tabla.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    CardComponent,
    tablaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
