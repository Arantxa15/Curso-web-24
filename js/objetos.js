console.log('Objetos en JavaScript');

// En el mundo real, los objetos son cosas como: casas, coches, personas, animales....
// Por ejemplo una moto. Es un objeto que tiene distintas propiedadades. Por ejemplo: marca, color, peso, modelo, potencia...

// Todas las motos tienen el mismo tipo de propiedades, pero el valor de estas varia según la moto

// Y también tienen métodos. Los métodos son acciones que los objetos pueden ejecutar.

// Volviendo al caso de la moto. Una moto puede arrancar, acelerar, frenar, detenerse.

// Todas las motos tienen los mismos métodos, pero estos se ejecutan en distintos momentos.


// Representación de las propiedades y los métodos:

// moto.peso, moto.color ---- moto.arrancar(), moto.acelerar(). moto.frenar().

// Variables. Son contenedores para guardar un valor.
let coche = "Fiat";

// Los OBJETOS tambien son variables, pero pueden contener varios valores

// A diferencia de los arrays, que contienen varios valores identificados por un índice númerico que empieza por 0
// array[0], array[7]...
// Los OBJETOS tienen los índices identificados con un nombre

// Ejemplo:
const moto = {
    marca: 'Yamaha',
    modelo: 'MT-07',
    color: 'Blanco'
}
console.log('La marca de la moto es ' + moto.marca);


// CRear un objeto y luego asignarle propiedades
const persona = {};

persona.nombre = "Cristina";
persona.apellido = "Soba";
persona.edad = 35;
persona.colorOjos = "Castaño"
console.log(persona);

// Propiedades de un OBJETO
persona.nombreCompelto = function() {
    return this.nombre + " " + this.apellido
}
console.log(persona.nombreCompelto());

// JavaSCript funciona principalmente con OBJETOS 
// Los OBJETOS son contenedores para propiedades y métodos
// Las propiedades son valores con nombre.
// Los métodos son funciones guardadas con propiedades
// Las propiedades pueden ser valores primitivos, funciones o, incluso, otros objetos.