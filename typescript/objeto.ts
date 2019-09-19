interface Persona{
    id: number;
    nombre: string;
    correo: string;
    direccion:string;
    edad: number;
}

const agustin: Persona ={
    id: 1,
    nombre: "Agustin",
    correo: "sefagus@hotmail.com",
    direccion: "pericon 341",
    edad: 27
}
function printObject(persona: Persona){
    return "hola " + persona.nombre;
}
document.body.textContent=printObject(agustin);