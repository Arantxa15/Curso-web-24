// // Contar con JavaScript

// // ----Contar números----
// let número = prompt("Por favor, ingresa un número");
// // Le damos al usuario la posibilidad de ingresar un número y lo guardamos en una variable

// let texto = '';

// // Creamos una variable de string vacía con el objetivo de rellenarla de numero del 1 al que usuario ingresó
// for (let i = 0; i <= número; i++) {
//     // let i = 0, porque empezamos a ontar desde 0
//     // i < =número porque queremos que el número del usuario este incluido en el conteo
//     // i++ porque queremos contar de uno en uno

//     texto += i + " ";
//     // += es para agregar un valor a la variable, el = es para sustituirlo
// }

// alert(texto);
// // Alert sirve para mostrar un mensaje en pantalla al usuario

// // Contar en pares

// número = prompt("Por favor, ingresa un número");
// texto = '';

// for (let i = 2; i <= número; i += 2) {
//     // let i = 2, porque empezamos a ontar desde 2
//     // i < =número porque queremos que el número del usuario este incluido en el conteo
//     // i += 2 porque queremos contar de dos en dos

//     texto += i + " ";
//     // += es para agregar un valor a la variable, el = es para sustituirlo

// };
// alert(texto);
// // Alert sirve para mostrar un mensaje en pantalla al usuario


// Cuenta atrás de un número por el usuario hasta el 1
// Le damos un prompt al usuario y lo guardamos
// Creamos la variable vacía
// Un número que se repita nº veces hasta llegar a 1
// Imprimir el mensaje en pantalla para el usuario

// número = prompt("Por favor, ingresa un número");
// texto = '';

// for (let i = número; i > 0; i--) {
    // let i = numero porque empezamos a contar desde el número
    // i > 0, porque vamos a contar hasta que llegue a 0
    // i-- para que la cuenta sea regresiva
// texto += i + " ";
// }
// alert(texto);

número = prompt("Por favor, ingresa un número");
texto = '';

for (let i = número; i > o; i-= 2) {
texto += i + " ";
}
alert(texto);