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

//While... 0 o más veces
//Do ... 1 o mas veces
/*while(i < datos.length && datos[i].precio > presupuestoDisponible) {
    i++;
}*/
//for... valor inicial para un valor final

let ciudadSeleccionada = '';
for (let i = 0; i < datos.length  && ciudadSeleccionada == ''; i++) {
    
    if (datos[i].precio <= presupuestoDisponible) {
        ciudadSeleccionada = datos[i].ciudad;
    }
}

if (ciudadSeleccionada == '')
    console.log("No tenemos pasajes disponibles");
else
    console.log("Puedes comprar pasaje para: "+ciudadSeleccionada);


