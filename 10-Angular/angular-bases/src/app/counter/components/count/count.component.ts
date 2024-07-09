import { Component, Input } from "@angular/core";

@Component({
    selector: 'counter-count', // [nombreModulo]-[nombreComponent]
    templateUrl: './count.component.html',
    styleUrl: './count.component.css'
})
export class CountComponent {
    // crear variable con nombre counter de tipo numero y usarla en el html
    @Input() public title: string = "";
    public counter: number = 0;

    public incrementar(){
        this.counter += 1; // = this.counter = this.counter + 1;
    }

    // decrementar => decrementar counter solo si es mayor a 0
    public decrementar(){
        if(this.counter > 0){
            this.counter--;
        }
    }

    get counterEsMayor(){ // se comporta como propiedad(variable y no metodo)
        return this.counter >= 10;
    }

    get counterEsMenor(){
        return this.counter < 10;
    }
}