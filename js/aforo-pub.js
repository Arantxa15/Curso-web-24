// INICIO
let contador;
let aforo;

// CONTADOR A CERO
contador = 0;
aforo = 5;

// TENEMOS QUE IDENTIFIACAR TODOS LOS ELEMENTOS HTML QUE VAYAMOS A MANIPULAR CON JS
// LOS GUARDAMOS EN VARIABLES:
let btnSumar = document.getElementById("btn-sumar");
let btnRestar = document.getElementById("btn-restar");

let pTotal = document.getElementById("resultado");
let pCompleto = document.getElementById("completo");

// LAS FUNCIONES SON BLOQUES DE CÓDIGO REUTILIZABLES QUE PODEMOS LLAMAR A VOLUNTAD
function sumar() {
    // la función sumar se ejecuta al pulsar el botón +
    if (contador < aforo) {
        // el contador aumenta sólo cuando es menor de 20
        contador++;
    } else {
        // si intentamos sumar cuando el contador esta en 20:
        pCompleto.style.opacity = 1;
        // aparece el mensaje de aforo completo
    }
    resultado();
    comprobarBoton();
}

function restar() {
    if (contador > 0)
        contador--;
    // sólo resta si el contador es mayor que 0. Esto es para evitar mostrar número negativos
    pCompleto.style.opacity = 0;
    // en cuanto sale alguien, el aforo deja de estar completo
    resultado();
    comprobarBoton();
}


function resultado() {
    pTotal.innerHTML = contador;
    // CADA VEZ QUE EJECUTAMOS ESTA FUNCIÓN, EL PÁRRAFO HTML SE ACTUALIZA CON EL VALOR DEL CONTADOR
}
// Función para habilitar o deshabilitar los botones
function comprobarBoton() {
    if (contador > 0) {
        // reactivamos el btn - si el contador sube a 0
        btnRestar.classList.remove('inactivo');
        // classList accede a la lista de las clases del elemento HTML.
        // Podemos alterar esta lista con remove y add para quitar y añadir clases respectivamente
    }
    if (contador == 0) {
        btnRestar.classList.add('inactivo');
    }


    if (contador == aforo) {
        btnSumar.classList.add('inactivo');
        // desactivamos el btn + si el contador alcanza el aforo maximo
        // document.getElementaryById('btnSumar').classList.add('inactivo');
    }
    if (contador < aforo) {
        // el botón + se vuelve a activar cuando el contador baja del aforo
        btnSumar.classList.remove('inactivo');
    }
}   