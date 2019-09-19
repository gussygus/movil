var agustin = {
    id: 1,
    nombre: "Agustin"
};
var juan = {
    id: 2,
    nombre: "juan"
};
var UsuariosA = [
    { user: agustin },
    { user: juan }
];
UsuariosA.forEach(function (element) {
    console.log("id: " + element.user.id + " Nombre: " + element.user.nombre);
});
