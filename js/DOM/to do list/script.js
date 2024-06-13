// Identificamos los elementos HTML con los que vamos a trabajar.

let boton = document.getElementById('btnAñadir');
let input = document.getElementById('inputTexto');
let lista = document.getElementById('lista');



function agregarTarea() {
    let texto =  input.value;

    // 
    if (texto.length > 0) {

    // construimos el elemento li
    let elemento = document.createElement('li');

    // Le añadimos el contenido


    elemento.innerHTML = '<button onclick = "marcarTarea(this)">Marcar</button>';


    elemento.innerHTML += texto;
    
    elemento.innerHTML += '<button onclick = "borrarTarea(this)">X</button>';

    // Lo agrgamos a la lista
    lista.appendChild(elemento);

    // Borramos el texto del input
    input.value = '';
    }
}

function borrarTarea(botonX){
    // Al pulsar el botón de borrar, identificamos al 'li' padre
    let tarea = botonX.parentElement;

    

    // Borramos la tarea
    // con css 1ª opción
    // tarea.style.display = 'none';

    // con removeChild() 2ª opción
    // vamos al padre (que es la 'ul', lista) y eliminamos el 'li' (el hijo)
    lista.removeChild(tarea);
}

function marcarTarea(botonM) {
    
    let tarea = botonM.parentElement;

    // Marcamos la tarea con un color
    tarea.style.color = 'lightblue';
}



// A boton le agregamos un evento, que activa la función agregarTarea caundo ghacemos click sobre éste.
boton.addEventListener('click', agregarTarea);

// Ejecutar varios eventos, pero con la tecla 'Enter'

// keypress, pulsar una tecla del teclado; function(evento), activar la función
input.addEventListener('keypress', function(evento) {

    // ejecutar la función a la tecla 'Enter'
    if (evento.key == 'Enter') {
        agregarTarea();
    }

})