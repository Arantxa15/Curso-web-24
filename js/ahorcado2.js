// JUEGO DEL AHORCADO

// Tienes una palabra aleatoria
let palabra = '';

const listaPalabras = [
    'rotulador', 
    'boligrafo',
    'marcador',
    'cuaderno',
    'libro',
    'sacapuntas',
    'lapicero',
    'borrador'
];

let numAleatorio = Math.floor(Math.random() * listaPalabras.length);

palabra = listaPalabras[numAleatorio];

console.log(palabra);

// elegimos donde vamos a poner la palabra
let parrafo = document.getElementById('pGuiones');
// numero de guiones depende de cuantas letras tenga la palabra 
parrafo.innerHTML = "_" .repeat(palabra.length);
// La palabra esta oculta
// mesa = _ _ _ _
let longitud = palabra.length;
console.log(longitud);

// guardamos el número de caracteres que tiene la palabra


// Tienes que adivinar la palabra

// Tienes que adivinar las letras de la palabra

// Si dices una letra que no está en la palabra pierdes una vida

// Si pierdes todas las vidas, pierdes el juego

// Si pierdes el juego vuelves a empezar

// Tienes que adivinar la palabra