// https://www.youtube.com/watch?v=JDfUKcQlpEE&list=PL42UNLc8e48RRGwL5VA-TxCP4Kdt3-9-Q&ab_channel=GentlemanProgramming
//https://www.youtube.com/watch?v=MLhzBGJRBsA&list=PL42UNLc8e48RRGwL5VA-TxCP4Kdt3-9-Q&index=8&ab_channel=GentlemanProgramming

let a:any = 1 // Cualquier tipo
a = 'g'

let b:number = 2;
let c:boolean = true;
let d:boolean[] = [true, false] // Arreglo de boleanos


// Posibilidad private
class Transporte {
    private velocidad:number; //No hay forma de acceder a esa variable desde afuera

    constructor(velocidad:number){
        this.velocidad = velocidad
    }

    getVelocidad(){
        return this.velocidad
    }
    setVelocidad(velocidad:number):void { //void => no retorna nada
        this.velocidad = velocidad
    }
}

//Herencia
class Auto extends Transporte {
    // Auto tiene todo las mismas cosas de transporte
    numeroDePuertas:number

    constructor(velocidad:number, numeroDePuertas:number){
        super(velocidad); // Llamar al constructor del padre
        this.numeroDePuertas = numeroDePuertas
    }

    getVelocidad(): number {
        return super.getVelocidad()*2        
    }
}


const auto = new Auto(22,22)
// Polimorfismo => En las instancias auto el getvelocidad se comportara diferente.



//Interfaces
//No tiene constructor, no se instancia
interface Persona {
    nombre:string;
    edad:number;
    //el type de un metodo
    getVelocidad:(param:number)=> number
}

const person: Persona = {
    nombre: 'Alan',
    edad: 28,
    getVelocidad(param) {
        return param*2
    },
}

//hacer una nueva interfaz para cada type complejo, nada de objetos