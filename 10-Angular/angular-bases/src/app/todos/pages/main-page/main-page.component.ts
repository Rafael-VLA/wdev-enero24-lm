import { Component } from "@angular/core";
import { Todo } from "../../interfaces/todo";
import { TodosService } from "../../services/todos.service";


@Component({
    selector: "todos-main-page",
    templateUrl: "./main-page.component.html"    
})
export class MainPageComponent {

  constructor(public todosService: TodosService){ // Injección de dependencí
    
  }

  
}