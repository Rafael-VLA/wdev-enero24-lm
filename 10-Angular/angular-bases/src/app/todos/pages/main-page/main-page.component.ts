import { Component } from "@angular/core";
import { Todo } from "../../interfaces/todo";
import { TodosService } from "../../services/todos.service";


@Component({
    selector: "todos-main-page",
    templateUrl: "./main-page.component.html"    
})
export class MainPageComponent {

  constructor(private todosService: TodosService){ // Injección de dependencí
    
  }

  addTodo(todo: Todo){
    this.todosService.addTodo(todo)
  }

  get todos() { // Lo interpreta como una propiedad
    return this.todosService.todos;
  }

  handleDelete(idTodo: string){
    this.todosService.handleDelete(idTodo);
  }

  handleCheck(idTodo: string){
    this.todosService.handleCheck(idTodo);
  }

}