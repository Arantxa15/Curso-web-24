console.log('Objeto Date()');

// El objeto Date() (fecha) nos deja trabajar con fechas en JAvaScript:

console.log(Date());

// El objeto Date() es invariable, no lo podemos modificar, sçolo leer.

// Para solventar esto, podemos crear copias:

// Crea una copia con la fecha/hora actual

let fecha = new Date();
console.log(fecha);

// Crea un copia con una fecha concreta
// formato string año-mes-día
fecha = new Date('2003-02-15');
console.log(fecha);

// formato númerico año, mes(*), día, horas, minutos, segundos y ms
fecha = new Date(1996, 9, 24);
console.log(fecha);
// Los meses van de (Enero = 0 a Diciembre = 11)
// introducir un día superior a 11, no da error, si no que empieza a contar el siguiente año
fecha = new Date(2015, 15, 29);
console.log(fecha);

// Que pasa si omitimos el mes:
fecha = new Date(2000);
console.log(fecha);

// si solo ponemos un dato, lo trata como milisegundos

// Si en el año ponemos solo dos cifras lo tratara como 19xx
fecha = new Date(91, 5, 12);
console.log(fecha);
// Las fechas se guardan como milisegundos
// o ms es el tiempo Zero, 1 de Enero de 1970 00:00UTC
// Un día (24h) son 86 400 000 ms
// La fecha actual es: 1716888227553 ms desde el 1 de Enero de 1970
fecha = new Date(1716888227553);
console.log(fecha);

fecha = new Date(0);
console.log(fecha);

fecha = new Date(-86400000);
console.log(fecha);



// ----MÉTODOS----

fecha = new Date ('1991-06-21');
console.log(fecha.toDateString());
//toDateString transforma la fecha a un formato más legible

console.log(fecha.toISOString());
console.log(fecha.toUTCString());
// Distintos formatos de fecha

// Parsear fechas
// Date.parse() convierte un string de fecha a milisegundos
console.log(Date.parse('May 29 2024'));
console.log(new Date(1716933600000));

// --- TOMAR DATOS DEL OBJETO FECHA ---
fecha = new Date(1996, 9, 24, 4);
console.log(fecha);

const días = [
    'domingo',
    'lunes',
    'martes',
    'miércoles',
    'jueves',
    'viernes',
    'sábado'
]
const meses = [
    'enero',
    'febrero',
    'marzo',
    'abril',
    'mayo',
    'junio',
    'julio',
    'agosto',
    'septiembre',
    'octubre',
    'noviembre',
    'diciembre'
]
// fecha.getDay() = 4
// Por lo tanto, lo de abajo equivale a:
// días[4]
console.log(días[fecha.getDay()]);

// fecha.getMonth() = 9
// Este número equivale al mes de octubre
// ya que empezamos a contar los meses desde 0
console.log(meses[fecha.getMonth()]);

// Otros métodos get (tomar)
let fechaActual = new Date();
// hora, minutos, segundos
console.log(fechaActual.getHours());
console.log(fechaActual.getMinutes());
console.log(fechaActual.getSeconds());
