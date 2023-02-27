import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { InputComponent } from './components/input/input.component';
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [
  HomeComponent,
  InputComponent
  

  ],
  exports:[
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule

  ]
})
export class GetImagenModule { }
