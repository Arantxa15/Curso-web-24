let frase = prompt('Escribe una frase:');
let caracter = frase[0];

if (caracter >= '0' && caracter <= '9') {
    console.log('La frase empieza con un número');
} else if ((caracter >= 'A' && caracter <= 'Z') || caracter >= 'a' && caracter <= 'z'); {
    console.log('La frase empieza con una letra');
}