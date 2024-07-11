import { Component, EventEmitter, Output } from "@angular/core";
import { ToastrService } from 'ngx-toastr';
import { Todo } from "../../interfaces/todo";

@Component({
    selector: "todos-add-todo", // [nombreModulo]-[nombreComponente]
    templateUrl: "./add-todo.component.html"
})
export class AddTodoComponent {

    constructor(private toastr: ToastrService) {
        
    }

    @Output()
    public onAddTodo: EventEmitter<Todo> = new EventEmitter();

    public inputText: string = '';

    public handleKeyDown(event: KeyboardEvent){
        if(event.key === 'Enter'){
            this.handleAdd();
        }
    }
    
    public handleAdd(){

        if(this.inputText.length === 0) {
            this.toastr.error("El campo no puede estar vacío", "Error", {
                positionClass: "toast-bottom-right"
            });
            return;
        }; // Si el input está vacío, termina la función

        const newTodo: Todo = {
            id: crypto.randomUUID(),
            title: this.inputText,
            checked: false
        }
        
        this.inputText = '';
        this.onAddTodo.emit(newTodo);
    }
}