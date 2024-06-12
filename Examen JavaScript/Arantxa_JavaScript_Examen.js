// Mostrar todos los números de N a 1 disminuyendo de 1 en 1 donde N lo ingresa el usuario en un prompt.
let numeroN = parseInt(prompt("Ingresa un número"));

for (let i = numeroN; i >= 1; i--) {
    console.log(i)
};

// Ejercicio que me pida números mientras no le diga que pare y me muestre solo pares.
let contadorPares = 0;
let continuar = true;

for (let i = 0; continuar == true; i++) {
    let numero = prompt("Ingresa un número o escriba parar");

    if (numero.toLowerCase() === "parar") {
        continuar = false;
    } else {
        if (numero % 2 === 0) {
            contadorPares++;
        }
    }

};
console.log("Números pares: " + contadorPares);



// Programa que nos diga si un número dado es primo (no es divisible por ninguno otro número que no sea el mismo o la unidad).

let numeroY = prompt("Ingrese un numero");
let numerosPrimos = true;

for (let i = 2; i <= (numeroY / 2); i++) {

}



// Escribe un programa que pida una frase y escriba cuantas veces aparece la letra A.

let frase = prompt("Ingrese una frase");
let letra = 'a';
let contador = 0;

for (let i = 0; i < frase.length; i++) {
    if (frase[i] === letra) {
        contador++;
    }
};
console.log("La letra " + letra + " aparece " + contador + " veces");

// Escribe el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar.

let parImpar = prompt("Ingresa un número");

function Pares(nuumeros) {
    if(nuumeros % 2 === 0) {
        return "par"
    } else {
        return "impar"
    }
}
console.log(Pares(parImpar));