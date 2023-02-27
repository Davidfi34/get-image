import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {


  constructor(){}
  @Output() onEnter   : EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder : string = '';

  debounce : Subject<string> = new Subject();
  termino  : string = '';


 ngOnInit(){
    this.debounce
    .pipe(debounceTime(300))
    .subscribe(valor => {
      console.log(valor);
      this.onDebounce.emit( valor );

    });
 }

  buscar(){

    if(this.termino.length != 0){
      this.onEnter.emit( this.termino );
      console.log('con datos');
      
    }else{
      console.log('sin datos');
      
    }

  }

  teclaPresionada(){
   
    this.debounce.next(this.termino);

  }

}
