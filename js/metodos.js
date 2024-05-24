console.log('Metodos');

// Métodos de string
// Obtener la longitud de un string

let texto = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
let longitud = texto.length;

console.log(longitud);

// Ejemplo: comprobar las contraseñas de un formulario  de registro

let contraseña1;

// Una de las condiciones que suelen pedir para las contraseñas es que tenga por lo menos cierta longitud de caracteres
contraseña1 = "1234";

// Supongamos que una página  requiere que las contraseñas sena de por lo menos 8 caracteres
let longitudRequerida = 8;

// El usuario ingresa una contraseña:
contraseña1 = "12345678";

// Ahora comparamos la longitud de la contraseña ingresa con el requerimiento
if (contraseña1.length >= longitudRequerida) {
    console.log("La contraseña es válida")
} else {
    console.log("La contraseña debe tener al menos 8 caracteres");
}

// ----Extraer caracteres----
// Con charAt
texto = "Hola Mundo";
let primeraLetra = texto.charAt(0);

console.log(primeraLetra);

let ultimaLetra = texto.charAt(texto.length - 1);
console.log(ultimaLetra);

let letraM = texto.charAt(texto.length - 5);
console.log(letraM);



// AT
// En principio funciona como charAt():
texto = 'Feliz viernes!';

primeraLetra = texto.at(0);
console.log(primeraLetra);

// Excepto cuando contamos desde el final:
// charAt() no admite números negativos en el índicepero at() si

ultimaLetra = texto.at(-1);
console.log(ultimaLetra);

let letraR = texto.at(-5);
console.log(letraR);

// Un sitring también se puede leer como un array
let letra = texto[6];
console.log(letra);

// ----Extraer trozos de un string-----
// slice(inicio, final)

// Retorna un nuevo string usando las posiciones inicial y final con parámetros
texto = "Yogur, Donettes, Patatas";
let trozo = texto.slice(7, 15);
console.log(trozo);

// Si omitimos el segundo parámetro, slice conrta el resto del string:
trozo = texto.slice(7);
console.log(trozo);

// Slice() admite valores negativos:
// Con valores negativos cuenta desde el final hacia la izquierda
trozo = texto.slice(-7);
console.log(trozo);

// Si el segundo parámetro es negativo, cuenta desde la posición inicial hacia la izquierda:
trozo = texto.slice(-17, -9);
console.log(trozo);


// ----Transsformar un string----
// A mayúsculas:
let textoMayus = texto.toUpperCase();
console.log(textoMayus);

// A minúsculas:
let textoMinus = texto.toLowerCase();
console.log(textoMinus);

// ----Concatenar (unir) textos----
let nombre = "Caroline";
let apellido = "García";

let nombreCompleto = nombre + " " + apellido;
// let nombreCompleto = nombre.concat(" ", apellido);


console.log(nombreCompleto);

// ----Limpiar strings----

// trim() elimina los espacios en blanco al inicio y al final de un string
texto = "    Me llamo Arantxa     ";
console.log(texto);
console.log(texto.length);

// A veces es necesario limpiar los strings para , por ejemplo, guardar estos datos en una base de datos
let textoLimpio = texto.trim();
console.log(textoLimpio);
console.log(textoLimpio.length);

// ----Reemplazar strings----
texto = textoLimpio;
console.log(texto);

texto = texto.replace("Arantxa", "Elizabeth");
console.log(texto);

// ----Convertir un string en un array----
// split(separador)
texto = "Yogur, Donettes, Patatas";
const listaCompra = texto.split(", ");

console.log(listaCompra);

// ----Búsquedas en string---
// Search retorna el índice del primer caracter del texto buscado:
let posiciónDonettes = texto.search("Donettes");
console.log(posiciónDonettes);