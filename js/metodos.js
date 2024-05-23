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

let ultimaLetra = texto.charAt(texto.length -1);
console.log(ultimaLetra);

let letraM = texto.charAt(texto.length -5);
console.log(letraM); 