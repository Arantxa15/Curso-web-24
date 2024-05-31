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

// calcular un día en milisegundos

//1000ms * 60s* 60m24h

console.log(1000606024);

let fechaHoy= new Date();

console.log(new Date(fechaHoy-86400000));


// 18 años en milisegundos

//1000ms60s 60m* 24h

//18 años365 días 24h* 60m* 60s* 1000ms

let años18= new Date((183652460601000) + (4246060*1000));


// el resultado de esta fecha restando con los años y el año actual me sirve para determinar si es mayor de esdad o no 

console.log(años18);


//-----Métodos set--------------------

//Se usan para establecer datos en una fecha 

// setFullYear permite establecer el año de una fecha 

fecha= new Date();

fecha.setFullYear(2018);

console.log(fecha);

// TAMBIEN PODEMOS ESTABLECER  EL AÑO, EL MES Y EL DIA 

fecha.setFullYear(2022,2,25);
console.log(fecha);




// Establecer mes o el día 

// el mes se establece con setMonth()0-11
// el día del mes se establece con setDate() 1-31

fecha.setMonth(6);
fecha.setDate(8);
console.log(fecha);

// ejemplo pràctico

// queremos realizar una reserva en un hotel el día 15 de agosto para 3 días

let fechaEntrada;

let fechaSalida;

fechaEntrada= new Date ('2024-08-15'); 
console.log(fechaEntrada);

// con esto las dos fechas parten del día 15 de agosto 

fechaSalida= fechaEntrada;

// usamos setDate() para establecer el día de la fecha de salida 

//Dentro del paréntesis tomamos el día de la fecha de entrada y le sumamos 3 

fechaSalida.setDate(fechaEntrada.getDate()+3);
console.log(fechaSalida);

//Ejemplo 2

// A un trabajador se le vence el contrato el 18 de junio 

// Le han dicho que se lo van a renovar por 18 meses

// Calcular la nueva fecha de vencimiento usando el objeto Date 

let fechaInicio;
let fechaFin;

fechaInicio= new Date('2024-05-18');

console.log(fechaInicio);

fechaFin=fechaInicio;



fechaFin.setMonth(fechaInicio.getMonth()+18);
console.log(fechaFin);


// ejemplo 3 - alarma 

let alarma= new Date();  // dia de hoy 
alarma.setUTCHours(11); // hora
alarma.setMinutes(20); //minutos

function saltarAlarma(){

    if (alarma<=Date()) {

        alert('Hora del descanso !!');
    }

    setTimeout(saltarAlarma,1000);
}


alert('Esto es una alerta')