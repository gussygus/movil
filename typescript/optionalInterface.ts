interface Heroe {
    nombre: string;
    poder?: string;
    arma?: string;
}

let superman:  Heroe ={
    nombre: 'Superman',
    poder:'Super fuerza'
}

let thor:  Heroe ={
    nombre: 'Thor',
    poder:'Rayo',
    arma:'Martillo'
}

let ironman: Heroe ={
    nombre: "Ironman",
    arma:"Mark one"
}

function getHeroe(heroe: Heroe){
    let mensaje:string;

    if(heroe.poder && heroe.arma){
        return mensaje = `${heroe.nombre} tiene el poder de: ${heroe.poder} y un arma: ${ heroe.arma}`
    }else if(heroe.arma){
        return mensaje = `${heroe.nombre} tiene un arma: ${ heroe.arma}`
    }else if(heroe.poder){
        return mensaje = `${heroe.nombre} tiene el poder de: ${ heroe.poder}`
    }
}
document.body.textContent=getHeroe(thor);