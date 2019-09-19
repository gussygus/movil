class Ciudadano
{
    public nombre: string;
    public apellidos: string;
    public edad: number;
    constructor(nombre: string,apellidos: string,edad: number)
    {
        this.nombre=nombre;
        this.apellidos=apellidos
        this.edad=edad;
    }
}

interface Soldado extends Ciudadano
{
    numIdentificacion: number;
    rango: string;
    tipoSangre: string;
}

interface Policia extends Ciudadano
{
    numPlaca: number;
    vehiculo: string;   
}

function Saludo(ciudadano: Soldado,ciudadano2: Policia)
{
    console.log("Hola, "+ciudadano.nombre+" "+ciudadano.apellidos+", numero de identificacion: "+ciudadano.numIdentificacion+" ,rango: "+ciudadano.rango+", tipo de sangre: "+ciudadano.tipoSangre);
    return "Hola, "+ciudadano2.nombre+" "+ciudadano2.apellidos+", numero de placa: "+ciudadano2.numPlaca+" ,vehiculo: "+ciudadano2.vehiculo;
}

let soldado: Soldado={nombre: "Rambo",apellidos: "Perez Lopez",numIdentificacion: 666,edad: 27, rango: 'Teniente coronel', tipoSangre: 'A positivo'};
let policia: Policia={nombre: "Jhon",apellidos: "Wick Clouthier",numPlaca: 777, vehiculo: "Tanqueta"};
document.body.textContent = Saludo(soldado,policia);