const ciudadDestino = "Lima";
const ciudadesDisponibles = new Array("Bogotá", "Lima", "Santiago", "Montevideo");

let edadPasajero = 17;
let estaAcompanado = false;

console.log(`Verificando pasajes para  ${ciudadDestino}`);
//Verificamos que el pasajero cumple las reglas
if (edadPasajero >= 18 || estaAcompanado) {
    //Evaluamos si la ciudad esta disponible para viajar
    if (ciudadesDisponibles.indexOf(ciudadDestino) > -1 ) {
        console.log('Pasaje disponible para venta');
    } else {
        console.log('Ciudad no disponible para viajar');
    }
} else {
    if (edadPasajero >= 16 && ciudadDestino == 'Lima') {
        console.log('Pasaje disponible para venta');
    } else {
        console.log('Pasajero no cumple las reglas');
    }
    
}

