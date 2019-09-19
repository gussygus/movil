function saludo(persona, edad, deporte) {
    var cadena = "Hola " + persona + ', tu tienes ' + edad + " anios de edad " + '¿practicas deporte? ' + deporte;
    return cadena;
}
var persona = "Jhon";
var edad = 24;
var deporte = true;
document.body.textContent = saludo(persona, edad, deporte);
