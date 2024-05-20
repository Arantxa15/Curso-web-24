//Las variables son 'cajitas' donde guardamos datos
//Primero debemos declarar una variable
let nombre;

//let significa que tenemos la intención de utilizar  una variable dentro del contexto del código actual.

// Podemos usar las variables de dos formas.La primera es asignarles un valor y la segunda es llamarlas para leer y tomar su valor actual
//Modificar una variable:
nombre="Arantxa";

//Llamar una variable
console.log(nombre);


//Las variables pueden contener tres tipos de datos: 

//1.Cadenas de texto.
apellido="Soba";

//Las cadenas de texto son sólo caracterres planos. No se puede operar con ellas, sólo unirlas o separarlas.
nombre="Cristina"

console.log(nombre + " "+ apellido);

nombreCompleto=nombre+" "+ apellido;
console.log(nombreCompleto);

//Las cadenas de texto se definen por llevar comillas tanto al incio como al final

//2. Integers o números integros

edad=35;
edad=15;

//son números operables se pueden sumar ,restar... y hacer todo tipo de cálculos con ellos
//Un ejemplo que necesitamos guardar un int es que tendremos que calcular datos a partir de éstos:

añoNacimiento=2024-edad;

console.log(añoNacimiento);
let mayorEdad;

//Saber si la persona es mayor de edad

if (edad >=18) {
    console.log(nombreCompleto+ " tiene " + edad + " años. Es mayor de edad");
    mayorEdad=true;
}

else{

    //Mensaje que la persona es menor de edad 

    console.log(nombre+ " es menor de edad. Le quedan " + (18- edad)+ " años para ser mayor");
    MayorEdad=false;



}

//ejemplo de dato númerico que va en una cadena de texto o string

dni='543455544';
cp='48002';
nss='8785424596'

//3-Booleano o estado binario
espesa=true;

// Sólo puede tener dos valores ; "true" o "false"
//se generan a partir de comparaciones
if (espesa==true) {
    console.log("Tomar café inmediatamente!");

}
if (mayorEdad) {
    console.log("Puedes entrar al pub");

}

//Las tres son iguales- preguntan lo mismo, el simbolo (!) significa negación.

if (mayorEdad !=true) {

}

if(mayorEdad==false){}

if(!mayorEdad){}