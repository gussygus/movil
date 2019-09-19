function saludo(persona) {
    return "Hola, " + persona.primerNombre + "" + persona.segundoNombre;
}
var llamarUsuario = { primerNombre: "juan ", segundoNombre: "camaney" };
document.body.textContent = saludo(llamarUsuario);
