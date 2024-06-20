
// tipado de varibles
let nombre = "Rafael"; // inferencia de tipo
let apellido: string;
apellido = "Sequeira";
let edad:number = 23;
let casado:boolean = false;

//let numeroTel: any; // acepta cualquier tipo de dato, se lo que hago
let numeroTel: (string | number | null) = "dasd"; // acepta cualquier tipo de dato, se lo que hago
numeroTel = 85169415;
numeroTel = "85169415";
numeroTel = null;

// tipado de arrays
let frutas = new Array<string>();

frutas.push("Manzana");
frutas.push("Uva");

let listaCompras: string[] = ["Comprar azucar", "Compras sal"]; 
let listaNumeros: number[] = [2, 43, 65, 7]; 
let listaBool: boolean[] = [true, true, false, false]; 
let listDeListas: number[][] = [ [3234, 54, ], [12, 43, 5, 34]]; 

// tipado de funciones
const sumar = (x: number, y: number):number => {
    return x + y;
}

function restar(x: number, y: number):number {
    return x - y;
}

const dividir = (x: number, y:number):(number | null) => {
    let result = x / y;

    if(isNaN(result) || result === Infinity){
        return null; // null
    }

    return result; // number
}

//const result = dividir(0, 0);
//console.log(result);

// tipado de objetos (uso de interfaces y types)

interface PersonaInformacionTrabajo {
    empleo?: string;
    rol?: string;
}

interface Persona extends PersonaInformacionTrabajo {
    nombre: string;
    edad: number | string;
    ciudad: string;
    email?: string; // esta propiedad es opcional
}

type Raza = "Gato" | "Perro";


type InfoMascota = {
    cola: boolean
}

type Mascota = {
    nombre: string,
    raza: Raza, // Gato | Perro
    color?: string
} & InfoMascota

const persona:Persona = {
    nombre: "Rafael",
    edad: "23",
    ciudad: "Limon"
}

const persona2:Persona = {
    nombre: "Pepe",
    edad: 22,
    ciudad: "Heredia",
    email: "pepe@gmail.com"
}

const mascota: Mascota = {
    nombre: "Raul",
    raza: "Perro",
    color: "Blanco",
    cola: true
}

// uso de los enums
enum TipoNotificacion {
    ERROR,
    SUCCESS,
    WARNING
}

type TipoNotificacionText = "ERROR" | "SUCCESS" | "WARNING";

// Con enum
const notificacion = (tipoAlerta: TipoNotificacion, mensaje: string = "Ok"):void => { // tipo void no retornan nada
    if(tipoAlerta === TipoNotificacion.ERROR){
        console.log(mensaje, "error");
    }

    if(tipoAlerta === TipoNotificacion.SUCCESS){
        console.log(mensaje, "success");
    }

    if(tipoAlerta === TipoNotificacion.WARNING){
        console.log(mensaje, "warning");
    }
}

// Con type
const notificacionText = (tipoAlerta: TipoNotificacionText, mensaje: string = "Ok"):void => { // tipo void no retornan nada
    if(tipoAlerta === "ERROR"){
        console.log(mensaje, "error");
    }

    if(tipoAlerta === "SUCCESS"){
        console.log(mensaje, "success");
    }

    if(tipoAlerta === "WARNING"){
        console.log(mensaje, "warning");
    }
}

//notificacion(TipoNotificacion.SUCCESS, "Esto es un error");
//notificacionText("WARNING", "Esto es un error");

// clases (interfaces)

class Empleado {
    public nombre: string;
    public apellido: string;
    private _sueldo: number;

    constructor(nombre: string, apellido: string, sueldo: number){
        this.nombre = nombre;
        this.apellido = apellido;
        this._sueldo = sueldo;
    }

    private obtenerSueldo():number { // Es un metodo
        return this._sueldo;
    }

    get sueldo():number { // metodo get = propiedad de la clase
        return this._sueldo
    }

    set sueldo(nuevoSueldo: number) {
        this._sueldo = nuevoSueldo;
    }

    get fullInformation (){
        return `${this.nombre} - ${this.apellido}`;
    }
}

const emp1 = new Empleado("Rafael", "Sequeira", 200000);

// Ejecuta los sets
emp1.apellido = "Sandoval";
emp1.sueldo = 300000;

// Obtenemos los valores las propiedades
console.log(emp1.fullInformation);

class PersonaX implements Persona {
    nombre: string = "";
    edad: number = 0;
    ciudad: string = "";
}