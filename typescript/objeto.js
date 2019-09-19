var agustin = {
    id: 1,
    nombre: "Agustin",
    correo: "sefagus@hotmail.com",
    direccion: "pericon 341",
    edad: 27
};
function printObject(persona) {
    return "hola " + persona.nombre;
}
document.body.textContent = printObject(agustin);
