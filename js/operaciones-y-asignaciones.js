// operaciones

// declaración de variables:
let x;
let y;
let z;

// varias declaraciones en un let
let a, b, c;

// asignación de valor(=)
a = 1;
b = 2;
c = 3;

// aignaciones en una sola línea
b, c = 4;

x = a;
// a partir de ahora x = a = 1
console.log("x = " + x);

y = a + c;
// se puede guardar el resultado de operar dos variables en otra variable
console.log("y = " + y);

z = (3 + 5) * b;
// se puede operar juntando valores numericos con variables numericas
console.log("z = " + z);


// PEMDAS (Orden de op. matemáticas)
// Paréntesis -> Exponenetes -> Multiplicación -> División -> Adición (suma) -> Substracción (resta)

// Incrementos y decrementos
x = 32;
x++;
// x aumenta en 1, ahora x = 33
console.log("x = " + x);

y = 6;
y--;
// y = y - 1
console.log("y = " + y);

z = 3;
z *= 2;
// z = z * 2
// con esto se multiplica por 2
console.log("z = " + z);

x = 10;
x /= 2;
// x = x / 2
// se divide entre 2
console.log("x = " + x);

// Resto (%)
x = 10;
y = 3;

z = x % y;
//  esto nos da el resto de la división, no el resultado
console.log("x % y = " + z); 
