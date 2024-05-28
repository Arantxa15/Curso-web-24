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
