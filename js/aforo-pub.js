// INICIO
let contador;

// CONTADOR A CERO
contador= 0;

// TENEMOS QUE IDENTIFIACAR TODOS LOS ELEMENTOS HTML QUE VAYAMOS A MANIPULAR CON JS
// LOS GUARDAMOS EN VARIABLES:
let btnSumar = document.getElementById("btn-sumar");
let btnRestar = document.getElementById("btn-restar");

let pTotal = document.getElementById("resultado");
let pCompleto = document.getElementById("completo");

// LAS FUNCIONES SON BLOQUES DE CÓDIGO REUTILIZABLES QUE PODEMOS LLAMAR A VOLUNTAD
function sumar() {
    if (contador < 20) contador++;
    resultado();
}

function restar() {
    if (contador > 0) contador--;
    contador--;
    resultado();
}
function resultado() {
    pTotal.innerHTML = contador;
    // CADA VEZ QUE EJECUTAMOS ESTA FUNCIÓN, EL PÁRRAFO HTML SE ACTUALIZA CON EL VALOR DEL CONTADOR
}