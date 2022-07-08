const ciudadDestino = "Bogotá";
const ciudadesDisponibles = new Array("Bogotá", "Lima", "Santiago", "Montevideo");

let edadPasajero = 18;
let estaAcompanado = true;
let tienePasaporte = true;
let estaCasado = false;

console.log(`Verificando pasajes para  ${ciudadDestino}`);

// A && B || C
if (ciudadesDisponibles.indexOf(ciudadDestino) > -1 &&
    edadPasajero >= 18 && 
    tienePasaporte && 
    !estaCasado) {
    console.log('Paquete para solteros disponible para venta');
} else {
    console.log('Ciudad no disponible para viajar o pasajero no cumple las reglas');
}
