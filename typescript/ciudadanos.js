var Ciudadano = /** @class */ (function () {
    function Ciudadano(nombre, apellidos, edad) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
    }
    return Ciudadano;
}());
function Saludo(ciudadano, ciudadano2) {
    console.log("Hola, " + ciudadano.nombre + " " + ciudadano.apellidos + ", numero de identificacion: " + ciudadano.numIdentificacion + " ,rango: " + ciudadano.rango + ", tipo de sangre: " + ciudadano.tipoSangre);
    return "Hola, " + ciudadano2.nombre + " " + ciudadano2.apellidos + ", numero de placa: " + ciudadano2.numPlaca + " ,vehiculo: " + ciudadano2.vehiculo;
}
var soldado = { nombre: "Rambo", apellidos: "Perez Lopez", numIdentificacion: 666, edad: 27, rango: 'Teniente coronel', tipoSangre: 'A positivo' };
var policia = { nombre: "Jhon", apellidos: "Wick Clouthier", numPlaca: 777, vehiculo: "Tanqueta" };
document.body.textContent = Saludo(soldado, policia);
