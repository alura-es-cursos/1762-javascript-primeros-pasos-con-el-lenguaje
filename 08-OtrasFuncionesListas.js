//Definición de una lista con tipo de dato alfanumérico
const ciudadesDisponibles = new Array("Bogotá","Lima","Santiago","Montevideo");
//console.log(ciudadesDisponibles);

//Definición de una lista de forma abreviada
const paisesDisponibles = ["Colombia","Perú","Chile","Brasil","Argentina","Uruguay","Venezuela"];

const cantidadCiudades = ciudadesDisponibles.length;

console.log(`En la lista de ciudades tenemos ${cantidadCiudades} elementos`);
console.log(`En la lista de paises tenemos ${paisesDisponibles.length} elementos`);

//Remover el primer elemento
ciudadesDisponibles.shift();
console.log(ciudadesDisponibles);
console.log(`En la lista de ciudades tenemos ${ciudadesDisponibles.length} elementos`);
//Remover el último elemento
ciudadesDisponibles.pop();
console.log(ciudadesDisponibles);
console.log(`En la lista de ciudades tenemos ${ciudadesDisponibles.length} elementos`);

//Filtro de elementos de la lista.
const paisesFiltrados = paisesDisponibles.filter((e) => e.length > 6);
console.log(paisesFiltrados);

//Unificar los elementos en una cadena de caracteres
console.log(paisesDisponibles.join('-'));

//Ordenar la lista
console.log(paisesDisponibles.sort());

//Coniciendo la posición
console.log(`Perú está en la posición: ${paisesDisponibles.indexOf('Perú')}`);

//Unificar dos listas.
const listaPaisesYCiudades = paisesDisponibles.concat(ciudadesDisponibles);
console.log('Lista de paises y ciudades:');
console.log(listaPaisesYCiudades);
console.log('Lista de paises:');
console.log(paisesDisponibles);
