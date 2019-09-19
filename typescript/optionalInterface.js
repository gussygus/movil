var superman = {
    nombre: 'Superman',
    poder: 'Super fuerza'
};
var thor = {
    nombre: 'Thor',
    poder: 'Rayo',
    arma: 'Martillo'
};
var ironman = {
    nombre: "Ironman",
    arma: "Mark one"
};
function getHeroe(heroe) {
    var mensaje;
    if (heroe.poder && heroe.arma) {
        return mensaje = heroe.nombre + " tiene el poder de: " + heroe.poder + " y un arma: " + heroe.arma;
    }
    else if (heroe.arma) {
        return mensaje = heroe.nombre + " tiene un arma: " + heroe.arma;
    }
    else if (heroe.poder) {
        return mensaje = heroe.nombre + " tiene el poder de: " + heroe.poder;
    }
}
document.body.textContent = getHeroe(thor);
