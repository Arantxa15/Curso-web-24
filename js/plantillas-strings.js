// Qué son plantillas de strings?
// Las plantillas son strings que tienen la oportunidad de contener variables interpoladas
// La sintaxis se hace con la tilde inversa ``
let texto = "hola mundo!";
console.log(texto);

// Admiten comillas dentro del string:
texto =  "Me llamo Arantxa, pero me dicen Ari";
console.log(texto);

let string = `Me llamo 'Arantxa', pero me dicen "Ari"`;
console.log(string)


// -----Interpolación de variables----
// Podemos construir un string con variables y expresiones las cuales, a la hora de imprimir el string, serán sustituidas por los valores de las variables
let nombre = "Arantxa";
let edad = 21;

let frase;
// frase = "Hola, me llamo " + nombre + " y tengo " + edad + " años.";
// console.log(frase);

// Interpolando:
frase = `Hola, me llamo ${nombre} y tengo ${edad} años.`;
console.log(frase);

// Ejemplo (factura)
let precio = 10;
let IVA = 0.21;

// en este caso, la interpolación contiene una expresión, que simplemente una operación matemática (para calcular el precio con IVA) que usa variables
let mensajeTotal = `Total: ${(precio * (1 + IVA)).toFixed(2)} €`;
console.log(mensajeTotal);

// cálculo de precio * IVA
console.log(precio * IVA);
// esto nos da el valor del IVA añadido al precio, pero falta el precio completo
// de ahi que sumemos (precio * 1) que representa el precio original
// asi obtenemos el precio original más el valor añadido por el IVA
console.log((precio * 1) + (precio * IVA));

// QUEDA PENDIENTE IMPRIMIR HTML CON PLANTILLAS DE STRING
