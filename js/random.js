// Números aleatorios en JS

// Math.random() nos retorna un número aleatorio entre el 0 (incluído) y el 1 (excluído)
let numAleatorio = Math.random();
console.log(numAleatorio);

// Para obtener un número entero se puede combinar Math.random() con Math.floor()

// Math.random() obtiene un número del 0 al 1
// Math.floor() redondea ese número

// generar un número del 0 al 9
numAleatorio = Math.floor(numAleatorio * 10);
// Math.random() * 10 genera un número del 0 al 10 (excluído) con muchos decimales
// Math.floor() redondea esos decimales y nos devuelve un número entero (int)

console.log("numero de 0 a 9: " + numAleatorio);

// Simular que lanzamos un dado
const carasDado = [
    1,
    2,
    3,
    4,
    5,
    6
];

// Generamos un número del 0 al 5 (el 6 está exxcluido)
let lanzamiento = Math.floor(Math.random() * 6);
console.log("lanzo el dado: "  + carasDado[lanzamiento]);

// Lanzar dos dados
let lanzamiento1 = Math.floor(Math.random() * 6);
let lanzamiento2 = Math.floor(Math.random() * 6);
let dado1 = carasDado[lanzamiento1];
let dado2 = carasDado[lanzamiento2];

console.log("lanzo los dados: "  + carasDado[lanzamiento1] + " " + carasDado[lanzamiento2]);
console.log("Total: " + (carasDado[lanzamiento1] + carasDado[lanzamiento2]))
console.log("Total: " + (dado1 + dado2));

// Obtener un número del 1 a 10 (incluidos)
let min = 1;
let max = 10;
numAleatorio = Math.floor(Math.random()* max) + min;

console.log(numAleatorio);

// Obtener un número del 10 al 20
min = 10;
max = 20;
numAleatorio = Math.floor(Math.random()* max) + min;

console.log(numAleatorio);
