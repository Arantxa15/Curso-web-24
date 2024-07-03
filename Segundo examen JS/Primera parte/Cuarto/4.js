let frase = prompt('Introduce un color');
let colores = [
    'azul',
    'amarillo', 
    'rojo',
    'verde',
    'cafe',
    'rosa'
];

if (colores.includes(frase.toLowerCase())) {
    console.log('El color se encuentra dentro del array');
} else {
    console.log('El color no se encuentra dentro del array');
}