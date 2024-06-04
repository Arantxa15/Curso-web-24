// // Vamos a hacer una app que le pida dos número al usuario (dos prompt) 

// let numero1 = parseInt(prompt("Número 1"));
// let numero2 = parseInt(prompt("Número 2"));

// // Y le vamos a retornar la suma de ambos
// let resultado = numero1 + numero2;
// alert(resultado);

// dos variables, que le pida dos numero al usuario
let numero1 = parseInt(prompt("Número 1"));
let numero2 = parseInt(prompt("Número 2"));
// otra variable, que le pida al usuario que operacion quiere realizar
let operar = prompt("¿Qué operación desea realizar? (s)umar, (r)estar, (m)ultiplicar, (d)ividir");
// otra variable, con el resultado que el usuario haya ingresado
let resultado = 0;

// switch, para operar con diferentes operaciones
switch (operar) {
    case 's':
        resultado = numero1 + numero2; //suma
        break;
    case 'r':
        resultado = numero1 - numero2; //resta
        break;
    case 'm':
        resultado = numero1 * numero2; //multiplicación
        break;
    case 'd':
        resultado = numero1 / numero2; //división
        break;
    default: //no se cumple ningún caso
        resultado = 'vuelve a intentarlo';
        break;
}
alert(resultado);
// resultado de la operación que eliga el usuario
