import { Component } from '@angular/core';
import { Todo } from '../../interface/todo';

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

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  
  public todos: Todo[] = [todo1, todo2, todo3];
  public inputText: string = '';

  public handleDelete(idTodo: string){
    // 3
    // 1, 2, 3, 4 , 5
    // 1, 2, 4, 5
    const newTodos = this.todos.filter(todo => todo.id !== idTodo);

    this.todos = newTodos;
    // console.log('Id del todo actual:', idTodo);
  }

  private addTodo(){
    const newTodo:Todo = {
      id: crypto.randomUUID(),
      title: this.inputText,
      checked: false
    }

    this.todos.push(newTodo);
    this.inputText = '';
  }

  // Crear metodo que se llame handleAdd e imprima un 'hola mundo'
  public handleAdd(){
    this.addTodo();
  }
  
  public handleKeyDown(event: KeyboardEvent){
    if(event.key === 'Enter'){
      this.addTodo();
    }
  }

  public handleChecked(idTodo: string){

    const newTodos = this.todos.map((todo) => {

      if(todo.id === idTodo){ // checked = false
        // todo.checked = !todo.checked; // !false = true 
        todo.checked = todo.checked === true ? false : true; 
      }

      return todo;
    });
    
    this.todos = newTodos;
  }

  // Sin ngModel
  // public handleChange(event: Event){
  //   const input = event.target as HTMLInputElement; // Que elemento tengo
  //   const text = input.value;
  //   this.inputText = text;
  // }

  //['Comprar huevos', 'Aprender angular', 'Ver serie favorita']
}
