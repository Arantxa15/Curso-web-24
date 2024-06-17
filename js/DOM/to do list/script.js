// Identificamos los elementos HTML con los que vamos a trabajar.

let boton = document.getElementById('btnAñadir');
let input = document.getElementById('inputTexto');
let lista = document.getElementById('lista');






function agregarTarea() {

    //Guardamos el contenido del input en una variable 

    let texto = input.value;
    if (texto.length > 0) {



        //construimos el elemento li
        let elemento = document.createElement('li');

        //le añadimos el contenido
        elemento.innerHTML = '<button onclick="marcarTarea(this)"><i class="bi bi-check2"></i></button>'
        elemento.innerHTML += texto;
        elemento.innerHTML += '<button onclick="borrarTarea(this)"><i class="bi bi-x-lg"></i></button>';


        // añadimos el evento  para click en cualquier sitio y que se desmarque

        elemento.addEventListener('click', marcarTarea);

        //lo añadimos a la lista 

        lista.appendChild(elemento);

        // borramos el texto del input

        input.value = '';
    }
}
// a boton le agregamos un evento, que activa la función agregar tarea cuando hacemos click sobre éste

boton.addEventListener('click', agregarTarea);


//Ejecutar el mismo evento,pero la tecla 'Enter'

input.addEventListener('keypress', function (evento) {
    if (evento.key == 'Enter') {
        agregarTarea();

    }
})

function borrarTarea(botonX) {

    //Al pulsar el botón de borrar identificamos al li padre

    let tarea = botonX.parentElement;

    //borramos la tarea

    // tarea.style.display='none';

    // Con removedchild()
    //vamos al padre que es la ul - lista y eliminamos el li

    lista.removeChild(tarea);


}

// Marcar tarea 

function marcarTarea(botonM) {


    // si clicamos directamente el li (el texto) le cambiamos directamente la clase

    this.classList.toggle('marcada')

    // si entramos desde el botón buscamos al padre (li) y le cambiamos la clase 

    if (botonM) {
        botonM.parentElement.classList.toggle('marcada');


    }

}