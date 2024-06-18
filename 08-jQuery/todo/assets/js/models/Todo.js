
// Tarea
// Crear y exportar una clase con nombre Todo que tenga las siguientes propiedades
/*
    id => generar id cuando se crea una instancia (no se recibe por le constructor)
    title => se recibe a traves del constructor
    description => se recibe a traves del constructor
    category => se recibe a traves del constructor = nombre de x categoria = string(cadena de texto)
    state => usar false cuando se crea una instancia (no se recibe por le constructor)
*/

export class Todo {
    constructor(title, description, category){
        this.id = crypto.randomUUID();
        this.title = title;
        this.description = description;
        this.category = category;
        this.state = false;
    }
}