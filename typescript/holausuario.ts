function saludo(persona, edad, deporte) {
    const cadena: any = "Hola " + persona + ', tu tienes ' + edad + " anios de edad " + '¿practicas deporte? '+ deporte;
    return cadena;
}
let persona: string = "Jhon";
let edad: number = 24;
let deporte: boolean = true;

document.body.textContent = saludo(persona, edad, deporte);
