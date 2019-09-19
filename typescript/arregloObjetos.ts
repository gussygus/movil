interface Persona{
    id: number;
    nombre: string;
}

const agustin: Persona ={
    id: 1,
    nombre: "Agustin"  
}
const juan: Persona ={
    id: 2,
    nombre: "juan"  
}

let UsuariosA:{user: Persona}[] = [
    {user: agustin},
    {user: juan}
];
UsuariosA.forEach(element => {
    console.log("id: "+ element.user.id + " Nombre: " + element.user.nombre)
});
