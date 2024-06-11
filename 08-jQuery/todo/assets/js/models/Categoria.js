class Categoria {
    constructor(title){ // pasar parametos por constructor
        this.id = crypto.randomUUID(); // generar un id
        this.title = title;
        this.createAt = new Date();
    }

    getInformation(){ // metodos y no funciones
        return `id: ${this.id} - title: ${this.title}`;        
    }
}

//export default Categoria;
export {
    Categoria,
    // ...
};

// export default => exportar una sola cosa(clase, un objeto, una variable...)
// export => exportar varias cosas, todo se empaqueta en un objeto