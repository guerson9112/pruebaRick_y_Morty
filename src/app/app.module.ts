import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

import { InicioComponent } from './components/inicio/inicio.component';


import { MaterialModule } from 'src/app/shared/material/material.module';
import { ListadoComponent } from './components/listado/listado.component';
import { DialogComponent } from './shared/ui/dialog/dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ListadoComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,

    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
