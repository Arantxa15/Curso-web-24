console.log('if y switch')

// if es un bloque de codigo que se ejecuta en base a una condición

let edad = 20;
if (edad >= 18) {

    console.log('En hora buena, puedes votar')
}

if (edad <= 63) {

    console.log('En hora buena, te puedes jubilar')
}

//podemos encadenar tantos bloques y condiciones como queramos 

let hora = new Date().getHours();
console.log(hora);
let saludo = '';

if (hora <= 12) {

    saludo = 'Buenos días';

}
else if (hora <= 20) {
    saludo = 'buenas tardes';

}
else {

    saludo = 'Buenas noches'
}

console.log(saludo);

// switch se usa para ejecutar diferentes bloques de código en base a diferentes condiciones 

//supongamos que queremos dar un saludo en base a el día de la semana:
// getDate() es un método que retorna un valor de 0 a 6 según el día de la semana

// al estar en inglés, el primer día (el 0) es el domingo
// domingo = 0, lunes = 1, martes = 2...

let día = new Date().getDay();
let díaSemana;
console.log(día)

switch (día) {
    case 0:
        díaSemana = "domingo"
        break;
    case 1:
        díaSemana = "lunes"
        break;
    case 2:
        díaSemana = "martes"
        break;
    case 3:
        díaSemana = "miercoles"
        break;
    case 4:
        díaSemana = "jueves"
        break;
    case 5:
        díaSemana = "viernes"
        break;
    case 6:
        díaSemana = "sabado"
        break;

    default:
        break;
}
console.log(saludo + ' ,hoy es ' + díaSemana)

// comprobar si es fin de semana
let mensaje;
switch (día) {
    default:
        mensaje = 'Oh no, aún falta para el finde...'
        break;
    case 0:
    case 6:
        mensaje = 'Yupi! Estamos en el finde!!'
        break;

}
console.log(mensaje);