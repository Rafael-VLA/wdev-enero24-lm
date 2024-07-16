import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo';

const todo1: Todo = {
  id: crypto.randomUUID(),
  title: "Comprar huevos",
  checked: false
}

const todo2: Todo = {
  id: crypto.randomUUID(),
  title: "Aprender angular",
  checked: false
}

const todo3: Todo = {
  id: crypto.randomUUID(),
  title: "Ver serie favorita",
  checked: true
}

@Injectable({
    providedIn: "root" // El servicio esté disponible en toda mi aplicación
}) // Angular lo trata como un servicio
export class TodosService {
  public todos: Todo[] = [todo1, todo2, todo3];

  public handleDelete(idTodo: string){
    // 3
    // 1, 2, 3, 4 , 5
    // 1, 2, 4, 5
    const newTodos = this.todos.filter(todo => todo.id !== idTodo);

    this.todos = newTodos;
    // console.log('Id del todo actual:', idTodo);
  }

  public addTodo(todo: Todo){
    this.todos.push(todo);
  }

  public handleCheck(idTodo: string){

    const newTodos = this.todos.map((todo) => {

      if(todo.id === idTodo){ // checked = false
        // todo.checked = !todo.checked; // !false = true 
        todo.checked = todo.checked === true ? false : true; 
      }

      return todo;
    });
    
    this.todos = newTodos;
  }
}