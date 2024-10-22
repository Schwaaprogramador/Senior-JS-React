

class Casa {

    //Dentro de la programacion orientada a objetos es buena practica el private por el ENCAPSULAMIENTO.
    // => Solo se pueden acceder a las cosas con METODOS no se podria realizar de manera directa


    private numVentanas: number; //Pueden ser privados o publicos
    private numPuertas: number;
    private nombreCasa: string;

    constructor(numVentanas: number, numPuertas: number, nombreCasa: string){
        this.numVentanas = numVentanas;
        this.numPuertas = numPuertas;
        this.nombreCasa = nombreCasa;
    }

    getNumeroPuertas():number {
        return this.numPuertas
    }

    setNumeroPuertas(nuevoNumeroDePuertas: number){
        this.numPuertas = nuevoNumeroDePuertas
    }
}



class casita extends Casa {

    lugar: string;

    constructor(numVentanas: number, numPuertas: number, nombreCasa: string, lugar:string){
        super(numVentanas,numPuertas,nombreCasa)
        this.lugar = lugar        
    }

}



const casaDePedro = new Casa( 6, 2, 'Pedro House')

console.log(`Cuantas puertas tiene la casa de PEDRO: ${casaDePedro.getNumeroPuertas()}`)


// CLASS VS INTERFACE