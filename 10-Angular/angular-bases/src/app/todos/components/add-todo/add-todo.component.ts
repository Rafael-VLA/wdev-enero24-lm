import { Component } from "@angular/core";

@Component({
    selector: "todos-add-todo", // [nombreModulo]-[nombreComponente]
    templateUrl: "./add-todo.component.html"
})
export class AddTodoComponent {
    public inputText: string = '';

    public handleKeyDown(event: KeyboardEvent){
        if(event.key === 'Enter'){
        //   this.addTodo();
            console.log("Ejecutanto el evento")
        }
    }
    
    public handleAdd(){
        console.log("Ejecutanto el evento")
        // this.addTodo();
    }
}