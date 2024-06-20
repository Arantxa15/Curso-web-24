// Seleccionamos los elementos con clase diapositivas y nos retorna un array

const diapositivas = document.getElementsByClassName('diapositivas');
// recogemos el array con los puntos 
const puntos = document.querySelectorAll('span.punto');

// el indice cuenta del 1 al 5

let indice = 1;

//vamos al array y mostramos uno de los elementos

mostrarDiapositiva();

function cambiarDiapositiva(valor, direccion) {


    console.log('has pulsado la flecha ' + direccion)




    //cambiamos el indice segun la flecha que pulsamos
    indice += valor;

    // corregimos el indice esta función sirve(para que cuando termine la ultima diapositiva, el bucle vuelva a empezar desde la primera.

    if (indice < 1) { indice = diapositivas.length };
    if (indice > diapositivas.length) { indice = 1 };

    //llamamos la función para mostrar la nueva diapositiva

    mostrarDiapositiva();


    //mostramos la nueva diapositiva
    diapositivas[indice - 1].style.display = 'block';

}

function puntoDiapositiva(punto) {
    //seleccionamos una diapositiva dependiendo del circulo que pulsemos

    //cambiamos el indice segun la flecha que pulsamos

    indice = punto;

    //llamamos la función para mostrar la nueva diapostiva

    mostrarDiapositiva();


}




function mostrarDiapositiva() {

    // hacemos desaparecer todas las diapositivas
    for (let i = 0; i < diapositivas.length; i++) {

        diapositivas[i].style.display = 'none';
    }


    //mostramos la nueva diapositiva
    diapositivas[indice - 1].style.display = 'block';

    // marcar los puntos:
    // primero los desmarcamos todos

    for (let i = 0; i < puntos.length; i++) {

        // vamos por todos los puntos y les quitamos la clase activo
        puntos[i].classList.remove('activo');


    }


    //luego marcamos el punto correspondiente al indice 

    puntos[indice-1].classList.add('activo');

}