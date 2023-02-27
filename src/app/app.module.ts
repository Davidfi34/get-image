import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GetImagenModule } from './get-imagen/get-imagen.module';



@NgModule({
  declarations: [
    AppComponent
 

  ],
  imports: [
    BrowserModule,
    GetImagenModule,
    HttpClientModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
