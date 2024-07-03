let select = document.getElementById('opciones');
let cajaInput = document.getElementById('cajaTexto');

function actualizarTexto() {
let valorOpcion = select.options[select.selectedIndex].value;
cajaInput.value = valorOpcion;
}