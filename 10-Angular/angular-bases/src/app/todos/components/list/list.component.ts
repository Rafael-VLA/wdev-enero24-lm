import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../interfaces/todo';

@Component({
  selector: 'todos-list', // [nombreModule]-[nombreComponent]
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output() // Prop de salida
  public onDelete: EventEmitter<string> = new EventEmitter();

  @Output()
  public onCheck: EventEmitter<string> = new EventEmitter();

  @Input() // Props de entra
  public todos:Todo[] = [];

  handleDelete(idTodo: string){ // manejador de eliminar
    this.onDelete.emit(idTodo);
  }
  
  handleCheck(idTodo: string){ // manejador de check
    this.onCheck.emit(idTodo);
  }

  // Sin ngModel
  // public handleChange(event: Event){
  //   const input = event.target as HTMLInputElement; // Que elemento tengo
  //   const text = input.value;
  //   this.inputText = text;
  // }

  //['Comprar huevos', 'Aprender angular', 'Ver serie favorita']
}
