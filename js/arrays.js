console.log ('Arrays');

// A diferencia de una variable, que sólo puede guardar un dato a la vez, los Arrays o 'arreglos'son variables multidimensionales, es decir, que podemos almacenar datos en ellas en varias dimensiones, como si se tratase de una estantería, con varias baldas y varios niveles.

//Arrays bidimensionales

let arrayEjemplo=[ 'uno', 'dos', 'tres','cuatro'];
//Para acceder a los datos de un array, tenemos que indicar la posición del elemento al que queremos acceder

let texto = arrayEjemplo [3];
console.log(texto);

//crear arrays

//manualmente 
const alumnas= ['Arantxa', 'Aleja', ' Nicole'];
// Al declarar con 'Const' el array se hará constante y no se podra modificar, es una buena practica de programación trabajar con arrays constantes.

// A partir de variables
// Por que usar arrays?
// Imaginemos que tenemos una lista de cualquier tipo de items (coches, personas, animales...)

let alumna1 = "Cristina"
let alumna2 = "Zaloa"
let alumna3 = "Susana"
let alumna4 = "Natalia"

// Ahora imagina que tienes que recorrer la lista para encontrar una alumna en especifico, pero en vez de unas pocas, tuvieras 300.

// La solución es un array

// Un array puede guardar muchos valores usando un solo nombre, y puedes acceder a estos valores mediante una referencia al índice de éstos

const listaAlumnas = [alumna1, alumna2, alumna3, alumna4];

console.log(listaAlumnas);
console.log(listaAlumnas[3]);
console.log(listaAlumnas[1] + " y " + listaAlumnas[2]);

// También podemos crear un array y posterior añadir los items:

const coches = [];

coches[0] ="Mercedes Benz";
coches[1] ="Toyota";
coches[2] ="Mitsubishi";
console.log(coches);

coches[0] = "Hyundai";
console.log(coches);

console.log(listaAlumnas.toString());

// La propiedad length (longitud)
// Se rfiere a la longitud de la lista de items de un array.

console.log(listaAlumnas.length);

// Acceder al primer elemento de un array
console.log(listaAlumnas[0]);

// Acceder al último elemento de un array
console.log(listaAlumnas[listaAlumnas.length - 1]);
// Dentro de los corchetes:
// [listaAlumnas.length = 4]
// Luego lo restamos para que el número coincida con el último índice, que este caso sería 3

const paises = [];
paises[0] = "Honduras";
paises[1] = "Bolivia";
paises[2] = "Colombia";
paises[3] = "Brasil";

console.log(paises);