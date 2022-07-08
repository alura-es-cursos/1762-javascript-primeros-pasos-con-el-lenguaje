const datos = [
    {
        'ciudad':'Bogotá',
        'precio': 500
    },
    {
        'ciudad':'Lima',
        'precio': 400
    },
    {
        'ciudad':'Santiago',
        'precio': 380
    },
    {
        'ciudad':'Montevideo',
        'precio': 200
    },
];

const presupuestoDisponible = 400;

let i = 0;
//While... 0 o más veces
//Do ... 1 o mas veces
/*while(i < datos.length && datos[i].precio > presupuestoDisponible) {
    i++;
}*/

let ciudadSeleccionada = '';
do {
    if (datos[i].precio <= presupuestoDisponible) {
        ciudadSeleccionada = datos[i].ciudad;
        break;
    }
    i++;
} while(i < datos.length && ciudadSeleccionada == '')

if (ciudadSeleccionada == '')
    console.log("No tenemos pasajes disponibles");
else
    console.log("Puedes comprar pasaje para: "+ciudadSeleccionada);


